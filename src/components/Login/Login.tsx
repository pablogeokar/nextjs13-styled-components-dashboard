import Image from "next/image"
import { FormEventHandler, useState } from "react"
import styled from "styled-components"
import { Input, Button } from ".."
import { signIn } from 'next-auth/react'
import Router from 'next/router'
import { useToastMessage } from "../../contexts/ToastContext";


export default function Login() {

  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const { toastMessage } = useToastMessage()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    // Faz o login e armazena o resultado em res
    const res = await signIn('credentials', { email: userInfo.email, password: userInfo.password, redirect: false, callbackUrl: '/dashboard' })

    // Se não retornar nenhum erro ao logar então redireciona para o dashboard
    if (!res.error) {
      Router.push('/dashboard')
    } else {
      toastMessage({ title: 'Credenciais Inválidas', text: res.error, type: 'error' })
    }
  }

  return (
    <Page>
      <Box>
        <form onSubmit={handleSubmit}>
          <Row>
            <Image src="/logo.svg" width={350} height={90} alt="Kontabb" />
          </Row>
          <Row>
            <Input label="E-mail" value={userInfo.email} onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })} type="email" />
          </Row>
          <Row className="column flex-end">
            <Input label="Senha" value={userInfo.password} onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })} type="password" />
            <Small>Esqueceu sua senha?</Small>
          </Row>
          <Row>
            <Button label="Login" />
          </Row>
        </form>

        <Small style={{ color: '#aca9a9' }}>versão v1.0</Small>

      </Box>
    </Page>
  )
}

const Small = styled.small`
  margin: 5px 0;
  font-size: .8rem;
  color: rgb(75 85 99); 
`

const Row = styled.div`
  display: flex;    
  padding: 4px;  
  
  &.column{
    flex-direction: column;
  }

  &.flex-end{
    align-items: flex-end;
  }
`

const Box = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 400px;
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(226,232,240);
`