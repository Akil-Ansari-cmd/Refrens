import React, { useState } from 'react'
import { CiLock, CiUnlock } from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';
import { IoPersonSharp } from 'react-icons/io5';
import { LuMessageCircleQuestion } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate = useNavigate()
    const [lock, setLock] = useState(true);

    const lockHandler = () => {
        setLock(!lock);
    }
    return (
        <div>
            <div className='flex justify-between mx-10'>
                <div className='mt-4'>
                    <img src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%2240%22%20color%3D%22%237341FB%22%20viewBox%3D%220%200%2079.118%2020.319%22%3E%3Cg%20id%3D%22refrens_purple%22%20transform%3D%22translate(0%200.004)%22%3E%3Cg%20id%3D%22Group_1419%22%20data-name%3D%22Group%201419%22%3E%3Cpath%20id%3D%22Path_423%22%20data-name%3D%22Path%20423%22%20d%3D%22M154.313%2C227.844l.52-.458-3.728-4.537v7.769Zm1.622%2C3.561-8.382%2C7.247v-20.3l3.982%2C4.553-.43-.059%2C3.728%2C4.537.344-.314%2C10.143%2C11.6-1.544-1.2-7.84-6.07Zm3.373-3.037%2C5.031%2C8.622.98%2C1.681-10.143-11.6.428-.391%2C2.3-2.068c.409-.373.069-.839-.393-.877l-5.973-.828-3.982-4.553%2C16.728%2C2.317c1.206.1%2C2.094%2C1.319%2C1.026%2C2.292Z%22%20transform%3D%22translate(-147.553%20-218.356)%22%20fill%3D%22currentColor%22%20fill-rule%3D%22evenodd%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Path_426%22%20data-name%3D%22Path%20426%22%20d%3D%22M205.162%2C230.794h2.383a14.236%2C14.236%2C0%2C0%2C1%2C2.7.166%2C3.011%2C3.011%2C0%2C0%2C1%2C2.4%2C3.05%2C3.227%2C3.227%2C0%2C0%2C1-.46%2C1.733%2C2.859%2C2.859%2C0%2C0%2C1-1.313%2C1.132%2C5.963%2C5.963%2C0%2C0%2C1-2.358.39l4.3%2C5.629h-1.466l-4.3-5.629h-.687v5.629h-1.2v-12.1Zm1.2%2C1.18v4.112l2.061.017a5.048%2C5.048%2C0%2C0%2C0%2C1.773-.23%2C1.869%2C1.869%2C0%2C0%2C0%2C.9-.736%2C2.074%2C2.074%2C0%2C0%2C0%2C.321-1.132%2C1.969%2C1.969%2C0%2C0%2C0-.327-1.106%2C1.816%2C1.816%2C0%2C0%2C0-.856-.711%2C5.131%2C5.131%2C0%2C0%2C0-1.759-.213Zm16.1%2C7.953.959.511a5.294%2C5.294%2C0%2C0%2C1-1.092%2C1.5%2C4.37%2C4.37%2C0%2C0%2C1-1.391.871%2C4.835%2C4.835%2C0%2C0%2C1-1.751.3%2C4.213%2C4.213%2C0%2C0%2C1-3.388-1.432%2C4.853%2C4.853%2C0%2C0%2C1-1.222-3.236%2C4.8%2C4.8%2C0%2C0%2C1%2C1.036-3.027%2C4.217%2C4.217%2C0%2C0%2C1%2C3.511-1.691%2C4.357%2C4.357%2C0%2C0%2C1%2C3.618%2C1.733%2C4.862%2C4.862%2C0%2C0%2C1%2C.978%2C3.053h-7.979a3.641%2C3.641%2C0%2C0%2C0%2C.986%2C2.545%2C3.142%2C3.142%2C0%2C0%2C0%2C2.358.994%2C3.79%2C3.79%2C0%2C0%2C0%2C1.319-.236%2C3.447%2C3.447%2C0%2C0%2C0%2C1.089-.626%2C5.275%2C5.275%2C0%2C0%2C0%2C.969-1.261Zm.011-2.41a3.837%2C3.837%2C0%2C0%2C0-.665-1.471%2C3.176%2C3.176%2C0%2C0%2C0-1.158-.888%2C3.525%2C3.525%2C0%2C0%2C0-1.51-.337%2C3.237%2C3.237%2C0%2C0%2C0-2.247.845%2C3.834%2C3.834%2C0%2C0%2C0-1.039%2C1.851Zm7-7.016v1.121a2.783%2C2.783%2C0%2C0%2C0-1.078-.272%2C1.053%2C1.053%2C0%2C0%2C0-.557.135.586.586%2C0%2C0%2C0-.277.312%2C4.287%2C4.287%2C0%2C0%2C0-.058.941v1.207h1.853v.994H227.49l-.005%2C7.954h-1.131v-7.954H225.19v-.994h1.164v-1.393a3.812%2C3.812%2C0%2C0%2C1%2C.175-1.37%2C1.4%2C1.4%2C0%2C0%2C1%2C.6-.66%2C1.939%2C1.939%2C0%2C0%2C1%2C1.011-.25%2C4.745%2C4.745%2C0%2C0%2C1%2C1.327.23Zm1.13%2C3.443h1.164v1.309a4.034%2C4.034%2C0%2C0%2C1%2C1.1-1.151%2C2.181%2C2.181%2C0%2C0%2C1%2C1.2-.376%2C2.06%2C2.06%2C0%2C0%2C1%2C1.009.3l-.593.966a1.572%2C1.572%2C0%2C0%2C0-.6-.157%2C1.635%2C1.635%2C0%2C0%2C0-1.1.472%2C3.015%2C3.015%2C0%2C0%2C0-.806%2C1.469%2C14.2%2C14.2%2C0%2C0%2C0-.211%2C3.089v3.025H230.6v-8.948Zm12.886%2C5.982.959.511a5.294%2C5.294%2C0%2C0%2C1-1.092%2C1.505%2C4.37%2C4.37%2C0%2C0%2C1-1.391.871%2C4.834%2C4.834%2C0%2C0%2C1-1.751.3%2C4.212%2C4.212%2C0%2C0%2C1-3.388-1.432%2C4.853%2C4.853%2C0%2C0%2C1-1.222-3.236%2C4.8%2C4.8%2C0%2C0%2C1%2C1.036-3.027%2C4.217%2C4.217%2C0%2C0%2C1%2C3.51-1.691%2C4.358%2C4.358%2C0%2C0%2C1%2C3.618%2C1.733%2C4.862%2C4.862%2C0%2C0%2C1%2C.978%2C3.053h-7.979a3.641%2C3.641%2C0%2C0%2C0%2C.986%2C2.545%2C3.142%2C3.142%2C0%2C0%2C0%2C2.358.994%2C3.788%2C3.788%2C0%2C0%2C0%2C1.319-.236%2C3.448%2C3.448%2C0%2C0%2C0%2C1.089-.626%2C5.271%2C5.271%2C0%2C0%2C0%2C.969-1.261Zm.012-2.41a3.838%2C3.838%2C0%2C0%2C0-.665-1.471%2C3.174%2C3.174%2C0%2C0%2C0-1.158-.888%2C3.525%2C3.525%2C0%2C0%2C0-1.51-.337%2C3.237%2C3.237%2C0%2C0%2C0-2.247.845%2C3.834%2C3.834%2C0%2C0%2C0-1.039%2C1.851Zm3.338-3.572h1.13v1.6a4.763%2C4.763%2C0%2C0%2C1%2C1.513-1.37%2C3.726%2C3.726%2C0%2C0%2C1%2C1.806-.452%2C3.115%2C3.115%2C0%2C0%2C1%2C1.762.508%2C3.029%2C3.029%2C0%2C0%2C1%2C1.136%2C1.373%2C7.3%2C7.3%2C0%2C0%2C1%2C.366%2C2.685v4.6h-1.13v-4.263a10.431%2C10.431%2C0%2C0%2C0-.13-2.062%2C2.325%2C2.325%2C0%2C0%2C0-.768-1.334%2C2.278%2C2.278%2C0%2C0%2C0-1.463-.447%2C2.783%2C2.783%2C0%2C0%2C0-1.85.691%2C3.207%2C3.207%2C0%2C0%2C0-1.078%2C1.707%2C12%2C12%2C0%2C0%2C0-.163%2C2.429v3.277h-1.13v-8.948Zm14.593.972-.731.764a2.617%2C2.617%2C0%2C0%2C0-1.782-.893%2C1.337%2C1.337%2C0%2C0%2C0-.947.371%2C1.146%2C1.146%2C0%2C0%2C0-.4.862%2C1.286%2C1.286%2C0%2C0%2C0%2C.324.829%2C4.564%2C4.564%2C0%2C0%2C0%2C1.366.946%2C5.114%2C5.114%2C0%2C0%2C1%2C1.721%2C1.28%2C2.365%2C2.365%2C0%2C0%2C1%2C.446%2C1.4%2C2.54%2C2.54%2C0%2C0%2C1-.765%2C1.867%2C2.6%2C2.6%2C0%2C0%2C1-1.912.764%2C3.311%2C3.311%2C0%2C0%2C1-1.46-.337%2C3.174%2C3.174%2C0%2C0%2C1-1.15-.929l.715-.823a2.474%2C2.474%2C0%2C0%2C0%2C1.848.994%2C1.66%2C1.66%2C0%2C0%2C0%2C1.163-.444%2C1.378%2C1.378%2C0%2C0%2C0%2C.48-1.042%2C1.355%2C1.355%2C0%2C0%2C0-.316-.879%2C5.107%2C5.107%2C0%2C0%2C0-1.433-.952%2C4.564%2C4.564%2C0%2C0%2C1-1.626-1.23%2C2.322%2C2.322%2C0%2C0%2C1-.432-1.384%2C2.27%2C2.27%2C0%2C0%2C1%2C.687-1.688%2C2.4%2C2.4%2C0%2C0%2C1%2C1.74-.671%2C3.606%2C3.606%2C0%2C0%2C1%2C2.453%2C1.2Z%22%20transform%3D%22translate(-182.314%20-225.481)%22%20fill%3D%22currentColor%22%20fill-rule%3D%22evenodd%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' />
                </div>
                <div className='flex gap-8'>
                    <div className='flex gap-2 mt-4'>
                        <div><LuMessageCircleQuestion className='mt-1' /></div>
                        <div>Support</div>
                    </div>
                    <div onClick={() => Navigate("/Register")} className='flex cursor-pointer gap-2 rounded-md px-5 h-10 mt-2 text-purple-700 justify-center items-center border border-purple-500'>
                        <div><IoPersonSharp className='mt-1' /></div>
                        <div>Register</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-2xl font-semibold'>Login to your Refrens account</div>
                <div className='border border-gray-200 my-7 w-[30%] rounded-sm p-1 flex justify-center items-center'>
                    <div className='flex'>
                        <div><FcGoogle className='mt-1' /></div>
                        <div>Sign in With Google</div>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='w-40 border border-gray-200 h-px mt-3.5'></div>
                    <div>OR</div>
                    <div className='w-40 border border-gray-200 h-px mt-3.5'></div>
                </div>
                <div className="mt-4 w-full max-w-xs sm:max-w-sm">
                    <label className="block text-xs font-medium text-gray-700">Email*</label>
                    <input
                        className="border border-gray-300 w-full p-2.5 rounded-sm outline-none text-xs"
                        type="email"
                    />
                    <label className="block text-xs font-medium text-gray-700 mt-4">Password*</label>
                    <div className="relative flex items-center">
                        <input
                            className="border border-gray-300 w-full p-2.5 rounded-sm outline-none text-xs pr-8"
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
                <div className='text-gray-600 flex items-start'>Forgot Password?</div>
                <button className="w-full max-w-xs sm:max-w-sm
                   bg-purple-600 text-white font-medium text-sm 
                   p-1 rounded-md border my-5 py-3 border-gray-200 
                   hover:bg-purple-700 transition-all">
                    Login and Continue
                </button>
                <div className='flex gap-1 text-sm'>
                    <div>Having issues logging in?</div>
                    <div className='text-purple-700'>Click here</div>
                </div>
                <div onClick={() => Navigate("/Register")} className='flex cursor-pointer gap-1 text-sm mt-3'>
                    <div>Don't have an account?</div>
                    <div className='text-purple-700'>Sign up now</div>
                </div>
            </div>
        </div>
    )
}

export default Login
