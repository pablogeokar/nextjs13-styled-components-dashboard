import { Sidebar, Layout } from "../components";



export default function Home() {
  return (
    <Layout.Container>
      <Sidebar />
      <h1>Dashboard</h1>
      {/* <div style={{width: '500px', height: '2000px' }}></div>*/}
    </Layout.Container>
  )

}
