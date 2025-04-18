import React from 'react'
import { FaArrowPointer } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Shared = () => {
    const Navigate = useNavigate();
    return (
        
        <div className='sticky z-50 top-0 w-full'>
            <div className='flex justify-between h-14 bg-[#7D3BDF] xl:px-28 lg:px-16 px-3 text-white'>
                <div className='pt-3 flex gap-2'>
                    <div><img src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20color%3D%22%23fff%22%20viewBox%3D%220%200%2018.235%2020.319%22%3E%3Cg%3E%3Cg%3E%3Cpath%20fill%3D%22currentColor%22%20fill-rule%3D%22evenodd%22%20d%3D%22M154.313%20227.844l.52-.458-3.728-4.537v7.769zm1.622%203.561l-8.382%207.247v-20.3l3.982%204.553-.43-.059%203.728%204.537.344-.314%2010.143%2011.6-1.544-1.2-7.84-6.07zm3.373-3.037l5.031%208.622.98%201.681-10.143-11.6.428-.391%202.3-2.068c.409-.373.069-.839-.393-.877l-5.973-.828-3.982-4.553%2016.728%202.317c1.206.1%202.094%201.319%201.026%202.292z%22%20transform%3D%22translate(0%20.004)%20translate(-147.553%20-218.356)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' className='h-9 w-10' /></div>
                    <div className='text-3xl lg:block hidden'>Refrens</div>
                </div>
                <div className='text flex items-center text-sm lg:gap-7 gap-4'>
                    <div className='lg:flex hidden gap-1'>
                        <div>Products</div>
                        <div><IoIosArrowDown className='mt-1' /></div>
                    </div>
                    <div className='lg:block hidden'>Pricing</div>
                    <div className='lg:flex hidden gap-2'>
                        <div><FaArrowPointer className='mt-1 text-[#E6007B]' /></div>
                        <div>Quick Guide</div>
                    </div>
                    <div onClick={() => Navigate("/login")} className='cursor-pointer'>Login</div>
                    <div onClick={() => Navigate("/Register")} className='px-4 bg-[#E6007B] cursor-pointer h-10 rounded-md flex justify-center items-center'>Register</div>
                </div>
            </div>
            <div className='lg:hidden flex gap-4 py-2 px-3 bg-white'>
                <div className='flex gap-1'>
                    <div>Products</div>
                    <div><IoIosArrowDown className='mt-1.5' /></div>
                </div>
                <div className='flex gap-2'>
                    <div><FaArrowPointer className='mt-1.5 text-[#E6007B]' /></div>
                    <div>Quick Guide</div>
                </div>
            </div>
        </div>
    )
}

export default Shared
