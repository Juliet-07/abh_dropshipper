import React from 'react'
import { BellIcon, MenuIcon, UserIcon, UsersIcon, XIcon } from '@heroicons/react/outline'
import { FiBell, FiSearch, FiUser } from 'react-icons/fi'


const VendorHeader = ({title}) => {

  return (
    <>
   <header className='w-full h-[72px] bg-[#359E52] xl:flex hidden items-center flex-row justify-between p-[20px] '>
            <p className='text-white text-[18px] font-600 '>{title}</p>

            <div className='w-[80%] max-w-[500px] h-[40px] bg-white p-[10px] flex items-center rounded-[6px] '>
              <input type='text' className='w-full  bg-none border-none outline-none  placeholder:text-[12px] placeholder:text-[#37343566]' placeholder='Search for products' /> 
              <FiSearch width={16} height={16} color='#37343566'/> 

            </div>

            <div className='flex flex-row items-center gap-[44px]'>
              <div className='w-[213px] h-[40px] rounded-[6px] border-[1px] border-[#CFCBCB] text-[16px] text-white p-[10px] flex flex-row items-center justify-between'>
                <p>Currency-</p>
                <select style={{background: "none", border: "none"}}
                 placeholder='$ (USD)' className='placeholder:text-[16px] w-[120px] placeholder:text-white bg-none'>
                  <option disabled>$ (USD)</option>
                  <option >$ (USD)</option>
                  <option >$ (USD)</option>
                </select>
              </div>
              <FiBell className='active:opacity-5 cursor-pointer ' onClick={()=> window.open("#notifications", "_parent")} width={24} height={24} color='white' />
              <FiUser className='active:opacity-5 cursor-pointer ' onClick={()=> window.open("#profile", "_parent")} width={24} height={24} color='white' />
            </div>
        </header>

        <header className='w-full h-[72px] bg-none xl:hidden flex items-center flex-row z-[400000] justify-between p-[20px] '>
            <div className='flex flex-row items-center gap-[20px]'>
              <MenuIcon  width={24} height={24} color='#373435' className='active:opacity-5 cursor-pointer ' onClick={()=> window.open("#SideNav", "_parent")}/>
            <img src='/abh_logo.png' width={119.29} height={20.76} />
            </div>
            

            <div className='flex flex-row items-center gap-[44px]'>
             
              <FiBell className='active:opacity-5 cursor-pointer ' onClick={()=> window.open("#notifications", "_parent")} size={20} color='#373435' />
              <FiUser className='active:opacity-5 cursor-pointer ' onClick={()=> window.open("#profile", "_parent")} size={20} color='#373435' />
            </div>
        </header>
        
    </>
  )
}

export default VendorHeader