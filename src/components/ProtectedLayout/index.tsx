import { Sidebar, Layout, Login } from "../../components";
import { useSession } from 'next-auth/react'
import { ReactNode, useEffect } from "react";
import Router from 'next/router'

type TProtectedLayout = {
  children?: ReactNode
}

export default function ProtectedLayout({ children }: TProtectedLayout) {
  const user = useSession().data?.user;
  const status = useSession().status

  useEffect(() => {
    status === 'unauthenticated' &&
      Router.push('/login')
  }, [status])

  return (
    <>
      {status === 'unauthenticated' &&
        <Login />
      }
      {status === 'loading' &&
        <h1>Aguarde...</h1>
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
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ fontSize: '.8rem', color: '#5a5a5a' }}>{user.name}</span>
                  <Layout.Avatar src={user.image ? user.image : '/imgs/user.png'} onError={(e: any) => { e.target.onError = null; e.target.src = "imgs/user.png" }} />
                </div>
              </Layout.Header>
            </Layout.Row>
            {children}
          </Layout.Column>
        </Layout.Container>
      }
    </>
  )
}