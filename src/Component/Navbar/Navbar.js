import React from 'react'
import { GoQuestion } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import './Navbar.css'


const Navbar = ({dropdownVisible}) => {
  return (
    <div className={`nav ${dropdownVisible ? 'dropdown-visible' : ''}`}>
          <div className='left-part'>
              <h1>Payments</h1>
              <div className='ques'><GoQuestion/> How it works</div>
          </div>
          <div className='search-input'>
             <CiSearch/>
             <input type="text" placeholder='Search feature , tutorial etc'/>
          </div>
          <div className='right-part'>
              <p><IoChatboxEllipsesOutline/></p>
              <p><IoMdArrowDropdown/></p>
          </div>
    </div>
  )
}

export default Navbar
