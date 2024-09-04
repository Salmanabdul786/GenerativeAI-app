import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Dashboard from './routes/Dashboard/Dashboard.jsx'
import ChatPage from './routes/ChatPage/ChatPage.jsx'
import Rootlayout from './layouts/Rootlayout/Rootlayout.jsx'
import Dashboardlayout from './layouts/Dashboardlayout/Dashboardlayout.jsx'
import Signin from './routes/Signin/Signin.jsx'
import Signup from './routes/Signup/Signup.jsx'


const router =createBrowserRouter([
  {
   element:<Rootlayout/>,
   children:[
    {
      path:'/',
       element:<Home/>
    },
    {
      path:'/sign-in/*',
       element:<Signin/>
    },
    {
      path:'/sign-up/*',
       element:<Signup/>
    },
    {
      element:<Dashboardlayout/>, 
      children:[
        {
          path:'/dashboard',
          element:<Dashboard/>
        },
        {
          path:'/dashboard/chats/:id',
          element:<ChatPage/>
        }
      ]

    }
   ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
