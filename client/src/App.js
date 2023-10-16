import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import About from './Components/About'
import Page from './Components/Page'
import Contact from './Components/Contact'
import Support from './Components/Support'

function App() {

  return (
    <div className='fixed w-full '>
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
    ]
  }




])
export default App;

