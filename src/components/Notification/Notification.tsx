import * as Toast from './styles'
import { Check, X } from 'phosphor-react'


type TNotification = {
  id?: number
  title: string;
  text: string;
  type?: 'info' | 'error' | 'warning' | 'success';
}

export default function Notification({ title, text, type = 'info' }: TNotification) {

  return (
    <Toast.Container className={type}>
      <Toast.Content>
        <Check size={32} weight="thin" className={type} />
        <Toast.Message>
          <Toast.Title>{title}</Toast.Title>
          <Toast.Text>{text}</Toast.Text>
        </Toast.Message>
      </Toast.Content>
      <X size={32} weight="thin" className='close' />
      <Toast.Progress className={type} />
    </Toast.Container>
  )
}

