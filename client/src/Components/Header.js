import React from 'react'
import { img } from "./Constants"
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
            <div className='flex justify-between align-middle self-center h-28  bg-gray-100  ' >
                <img src={img} alt="no" className='h-24 mt-3 ml-20  ' />
                <div className='p-4 m-4 flex  text-xl text-gray-500 font-bold align-middle self-center'>
                    <Link to="/">
                        <div className='pl-4 pr-4 '>Home</div>
                    </Link>
                    <Link to="/about">
                        <div className='pl-4 pr-4'>About </div>
                    </Link>
                    <Link to="/page">
                        <div className='pl-4 pr-4'>Page</div>
                    </Link>
                    <Link to="/contact">
                        <div className='pl-4 pr-4'>Contact</div>
                    </Link>
                    <Link to="/support">

                        <div className='pl-4 pr-4 '><u>Support</u></div>
                    </Link>
                    <div className=' pl-4 pr-4 ml-10 mr-10 text-black '>Login</div>
                    <div className=' pl-4 pr-4 text-white bg-cyan-500 hover:bg-cyan-600 p-1 rounded-full '>Sign Up</div>
                </div>
            </div >
        </>

    )
}

export default Header;