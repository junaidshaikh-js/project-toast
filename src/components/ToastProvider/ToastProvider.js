import React from 'react'

import useEscapeKey from '../../hooks/useEscapeKey'

const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const createToast = ({ message, variant }) => {
    const nextToasts = [...toasts, { id: crypto.randomUUID(), message, variant }]
    setToasts(nextToasts)
  }

  const handleToastEscape = React.useCallback(() => {
    setToasts([])
  }, [])

  useEscapeKey(handleToastEscape)

  const deleteToast = id => {
    const nextToasts = toasts.filter(toast => toast.id !== id)
    setToasts(nextToasts)
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, deleteToast }}>{children}</ToastContext.Provider>
  )
}

export const useToastContext = () => React.useContext(ToastContext)

export default ToastProvider
