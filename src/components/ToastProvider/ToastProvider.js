import React from 'react'

const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const createToast = ({ message, variant }) => {
    const nextToasts = [...toasts, { id: crypto.randomUUID(), message, variant }]
    setToasts(nextToasts)
  }

  const deleteToast = id => {
    const nextToasts = toasts.filter(toast => toast.id !== id)
    setToasts(nextToasts)
  }

  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setToasts([])
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, createToast, deleteToast }}>{children}</ToastContext.Provider>
  )
}

export const useToastContext = () => React.useContext(ToastContext)

export default ToastProvider
