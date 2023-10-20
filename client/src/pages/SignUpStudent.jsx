import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

function SignUpStudent() {
    const form = useForm()
    const {register , handleSubmit ,formState : {errors}} = form
    const [studentData , setStudentData]  = useState({})
  return (
    <div className='w-screen h-screen flex  justify-center items-center  text-2xl'>
        <form action="" onSubmit={handleSubmit()} >
        <div className='border-2 border-black flex flex-col  gap-5 p-5 pl-10 pr-10  rounded-md ' >
        <div className='flex flex-col gap-2'>
            <label htmlFor="fname" className='text-xl'>First Name</label>
            <input type="text" name="" id="fname" placeholder='Enter your first name'
            className='border-black border-2 h-10 text-sm rounded-md pl-3 w-[24vw]'
            {...register('fname' , {
               required :{
                value : true ,
                message : "Please enter your first name."
               }
            })} />
           <p className='text-red-500  font-medium text-[17px]'> {errors.fname?.message }</p>
        </div>
        <div className='flex flex-col gap-2'>
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
        </div>

        <div className='flex flex-col gap-2'>
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
        </div>

        <div className='flex flex-col gap-2'>
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
        </div>

        <div className='flex flex-col gap-2'>
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
        </div>

        <div className='flex flex-col gap-2'>
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
        </div>

        <button className='border-2 border-black w-28 text-xl p-3 pt-1 pb-1 mt-3 rounded-lg'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default SignUpStudent