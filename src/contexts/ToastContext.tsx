import { createContext, useContext, useState, useEffect } from 'react';
import { ToastNotification } from '../components';

type TNotification = {
  id?: number
  title: string;
  text: string;
  type?: 'info' | 'error' | 'warning' | 'success';
}

type ToastContextState = {
  toastMessage(props: TNotification): void
  toastlist: Array<TNotification> | null
  setList: any
}

const ToastContext = createContext<ToastContextState>({} as ToastContextState)

const ToastProvider = ({ children }) => {

  const [toastlist, setList] = useState<Array<TNotification>>(null)


  function toastMessage(props: TNotification) {
    if (!toastlist) {
      props.id = 1
      setList([props])
    } else {
      props.id = toastlist.length + 1
      setList([...toastlist, props])
    }
  }

  useEffect(() => {
  }, [toastlist])


  return (
    <ToastContext.Provider value={{ toastlist, setList, toastMessage }}>
      {
        toastlist &&
        <ToastNotification toastlist={toastlist} setList={setList} />
      }
      {children}
    </ToastContext.Provider>
  )
}

function useToastMessage() {
  const context = useContext(ToastContext)
  return context
}


export { ToastProvider, useToastMessage }
