import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import nishyan from './nishyan.png'
import wallet from './img_outlinewallet.svg';
import './Sidebar.css'
import { LuHome } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaVolumeHigh } from "react-icons/fa6";
import { TfiBarChart } from "react-icons/tfi";
import { MdOutlinePayments } from "react-icons/md";
import { TfiLocationArrow } from "react-icons/tfi";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { BsPlugin } from "react-icons/bs";
import { HolidayVillage } from '@mui/icons-material';

const Sidebar = ({dropdownVisible,toggleDropdown}) => {
  
  return (
    <div className={`side ${dropdownVisible ? 'dropdown-visible' : ''}`}>
          <div className='upper_part'>
          <div className='upper'>
              <div className='txt'>
                 <img src={nishyan} alt="" />
                  {!dropdownVisible && <div className="pg">
                  <h1>Nishyan</h1>
                  <a href="">Visit store</a>
                  </div>}
              </div>
              <a href="#" className='down' onClick={toggleDropdown}><RiArrowDropDownLine/></a>
          </div>
            
          <div className="middle">
               <div className='icon-content'>
                     <a href=""><LuHome/></a>
                    {!dropdownVisible &&  <a href="">Home</a>}
               </div>
               <div className='icon-content'>
                     <a href=""><FiShoppingBag/></a>
                     {!dropdownVisible && <a href="">Orders</a>}
               </div>
               <div className='icon-content'>
                     <a href=""><IoGridOutline/></a>
                    {!dropdownVisible &&  <a href="">Products</a>}
               </div>
               <div className='icon-content'>
                     <a href=""><CiDeliveryTruck/></a>
                     {!dropdownVisible && <a href="">Delivery</a>}
               </div>
               <div className='icon-content'>
                     <a href=""><FaVolumeHigh/></a>
                     {!dropdownVisible && <a href="">Marketing</a>}
               </div>
               <div className='icon-content'>
                     <a href=""><TfiBarChart/></a>
                     {!dropdownVisible && <a href="">Analysis</a>}
               </div>
               <div className='icon-content'>
                     <a href=""><MdOutlinePayments/></a>
                     {!dropdownVisible && <a href="">Payment</a>}
               </div>
               <div className='icon-content'>
                     <a href=""><TfiLocationArrow/></a>
                     {!dropdownVisible && <a href="">Tools</a>}
               </div>
               <div className='icon-content'>
                     <a href=""><CiDiscount1/></a>
                     {!dropdownVisible && <a href="">Discount</a>}
               </div>
               <div className='icon-content'>
                     <a href=""><MdOutlinePayments/></a>
                     {!dropdownVisible && <a href="">Audience</a>}
               </div>
               <div className='icon-content'>
                     <a href=""><IoIosColorPalette/></a>
                     {!dropdownVisible && <a href="">Appearence</a>}
               </div>
               <div className='icon-content'>
                     <a href=""><BsPlugin/></a>
                     {!dropdownVisible && <a href="">Plugins</a>}
               </div>
          </div>
          </div>

          <div className="lower">
                <img src={wallet} alt="" />
                <div className='text'>
                    <p>Available credits</p>
                    <span>222.10</span>
                </div>
          </div>
    </div>
  )
}

export default Sidebar