import React, { useState } from 'react'
import Sidebar from './Component/Sidebar'
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import { IoSearchOutline } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";
import { LuDownload } from "react-icons/lu";
import Tables from './Component/Table/Tables';




const App = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className='main'>
      <div className="sidebar">
           <Sidebar dropdownVisible={dropdownVisible} toggleDropdown={toggleDropdown}  setDropdownVisible={setDropdownVisible}/>
      </div>
      <div className={`right ${dropdownVisible ? 'dropdown-visible' : ''}`}>
                <Navbar dropdownVisible={dropdownVisible}/>
                
            <div className='overview'>
                <div className='title'>
                   <h1>Overview</h1>
                    <div className="input-dropdown-container">
                       <select className="dropdown">
                         <option value="option1">Last month</option>
                         <option value="option2">Current month</option>
                         <option value="option3">Past month</option>
                        </select>
                      </div>
                  </div>

                  {/* Amount and order */}
                  <div className='price'>
                      <div className='order'>
                        <p>Online orders</p>
                         <span>231</span>
                      </div> 
                      <div className="recieve">
                            <p>Amount recieve</p>
                            <span>₹23,92,312.19</span>
                      </div>
                  </div>

                <div className='tran'>
                    <h1>Transactions | This Month</h1>
                </div>
             {/* search by id */}
                <div className='search-by'>
                     <div className='search-id'>
                       <IoSearchOutline/>
                       <input type="text" placeholder='Search by order ID...' />
                     </div>

                     <div className="sort">
                           <div className='by-sort'>
                                <p>Sort</p>
                                <BiSortAlt2/>
                           </div>
                           <div className='download'><LuDownload/></div>
                     </div>
                </div>

              </div>
              <div className="table">
                  <Tables/>
              </div>

      </div>

    </div>
  )
}

export default App
