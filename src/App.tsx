import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SidebarAdmin from './components/Sidebar/SidebarAdmin'
import SidebarUser from './components/Sidebar/SidebarUser'
import TopBar from './components/TopBar/TopBar'
import BodyTitle from './components/BodyTitle/BodyTitle'
import AdminSidebarDetail from './components/AdminSidebarDetail/AdminSiderbarDetail'
import './App.css'

function App() {
  return (
    <>
      <TopBar pageName='페이지 이름'/>
      {/* <SidebarUser /> */}
      {/* <SidebarAdmin /> */}
      <AdminSidebarDetail adminSidebarName='액티비티 정보' />
      {/* <BodyTitle bodyName='마이페이지'/> */}
    </>
  )
}

export default App
