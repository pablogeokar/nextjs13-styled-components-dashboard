import Image from "next/image"
import styled from "styled-components"
import { Input, Button } from "../../components"


export default function Login() {
  return (
    <Page>
      <Box>
        <Row>
          <Image src="/logo.svg" width={350} height={90} alt="Kontabb"/>
        </Row>
        <Row>
          <Input label="E-mail" type="email" />
        </Row>
        <Row className="column flex-end">
          <Input label="Senha" type="password" />
          <Small>Esqueceu sua senha?</Small>
        </Row>
        <Row>
          <Button label="Login" />
        </Row>
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