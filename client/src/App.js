import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Home'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Page from './pages/Page'
import Contact from './pages/Contact'
import Support from './pages/Support'
import SignUp from './pages/MainSignUp'
import SignUpCard from './Components/SignUpCard'
import SignUpStudent from './pages/student/SignUpStudent'
import MainSignUp from './pages/MainSignUp'
function App() {

  return (
    <div className=' h-screen w-screen '>
      <Header />
      <Outlet />
    </div>

  )
}
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Body />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/page",
      element: <Page />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/support",
      element: <Support />
    },
    {
      path: "/signup",
      element: <MainSignUp/>
    },
    {
      path: "/signup/student",
      element: <SignUpStudent/>
    },
    ]
  }




])
export default App;

