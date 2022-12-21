import { Sidebar, Layout } from "../components";
import {useSession, signOut } from 'next-auth/react'



export default function Home() {
  return (
    <Layout.Container>
      <Sidebar />
      <Layout.Header>
        <h1>Dashboard</h1>
        <h2>{useSession().data?.user?.name}</h2>  
        <button onClick={() => signOut()}>Sair</button>
      </Layout.Header>
      {/* <div style={{width: '500px', height: '2000px' }}></div>*/}
    </Layout.Container>

  )

}
