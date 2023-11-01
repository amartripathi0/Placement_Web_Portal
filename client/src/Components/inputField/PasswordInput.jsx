import React, { useState } from 'react'
import {AiFillEyeInvisible , AiFillEye} from 'react-icons/ai'
const PasswordInput = ({ type , placeholder , xtraStyle , labelName , label , validationObj , error}) => {

    const [showPass , setShowPass] = useState(false)
    function togglePassHide(){
            setShowPass(prev => !prev)
    }
  return (
    <div className='flex flex-col gap-1 h-30 '>
    <label htmlFor= {labelName} className='text-lg '>{label}</label>
    <div className= "border-black border-2 h-10 text-sm rounded-md w-[24vw] flex justify-between items-center">
      <input
      type= {showPass ? "text": "password"}
      placeholder={placeholder}

      {...validationObj}
      className='w-[87%] h-full !outline-none pl-3  font-semibold '
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
      
    <p className='text-red-500  font-medium text-[14px]'> {error}</p>
    </div>

  )
}

export default PasswordInput