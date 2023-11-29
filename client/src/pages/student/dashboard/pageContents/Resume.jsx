import React, { useState } from 'react'
import InputField from '../../../../Components/inputField/InputField'
import axios from "axios"


const Resume = () => {
  const [file , setFile] = useState("")

  
  function handleInputChange(e){
    setFile(e.target.files[0])
}

  const handleUploadResume = async (e) => {
    e.preventDefault()

    const formdata = new FormData()
    formdata.append("resume" , file)

    const config = { 
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
    const API_URL = `${BACKEND_URL}/student/`

    const response = await axios.post(API_URL + "uploadResume" , formdata ,config)
    // console.log(response.data)
  }
  
  return (
    <div className=' absolute top-20 left-96 ' >

      <form action="">

        <h2 className='text-center '>Upload your resume</h2>

        <div className=' flex gap-5'>

        <InputField
        type="file" 
        xtraStyle ='pt-1'
        name = "resume"
        onChange = {handleInputChange}
        />

        <button onClick = {handleUploadResume} className=' w-30 text-white bg-cyan-500 hover:bg-cyan-600 p-3 pl-6 pr-6 rounded-lg flex items-center justify-center'>Upload</button>
        </div>
      </form>

    </div>
  )
}

export default Resume