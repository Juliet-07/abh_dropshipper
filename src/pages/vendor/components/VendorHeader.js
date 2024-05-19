import React from 'react'
import { BellIcon, MenuIcon, UserIcon, UsersIcon } from '@heroicons/react/outline'
import { FiBell, FiSearch, FiUser } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'

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
              <FiBell width={24} height={24} color='white' />
              <FiUser width={24} height={24} color='white' />
            </div>
        </header>

        <header className='w-full h-[72px] bg-none xl:hidden flex items-center flex-row justify-between p-[20px] '>
            <div className='flex flex-row items-center gap-[20px]'>
              <MenuIcon width={24} height={24} color='#373435'/>
            <img src='/abh_logo.png' width={119.29} height={20.76} />
            </div>
            

            <div className='flex flex-row items-center gap-[44px]'>
             
              <FiBell width={24} height={24} color='#373435' />
              <FiUser width={24} height={24} color='#373435' />
            </div>
        </header>
    </>
  )
}

export default VendorHeader