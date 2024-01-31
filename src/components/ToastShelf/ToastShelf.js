import React from 'react';

import Toast from '../Toast'
import styles from './ToastShelf.module.css'
import { useToastContext } from '../ToastProvider'

function ToastShelf() {
  const { toasts, deleteToast } = useToastContext()

  if (toasts.length === 0) return

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} onDismiss={() => deleteToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf;
