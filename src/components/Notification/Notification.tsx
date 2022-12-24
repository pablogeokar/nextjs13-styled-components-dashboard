import * as Toast from './styles'
import { Check, X } from 'phosphor-react'
import { useCallback, useEffect } from 'react';


type TNotification = {
  id?: number
  title: string;
  text: string;
  type?: 'info' | 'error' | 'warning' | 'success';
}

type TToastList = {
  toastlist: Array<TNotification> | null
  setList: any
}


export default function ToastNotification({ toastlist, setList }: TToastList) {
  // Delete Toast
  const deleteToast = useCallback(id => {
    const toastListItem = toastlist.filter(e => e.id !== id);
    setList(toastListItem)
  }, [toastlist, setList])

  // Delete Toast after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id)
      }
    }, 3000);

    return () => {
      clearInterval(interval)
    }
  }, [toastlist, deleteToast])

  return (
    <Toast.Wrapper className='bottom-right'>
      {
        toastlist.map((toast, i) =>
        (
          <Toast.Container className={toast.type} key={i}>
            <Toast.Content>
              <Check size={32} weight="thin" className={toast.type} />
              <Toast.Message>
                <Toast.Title>{toast.title}</Toast.Title>
                <Toast.Text>{toast.text}</Toast.Text>
              </Toast.Message>
            </Toast.Content>
            <X size={32} weight="thin" className='close' onClick={() => deleteToast(toast.id)} />
            <Toast.Progress className={toast.type} />
          </Toast.Container>
        )
        )
      }
    </Toast.Wrapper>
  )

}

