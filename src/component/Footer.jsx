import React from 'react';
import { footerData } from '../asset/constant/data';
import Seperator from './Seperator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faSpotify, faTelegram } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div>
      <div className='flex w-[82%] m-auto text-sm justify-between'>
        {footerData && footerData.map((item, index) => (
          <div className='flex flex-col gap-2' key={index}>
            <h1 className={`font-semibold ${item.title === "intract." ? 'text-3xl' : ''}`}>{item.title}</h1>
            <div className='flex flex-col gap-2'>
              {item.content.map((arritem, idx) => (
                <p className={`nav-item  cursor-pointer text-gray-400  ${item.title === "intract." ? 'w-[300px] mr-10' : ''} ${item.title === "SUPPORT" ? 'mr-[120px]' : ''}`} key={idx}>{arritem}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='w-[82%] m-auto'>
        <Seperator />
      </div>

      <div className='w-[82%] m-auto'>
        <p className='text-gray-400 text-sm mr-28'>
          <span className='text-white font-medium'>Disclaimer: </span>
          Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
        </p>
      </div>

      <div className='w-[82%] m-auto'>
        <Seperator />
      </div>

      <div className='flex items-center justify-between pb-10 w-[82%] m-auto'>
        <h1 className='font-medium text-white'>CREATED BY <span className=' underline'>INTRACT</span></h1>
        <div className='flex gap-4'>
          <a className='w-10 h-10 rounded-lg flex items-center justify-center bg-[#1a1a1a]' href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon color='#1DA1F2' icon={faTwitter} size="1x" />
          </a>
          <a className='w-10 h-10 rounded-lg flex items-center justify-center bg-[#1a1a1a]' href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon color='#7289da' icon={faDiscord} size="1x" />
          </a>
          <a className='w-10 h-10 rounded-lg flex items-center justify-center bg-[#1a1a1a]' href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon color='#0088cc' icon={faTelegram} size="1px" />
          </a>
          <a className='w-10 h-10 rounded-lg flex items-center justify-center bg-[#1a1a1a]' href="https://spotify.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon color='#1ED760' icon={faSpotify} size="1x" />
          </a>
        </div>
      </div>
    </div>
  );
}

