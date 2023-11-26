import React from 'react'
import InputWithEdit from '../../../../Components/inputField/InputWithEdit'

const AcademicDetail = () => {
  return (
    <div className='absolute top-20 left-[270px]  flex flex-col gap-10 pt-40 pl-40 w-[80%] h-full'>
      
    <div className='flex items-center gap-6 justify-between  w-[33vw] '>

    <h2 className='text-xl'>Roll Number</h2>
    <InputWithEdit
    type = "text"
    placeholder = "Roll Number" 
    />
    </div>

    <div className='flex items-center justify-between gap-6  w-[33vw]'>

    <h2 className='text-xl'>Degree</h2>
    <InputWithEdit
    type = "text"
    placeholder = "Degree" 

    />
    </div>

    <div className='flex items-center gap-6 justify-between  w-[33vw] '>
    <h2 className='text-xl'>College</h2>
    <InputWithEdit
    type = "text"
    placeholder = "College" 
    />
    </div>
    
    <div className='flex items-center gap-6 justify-between  w-[33vw] '>
    <h2 className='text-xl'>CGPA</h2>
    <InputWithEdit
    type = "number"
    placeholder = "CGPA" 
    />
    </div>

    <div className='flex items-center gap-6 justify-between  w-[33vw] '>
    <h2 className='text-xl'> Year Of Passing</h2>
    <InputWithEdit
    type = "number"
    placeholder = "Year Of Passing" 
    />
    </div>
    
  </div>
  )
}

export default AcademicDetail