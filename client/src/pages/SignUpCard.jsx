import React from 'react'
import { useNavigate } from 'react-router-dom'
function SignUpCard() {
const naviagte  = useNavigate()
  return (
    <div className=' flex flex-col h-[92vh]   justify-center gap-16   w-screen bg-gradient-to-r from-red-400 via-gray-300 to-blue-500'>

        <h1 className='text-7xl text-center font-bold'>SIGNUP📝</h1>

    <div className=' flex   justify-evenly items-center '>

        <div className=' h-[450px] w-80  border-2 border-black bg-pink-100  flex flex-col justify-center items-center rounded-lg gap-10 hover:bg-pink-200 duration-300 transition ease-in-out delay-100 '>
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-35b0a3e2315d19a46c046165f315b000.jpg?ts=1592240511" alt="" className='h-[283px] w-[283px] rounded-lg' />
                <button className='w-[283px] border-2 border-black p-5 text-2xl font-semibold rounded-lg bg-cyan-300 hover:bg-cyan-600 duration-300 transition ease-in-out delay-50 hover:text-white'
                onClick={() => naviagte('/signup/student')}
                >Student SignUp
                </button>
        </div>
        <div className='  h-[450px] w-80  border-2 bg-pink-100 border-black flex flex-col justify-center items-center rounded-lg gap-10 hover:bg-pink-200 duration-300 transition ease-in-out delay-100 '>
                <img src="https://media.istockphoto.com/id/876177980/vector/university-vector.jpg?s=612x612&w=0&k=20&c=FqW7PHJFlpzTfK3ax3zPhxgTCgCnVQaPnnmTRPmdjjc=" alt=""  className='h-[283px] w-[283px] rounded-lg'/>
                <button className=' w-[283px] border-2 border-black p-5 pl-2 pr-2 text-2xl font-semibold rounded-lg bg-cyan-300 hover:bg-cyan-600 duration-300 transition ease-in-out delay-50 hover:text-white'>College Staff SignUp</button>
        </div>
        
        <div className='   h-[450px] w-80  border-2 bg-pink-100 border-black flex flex-col justify-center items-center rounded-lg gap-10 hover:bg-pink-200 duration-300 transition ease-in-out delay-100 ' >
                <img src="https://cdn4.vectorstock.com/i/1000x1000/31/38/building-business-company-logo-vector-19953138.jpg" alt=""  className='h-[283px] w-[283px] rounded-lg' />
                <button className='w-[283px] border-2 border-black p-5 text-2xl font-semibold rounded-lg bg-cyan-300 hover:bg-cyan-600 duration-300 transition ease-in-out delay-50 hover:text-white'>Company SignUp</button>
        </div>
       
    </div>

    </div>

  )
}

export default SignUpCard