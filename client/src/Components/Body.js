import React from 'react'

const Body = () => {
    return (
        <div className='flex justify-around bg-gradient-to-r from-cyan-200  to-pink-300 h-screen'>
            <div className='w-[580px] '>
                <h1 className='font-serif text-6xl pl-24 pt-60'>YOUR GATEWAY TO SUCCESS </h1>
                <p className=' font-serif pl-24 mt-6 text-xl text-justify text-gray-800'>

                    Welcome to the Placement Portal. Discover limitless opportunities, connect with top employers, and accelerate your career journey. Get ready to step into a world of possibilities.

                    Explore job openings, build your resume, and network with professionals. For employers, find exceptional talent to drive your organization forward.

                    Unlock your potential with Placement Portal!!</p>
                <button className='mt-6 ml-24 pl-9 h-12 text-white bg-cyan-500 hover:bg-cyan-600  pr-9 rounded-full text-2xl'>MORE DETAILS . . . .</button>

            </div>
            <div>
                <img alt="no" src="https://kiit.ac.in/wp-content/uploads/2023/02/Placement-2023.jpg" className='h-[600px] mt-48 ml-16  opacity-80  rounded-lg ' />

            </div>
        </div>
    )
}
export default Body;
