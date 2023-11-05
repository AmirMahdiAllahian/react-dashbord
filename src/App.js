import React from 'react'
import SideNav from './Components/SideNav/SideNav'
import Dashbord from './Page/Dashbord'
import Analytics from './Page/Analytics'
import Invoice from './Page/Invoice'
import Schedule from './Page/Schedule'
import Calender from './Page/Calender'
import Notification from './Page/Notification'
import Message from './Page/Message'
import Settings from './Page/Settings'
import './App.css'
import { Route,Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
      <SideNav/>
      <Routes>
      <Route exact path='/dashbord' element={<Dashbord/>}/>
      <Route path='/analytics' element={<Analytics/>}/>
      <Route path='/invoice' element={<Invoice/>}/>
      <Route path='/schedule' element={<Schedule/>}/>
      <Route path='/calender' element={<Calender/>}/>
      <Route path='/notification' element={<Notification/>}/>
      <Route path='/message' element={<Message/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes> 
    
    </>
  )
}

