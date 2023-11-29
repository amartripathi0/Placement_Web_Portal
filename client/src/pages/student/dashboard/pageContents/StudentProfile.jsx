<<<<<<< HEAD
import React, { useEffect } from 'react'
import InputWithEdit from '../../../../Components/inputField/InputWithEdit'
import {useForm} from 'react-hook-form'
import {useDispatch , useSelector} from  'react-redux'
import LoadingPage from '../../../LoadingPage'
import {updateProfileDetail , RESET , getUserData} from '../../../../redux/features/student/auth/authSlice'
import { toast } from 'react-toastify'
const StudentProfile = () => {
  const {isLoading , isError , isSuccess , isLoggedIn ,message , student } = useSelector(state => state.studentAuth)
  const dispatch = useDispatch()
  const form = useForm()
  const {handleSubmit , register ,setValue , formState : {errors}} = form;

  function formSubmit(data){
    dispatch(updateProfileDetail(data))
    toast.success("Details Updated Succesfully",{
      position : toast.POSITION.TOP_RIGHT
    })
=======
import React, { useEffect, useState } from "react";
import InputWithEdit from "../../../../Components/inputField/InputWithEdit";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "../../../LoadingPage";
import {
  updateProfileDetail,
  RESET,
  getUserData,
} from "../../../../redux/features/student/auth/authSlice";
import {
  uploadProfilePicture , RESET_UTILS
} from "../../../../redux/features/student/utilsServices/utilSlice";
import { toast } from "react-toastify";
const StudentProfile = () => {
  const { isLoading, isError, isSuccess, isLoggedIn, message, student } =
    useSelector((state) => state.studentAuth);
  const globalAuth = useSelector((state) => state.globalAuth);
  const dispatch = useDispatch();

  const studentUtil = useSelector(state => state.studentUtils)
  const form = useForm();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = form;
>>>>>>> ef95a7b (Auth pages of college and company added)

  }
<<<<<<< HEAD
  useEffect(()=>{
    dispatch(getUserData())  
    toast.success("Data Fetched Succesfully",{
      position : toast.POSITION.TOP_CENTER
    })

    dispatch(RESET())
},[])

if(isLoggedIn && isSuccess){
  setValue("firstName" , student?.personalDetail.firstName)
  setValue("lastName" , student?.personalDetail.lastName)
  setValue("fathersName" , student?.personalDetail.fathersName)
  setValue("mothersName" , student?.personalDetail.mothersName)
  setValue("emailID" , student?.personalDetail.emailID)
  setValue("phone" , student?.personalDetail.phone)
}


=======
  useEffect(() => {
    if (globalAuth.isLoggedin) {
      dispatch(getUserData());
      // console.log("data fetched");
      toast.success("Data Fetched Succesfully",{
        position : toast.POSITION.TOP_CENTER
      })
    }

    if(studentUtil.isSuccess){
      toast.success("Profile picture updated.",{
        position : toast.POSITION.TOP_CENTER
      })

      dispatch(RESET_UTILS())
    }
    // dispatch(RESET())
  }, [globalAuth.isLoggedin , studentUtil.isSuccess]);

  useEffect(() => {
    if (isLoggedIn && isSuccess) {  
      setValue("firstName", student?.personalDetail.firstName);
      setValue("lastName", student?.personalDetail.lastName);
      setValue("fathersName", student?.personalDetail.fathersName);
      setValue("mothersName", student?.personalDetail.mothersName);
      setValue("emailID", student?.personalDetail.emailID);
      setValue("phone", student?.personalDetail.phone);
    }
  }, [student]);
>>>>>>> ef95a7b (Auth pages of college and company added)


<<<<<<< HEAD
  return (
    <div className={`h-full  flex flex-col gap-10 pt-40 pl-40 bg-blue-100 ${isLoading && " opacity-70 bg-gray-400"}`}>
       {isLoading &&  <LoadingPage height = "[20vw]" width= "full" />}
      
      <form action=""  onSubmit={handleSubmit(formSubmit)} noValidate >
      <div className='flex items-center gap-6 justify-between  w-[33vw] '>
=======
      const formdata = new FormData()
      formdata.append("profilePicture" , profilePicture)
      dispatch(uploadProfilePicture(formdata))
      }
  }

  return (
    <div
      className={`h-full  flex flex-col gap-10 pt-40 pl-40 bg-blue-100 ${
        (isLoading || studentUtil.isLoading) && " opacity-70 bg-gray-400"
      }`}
    >
      {(isLoading || studentUtil.isLoading) && <LoadingPage height="full" width="full" />}
>>>>>>> ef95a7b (Auth pages of college and company added)


      <h2 className='text-xl'>First Name</h2>
      <InputWithEdit
      type = "text"
      placeholder = "firstName" 
            validationObj = {
        {...register("firstName" , {
            required : {
              value : true,
              message : "Please enter the First Name."
            },
            onChange : (e) => setValue(e.target.value)
        })
      
      }
      }
      
      error = {errors.firstName?.message}

      />
      </div>

      <div className='flex items-center justify-between gap-6  w-[33vw]'>

      <h2 className='text-xl'>Last Name</h2>
      <InputWithEdit
      type = "text"
      placeholder = "Last Name" 
      validationObj = {
        {...register("lastName" , {
            required : {
              value : true,
              message : "Please enter the Last Name."
            }
        })}
      }
      error = {errors.lastName?.message}
      />
      </div>

      <div className='flex items-center gap-6 justify-between  w-[33vw] '>
      <h2 className='text-xl'>Father's Name</h2>
      <InputWithEdit
      type = "text"
      placeholder = "Father's Name" 
            validationObj = {
        {...register("fathersName" , {
            required : {
              value : true,
              message : "Please enter the Father Name."
            }
        })}
      }

      error = {errors.fathersName?.message}
      />
      </div>
      
      <div className='flex items-center gap-6 justify-between  w-[33vw] '>
      <h2 className='text-xl'>Mother's Name</h2>
      <InputWithEdit
      type = "text"
      placeholder = "Mother's Name" 
            validationObj = {
        {...register("mothersName" , {
            required : {
              value : true,
              message : "Please enter the Mother's Name."
            }
        })}
      }

      error = {errors.mothersName?.message}
      />
      </div>

      <div className='flex items-center gap-6 justify-between  w-[33vw] '>
      <h2 className='text-xl'>Email</h2>
      <InputWithEdit
      type = "email"
      placeholder = "Email Address" 
            validationObj = {
        {...register("emailID" , {
            required : {
              value : true,
              message : "Please enter the Email Address."
            },
            pattern : {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ,
              message : "Please enter a valid Email address"

          }
        })}
      }

      error = {errors.emailID?.message}
      />
              
      </div>

      <div className='flex items-center gap-6 justify-between  w-[33vw] '>
      <h2 className='text-xl'>Phone</h2>
      <InputWithEdit
      type = "number"
      placeholder = "Phone Number" 
            validationObj = {
        {...register("phone" , {
            required : {
              value : true,
              message : "Please enter the Phone Name."
            }
        })}
      }

      error = {errors.phone?.message}
      />
              
      </div>

      <button type ="submit" className='w-30 font-semibold text-white bg-pink-500 hover:bg-pink-600 p-3 pl-6 pr-6 rounded-lg flex items-center justify-center'>Save</button>
    </form>
      
    </div>
  )
}

export default StudentProfile