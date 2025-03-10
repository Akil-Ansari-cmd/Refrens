import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const Body4 = () => {
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className='p-6'>
            <div className='lg:text-5xl md:text-3xl text-xl font-semibold flex justify-center items-center'>Frequently Asked Questions (FAQ)</div>
            <div className='mt-20 border p-4 rounded-lg shadow-md lg:mx-32 md:mx-10 mx-1'>
                <div className='flex justify-between items-center cursor-pointer border-b' onClick={handleOpen}>
                    <div className='text-lg font-medium'>What is quotation in business?</div>
                    <div className='text-xl'>{open ? <FiMinus /> : <FiPlus />}</div>
                </div>
                {open && (
                    <div className='mt-2 text-gray-700'>
                        When a supplier submits his proposed price and quantity of his products or services to the potential client, it is known as a quotation. It holds all the detailed information about the product, price, and the total amount of the transaction.
                    </div>
                )}
            </div>
            <div className='my-5 border p-4 rounded-lg shadow-md lg:mx-32 md:mx-10 mx-1'>
                <div className='flex justify-between items-center cursor-pointer border-b' onClick={handleOpen}>
                    <div className='text-lg font-medium'>What is quotation in business?</div>
                    <div className='text-xl'>{open ? <FiMinus /> : <FiPlus />}</div>
                </div>
                {open && (
                    <div className='mt-2 text-gray-700'>
                        When a supplier submits his proposed price and quantity of his products or services to the potential client, it is known as a quotation. It holds all the detailed information about the product, price, and the total amount of the transaction.
                    </div>
                )}
            </div>
            <div className='border p-4 rounded-lg shadow-md lg:mx-32 md:mx-10 mx-1'>
                <div className='flex justify-between items-center cursor-pointer border-b' onClick={handleOpen}>
                    <div className='text-lg font-medium'>What is quotation in business?</div>
                    <div className='text-xl'>{open ? <FiMinus /> : <FiPlus />}</div>
                </div>
                {open && (
                    <div className='mt-2 text-gray-700'>
                        When a supplier submits his proposed price and quantity of his products or services to the potential client, it is known as a quotation. It holds all the detailed information about the product, price, and the total amount of the transaction.
                    </div>
                )}
            </div>
            <div className='bg-[#E6007B] font-semibold my-10 text-white px-6 flex justify-center items-center mx-auto w-fit h-12 rounded-md'>
                Make Quotation For Free
            </div>
        </div>
    );
};

export default Body4;

