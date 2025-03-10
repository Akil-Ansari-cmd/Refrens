import { Upload } from 'lucide-react';
import React, { useState } from 'react';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import { FaBalanceScale, FaClone, FaEnvelope, FaImage, FaPlus, FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoDocumentOutline, IoInformationCircleOutline } from "react-icons/io5";
import { LuSignature } from 'react-icons/lu';
import { MdOutlineDiscount, MdPercent } from "react-icons/md";
import { PiGridFourLight } from "react-icons/pi";
import { TbNotes } from 'react-icons/tb';
import Body3 from './Body3';
const Body2 = () => {
  const [items, setItems] = useState([
    { id: 1, quantity: 1, rate: 1, amount: 1 },
  ]);

  const addItem = () => {
    const newItem = { id: Date.now(), quantity: 1, rate: 1, amount: 1 };
    setItems([...items, newItem]);
  };

  const duplicateItem = (id) => {
    const itemToDuplicate = items.find((item) => item.id === id);
    setItems([...items, { ...itemToDuplicate, id: Date.now() }]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className=''>
      <div className='md:text-lg text-base flex items-center justify-center h-14 bg-[#E9E0F9]'>
        Trusted & Loved by 1 Lakh+ businesses in India
      </div>
      <div className='mt-14 md:text-4xl text-xl flex justify-center items-center'>
        Make Your Quotation in Less than 2 Minutes
      </div>
      <div className='flex justify-center items-center mt-7'>
        <div className='flex gap-3'>
          <div className='h-5 w-5 flex justify-center items-center text-white rounded-full bg-[#7D3BDF] mt-0.5'>1</div>
          <div>Add Quotation Details</div>
        </div>
        <div><IoInformationCircleOutline className='text-gray-400 md:ml-5 ml-0' /></div>
        <div><IoIosArrowForward className='md:mx-5 mx-0' /></div>
        <div className='flex gap-3'>
          <div className='h-5 w-5 flex justify-center items-center mt-0.5 rounded-full border border-gray-400'>2</div>
          <div>Customise & Share</div>
        </div>
        <div><IoInformationCircleOutline className='text-gray-400  md:ml-5 ml-0' /></div>
      </div>
      <div className='mt-14 h-fit
       pb-6 xl:mx-32 md:mx-16 mx-2 border border-gray-200 shadow-lg rounded-lg'>
        <div className='pt-10 text-4xl font-semibold mx-auto border-b border-black border-dotted w-fit'>Quotation</div>
        <div className="lg:hidden flex flex-col mx-auto my-8 items-center justify-center p-6 border-2 border-dashed rounded-lg w-72 h-40 cursor-pointer hover:bg-gray-100">
          <label className="flex flex-col items-center w-full h-full cursor-pointer">
            <Upload className="text-purple-500" size={30} />
            <span className="mt-2 text-sm font-semibold">Add Business Logo</span>
            <span className="text-xs text-gray-500">Resolution up to 1080x1080px.</span>
            <span className="text-xs text-gray-500">PNG or JPEG file.</span>
            <input type="file" accept="image/png, image/jpeg" className="hidden" />
          </label>
        </div>
        <div className='flex mt-10 justify-between md:px-10 px-2'>
          <div className='space-y-5'>
            <div className='flex md:gap-10 gap-5'>
              <div className='md:text-xl text-base mx-auto border-b border-black border-dotted w-fit'>Quotation No</div>
              <input type='text' placeholder='A000001' className='border-b outline-none placeholder:text-black border-black border-b-gray-400 w-60' />
            </div>
            <div className='flex md:gap-10 gap-5'>
              <div className='md:text-xl text-base mx-auto border-b border-black border-dotted w-fit'>Quotation Date</div>
              <input type='date' className='border-b outline-none placeholder:text-black border-black border-b-gray-400 md:w-60 w-60' />
            </div>
            <div className='flex gap-2'>
              <CiSquarePlus className='mt-1 text-purple-600' style={{ fontSize: "20px" }} />
              <div>Add Valid Till Date</div>
            </div>
            <div className='flex gap-2'>
              <CiSquarePlus className='mt-1 text-purple-600' style={{ fontSize: "20px" }} />
              <div>Add More Fields</div>
            </div>
          </div>
          <div>
            <div className="lg:flex hidden flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg w-72 h-40 cursor-pointer hover:bg-gray-100">
              <label className="flex flex-col items-center w-full h-full cursor-pointer">
                <Upload className="text-purple-500" size={30} />
                <span className="mt-2 text-sm font-semibold">Add Business Logo</span>
                <span className="text-xs text-gray-500">Resolution up to 1080x1080px.</span>
                <span className="text-xs text-gray-500">PNG or JPEG file.</span>
                <input type="file" accept="image/png, image/jpeg" className="hidden" />
              </label>
            </div>
          </div>
        </div>
        <div className='lg:grid lg:grid-cols-2 grid grid-cols-1 gap-5 md:px-10 px-3'>
          <div className="w-full mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border border-gray-200">

            <div className="text-xl font-semibold border-b border-dotted pb-1">
              Quotation From <span className="text-gray-500 text-sm">(Your Details)</span>
            </div>


            <div className="mt-4 flex items-center justify-between cursor-pointer border-b pb-2">
              <span>India</span>
              <IoIosArrowDown className="text-gray-500" />
            </div>


            <input
              type="text"
              placeholder="Your Business Name (Required)"
              className="w-full mt-4 border-b border-gray-300 p-2 outline-none"
            />


            <div className="flex items-center mt-4 border-b pb-2">
              <span className="mr-2">🇮🇳</span>
              <span className="text-gray-700">+91</span>
            </div>


            <input
              type="text"
              placeholder="Your GSTIN (optional)"
              className="w-full mt-4 border-b border-gray-300 p-2 outline-none"
            />


            <input
              type="text"
              placeholder="Address (optional)"
              className="w-full mt-4 border-b border-gray-300 p-2 outline-none"
            />


            <div className="flex gap-4 mt-4">
              <input
                type="text"
                placeholder="City (optional)"
                className="w-1/2 border-b border-gray-300 p-2 outline-none"
              />
              <input
                type="text"
                placeholder="Postal Code / Zip Code"
                className="w-1/2 border-b border-gray-300 p-2 outline-none"
              />
            </div>


            <div className="mt-4 flex items-center justify-between cursor-pointer border-b pb-2">
              <span>State (optional)</span>
              <IoIosArrowDown className="text-gray-500" />
            </div>


            <div className="flex items-center mt-4 text-purple-600 cursor-pointer">
              <FaEnvelope className="mr-2" />
              <span>Add Email</span>
              <span className="mx-3">+</span>
              <span>Add PAN</span>
            </div>

            <div className="mt-4 flex items-center text-purple-600 cursor-pointer">
              <CiSquarePlus className="mr-2 text-lg" />
              <span>Add Custom Fields</span>
            </div>
          </div>
          <div className="w-full mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border border-gray-200">

            <div className="text-xl font-semibold border-b border-dotted pb-1">
              Quotation From <span className="text-gray-500 text-sm">(Client Details)</span>
            </div>


            <div className="mt-4 flex items-center justify-between cursor-pointer border-b pb-2">
              <span>India</span>
              <IoIosArrowDown className="text-gray-500" />
            </div>


            <input
              type="text"
              placeholder="Your Business Name (Required)"
              className="w-full mt-4 border-b border-gray-300 p-2 outline-none"
            />


            <div className="flex items-center mt-4 border-b pb-2">
              <span className="mr-2">🇮🇳</span>
              <span className="text-gray-700">+91</span>
            </div>


            <input
              type="text"
              placeholder="Your GSTIN (optional)"
              className="w-full mt-4 border-b border-gray-300 p-2 outline-none"
            />


            <input
              type="text"
              placeholder="Address (optional)"
              className="w-full mt-4 border-b border-gray-300 p-2 outline-none"
            />

            <div className="flex gap-4 mt-4">
              <input
                type="text"
                placeholder="City (optional)"
                className="w-1/2 border-b border-gray-300 p-2 outline-none"
              />
              <input
                type="text"
                placeholder="Postal Code / Zip Code"
                className="w-1/2 border-b border-gray-300 p-2 outline-none"
              />
            </div>

            <div className="mt-4 flex items-center justify-between cursor-pointer border-b pb-2">
              <span>State (optional)</span>
              <IoIosArrowDown className="text-gray-500" />
            </div>


            <div className="flex items-center mt-4 text-purple-600 cursor-pointer">
              <FaEnvelope className="mr-2" />
              <span>Add Email</span>
              <span className="mx-3">+</span>
              <span>Add PAN</span>
            </div>

            <div className="mt-4 flex items-center text-purple-600 cursor-pointer">
              <CiSquarePlus className="mr-2 text-lg" />
              <span>Add Custom Fields</span>
            </div>
          </div>
        </div>
        <div className='flex mt-3 mx-7 gap-2'>
          <div><input type='checkbox' className='w-4 h-4' /></div>
          <div>Add Shipping Details</div>
        </div>
        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 mt-10 mx-7 gap-5'>
          <div className='flex border border-gray-400 p-1 rounded-md justify-center items-center gap-3'>
            <div><MdPercent className='text-purple-600' /></div>
            <div>Edit GST</div>
          </div>
          <div className='md:flex hidden border border-gray-400 p-1 rounded-md justify-center items-center gap-3'>
            <div>Indian Rupees(INR, ₹)</div>
          </div>
          <div className='flex border border-gray-400 p-1 rounded-md justify-center items-center gap-1'>
            <div><PiGridFourLight className='text-purple-600' style={{ fontSize: "20px" }} /></div>
            <div>Edit Columns/Formulas</div>
          </div>
        </div>
        <div className="mt-10">
          <div className="mx-4 sm:mx-7 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="bg-purple-600 text-white font-semibold p-3 flex justify-between rounded-t-lg text-xs sm:text-sm">
              <span className="flex-1 text-left">Item</span>
              <span className="w-16 text-center">Qty</span>
              <span className="w-16 text-center">Rate</span>
              <span className="w-20 text-center">Amount</span>
            </div>

            {/* Items List */}
            {items.map((item) => (
              <div key={item.id} className="p-4 border-b flex flex-wrap sm:flex-nowrap items-center justify-between text-xs sm:text-sm">
                <span className="flex-1 min-w-0 truncate">Item Name</span>
                <input
                  type="number"
                  value={item.quantity}
                  className="w-12 border p-1 text-center"
                  readOnly
                />
                <span className="w-12 text-center">₹ {item.rate}</span>
                <span className="w-16 text-center font-bold">₹ {item.amount.toFixed(2)}</span>
                <FaTimes className="text-gray-500 cursor-pointer" onClick={() => removeItem(item.id)} />
              </div>
            ))}

            {/* Action Buttons */}
            <div className="p-4 flex flex-wrap sm:flex-nowrap items-center justify-center space-x-2 space-y-2 sm:space-y-0 text-purple-600">
              <button className="flex items-center space-x-1 text-xs sm:text-sm">
                <FaPlus />
                <span>Add Description</span>
              </button>
              <button className="flex items-center space-x-1 text-xs sm:text-sm">
                <FaImage />
                <span>Add Thumbnail</span>
              </button>
              <button className="flex items-center space-x-1 text-xs sm:text-sm">
                <FaBalanceScale />
                <span>Add Unit</span>
              </button>
              <select className="border p-1 rounded text-xs sm:text-sm">
                <option>Product</option>
                <option>Service</option>
              </select>
              <button className="flex items-center space-x-1 text-xs sm:text-sm" onClick={addItem}>
                <FaClone />
                <span>Duplicate</span>
              </button>
            </div>

            {/* Add New Line Button */}
            <button
              className="w-full p-3 bg-purple-100 text-purple-600 flex items-center justify-center space-x-2 text-xs sm:text-sm"
              onClick={addItem}
            >
              <FaPlus />
              <span>Add New Line</span>
            </button>
          </div>
        </div>
        <div>
          <div className='flex flex-col lg:ml-96 md:ml-20 ml-0 md:pl-60 pl-0 mt-10'>
            <div className='flex mt-3 mx-7 gap-2'>
              <div><MdOutlineDiscount className='w-4 h-4 mt-1 text-purple-600' /></div>
              <div className='text-gray-500'>Add Discounts/Additional Charges</div>
            </div>
            <div className='flex mt-3 mx-7 gap-2'>
              <div><AiOutlineDollarCircle className='w-4 h-4 mt-1 text-purple-600' /></div>
              <div className='text-gray-500'>Hide Totals</div>
            </div>
            <div className='flex mt-3 mx-7 gap-2 border-b border-gray-300 pb-5'>
              <div><input type='checkbox' className='w-4 h-4' /></div>
              <div className='text-gray-500'>Add Shipping Details</div>
            </div>
            <div className='flex justify-between px-5 mx-7 text-2xl border-b border-gray-300'>
              <div className='flex gap-3 py-4'>
                <div className='font-semibold border-b border-black border-dashed'>TOTAL</div>
                <div>(INR)</div>
              </div>
              <div className='font-semibold py-4'>₹1.00</div>
            </div>
            <div className='flex gap-2 px-7 py-5'>
              <CiSquarePlus className='mt-1 text-purple-600' style={{ fontSize: "20px" }} />
              <div className='text-gray-500'>Add More Fields</div>
            </div>
            <div className='flex gap-2 px-7'>
              <div><AiOutlineDollarCircle className='w-4 h-4 mt-1 text-purple-600' /></div>
              <div className='text-gray-500'>Show Total In Words</div>
            </div>
            <div className='grid grid-cols-1 px-7 mt-4'>
              <div className='flex border border-gray-400 border-dashed p-1 rounded-md justify-center items-center gap-3'>
                <div><LuSignature className='text-purple-600' /></div>
                <div>Add Signature</div>
              </div>
            </div>
          </div>
          <div className=' mt-5'>
            <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 mx-7 gap-5'>
              <div className='flex border border-gray-400 border-dashed p-1 rounded-md justify-center items-center gap-3'>
                <div><CiSquarePlus className='text-purple-600' /></div>
                <div>Add Terms & Conditions</div>
              </div>
              <div className='flex border border-gray-400 border-dashed p-1 rounded-md justify-center items-center gap-3'>
                <div><TbNotes className='text-purple-600' /></div>
                <div>Add Notes</div>
              </div>
              <div className='flex border border-gray-400 border-dashed p-1 rounded-md justify-center items-center gap-1'>
                <div><IoDocumentOutline className='text-purple-600' style={{ fontSize: "20px" }} /></div>
                <div>Add Documents</div>
              </div>
              <div className='flex border border-gray-400 border-dashed p-1 rounded-md justify-center items-center gap-1'>
                <div><TbNotes className='text-purple-600' style={{ fontSize: "20px" }} /></div>
                <div>Add Additional Info</div>
              </div>
              <div className='flex border border-gray-400 border-dashed p-1 rounded-md justify-center items-center gap-1'>
                <div><PiGridFourLight className='text-purple-600' style={{ fontSize: "20px" }} /></div>
                <div>Add Contact Details</div>
              </div>
            </div>
          </div>
          <div className='bg-[#E6007B] text-white my-7 flex justify-center items-center mx-auto w-40 mt-7 h-10 rounded-md'>
            Save & Continue
          </div>
        </div>
      </div>
      <div>
        <Body3 />
      </div>
    </div>
  );
};

export default Body2;
