import React from 'react'
import Navbar from '../components/AfterLogin/Navbar'
import Class from '../components/AfterLogin/DashboardComponents/Class'
import Practice from '../components/AfterLogin/DashboardComponents/Practise'

function Dashboard() {
  return (
    <>
        <Navbar/>
    <Class/>
    <Practice/>

    </>
  )
}

export default Dashboard