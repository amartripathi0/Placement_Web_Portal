import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import InputField from '../../../Components/inputField/InputField'
import PasswordInput from '../../../Components/inputField/PasswordInput'
import { signup , RESET  } from '../../../redux/features/student/auth/authSlice'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from '../../LoadingPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUpStudent() {
    const form = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { isLoading, isLoggedIn, isError, isSuccess, message , statusCode } = useSelector((state) => state.studentAuth );
    
    const {register , watch , getValues , handleSubmit ,formState : {errors}} = form
    const [studentData , setStudentData]  = useState({})
    const passwrd = watch("password", false);

    const formSubmit = async (data) =>{
      await dispatch(signup(data))

    }
    useEffect(() => {
      if(isLoggedIn && isSuccess){
        toast.success("Account created successfully!" , {
          position : toast.POSITION.TOP_RIGHT
        })
        
        navigate('/student')
      }
      if(statusCode === 409){ 
        toast.warning("Account already exists" , {
          position : toast.POSITION.TOP_RIGHT
        })
        toast("Please ,Sign In" , {
          position : toast.POSITION.TOP_RIGHT
        })
        navigate('/signin/student')
      }
      dispatch(RESET())
    }, [isLoggedIn , isSuccess , dispatch , statusCode])
  return (
    <div className='w-screen h-screen flex  justify-center items-center  text-2xl '>
      {isLoading && <LoadingPage height = "screen" width= "screen" />}
        <form action="" onSubmit={handleSubmit(formSubmit)} noValidate>
        <div className='border-2 w-[70vw] border-black  gap-5 p-5 pl-10 pr-10  flex flex-col items-center rounded-md `' >
        <div className='flex item-center justify-around  flex-wrap '>

            <InputField 
             placeholder='Enter your first name'
             label="First Name"
             labelName = ""
            
             validationObj={{
              ...register('firstName', {
                required: {
                  value: true,
                  message: "Please enter your first name.",
                },
              }),
            }}
            error = {errors.firstName?.message }
             />

            <InputField 
             placeholder='Enter your last name'
             label="Last Name"
             labelName = ""
             validationObj={{
              ...register('lastName', {
                required: {
                  value: true,
                  message: "Please enter your last name.",
                },
              }),
            }}
            error = {errors.lastName?.message }
             />

            <InputField 
             placeholder='Enter your Email Address'
             label="E-Mail"
             labelName = ""
             validationObj={ {...register('emailID' , {
              required :{
               value : true ,
               message : "Please enter your email address."
              },
              validate : {
                matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid address",
              }   
           })}}
            error = {errors.emailID?.message }
             />

            <InputField 
             placeholder='Enter your Phone Number'
             label="Phone No."
             labelName = ""
             type="number"
             validationObj={{...register('phone' , {
                required :{
                 value : true ,
                 message : "Please enter your Phone No."
                },
                maxLength : {
                    value : 10 , 
                    message : "Please Enter Phone Number under 10 digits"
                },
                minLength : {
                    value : 10 , 
                    message : "Please Enter Phone Number under 10 digits"
                },
                
             })}
            }
            error = {errors.phone?.message }
             />

            <PasswordInput
              placeholder='Enter your Password'
              label="Password"
              labelName = ""
              validationObj={{
               ...register('password', {
                 required: {
                   value: true,
                   message:"Please enter your Password."
                 },
                  // validate : {
                  //   // passwrd : v => 
                  // }
               }),
             }}
             error = {errors.password?.message }
            />
          
            <PasswordInput
              placeholder='Enter your Confirm Password'
              label="Confirm Password"
              labelName = ""
              validationObj={{
               ...register('cpass', {
                 required: {
                   value: true,
                   message:"Please enter your Confirm Password."
                 },
                 validate : {
                  same: v => v  ===  getValues().password || "Password and Confirm Password don't match!"
                 }
               }),
             }}
             error = {errors.cpass?.message }
            />
          

 

        </div>
      
        <button type='submit' className='border-2 border-black w-28 text-xl p-3 pt-1 pb-1 mt-3 rounded-lg'>Submit</button>
        <p>Already have an account? <span onClick= {() => navigate('/signin/student')} className='text-blue-700 font-semibold underline'>SignIn</span></p>
        {/* <div className='flex flex-col gap-2'>
            <label htmlFor="lname" className='text-xl'>Last Name</label>
            <input type="text" name="" id="lname" placeholder='Enter your last name'
              className='border-black border-2 h-10 text-sm rounded-md pl-3 w-[24vw]'
              {...register('lname' , {
                required :{
                 value : true ,
                 message : "Please enter your last name."
                }
             })} />
            <p className='text-red-500  font-medium text-[17px]'> {errors.lname?.message }</p>
        </div> */}

        {/* <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-xl'>Email</label>
            <input type="text" name="" id="email" placeholder='Enter your Email'
              className='border-black border-2 h-10 text-sm rounded-md pl-3 w-[24vw]'
              {...register('email' , {
                required :{
                 value : true ,
                 message : "Please enter your email address."
                },
                validate : {
                    pattern : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
                
                }   
             })} />
            <p className='text-red-500  font-medium text-[17px]'> {errors.email?.message }</p>
        </div> */}

        {/* <div className='flex flex-col gap-2'>
            <label htmlFor="phno" className='text-xl'>Phone Number</label>
            <input type="number" name="" id="phno" placeholder='Enter your phone number' 
              className='border-black border-2 h-10 text-sm rounded-md pl-3 w-[24vw]'
              {...register('phno' , {
                required :{
                 value : true ,
                 message : "Please enter your Phone No."
                },
                maxLength : {
                    value : 10 , 
                    message : "Please Enter Phone Number under 10 digits"
                },
                minLength : {
                    value : 10 , 
                    message : "Please Enter Phone Number under 10 digits"
                }
             })} />
            <p className='text-red-500  font-medium text-[17px]'> {errors.phno?.message }</p>
        </div> */}

        {/* <div className='flex flex-col gap-2'>
            <label htmlFor="password" className='text-xl'>Password</label>
            <input type="text" name="" id="" placeholder='Enter your password'
              className='border-black border-2 h-10 text-sm rounded-md pl-3 w-[24vw]'
              {...register('password' , {
                required :{
                 value : true ,
                 message : "Please enter your password."
                }
             })} />
            <p className='text-red-500  font-medium text-[17px]'> {errors.password?.message }</p>
        </div> */}

        {/* <div className='flex flex-col gap-2'>
            <label htmlFor="cpass" className='text-xl'>Confirm Password</label>
            <input type="text" name="" id="cpass"  placeholder='Enter your confirm password' 
              className='border-black border-2 h-10 text-sm rounded-md pl-3 w-[24vw]'
               {...register('cpass' , {
                required : {
                    value : true , 
                    message : "Please enter your confirm password"
                }
               })}/>
               <p className='text-red-500  font-medium text-[17px]'>{errors.cpass?.message }</p>
        </div> */}

        </div>
        </form>
    </div>
  )
}

export default SignUpStudent