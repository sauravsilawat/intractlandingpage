import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function DropDown({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className='flex w-[90%] m-auto gap-x-4 mt-4 bg-[#2b2929b7] p-4 rounded-xl'>
          <img src={item.img} className='w-[30%] rounded-xl' alt="img" />
          <div className='flex flex-col pr-4 gap-2 w-[70%]'>
            <h1 className='overflow-hidden text-ellipsis whitespace-nowrap'>{item.content}</h1>
            <figure className='w-full h-[1px] bg-white'></figure>
            <div className='flex justify-between items-center'>
              <p>{item.task}</p>
              <figure className='w-[60%] h-4 bg-[#525050b7] rounded-full'></figure>
              <FontAwesomeIcon icon={faCheckCircle} size='1x' color='#d1d5db' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
