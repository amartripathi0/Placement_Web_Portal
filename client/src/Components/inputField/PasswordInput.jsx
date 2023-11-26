import React, { useState } from 'react'
import {AiFillEyeInvisible , AiFillEye} from 'react-icons/ai'

const PasswordInput = ({ type , placeholder , xtraStyle , handlePassChange,labelName , label ,ref, validationObj , error}) => {

    const [showPass , setShowPass] = useState(false)
    function togglePassHide(){
            setShowPass(prev => !prev)
    }
  return (
    <div className='flex flex-col gap-1  '>
    <label htmlFor= {labelName} className='text-lg '>{label}</label>
    <div className= "border-black border-2 h-12 text-md rounded-md w-96 flex justify-between items-center">
      <input
      type= {showPass ? "text": "password"}
      placeholder={placeholder}
    
      onChange={handlePassChange}
      {...validationObj}
      className='w-96 h-full !outline-none pl-3  font-semibold '

      />

      <button onClick={togglePassHide}>
        {
            showPass ? 
            <AiFillEyeInvisible size = {25} className='mr-2'/>
            :
            <AiFillEye size = {25} className = 'mr-2' />
        }
      </button>

    </div>
      
    <p className='text-red-500  font-medium  text-base'> {error}</p>
    </div>

  )
}

export default PasswordInput