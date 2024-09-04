import {  Outlet, useNavigate } from 'react-router-dom'
import './Dashboardlayout.css'
import ChatList from '../../components/chatList/ChatList'
import React, { useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'



const Dashboardlayout = () => {
  const {userId, isLoaded}= useAuth();
  const navigate=useNavigate();
  useEffect(() => {
    if(isLoaded && !userId){
      navigate("/sign-in");
    }
  }, [isLoaded,userId,navigate]);

  if(!isLoaded) return "Loading..."
  
  return (
    <div className='dashboardLayout'>
    <div className='menu'><ChatList/></div>
    <div className='content'><Outlet/></div>
      
    </div>
  )
}

export default Dashboardlayout
