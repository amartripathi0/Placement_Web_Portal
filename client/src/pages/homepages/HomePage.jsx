import React, { useEffect } from 'react'
import Header from '../../Components/header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { RESET_GLOBAL , getLoginStatus } from '../../redux/features/common/globalSlice'
import {useSelector , useDispatch} from 'react-redux'
import LoadingPage from '../LoadingPage'


const HomePage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isLoggedin , isLoading, userType} = useSelector(state => state.globalAuth)

  useEffect(() => {
    dispatch(getLoginStatus())

    dispatch(RESET_GLOBAL())
  }, [])


  useEffect(() => {
    const link = `/${userType ?  userType.toLowerCase() : ""}`
    if(isLoggedin){
      navigate(link)
    }   

    dispatch(RESET_GLOBAL())
  } ,[isLoggedin])

  return (
    <div>
 {isLoading && <LoadingPage height = "screen" width= "screen"/>}
    <div className={`${isLoading ? "bg-black opacity-20": ""}`}>
        <Header/>
        <Outlet/>
    </div>
    </div>

  )
}

export default HomePage