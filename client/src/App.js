import React, { useEffect, useState } from 'react'
import logo from "./Assets/logo.png"
import logo2 from "./Assets/logo2.png"
function App() {

  const [backend, setbackend] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setbackend(data)
      }
    )
  }, [])
  return (
    <div>

      {(typeof backend.users === 'undefined') ? <p>Loading......</p> : (
        backend.users.map((user, i) => {
          return <p key={i}>{user}</p>

        })
      )}
      <h1 className='font-bold'>The above data is Coming from the server/client.js</h1>
      <h1 className='text-red-400'>Before Starting code install node Modules on both client and server </h1>
      <h1 className='font-mono'>While working on both start start both server.js and react app with -npm start</h1>
      <h1 className='text-3xl'>While working run both the server.js and react side by side</h1>
      <h1 className='bg-blue-300'> Haa Bhai  Tailwind bhi Install kr diya hu</h1>
      <img src={logo} />
      <img src={logo2} />
    </div>
  )
}

export default App