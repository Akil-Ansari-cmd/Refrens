import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { Link } from 'react-scroll';
const Body3 = () => {
  return (
    <div>
      <div className='flex justify-center items-center mt-10'>
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
        <div><IoInformationCircleOutline className='text-gray-400 md:ml-5 ml-0' /></div>
      </div>
      <div className='mt-10 flex flex-col justify-center items-center h-40 !bg-white'>
        <div className='text-5xl'>Featured In</div>
        <div className='md:grid md:grid-cols-4 grid grid-cols-2 md:space-y-0 space-y-5 space-x-10 mt-8'>
          <div><img className='w-[50%] h-[100%] ml-10' src='https://assets.refrens.com/292_Your_Story_11dff8c31c.webp' /></div>
          <div><img className='w-[50%] h-[100%]' src='https://assets.refrens.com/130_vccircle_01bcb68033.webp' /></div>
          <div><img className='w-[50%] h-[100%]' src='https://assets.refrens.com/260_Economic_Times_dda4442926.webp' /></div>
          <div><img className='w-[50%] h-[100%]' src='https://assets.refrens.com/154_Indian_Express_e0fefdb01b.webp' /></div>
        </div>
      </div>
      <div className='mt-5 py-14 lg:flex hidden justify-between h-36 bg-[#7D3BDF] px-28'>
        <div className='text-3xl text-white'>Fast & Unlimited Quotation. Free Forever.</div>
        <div className='px-4 text-white cursor-pointer bg-[#E6007B] h-12 rounded-md flex justify-center items-center'><Link to="targetSection" smooth={true} duration={500}>
          Make Quotation For Free
        </Link></div>
      </div>
      <div className='mt-5 pt-5 lg:hidden grid h-40 bg-[#7D3BDF] md:px-28 px-5'>
        <div className='text-2xl mx-auto font-semibold text-center text-white'>Fast & Unlimited Quotation. Free Forever.</div>
        <div className='px-4 text-white font-semibold mx-auto w-fit bg-[#E6007B] h-12 rounded-md flex justify-center items-center'>Make Quotation For Free</div>
      </div>
      <div className='pt-5 bg-black pb-14'>
        <div className='pt-7 text-white md:text-4xl text-2xl font-semibold flex justify-center items-center'>Features of Quotation Maker</div>
        <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-1 md:px-28 px-14 gap-4 mt-10'>
          <div>
            <div><img className='md:mx-0 mx-auto' src='https://assets.refrens.com/make_quotation_online_with_quotation_maker_bf5e4961d9.svg' /></div>
            <div className='text-white py-7 text-xl font-semibold'>Simple & Easy Quotation</div>
            <div className='text-gray-400'>Create simple-looking quotations and beautiful estimates easily without any hassle.</div>
          </div>
          <div>
            <div><img className='md:mx-0 mx-auto' src='https://assets.refrens.com/Create_invoice_from_the_quotation_with_one_click_e773c94082.svg' /></div>
            <div className='text-white py-5 text-xl font-semibold'>Convert to Tax Invoice</div>
            <div className='text-gray-400'>One-click invoice from the quotation already prepared. No need of entering data again.</div>
          </div>
          <div>
            <div><img className='md:mx-0 mx-auto' src='https://assets.refrens.com/Track_quotations_via_mail_7a3146bb60.svg' /></div>
            <div className='text-white py-5 text-xl font-semibold'>Track Quotations</div>
            <div className='text-gray-400'>Track all your quotations sent via mail and get to know whether quotation is opened by the vendor not.</div>
          </div>
          <div>
            <div><img className='md:mx-0 mx-auto' src='https://assets.refrens.com/Customization_of_Quotation_and_Estimate_8765e38da3.svg' /></div>
            <div className='text-white py-5 text-xl font-semibold'>Customize Your Estimate</div>
            <div className='text-gray-400'>Add a company logo, signature, custom columns & fields, and templates to the estimate generator.</div>
          </div>
          <div>
            <div><img className='md:mx-0 mx-auto' src='https://assets.refrens.com/client_management_ed7174b59f.svg' /></div>
            <div className='text-white py-6 text-xl font-semibold'>Client Management</div>
            <div className='text-gray-400'>Manage and track brief statements of all estimates and quotations in one place.</div>
          </div>
          <div>
            <div><img className='md:mx-0 mx-auto' src='https://assets.refrens.com/lead_management_9574631513.svg' /></div>
            <div className='text-white py-5 text-xl font-semibold'>Lead Management</div>
            <div className='text-gray-400'>Create, manage & assign all your leads from one place and directly convert leads to quotations.</div>
          </div>
          <div>
            <div><img className='md:mx-0 mx-auto' src='https://assets.refrens.com/mutli_biz_owners_280a851402.svg' /></div>
            <div className='text-white py-5 text-xl font-semibold'>Multi-Business & Team Members</div>
            <div className='text-gray-400'>Under one account, create unlimited business and add a couple of team members to manage your quotation and leads.</div>
          </div>
          <div>
            <div><img className='md:mx-0 mx-auto' src='https://assets.refrens.com/live_chat_bd49d97a39.svg' /></div>
            <div className='text-white py-5 text-xl font-semibold'>Live Support</div>
            <div className='text-gray-400'>We are always available to support you via email support and also via live chat support.</div>
          </div>
        </div>
        <div className='bg-[#7D3BDF] cursor-pointer text-white mt-16 px-6 flex justify-center items-center mx-auto w-fit h-12 rounded-md'>
          <Link to="targetSection" smooth={true} duration={500}>
            Custom Free Quotation
          </Link>
        </div>
      </div>
      <div className='bg-[#7D3BDF] pb-24'>
        <div className='flex justify-center items-center py-8 text-5xl text-white font-semibold'>Happy Customers</div>
        <div className='lg:grid hidden grid-cols-2 px-52 pt-16 gap-16'>
          <div className='border border-black rounded-lg bg-white  pb-10'>
            <div><img className='h-16 w-16  relative bottom-10 mx-auto' src='https://assets.refrens.com/292_Aniket_Refrens_Invoice_Software_User_eeaa17c00c.webp' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and </div>
              <div>it’s value for money.</div>
              <div className='font-semibold'>Aniket</div>
              <div>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
          <div className='border border-black  rounded-lg bg-white'>
            <div><img className='h-16 w-16 relative bottom-10 mx-auto' src='https://assets.refrens.com/406_snehal_f436be07b2.webp' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and</div>
              <div>changer</div>
              <div className='font-semibold'>Snehal Bhatt</div>
              <div>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
          <div className='border border-black  rounded-lg bg-white pb-10'>
            <div><img className='h-16 w-16 relative bottom-10 mx-auto rounded-full' src='https://assets.refrens.com/144_Nayan_ba88068972.webp' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and</div>
              <div>changer</div>
              <div className='font-semibold'>Snehal Bhatt</div>
              <div>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
          <div className='border border-black  rounded-lg bg-white'>
            <div><img className='h-16 w-16 relative bottom-10 mx-auto  rounded-full' src='https://assets.refrens.com/108_linkee_cae93493da.webp' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and</div>
              <div>changer</div>
              <div className='font-semibold'>Snehal Bhatt</div>
              <div>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
          <div className='border border-black  rounded-lg bg-white  pb-10'>
            <div><img className='h-16 w-16 relative bottom-10 mx-auto rounded-full' src='https://assets.refrens.com/100_radiosparx_royalty_free_music_f299666562.webp' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and</div>
              <div>changer</div>
              <div className='font-semibold'>Snehal Bhatt</div>
              <div>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
          <div className='border border-black  rounded-lg bg-white'>
            <div><img className='h-16 w-16 relative bottom-10 mx-auto rounded-full' src='https://assets.refrens.com/himanshu_v2_82aa38ad14.jpeg' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and</div>
              <div>changer</div>
              <div className='font-semibold'>Snehal Bhatt</div>
              <div>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
        </div>
        <div className='lg:hidden flex overflow-hidden overflow-x-scroll px-10 pt-16 gap-16'>
          <div className='border border-black min-w-[320px] rounded-lg bg-white pb-10'>
            <div><img className='h-16 w-16  relative bottom-10 left-32' src='https://assets.refrens.com/292_Aniket_Refrens_Invoice_Software_User_eeaa17c00c.webp' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and </div>
              <div>it’s value for money.</div>
              <div className='font-semibold'>Aniket</div>
              <div className='text-xs'>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
          <div className='border border-black min-w-[320px] rounded-lg bg-white pb-10'>
            <div><img className='h-16 w-16 relative bottom-10 left-32' src='https://assets.refrens.com/406_snehal_f436be07b2.webp' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and</div>
              <div>changer</div>
              <div className='font-semibold'>Snehal Bhatt</div>
              <div className='text-xs'>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
          <div className='border border-black min-w-[320px] rounded-lg bg-white pb-10'>
            <div><img className='h-16 w-16 relative bottom-10 left-32 rounded-full' src='https://assets.refrens.com/144_Nayan_ba88068972.webp' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and</div>
              <div>changer</div>
              <div className='font-semibold'>Snehal Bhatt</div>
              <div className='text-xs'>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
          <div className='border border-black min-w-[320px] rounded-lg bg-white pb-10'>
            <div><img className='h-16 w-16 relative bottom-10 left-32  rounded-full' src='https://assets.refrens.com/108_linkee_cae93493da.webp' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and</div>
              <div>changer</div>
              <div className='font-semibold'>Snehal Bhatt</div>
              <div className='text-xs'>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
          <div className='border border-black min-w-[320px] rounded-lg bg-white pb-10'>
            <div><img className='h-16 w-16 relative bottom-10 left-32 rounded-full' src='https://assets.refrens.com/100_radiosparx_royalty_free_music_f299666562.webp' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and</div>
              <div>changer</div>
              <div className='font-semibold'>Snehal Bhatt</div>
              <div className='text-xs'>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
          <div className='border border-black min-w-[320px] rounded-lg bg-white pb-10'>
            <div><img className='h-16 w-16 relative bottom-10 left-32  rounded-full' src='https://assets.refrens.com/himanshu_v2_82aa38ad14.jpeg' /></div>
            <div className='flex flex-col px-12 justify-center items-center'>
              <div>Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and</div>
              <div>changer</div>
              <div className='font-semibold'>Snehal Bhatt</div>
              <div className='text-xs'>Owner, Spaceplexx, Coworking Space</div>
            </div>
          </div>
        </div>
      </div>
      <div className='pb-28 !bg-white shadow-sm'>
        <div className='flex items-center justify-center py-14 text-4xl font-semibold'>Pricing</div>
        <div className='border gap-5 py-10 shadow-lg px-10 rounded-md border-gray-200 flex flex-col justify-center mx-auto items-center w-fit p-7'>
          <div className='md:text-2xl text-xl'>Quotation Making on Refrens is FREE!</div>
          <div><sup className='text-2xl'>₹</sup><span className='text-5xl'>0</span></div>
          <div className='text-2xl font-semibold text-[#E6007B]'>UNLIMITED. FREE FOREVER.</div>
          <div className='bg-[#E6007B] font-semibold text-white px-6 flex justify-center items-center mx-auto w-fit h-12 rounded-md cursor-pointer'>
            <Link to="targetSection" smooth={true} duration={500}>
              Custom Free Quotation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body3
