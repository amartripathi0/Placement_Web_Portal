import { useState , useEffect } from 'react'
import StudentDashboardHeader from './StudentDashboardHeader'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidemenu, { SidebarItem } from '../../../Components/sidemenu/Sidemenu'
import { FaRegUser } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import LoadingPage from '../../LoadingPage'

import {useDispatch , useSelector} from  'react-redux'
import { RESET as GLOBAL_RESET } from '../../../redux/features/common/globalSlice';
import { RESET , getUserData} from '../../../redux/features/student/auth/authSlice'
import { toast } from 'react-toastify'
import { getLoginStatus } from '../../../redux/features/common/globalSlice';


function StudentDashboard() {
  const {isLoading , isError , isSuccess , isLoggedIn ,message , student } = useSelector(state => state.studentAuth)
  const globalAuth = useSelector(state => state.globalAuth)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(getLoginStatus())

    dispatch(GLOBAL_RESET())
    
  } , [])

// if(isLoggedIn && isSuccess){
//   console.log("D");
//   toast.success(`Welcome ${student.personalDetail.firstName + " " + student.personalDetail.lastName}`,{
//     position : toast.POSITION.TOP_RIGHT
//   })
// }

  return (
    <div className={` flex w-screen h-screen  ${isLoading && " opacity-50 "}`}>
          {isLoading && <LoadingPage height = "screen" width= "screen"/>}

      <div>
      <Sidemenu emailID ={ student?.personalDetail.emailID } firstName = { student?.personalDetail.firstName } lastName = { student?.personalDetail.lastName }>
          <SidebarItem icon = {<FaRegUser />} text = "Profile" active  />
          <SidebarItem icon ={<LuGraduationCap size={16}/>} text = "Academic Details" active  />
          <SidebarItem icon = {<IoNewspaperOutline />}  text = "Resume" active  />
          <SidebarItem icon  = {<FaRegClock/>} text = "Interview" active  />
         </Sidemenu>
      </div>

        <div className='flex flex-col gap-30 w-full'>
         {/* <StudentSidemenu/> */}
         <StudentDashboardHeader />
         <Outlet />
        </div>       
    </div>
  )
}

export default StudentDashboard