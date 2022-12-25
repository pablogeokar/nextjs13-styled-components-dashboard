import { Sidebar, Layout, Login, Loading, Dropdown } from "../../components";
import { SignOut } from "phosphor-react";
import { useSession } from 'next-auth/react'
import { ReactNode, useEffect } from "react";
import { signOut } from 'next-auth/react'
import Router from 'next/router'

type TProtectedLayout = {
  children: ReactNode
}

export default function ProtectedLayout({ children }: TProtectedLayout) {
  const user = useSession().data?.user;
  const status = useSession().status

  useEffect(() => {
    status === 'unauthenticated' &&
      Router.push('/login')
  }, [status])

  function UserDropdown() {
    return (
      <>
        <Dropdown.Row>
          <Dropdown.Avatar src={user.image ? user.image : '/imgs/user.png'} alt="" />
          <Dropdown.Text>{user.name}</Dropdown.Text>
          <Dropdown.Small>{user.email}</Dropdown.Small>
        </Dropdown.Row>
        <Dropdown.Row>
          <Dropdown.Link label="Logout" icon={<SignOut />} onClick={() => signOut()} />
        </Dropdown.Row>
      </>
    )
  }

  return (
    <>
      {status === 'unauthenticated' &&
        <Login />
      }
      {status === 'loading' &&
        <Loading />
      }
      {status === 'authenticated' &&
        <Layout.Container>
          <Layout.Row>
            <Sidebar />
          </Layout.Row>
          <Layout.Column>
            <Layout.Row>
              <Layout.Header>
                <div></div>
                <Dropdown.Component options={<UserDropdown />}>
                  <span style={{ fontSize: '.8rem', color: '#424242' }}>{user.name}</span>
                  <Layout.Avatar src={user.image ? user.image : '/imgs/user.png'} onError={(e: any) => { e.target.onError = null; e.target.src = "imgs/user.png" }} />
                </Dropdown.Component>
              </Layout.Header>
            </Layout.Row>
            {children}
          </Layout.Column>
        </Layout.Container>
      }
    </>
  )
}