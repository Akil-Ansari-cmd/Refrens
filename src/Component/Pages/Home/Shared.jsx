import React from 'react'
import { FaArrowPointer } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'

const Shared = () => {
    return (
        <div className='sticky z-50 top-0'>
            <div className='flex justify-between bg-[#7D3BDF] px-28 text-white'>
                <div className='pt-4 flex gap-2'>
                    <div><img src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20color%3D%22%23fff%22%20viewBox%3D%220%200%2018.235%2020.319%22%3E%3Cg%3E%3Cg%3E%3Cpath%20fill%3D%22currentColor%22%20fill-rule%3D%22evenodd%22%20d%3D%22M154.313%20227.844l.52-.458-3.728-4.537v7.769zm1.622%203.561l-8.382%207.247v-20.3l3.982%204.553-.43-.059%203.728%204.537.344-.314%2010.143%2011.6-1.544-1.2-7.84-6.07zm3.373-3.037l5.031%208.622.98%201.681-10.143-11.6.428-.391%202.3-2.068c.409-.373.069-.839-.393-.877l-5.973-.828-3.982-4.553%2016.728%202.317c1.206.1%202.094%201.319%201.026%202.292z%22%20transform%3D%22translate(0%20.004)%20translate(-147.553%20-218.356)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' className='h-9 w-10' /></div>
                    <div className='text-3xl'>Refrens</div>
                </div>
                <div className='flex gap-10 py-2'>
                    <div className='flex gap-1 pt-4'>
                        <div>Products</div>
                        <div><IoIosArrowDown className='mt-1.5' /></div>
                    </div>
                    <div className=' pt-4'>Pricing</div>
                    <div className='flex gap-2  pt-4'>
                        <div><FaArrowPointer className='mt-1.5 text-[#E6007B]' /></div>
                        <div>Quick Guide</div>
                    </div>
                    <div className=' pt-4'>Login</div>
                    <div className='px-4 bg-[#E6007B] h-10 mt-2 rounded-md flex justify-center items-center'>Register</div>
                </div>
            </div>
        </div>
    )
}

export default Shared
