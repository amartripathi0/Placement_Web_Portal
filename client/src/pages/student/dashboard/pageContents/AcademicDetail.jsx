import React, { useEffect } from 'react'
import InputWithEdit from '../../../../Components/inputField/InputWithEdit'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  RESET_GLOBAL,
  SET_GLOBAL,
  getLoginStatus,
} from "../../../../redux/features/common/globalSlice";
import {
  RESET,
  getUserData,
  updateProfileDetail
} from "../../../../redux/features/student/auth/authSlice";

const AcademicDetail = () => {
  

  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, isLoggedIn, message, student } =
  useSelector((state) => state.studentAuth);
  const globalAuth =
  useSelector((state) => state.globalAuth);

const form = useForm();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = form;
  function formSubmit(data) {
  const obj =  {typ : "educationalDetails" , value : data}
    dispatch(updateProfileDetail(obj));
    toast.success("Details Updated Succesfully", {
      position: toast.POSITION.TOP_CENTER,
    });

  }

    useEffect(() => {
      if (globalAuth.isLoggedin === true) {
        dispatch(getUserData());
        // console.log("data fetched");
        toast.success("Data Fetched Succesfully",{
          position : toast.POSITION.TOP_CENTER
        })
      }
      // dispatch(RESET())
    }, [globalAuth.isLoggedin]);
    useEffect(() => {
      if (isLoggedIn && isSuccess) {
        setValue("rollNumber", student?.educationalDetails.rollNumber);
        setValue("degrees", student?.educationalDetails.degrees);
        setValue("collegeName", student?.educationalDetails.collegeName);
        setValue("cgpa", student?.educationalDetails.cgpa);
        setValue("yearOfPassing", student?.educationalDetails.yearOfPassing);
      }
    }, [student]);
// console.log(student);
  return (
    <div className='absolute top-20 left-[270px]  flex flex-col gap-10 pt-40 pl-40 w-[80%] h-full'>
      
      <form action="" onSubmit={handleSubmit(formSubmit)} noValidate>

    <div className='flex items-center gap-6 justify-between  w-[33vw] '>

    <h2 className='text-xl'>Roll Number</h2>
    <InputWithEdit
    type = "number"
    placeholder = "Roll Number" 
    validationObj={{
      ...register("rollNumber", {
        required: {
          value: true,
          message: "Please enter the Roll Number.",
        },
        validate : (v) => v>0 || "Please enter a valid Roll number."
      }),
    }}
    error={errors.rollNumber?.message}
    />
    </div>

    <div className='flex items-center justify-between gap-6  w-[33vw]'>

    <h2 className='text-xl'>Degree</h2>
    <InputWithEdit
    type = "select"
    placeholder = "Degree" 
    validationObj={{
      ...register("degrees", {
        required: {
          value: true,
          message: "Please enter your Degrees",
        },
      }),
    }}
    error={errors.degrees?.message}
    />
    </div>

    <div className='flex items-center gap-6 justify-between  w-[33vw] '>
    <h2 className='text-xl'>College</h2>
    <InputWithEdit
    type = "text"
    placeholder = "College" 
    validationObj={{
      ...register("collegeName", {
        required: {
          value: true,
          message: "Please enter the College Name.",
        },
      }),
    }}
    error={errors.collegeName?.message}
    />
    </div>
    
    <div className='flex items-center gap-6 justify-between  w-[33vw] '>
    <h2 className='text-xl'>CGPA</h2>
    <InputWithEdit
    type = "number"
    placeholder = "CGPA" 
    validationObj={{
      ...register("cgpa", {
        required: {
          value: true,
          message: "Please enter the latest CGPA",
        },
      }),
    }}
    error={errors.cgpa?.message}
    />
    </div>

    <div className='flex items-center gap-6 justify-between  w-[33vw] '>
    <h2 className='text-xl'> Year Of Passing</h2>
    <InputWithEdit
    type = "text"
    placeholder = "Year Of Passing" 
        
    validationObj={{
      ...register("yearOfPassing", {
        required: {
          value: true,
          message: "Please enter the Year of Passing",
        },
      }),
    }}
    error={errors.yearOfPassing?.message}   
    />
    </div>
    <button
          type="submit"
          className="w-30 font-semibold text-white bg-pink-500 hover:bg-pink-600 p-3 pl-6 pr-6 rounded-lg flex items-center justify-center"
        >
          Save
        </button>

    </form>
  </div>
  )
}

export default AcademicDetail