import React from 'react'
import {RiSearch2Line} from 'react-icons/ri'
import {BsCalendar4, BsChevronDown} from 'react-icons/bs'
import {HiOutlineChatBubbleBottomCenter,HiOutlineBell} from 'react-icons/hi2'

const Navbar = () => {
  return (
    <nav className='px-[48px] py-[22px] border-b flex w-[calc(100vw-250px)] h-[89px] items-center justify-between'>
      <div className='flex items-center bg-[#F5F5F5] rounded-[4px] px-[18px] py-[10px] w-[400px]'>
        <RiSearch2Line className='text-[#787486] mr-4' size={24}/>
        <input type="text" placeholder='Search of anything...' className='bg-[#F5F5F5] w-full' />
      </div>
      <div className='flex'>
        <div className='flex items-center w-[120px] justify-between mr-[50px]'>
            <BsCalendar4 />
            <HiOutlineChatBubbleBottomCenter />
            <HiOutlineBell />
        </div>
        <div className='flex items-center'>
            <div className='flex flex-col mr-[18px]'>
                <span className='text-[#0D062D] text-[16px]'>Anima Agrawal</span>
                <span className='text-[#787486] text-sm text-end'>U.P, India</span>
            </div>
            <div className='flex items-center'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" className='rounded-full object-cover w-9 h-9 mr-3'/>
                <BsChevronDown />
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
