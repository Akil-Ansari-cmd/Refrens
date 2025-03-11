import { useFormik } from 'formik';
import { Upload } from 'lucide-react';
import React from 'react';
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
  const addItem = () => {
    formik.setFieldValue("items", [
      ...formik.values.items,
      { id: Date.now(), name: "", quantity: 1, rate: 1, amount: 1 },
    ]);
  };

  const updateItem = (id, field, value) => {
    const updatedItems = formik.values.items.map((item) =>
      item.id === id
        ? { ...item, [field]: value, amount: field === "quantity" || field === "rate" ? value * item.rate : item.amount }
        : item
    );
    formik.setFieldValue("items", updatedItems);
  };

  const removeItem = (id) => {
    formik.setFieldValue(
      "items",
      formik.values.items.filter((item) => item.id !== id)
    );
  };

  const formik = useFormik({
    initialValues: {
      quano:"",
      quadate:"",
      logo:"",
      name: "",
      id: null,
      country: "",
      mobile: null,
      gst: "",
      address: "",
      city: "",
      zipcode: "",
      state: "",
      items: [{ id: 1, name: "", quantity: 1, rate: 1, amount: 1 }],
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("Submitted Values:", values);
    },
  });
  console.log("first", formik);

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
      <form onSubmit={formik.handleSubmit}>
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
                <input type='text' value={formik.values?.quano}
                onChange={formik?.handleChange}
                name="quano" placeholder='A000001' className='border-b outline-none placeholder:text-black border-gray-400 border-b-gray-400 w-60' />
              </div>
              <div className='flex md:gap-10 gap-5'>
                <div className='md:text-xl text-base mx-auto border-b border-black border-dotted w-fit'>Quotation Date</div>
                <input type='date' value={formik.values?.quadate}
                onChange={formik?.handleChange}
                name="quadate" className='border-b outline-none placeholder:text-black border-black border-b-gray-400 md:w-60 w-60' />
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
            <div className="w-full mx-auto mt-10 p-6 bg-slate-50 rounded-lg">
              <div className="text-xl font-semibold border-b border-dotted pb-1">
                Quotation From <span className="text-gray-500 text-sm">(Your Details)</span>
              </div>
              <input
                type="text"
                value={formik.values?.country}
                onChange={formik?.handleChange}
                name="country"
                placeholder="Your State (optional)"
                className="w-full mt-4 border-b bg-slate-50 p-2 outline-none"
              />
              <input
                type="text"
                value={formik.values?.name}
                onChange={formik?.handleChange}
                name="name"
                placeholder="Your Business Name (Required)"
                className="w-full mt-4 border-b bg-slate-50 p-2 outline-none"
              />
              <input
                type="text"
                value={formik.values?.mobile}
                onChange={formik?.handleChange}
                name="mobile"
                placeholder="+91"
                className="w-full mt-4 border-b bg-slate-50 p-2 outline-none"
              />


              <input
                type="text"
                value={formik.values?.gst}
                onChange={formik?.handleChange}
                name="gst"
                placeholder="Your GSTIN (optional)"
                className="w-full mt-4 border-b bg-slate-50 p-2 outline-none"
              />


              <input
                type="text"
                value={formik.values?.address}
                onChange={formik?.handleChange}
                name="address"
                placeholder="Address (optional)"
                className="w-full mt-4 border-b bg-slate-50 p-2 outline-none"
              />


              <div className="flex gap-4 mt-4">
                <input
                  type="text"
                  value={formik.values?.city}
                  onChange={formik?.handleChange}
                  name="city"
                  placeholder="City (optional)"
                  className="w-1/2 border-b bg-slate-50 p-2 outline-none"
                />
                <input
                  type="text"
                  value={formik.values?.zipcode}
                  onChange={formik?.handleChange}
                  name="zipcode"
                  placeholder="Postal Code / Zip Code"
                  className="w-1/2 border-b bg-slate-50 p-2 outline-none"
                />
              </div>


              <input
                type="text"
                value={formik.values?.state}
                onChange={formik?.handleChange}
                name="state"
                placeholder="Your State (optional)"
                className="w-full mt-4 border-b bg-slate-50 p-2 outline-none"
              />


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
            <div className="w-full mx-auto mt-10 p-6 bg-slate-50 rounded-lg">

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
                className="w-full mt-4 border-b bg-slate-50 p-2 outline-none"
              />


              <div className="flex items-center mt-4 border-b pb-2">
                <span className="mr-2">🇮🇳</span>
                <span className="text-gray-700">+91</span>
              </div>


              <input
                type="text"
                placeholder="Your GSTIN (optional)"
                className="w-full mt-4 border-b bg-slate-50 p-2 outline-none"
              />


              <input
                type="text"
                placeholder="Address (optional)"
                className="w-full mt-4 border-b bg-slate-50 p-2 outline-none"
              />

              <div className="flex gap-4 mt-4">
                <input
                  type="text"
                  placeholder="City (optional)"
                  className="w-1/2 border-b bg-slate-50 p-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Postal Code / Zip Code"
                  className="w-1/2 border-b bg-slate-50 p-2 outline-none"
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
          <div className="mt-5 md:mx-10 mx-2">
            {/* Invoice Items Section */}
            <div className="bg-purple-600 text-white font-semibold p-3 flex justify-between rounded-t-lg text-xs sm:text-sm">
              <span className="flex-1 text-left">Item</span>
              <span className="w-16 text-center hidden sm:block">Qty</span>
              <span className="w-16 text-center hidden sm:block">Rate</span>
              <span className="w-20 text-center hidden sm:block">Amount</span>
            </div>

           
            {formik.values.items.map((item) => (
              <div key={item.id} className="p-4 border-b bg-gray-50 rounded-lg shadow-sm">
              
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-3">
                  <input
                    type="text"
                    value={item.name}
                    placeholder="Item Name"
                    className="col-span-2 sm:col-span-1 border p-2 rounded w-full"
                    onChange={(e) => updateItem(item.id, "name", e.target.value)}
                  />
                  <input
                    type="number"
                    value={item.quantity}
                    className="border p-2 text-center rounded w-full sm:w-16"
                    onChange={(e) => updateItem(item.id, "quantity", parseFloat(e.target.value) || 0)}
                  />
                  <input
                    type="number"
                    value={item.rate}
                    className="border p-2 text-center rounded w-full sm:w-16"
                    onChange={(e) => updateItem(item.id, "rate", parseFloat(e.target.value) || 0)}
                  />
                  <span className="text-center font-bold sm:w-20">₹ {item.amount.toFixed(2)}</span>
                  <FaTimes className="text-gray-500 cursor-pointer sm:w-6" onClick={() => removeItem(item.id)} />
                </div>

                <div className="flex flex-wrap items-center justify-start gap-2 mt-3 text-purple-600 text-xs sm:text-sm">
                  <button className="flex items-center space-x-1">
                    <FaPlus />
                    <span>Add Description</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <FaImage />
                    <span>Add Thumbnail</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <FaBalanceScale />
                    <span>Add Unit</span>
                  </button>
                  <select
                    className="border p-1 rounded w-full sm:w-auto"
                    value={item.type}
                    onChange={(e) => updateItem(item.id, "type", e.target.value)}
                  >
                    <option>Product</option>
                    <option>Service</option>
                  </select>
                  <button className="flex items-center space-x-1">
                    <FaClone />
                    <span>Duplicate</span>
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              className="w-full p-3 bg-purple-100 text-purple-600 flex items-center justify-center space-x-2 text-xs sm:text-sm mt-3 rounded"
              onClick={addItem}
            >
              <FaPlus />
              <span>Add New Line</span>
            </button>
          </div>
          {formik.values.items.map((item) => (
          <div>
            <div key={item} className='flex flex-col lg:ml-96 md:ml-20 ml-0 md:pl-60 pl-0 mt-10'>
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
                <div className='font-semibold py-4'>₹ {item.amount.toFixed(2)}</div>
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
            <button type='submit' className='bg-[#E6007B] text-white my-7 flex justify-center items-center mx-auto w-40 mt-7 h-10 rounded-md'>
              Save & Continue
            </button>
          </div>
        ))}
        </div>
      </form>
      <div>
        <Body3 />
      </div>
    </div>
  );
};

export default Body2;
