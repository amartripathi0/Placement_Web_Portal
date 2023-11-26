import React, { useEffect } from 'react'
import Header from '../../Components/header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { RESET , getLoginStatus } from '../../redux/features/common/globalSlice'
import {useSelector , useDispatch} from 'react-redux'
import LoadingPage from '../LoadingPage'


const HomePage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isLoggedin , isLoading, message} = useSelector(state => state.globalAuth)
  useEffect(() => {
    dispatch(getLoginStatus())
    dispatch(RESET())
  }, [dispatch])


  useEffect(() => {
    const link = `/${message ?  message.toLowerCase() : ""}`
    if(isLoggedin){
      navigate(link)
    }   
  } ,[isLoggedin])
  return (
    <div>
 {isLoading && <LoadingPage height = "screen" width= "screen"/>}
    <div className={`${isLoading ? "bg-black opacity-30": ""}`}>
        <Header/>
        <Outlet/>
    </div>
    </div>

  )
}

export default HomePage