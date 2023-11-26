import React, { useEffect } from 'react'
import { FaBell } from "react-icons/fa6";
import {useDispatch , useSelector}  from 'react-redux'
import { signout , RESET } from '../../../redux/features/student/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../../LoadingPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentDashboardHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoading, isLoggedIn, isError, isSuccess, message , statusCode } = useSelector((state) => state.studentAuth );
 
   function handleStudentSignout(){
    console.log("d");
     dispatch(signout())
  }

  useEffect(( ) => {
    if(isSuccess && !isLoggedIn){
      navigate('/')
      toast.success("Signed Out successfully",{
        position:toast.POSITION.TOP_RIGHT
      })
    }
    dispatch(RESET())
  } , [isLoggedIn , isSuccess , navigate])
  return (
    <div className={`h-16 justify-between  border-slate-400 border-b-2 
    flex items-center px-10 z-40 bg-slate-50 ${isLoading && " opacity-50 "}`} >

      <div className='h-full  flex items-center gap-4'>
      <img className = 'h-[80%]' src="https://play-lh.googleusercontent.com/FOUDOqxN3DOMMnZ3z5SP_7oFEKaS2KAAc5Z5gQlW6cnzh9x2N3oLsH0MpDvJkcRrcDc" alt="" />
      </div>

      <h1 className='text-2xl'>Student Dashboard</h1>

      <div className='flex items-center gap-5 h-full '>
      <FaBell size={20}/>
      
      <button onClick={handleStudentSignout} className='w-30 font-semibold text-white bg-pink-500 hover:bg-pink-600 p-3 pl-6 pr-6 rounded-lg flex items-center justify-center'>Sign Out</button>
      </div>
    </div>
  )
}

export default StudentDashboardHeader