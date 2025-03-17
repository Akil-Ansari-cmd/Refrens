import React, { useState } from 'react'
import { CiLock, CiUnlock } from 'react-icons/ci'
import { FcGoogle } from 'react-icons/fc'
import { IoPersonSharp } from 'react-icons/io5'
import { LuMessageCircleQuestion } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const Navigate = useNavigate()
    const [lock, setLock] = useState(true);

    const lockHandler = () => {
        setLock(!lock);
    }
    return (
        <div className='flex h-screen w-[100%]  overflow-hidden'>
            <div
                className='bg-red-500  text-white pt-20 h-screen w-[40%] px-10 lg:flex hidden flex-col justify-center items-center'
                style={{ backgroundImage: "url('https://assets.refrens.com/288_refrens_com_og_3x_d10fd7150f.png')" }}
            >
                <div className='text-4xl font-semibold'>
                    <div className=''>Tools you need to run</div>
                    <div>your business.</div>
                </div>
                <div className='text-xl mt-5'>Accounting. Inventory. Leads and more.</div>
                <div className='my-10'>
                    <img src='https://assets.refrens.com/video_thumbnail_68b763ac80.png' />
                </div>
                <div className='text-sm font-semibold'>Join thousands of freelancers and businesses to grow your business</div>
            </div>
            <div className='lg:w-[60%] w-[100%] py-4 overflow-y-scroll'>
                <div className='flex justify-end px-10 gap-8'>
                    <div className='flex gap-2 mt-4'>
                        <div><LuMessageCircleQuestion className='mt-1' /></div>
                        <div>Support</div>
                    </div>
                    <div onClick={() => Navigate("/login")} className='flex cursor-pointer gap-2 rounded-md px-5 h-10 mt-2 text-purple-700 justify-center items-center border border-purple-500'>
                        <div><IoPersonSharp className='mt-1' /></div>
                        <div>Login</div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-2xl font-semibold'>Sing Up on Refrens</div>
                    <div className='border border-gray-200 my-7 md:w-[30%] w-[70%] rounded-sm p-1 flex justify-center items-center'>
                        <div className='flex'>
                            <div><FcGoogle className='mt-1' /></div>
                            <div>Continue With Google</div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-40 border border-gray-200 h-px mt-3.5'></div>
                        <div>OR</div>
                        <div className='w-40 border border-gray-200 h-px mt-3.5'></div>
                    </div>
                    <div className='mt-10 space-y-6'>
                        <div className='flex justify-between md:px-0 px-10 space-x-10'>
                            <div>Country*</div>
                            <div>
                                <input type="text" className='lg:w-[25vw] w-[50vw] p-1.5 rounded-sm border border-gray-300' />
                            </div>
                        </div>
                        <div className='flex justify-between md:px-0 px-10'>
                            <div>Your Name*</div>
                            <div>
                                <input type="text" className='lg:w-[25vw] w-[50vw] p-1.5 rounded-sm border border-gray-300' />
                            </div>
                        </div>
                        <div className='flex justify-between md:px-0 px-10'>
                            <div>Your Email*</div>
                            <div>
                                <input type="text" className='lg:w-[25vw] w-[50vw] p-1.5 rounded-sm border border-gray-300' />
                            </div>
                        </div>
                        <div className='flex justify-between space-x-10 md:px-0 px-10'>
                            <div>Phone*</div>
                            <div>
                                <input type="text" className='lg:w-[25vw] w-[50vw] p-1.5 rounded-sm border border-gray-300' />
                            </div>
                        </div>
                        <div className='flex justify-between space-x-10 md:px-0 px-10'>
                            <div>Password*</div>
                            <div className="relative flex items-center">
                                <input
                                    className='lg:w-[25vw] w-[50vw] p-1.5 rounded-sm border border-gray-300'
                                    type={lock ? "password" : "text"}
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 text-gray-600"
                                    onClick={lockHandler}
                                >
                                    {lock ? <CiLock size={16} /> : <CiUnlock size={16} />}
                                </button>
                            </div>
                        </div>
                        <div className='flex'>
                            <div><input type="checkbox" className='w-10' /></div>
                            <div className=''>I agree to the Refrens Terms of Service and Privacy Policy</div>
                        </div>
                        <button className="w-full mx-14 max-w-xs sm:max-w-sm
                          bg-purple-600 text-white font-medium text-sm 
                          p-1 rounded-md border my-5 py-3 border-gray-200 
                          hover:bg-purple-700 transition-all">
                            Create Account
                        </button>
                        <div onClick={() => Navigate("/login")} className='flex cursor-pointer gap-1 text-sm mt-3 justify-center items-center'>
                            <div>Already a User?</div>
                            <div className='text-purple-700'>Login here</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
