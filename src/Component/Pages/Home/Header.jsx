import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowPointer } from "react-icons/fa6";
import Body from './Body';
import Shared from './Shared';
import Body4 from './Body4';
import Footer from './Footer';
const Header = () => {
  return (
    <div className=''>
      <Shared />
      <Body />
      <Body4/>
      <Footer/>
    </div>

  )
}

export default Header
