import React from 'react'

function useEscapeKey(cb) {
  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        cb(e)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [cb])
}

export default useEscapeKey
