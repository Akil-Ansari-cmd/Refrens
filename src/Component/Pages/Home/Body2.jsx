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
      quano: "",
      quadate: "",
      logo: null,
      name: "",
      id: null,
      country: "",
      mobile: null,
      gst: "",
      address: "",
      city: "",
      zipcode: "",
      state: "",
      clientname: "",
      clientcountry: "",
      clientmobile: null,
      clientgst: "",
      clientaddress: "",
      clientcity: "",
      clientzipcode: "",
      clientstate: "",
      items: [{ id: 1, name: "", quantity: 1, rate: 1, amount: 1 }],
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("Submitted Values:", values);
    },
  });
  console.log("first", formik);

  return (
    <div className='overflow-hidden'>
      <div className='md:text-lg text-base flex items-center justify-center h-14 bg-[#E9E0F9]'>
        Trusted & Loved by 1 Lakh+ businesses in India
      </div>
      <div  id="targetSection"  className='mt-14 md:text-4xl text-xl flex justify-center items-center'>
        Make Your Quotation in Less than 2 Minutes
      </div>
      <div  className='flex justify-center items-center mt-7'>
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
      <form  onSubmit={formik.handleSubmit}>
        <div className='mt-14 h-fit
       pb-6 xl:mx-32 md:mx-16 mx-2 border border-gray-200 shadow-lg rounded-lg'>
          <div className='pt-10 text-4xl font-semibold mx-auto border-b border-black border-dotted w-fit'>Quotation</div>
          <div className="lg:hidden flex flex-col mx-auto my-8 items-center justify-center p-6 border-2 border-dashed rounded-lg w-72 h-40 cursor-pointer hover:bg-gray-100">
            <label className="flex flex-col items-center w-full h-full cursor-pointer">
              <Upload className="text-purple-500" size={30} />
              <span className="mt-2 text-sm font-semibold">Add Business Logo</span>
              <span className="text-xs text-gray-500">Resolution up to 1080x1080px.</span>
              <span className="text-xs text-gray-500">PNG or JPEG file.</span>
              <input type="file" onChange={(e) => formik.setFieldValue("logo", e.target.files[0])} accept="image/png, image/jpeg" className="hidden" />
            </label>
          </div>
          <div className='flex mt-10 justify-between md:px-10 px-2'>
            <div className='space-y-5'>
              <div className='flex md:gap-10 gap-5'>
                <div className='md:text-xl text-base mx-auto border-b border-black border-dotted w-fit'>Quotation No</div>
                <input type='text' value={formik.values?.quano}
                  onChange={formik?.handleChange}
                  name="quano" placeholder='A000001' className='border-b outline-none placeholder:text-black border-gray-400 border-b-gray-200 w-60 hover:border-b-purple-500' />
              </div>
              <div className='flex md:gap-10 gap-5'>
                <div className='md:text-xl text-base mx-auto border-b border-black border-dotted w-fit'>Quotation Date</div>
                <input type='date' value={formik.values?.quadate}
                  onChange={formik?.handleChange}
                  name="quadate" className='border-b outline-none placeholder:text-black border-black border-b-gray-200 md:w-60 w-60 hover:border-b-purple-500' />
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
                  <input type="file" onChange={(e) => formik.setFieldValue("logo", e.target.files[0])} accept="image/png, image/jpeg" className="hidden" />
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
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
              />
              <input
                type="text"
                value={formik.values?.name}
                onChange={formik?.handleChange}
                name="name"
                placeholder="Your Business Name (Required)"
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
              />
              <input
                type="text"
                value={formik.values?.mobile}
                onChange={formik?.handleChange}
                name="mobile"
                placeholder="+91"
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
              />


              <input
                type="text"
                value={formik.values?.gst}
                onChange={formik?.handleChange}
                name="gst"
                placeholder="Your GSTIN (optional)"
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
              />


              <input
                type="text"
                value={formik.values?.address}
                onChange={formik?.handleChange}
                name="address"
                placeholder="Address (optional)"
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
              />


              <div className="flex gap-4 mt-4">
                <input
                  type="text"
                  value={formik.values?.city}
                  onChange={formik?.handleChange}
                  name="city"
                  placeholder="City (optional)"
                  className="w-1/2 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
                />
                <input
                  type="text"
                  value={formik.values?.zipcode}
                  onChange={formik?.handleChange}
                  name="zipcode"
                  placeholder="Postal Code / Zip Code"
                  className="w-1/2 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
                />
              </div>


              <input
                type="text"
                value={formik.values?.state}
                onChange={formik?.handleChange}
                name="state"
                placeholder="Your State (optional)"
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
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
                Quotation For <span className="text-gray-500 text-sm">(Client Details)</span>
              </div>
              <input
                type="text"
                value={formik.values?.clientcountry}
                onChange={formik?.handleChange}
                name="clientcountry"
                placeholder="Your State (optional)"
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
              />
              <input
                type="text"
                value={formik.values?.clientname}
                onChange={formik?.handleChange}
                name="clientname"
                placeholder="Your Business Name (Required)"
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
              />
              <input
                type="text"
                value={formik.values?.clientmobile}
                onChange={formik?.handleChange}
                name="clientmobile"
                placeholder="+91"
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
              />


              <input
                type="text"
                value={formik.values?.clientgst}
                onChange={formik?.handleChange}
                name="clientgst"
                placeholder="Your GSTIN (optional)"
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
              />


              <input
                type="text"
                value={formik.values?.clientaddress}
                onChange={formik?.handleChange}
                name="clientaddress"
                placeholder="Address (optional)"
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
              />


              <div className="flex gap-4 mt-4">
                <input
                  type="text"
                  value={formik.values?.clientcity}
                  onChange={formik?.handleChange}
                  name="clientcity"
                  placeholder="City (optional)"
                  className="w-1/2 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
                />
                <input
                  type="text"
                  value={formik.values?.clientzipcode}
                  onChange={formik?.handleChange}
                  name="clientzipcode"
                  placeholder="Postal Code / Zip Code"
                  className="w-1/2 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
                />
              </div>


              <input
                type="text"
                value={formik.values?.clientstate}
                onChange={formik?.handleChange}
                name="clientstate"
                placeholder="Your State (optional)"
                className="w-full mt-4 border-b hover:border-b-purple-500 bg-slate-50 p-2 outline-none"
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
          <div className="mt-5 lg:block hidden md:mx-10 mx-2">
            <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-semibold p-4 flex justify-between items-center rounded-t-lg text-xs sm:text-sm shadow-md">
              <div>Item</div>
              <div className='flex gap-32 px-72'>
                <div>Quantity</div>
                <div>Rate</div>
                <div>Amount</div>
              </div>
            </div>
            {formik.values.items.map((item) => (
              <div className='bg-slate-50 py-5 px-5 mt-4'>
                <div key={item.id} className='flex'>
                  <input
                    type="text"
                    value={item.name}
                    placeholder="Item Name"
                    className="col-span-2 sm:col-span-1 bg-slate-50 border-b p-3 rounded-md w-[35%] outline-none "
                    onChange={(e) => updateItem(item.id, "name", e.target.value)}
                  />
                  <input
                    type="text"
                    value={item.quantity}
                    className="col-span-2 sm:col-span-1 bg-slate-50 border-b p-3 rounded-md w-[20%] outline-none "
                    onChange={(e) => updateItem(item.id, "quantity", parseFloat(e.target.value) || 0)}
                  />
                  <input
                    type="text"
                    value={item.rate}
                    className="col-span-2 sm:col-span-1 bg-slate-50 border-b p-3 rounded-md w-[20%] outline-none "
                    onChange={(e) => updateItem(item.id, "rate", parseFloat(e.target.value) || 0)}
                  />
                  <span className="text-center font-bold sm:w-20">₹ {item.amount.toFixed(2)}</span>
                  <FaTimes
                    className="text-gray-500 cursor-pointer sm:w-6 hover:text-red-500 transition-all duration-200"
                    onClick={() => removeItem(item.id)}
                  />
                </div>
                <div className='flex justify-between mt-5'>
                  <div className='flex gap-16'>
                    <div className='flex gap-2'>
                      <div><FaPlus className='text-purple-500 mt-1' /></div>
                      <div className='text-gray-500'>Add Description</div>
                    </div>
                    <div className='flex gap-2'>
                      <div><FaImage className='text-purple-500 mt-1' /></div>
                      <div className='text-gray-500'>Add Thumbnail</div>
                    </div>
                  </div>
                  <div onClick={addItem} className='flex gap-2 px-20 cursor-pointer'>
                    <div><FaClone className='text-purple-500 mt-1' /></div>
                    <div className='text-gray-500'>Duplicate</div>
                  </div>
                </div>
                <div className='flex mt-5 gap-24'>
                  <div className='flex gap-2'>
                    <div><FaBalanceScale className='text-purple-500 mt-1' /></div>
                    <div className='text-gray-500'>Add Unit</div>
                  </div>
                  <select
                    className="rounded-md text-gray-500 bg-slate-50 w-[25%] border-b outline-none "
                    value={item.type}
                    onChange={(e) => updateItem(item.id, "type", e.target.value)}
                  >
                    <option>Product</option>
                    <option>Service</option>
                  </select>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="w-full p-3 bg-white hover:bg-slate-100 border border-gray-400 border-dashed text-purple-600 flex items-center justify-center space-x-2 text-xs sm:text-sm mt-4 rounded-md transition-all"
              onClick={addItem}
            >
              <FaPlus />
              <span>Add New Line</span>
            </button>
          </div>

          <div className='mt-5 lg:hidden block mx-6'>
            <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-semibold p-4 flex justify-between items-center rounded-t-lg text-xs sm:text-sm shadow-md">
              <div>Item</div>
            </div>
            {formik.values.items.map((item) => (
              <div className='mt-4 px-5 space-y-5 bg-slate-50 py-5' key={item.id}>
                <div className='flex justify-between'>
                  <div>01</div>
                  <div className='flex gap-5'>
                    <div onClick={addItem}><FaClone className='text-slate-400' /></div>
                    <div><FaTimes
                      className="text-gray-500 cursor-pointer sm:w-6 hover:text-red-500 transition-all duration-200"
                      onClick={() => removeItem(item.id)}
                    /></div>
                  </div>
                </div>
                <div className='flex md:gap-28 gap-7'>
                  <div>Item</div>
                  <div><input
                    type="text"
                    value={item.name}
                    placeholder="Item Name"
                    className="col-span-2 sm:col-span-1 bg-slate-50 border-b md:w-96 w-auto outline-none "
                    onChange={(e) => updateItem(item.id, "name", e.target.value)}
                  /></div>
                </div>
                <div className='flex gap-2'>
                  <div><FaPlus className='text-purple-500 mt-1' /></div>
                  <div className='text-gray-500'>Add Description</div>
                </div>
                <div className='md:flex flex-none md:space-y-0 space-y-5'>
                  <div className='flex md:gap-7 gap-3'>
                    <div>Quantity</div>
                    <div className='md:pl-0 pl-3'>
                      <input
                        type="text"
                        value={item.quantity}
                        className="col-span-2 sm:col-span-1 bg-slate-50 border-b  w-44 outline-none "
                        onChange={(e) => updateItem(item.id, "quantity", parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                  <div className='space-y-5'>
                    <div className='flex gap-7'>
                      <div>Rate</div>
                      <div className='pl-6'>
                        <input
                          type="text"
                          value={item.rate}
                          className="col-span-2 sm:col-span-1 bg-slate-50 border-b  w-44 outline-none "
                          onChange={(e) => updateItem(item.id, "rate", parseFloat(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                    <div className='flex gap-7'>
                      <div>Amount</div>
                      <div className="col-span-2 sm:col-span-1 bg-slate-50 border-b  w-44 outline-none ">
                        ₹ {item.amount.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border border-dashed w-fit p-2 px-5 rounded-md'>
                  <div className='flex gap-2'>
                    <div><FaImage className='text-purple-500 mt-1' /></div>
                    <div className='text-gray-500'>Add Thumbnail</div>
                  </div>
                </div>
                <div className='flex mt-5 gap-24'>
                  <div className='flex gap-2'>
                    <div><FaBalanceScale className='text-purple-500 mt-1' /></div>
                    <div className='text-gray-500'>Add Unit</div>
                  </div>
                </div>
                <div>
                  <select
                    className="rounded-md bg-slate-50 w-full border-b outline-none "
                    value={item.type}
                    onChange={(e) => updateItem(item.id, "type", e.target.value)}
                  >
                    <option>Product</option>
                    <option>Service</option>
                  </select>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="w-full p-3 bg-purple-100 text-purple-600 flex items-center justify-center space-x-2 text-xs sm:text-sm mt-2 rounded-md hover:bg-purple-200 transition-all"
              onClick={addItem}
            >
              <FaPlus />
              <span>Add New Line</span>
            </button>
          </div>

          {/* {formik.values.items.map((item) => ( */}
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
                {/* {formik.values.items.map((item) => ( */}
                  <div  className='item-row'>
                    <div className='font-semibold py-4'>₹ {formik.values.items.reduce((acc, item) => acc + item.amount, 0).toFixed(2)}</div>
                  </div>
                {/* ))} */}
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
          {/* ))} */}
        </div>
      </form>
      <div>
        <Body3 />
      </div>
    </div>
  );
};

export default Body2;
