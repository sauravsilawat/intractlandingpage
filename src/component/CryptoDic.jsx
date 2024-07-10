import React from 'react';
import crypto from '../asset/image/dictionary.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


export default function CryptoDic() {
    return (
        <div className='flex flex-col items-center gap-2 mt-16 justify-center'>
            <h1 className='text-2xl '>Crypto Dictionary</h1>
            <p className='text-gray-500 mb-4'>Your one-stop to catch up on all crypto terms</p>
            <div>
                <div className='relative'>
                    <div className='z-30'>
                        <div className='relative'>
                            <img className='rounded-xl' src={crypto} alt="image" />
                            <div className='absolute rounded-xl bottom-0 left-0 w-full h-20 backdrop-filter backdrop-blur-[2px] bg-gradient-to-b from-transparent to-gray-600'></div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 left-0 z-10 w-full p-4'>
                        <div className='flex items-center justify-between'>
                            <div className='text-gray-200'>
                                <h1 className='text-2xl'>Web3 + Degen Glossary</h1>
                                <p>Your own crypto dictionary</p>
                            </div>
                            <div className='h-16 w-16 flex items-center justify-center rounded-full bg-[#10101078]'>
                                <FontAwesomeIcon icon={faBookOpen} size='1x' color='#d1d5db' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
