import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { cryptoCreatorData } from '../asset/constant/data';

export default function CryptoCreator() {
    const [isHovering, setIsHovering] = useState(0);

    return (
        <div>
            <div className='flex flex-col items-center gap-2 justify-center'>
                <h1 className='text-2xl '>Top Crypto Creators and Projects to Follow</h1>
                <p className='text-gray-500 mb-4'>Answers to your crypto doubts, straight from the experts</p>
                <div className='flex gap-4'>
                    {cryptoCreatorData.map((item, index) => (
                        <div key={index} onMouseEnter={()=>setIsHovering(index)} onMouseLeave={()=>setIsHovering(0)} className='cursor-pointer relative flex justify-center items-center'>
                            <div className='relative'>
                                <img src={item.img} className='rounded-2xl' alt="ccimage" />
                                <div className='absolute rounded-2xl bottom-0 left-0 w-full h-24 backdrop-filter backdrop-blur-[1px] bg-gradient-to-b from-transparent to-gray-600'></div>
                            </div>
                            <p className=' absolute bottom-4 text-2xl font-semibold mx-3'>{item.content}</p>
                            {isHovering === index && <div className='absolute w-full h-full bg-[#0000005d] flex justify-center items-center'>
                                <div className='w-14 h-14 rounded-full bg-[#10101078] absolute flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faPlay} size='1x' color='#d1d5db' />
                                </div>
                            </div>}
                            <div className='w-10 h-10 rounded-full bg-[#10101078] absolute flex items-center justify-center top-2 right-2'>
                                <FontAwesomeIcon icon={faClapperboard} size='1x' color='#d1d5db' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}