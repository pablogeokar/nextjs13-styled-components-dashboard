import { Layout, Dropdown } from "../../components";
import { SignOut } from 'phosphor-react'

export default function Home() {

  function UserDropdown() {
    return (
      <>
        <Dropdown.Row>
          <Dropdown.Avatar src={'/imgs/user.png'} alt="" />
          <Dropdown.Text>Pablo</Dropdown.Text>
          <Dropdown.Small>pablogeokar@gmail.com</Dropdown.Small>
        </Dropdown.Row>
        <Dropdown.Row>
          <Dropdown.Link label="Logout" icon={<SignOut />} />
        </Dropdown.Row>
      </>
    )
  }

  return (
    <>
      <h1>Dashboard</h1>
      <Dropdown.Component options={<UserDropdown />}>
        <span style={{ fontSize: '.8rem', color: '#424242' }}>Pablo</span>
        <Layout.Avatar src={'/imgs/user.png'} onError={(e: any) => { e.target.onError = null; e.target.src = "imgs/user.png" }} />
      </Dropdown.Component>
    </>
  )
}
