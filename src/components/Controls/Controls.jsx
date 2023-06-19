import React from 'react'
import {HiOutlineFilter} from 'react-icons/hi'
import {HiOutlineUsers} from 'react-icons/hi2'
import {BsChevronDown, BsCalendarDate, BsGrid} from 'react-icons/bs'
import {CiGrid2H} from 'react-icons/ci'

const Controls = () => {
  return (
    <div className='px-12 pb-10 flex justify-between items-center'>
        <div className='flex gap-3'>
            <button className='text-[#787486] flex items-center px-[18px] py-[10px]  border border-[#787486] rounded-md'>
                <span className='mr-2'><HiOutlineFilter /></span>
                <span className='mr-3'>Filter</span>
                <span><BsChevronDown /></span>
            </button>
            <button className='text-[#787486] inline-flex items-center px-[18px] py-[10px] border border-[#787486] rounded-md'>
                <span className='mr-2'><BsCalendarDate /></span>
                <span className='mr-3'>Today</span>
                <span><BsChevronDown /></span>
            </button>
        </div>
        <div className='flex items-center'>
            <button className='text-[#787486] inline-flex items-center px-[18px] py-[10px] border border-[#787486] rounded-md'>
               <span className='mr-2'><HiOutlineUsers size={20}/></span>
               <span>Share</span>
            </button>
            <span className='mx-[20px] text-[28px] h-7 border border-[#787486]'></span>
            <div className='bg-[#5030E5] w-10 h-10 rounded-md flex items-center justify-center mr-4'>
                <CiGrid2H color='white'/>
            </div>
            <span>
                <BsGrid size={20}/>
            </span>
        </div>
    </div>
  )
}

export default Controls
