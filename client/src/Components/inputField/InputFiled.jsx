import React from 'react'

const InputFiled = ({
  type , placeholder , xtraStyle , labelName , label , validationObj , error
}) => {
  return (
    <div className='flex flex-col gap-1  min-h-[113px] '>
    <label htmlFor= {labelName} className='text-lg '>{label}</label>
      <input type={type} 
      placeholder={placeholder}
      className={`${xtraStyle}   border-black border-2 h-10 text-sm  font-semibold rounded-md pl-3 w-[24vw]`}
      {...validationObj}
      />

    <p className='text-red-500  font-medium text-[14px]'> {error}</p>
    </div>
  )
}

export default InputFiled