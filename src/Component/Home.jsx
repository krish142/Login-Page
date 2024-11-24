import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
import { GoLock } from "react-icons/go";

const Home = () => {
  return (
    <div className='min-w-full min-h-full fixed bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% grid place-content-center'>
        <div className='h-[480px] w-[780px]  bg-[#00000050] rounded-2xl  flex gap-14'>
            <div className='w-[40%] h-[100%] relative  p-3'>
                <img src="/src/assets/signup-background.svg" alt="assests/signup-background.svg" className='h-[100%] rounded-2xl relative' />
                <img src="/src/assets/teamwork.svg" alt="" className='absolute top-[25%] h-[40%]'/>
            </div>
            <div className='my-auto'>
                <h1 className='text-white font-extrabold text-[35px]'>Login</h1>
                <p className='text-white font-semibold'>Access to 300+ hours of courses, tutorials and livestreams</p>
                <div className='mt-3'>
                    <div className='flex flex-col gap-3 border-b pb-5 border-gray-500 '>
                        <div className='h-[50px] w-[350px] bg-[rgba(255,255,255,0.2)] rounded-full p-1 flex items-center gap-4'>
                            <div className='h-[43px] w-[43px] bg-[rgba(255,255,255,0.3)] rounded-full pt-2 pl-2 text-[24px] text-sky-300'><HiOutlineMailOpen /></div>
                            <div><input type='text' placeholder='Email address' className='bg-transparent text-[16px] email text-white'></input></div>
                        </div>
                        <div className='h-[50px] w-[350px] bg-[rgba(255,255,255,0.2)] rounded-full p-1 flex items-center gap-4'>
                            <div className='h-[43px] w-[43px] bg-[rgba(255,255,255,0.3)] rounded-full pt-2 pl-2 text-[24px] text-sky-300'><GoLock /></div>
                            <div><input type='text' placeholder='Password' className='bg-transparent text-[16px] email text-white'></input></div>
                        </div>
                        <div className= 'h-[50px] w-[350px] bg-sky-300 rounded-full cursor-pointer'>
                            <h2 className='text-white text-center text-[20px] font-semibold mt-2'>Sign in</h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 mt-5'>
                    <p className='text-[15px] text-white'>Dont't have an account?<a href="#" className='text-sky-300 font-semibold pl-1'>Sign in</a></p>
                    <p className='text-[15px] text-white'>Forgot password?<a href="#" className='text-sky-300 font-semibold pl-1'>Reset password</a></p>
                    <p className='text-[15px] text-white'>Dont't have a password yet?<a href="#" className='text-sky-300 font-semibold pl-1'>Set password</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home