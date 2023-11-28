import { useState, useEffect } from "react";
import StudentDashboardHeader from "./StudentDashboardHeader";
import { Outlet, useNavigate } from "react-router-dom";
import Sidemenu, { SidebarItem } from "../../../Components/sidemenu/Sidemenu";
import { FaRegUser } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import LoadingPage from "../../LoadingPage";

import { useDispatch, useSelector } from "react-redux";
import {
  RESET_GLOBAL,
  SET_GLOBAL,
  getLoginStatus,
} from "../../../redux/features/common/globalSlice";
import {
  RESET,
  getUserData,
} from "../../../redux/features/student/auth/authSlice";


import { toast } from "react-toastify";

function StudentDashboard() {
  const { isLoading, isError, isSuccess, isLoggedIn, message, student } =
    useSelector((state) => state.studentAuth);
    const studentUtil = useSelector((state) => state.studentUtils);
  const { isLoggedin } = useSelector((state) => state.globalAuth);
  const globalAuth = useSelector((state) => state.globalAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("check if loggedin");
    dispatch(getLoginStatus());

    // return () => dispatch(RESET_GLOBAL());
    // dispatch(RESET_GLOBAL())
  }, []);

  useEffect(() => {
    //  console.log("loggedin " , isLoggedin ,"load" , globalAuth.isLoading , "success" , globalAuth.isSuccess);
    if (isLoggedin && globalAuth.isSuccess) {
      dispatch(getUserData());
    } else if (!isLoggedIn && globalAuth.isSuccess && globalAuth.userType !== "STUDENT") {
      toast.success("Signed Out successfully",{
        position:toast.POSITION.TOP_RIGHT
      })
      navigate('/signin')

    }
  }, [isLoggedin, globalAuth.isSuccess ,globalAuth.userType]);

  useEffect(() => {
    if (isLoggedIn && isSuccess && isLoggedin) {
      toast.success(
        `Welcome ${
          student.personalDetail.firstName +
          " " +
          student.personalDetail.lastName
        }`,
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      console.log("welcome");
    }
  }, [isLoggedIn]);

  const [sidemenuExpanded , setsDdemenuExpanded ] = useState(true)

  function sidemenuState(val){
    setsDdemenuExpanded(!val)
    // console.log(sidemenuExpanded);
  }
  return (
    <div className={`relative flex w-screen h-screen  ${(isLoading || studentUtil.isLoading) && " opacity-50 "}`}>
      {(isLoading || studentUtil.isLoading) && <LoadingPage height="screen" width="screen" />}
      <div>
        <Sidemenu
          sidemenuState = {sidemenuState}
          emailID={student?.personalDetail.emailID}
          firstName={student?.personalDetail.firstName}
          lastName={student?.personalDetail.lastName}
          profileImgLink={student?.personalDetail.profilePicture}
        >
          <SidebarItem icon={<FaRegUser />} text="Profile" active />
          <SidebarItem
            icon={<LuGraduationCap size={16} />}
            text="Academic Details"
            active
          />
          <SidebarItem icon={<IoNewspaperOutline />} text="Resume" active />
          <SidebarItem icon={<FaRegClock />} text="Interview" active />
        </Sidemenu>
      </div>
 
      <div className={`flex flex-col  ${sidemenuExpanded ? "w-[85%]" : "w-[97%]"} absolute right-0 top-0 h-screen`}>
        {/* <StudentSidemenu/> */}
        <StudentDashboardHeader />
        <Outlet />
      </div>
    </div>
  );
}

export default StudentDashboard;
