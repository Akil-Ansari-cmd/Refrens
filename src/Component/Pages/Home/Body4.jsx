import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Body4 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            question: 'What is quotation in business?',
            answer: 'When a supplier submits his proposed price and quantity of his products or services to the potential client, it is known as a quotation. It holds all the detailed information about the product, price, and the total amount of the transaction.'
        },
        {
            question: 'How does quotation work?',
            answer: 'A quotation works as a formal document where the supplier offers a price and terms to a potential buyer. Once agreed upon, it can be converted into an official order.'
        },
        {
            question: 'Why is a quotation important?',
            answer: 'A quotation is important because it serves as a starting point for negotiations and sets clear expectations for both parties involved.'
        }
    ];

    const handleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='p-6 bg-slate-50'>
            <div className='lg:text-5xl md:text-3xl text-xl font-semibold flex justify-center items-center'>
                Frequently Asked Questions (FAQ)
            </div>
            <div className='mt-20'>
                {questions.map((item, index) => (
                    <div key={index} className='border p-4 rounded-lg shadow-md lg:mx-32 md:mx-10 mx-1 mb-4'>
                        <div className='flex justify-between items-center cursor-pointer border-b' onClick={() => handleOpen(index)}>
                            <div className='text-lg font-medium'>{item.question}</div>
                            <div className='text-xl'>{openIndex === index ? <FiMinus /> : <FiPlus />}</div>
                        </div>
                        {openIndex === index && (
                            <div className='mt-2 text-gray-700'>
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className='bg-[#E6007B] font-semibold cursor-pointer my-10 text-white px-6 flex justify-center items-center mx-auto w-fit h-12 rounded-md'>
                <Link to="targetSection" smooth={true} duration={500}>
                    Make Quotation For Free
                </Link>
            </div>
        </div>
    );
};

export default Body4;

