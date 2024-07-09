import React from 'react';
import logo from '../asset/icon/intract_text.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import broadcast from '../asset/icon/broadcast.svg'

export default function Navbar() {
    return (
        <div className='w-full fixed z-50 mt-16 bg-[#0000008e]'>
            <div className='text-white m-auto flex w-[82%] py-3 items-center justify-between'>
                <img src={logo} alt="logo" />
                <nav className='text-gray-300 text-base flex justify-between w-[35%]'>
                    <a className='nav-item' href="/">Compass</a>
                    <a className='nav-item' href="/">Explore</a>
                    <div>
                        <a className='text-white relative' href="/">Academy <span className='bg-[#6435e9] text-[12px] px-2 py-[1px] ml-1 rounded-md font-semibold'>New</span></a>
                        <div className='bg-white h-1 w-32 mt-4 ml-[-5px] rounded-full absolute'></div>
                    </div>
                    <a className='nav-item' href="/">NFTs</a>
                    <a className='nav-item' href="/">For Projects</a>
                </nav>
                <div className='w-[38%] flex flex-row gap-2 bg-[#2e2d2d8e] rounded-full p-2 items-center justify-center'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='1px' color='#d1d5db' />
                    <input className='w-[90%] my-1 text-sm bg-transparent border-none focus:outline-none focus:border-none' type="search" name="searchbar" placeholder='Search for ecosystems, trending quests etc,.' />
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <div className='p-[14px] rounded-full border-[1px] border-[#fa8922]'>
                        <img src={broadcast} alt="icon" />
                    </div>
                    <button className='text-black bg-white px-5 h-9 font-medium rounded-md'>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}
