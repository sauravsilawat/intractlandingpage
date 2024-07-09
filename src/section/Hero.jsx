import React from 'react'
import DropDown from '../component/DropDown';
import academyLogo from '../asset/image/academyLogo.gif'
import bgImg from '../asset/image/bgImg.png'
import basicOfCryptoImg from '../asset/image/basiCrypto.png';
import airdrop from '../asset/image/airdrops.png';
import communitypng from '../asset/image/exclusiveCommunity.gif';
import cat from '../asset/image/cat.png';
import cat2 from '../asset/image/cat2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCaretDown, faLock, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import svg0 from '../asset/icon/image_0.svg'
import svg1 from '../asset/icon/image_1.svg'
import svg2 from '../asset/icon/image_2.svg'
import svg3 from '../asset/icon/image_3.svg'
import svg4 from '../asset/icon/image_4.svg'
import coin from '../asset/icon/coin.svg'
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
    return (
        <div>
            <section className='relative flex justify-center items-center'>
                <img className='z-0' src={bgImg} alt="gif" />
                <div className='flex absolute flex-col gap-8 justify-center items-center z-20' >
                    <img src={academyLogo} className='w-[35%] filter brightness-125 mix-blend-multiply' alt="img" />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-gray-400 text-lg'><span className='text-white'>Intract users</span> have together made more than <span className='text-white'>$100 million</span> in web3.</h1>
                        <h1 className='text-gray-400 text-lg'>Join them and <span className='text-white'>learn how to earn crypto!</span></h1>
                    </div>
                    <button className='flex gap-2 bg-[#6435e9] px-14 py-[5px] rounded-lg items-center justify-center'>
                        <h1 className='text-white'>Get Started</h1>
                        <FontAwesomeIcon icon={faArrowRight} size='1px' color='#d1d5db' />
                    </button>
                </div>
            </section>
            <section className='mb-[1700px] w-full'>
                <div className='flex items-center ml-20'>
                    <img src={svg0} className='w-[120px] h-[20px]' alt="svg" />
                    <div className='flex relative h-[230px] w-[34%] rounded-3xl cursor-pointer bg-[#2a29298e] text-white'>
                        <div className='absolute right-8 top-4'>
                            <FontAwesomeIcon icon={faCaretDown} size='1px' color='#d1d5db' />
                        </div>
                        <div className='relative flex justify-center items-center mx-6'>
                            <div className='w-[150px] h-[180px] bg-[#423f3f8e] border-[#7773738e] border-[1px] p-2 rounded-2xl'>
                                <img src={basicOfCryptoImg} className='object-cover rounded-2xl w-full h-full' alt="image" />
                            </div>
                            <h1 className='absolute bottom-12 bg-[#00000089] text-sm py-2 px-4 rounded-full'>6 Quests</h1>
                        </div>
                        <div className='flex flex-col items-start gap-3 justify-center'>
                            <h1 className='text-2xl'>Basic of Crypto</h1>
                            <p className='text-gray-400 pr-4'>The safest and easiest place to start your crypto journey!</p>
                            <div className='flex items-center gap-1 bg-[#7773735b] p-1 px-2 rounded-full'>
                                <img src={coin} width={20} alt="icon" />
                                <p>1490 XPs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex relative justify-center mt-[-40px]'>
                    <img src={svg1} alt="svg" />
                    <div className='absolute text-white z-50 flex h-[300px] w-[200px] right-60'>
                        <div className='relative flex justify-center items-center mx-6'>
                            <div className='w-[150px] h-[180px] bg-[#423f3f8e] border-[#7773738e] border-[1px] p-2 rounded-2xl'>
                                <img src={cat} className='object-cover rounded-2xl w-full h-full' alt="image" />
                            </div>
                            <div className='absolute right-[-20px] bottom-12 bg-[#222121d5] h-12 w-12 rounded-full flex items-center justify-center'>
                                <FontAwesomeIcon icon={faLock} size='1px' color='white' />
                            </div>
                        </div>
                        <div className='absolute bottom-[-75px]'>
                            <h1 className='w-[500px] text-xl'>Intract Certified: Learner NFT</h1>
                            <p className='text-gray-500 mt-2'>Your crypto black-belt</p>
                            <p className='text-gray-500 mb-2'>certificate</p>
                            <button className='px-16 py-1 bg-[#7773734a] rounded-lg'>Claim</button>
                        </div>
                    </div>
                    <img src={svg2} className='absolute right-[-130px] top-44' alt="svg" />
                    <div className='absolute w-[34%] h-full right-[400px] top-[490px]'>
                        <div className='flex relative h-[230px] rounded-3xl cursor-pointer bg-[#2a29298e] text-white'>
                            <div className='absolute right-8 top-4'>
                                <FontAwesomeIcon icon={faCaretDown} size='1px' color='#d1d5db' />
                            </div>
                            <div className='relative flex justify-center items-center mx-6'>
                                <div className='w-[150px] h-[180px] bg-[#423f3f8e] border-[#7773738e] border-[1px] p-2 rounded-2xl'>
                                    <img src={airdrop} className='object-cover rounded-2xl w-full h-full' alt="image" />
                                </div>
                                <h1 className='absolute bottom-12 bg-[#00000089] text-sm py-2 px-4 rounded-full'>4 Quests</h1>
                            </div>
                            <div className='flex flex-col items-start gap-3 justify-center'>
                                <h1 className='text-2xl'>Introduction to Airdrops</h1>
                                <p className='text-gray-400 pr-4'>Your best bet to make it big in crypto!</p>
                                <div className='flex items-center gap-1 bg-[#7773735b] p-1 px-2 rounded-full'>
                                    <img src={coin} width={20} alt="icon" />
                                    <p>1040 XPs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={svg3} className='absolute top-[510px] left-[350px]' alt="svg" />
                    <div className='absolute text-white z-50 flex h-[300px] w-[200px] right-60 left-[180px] top-[800px]'>
                        <div className='relative flex justify-center items-center mx-6'>
                            <div className='w-[150px] h-[180px] bg-[#423f3f8e] border-[#7773738e] border-[1px] p-2 rounded-2xl'>
                                <img src={cat2} className='object-cover rounded-2xl w-full h-full' alt="image" />
                            </div>
                            <div className='absolute right-[-20px] bottom-12 bg-[#222121d5] h-12 w-12 rounded-full flex items-center justify-center'>
                                <FontAwesomeIcon icon={faLock} size='1px' color='white' />
                            </div>
                        </div>
                        <div className='absolute bottom-[-75px]'>
                            <h1 className='w-[500px] text-xl'>Intract Certified: Earner NFT</h1>
                            <p className='text-gray-500 mt-2'>Your proof of</p>
                            <p className='text-gray-500 mb-2'>airdrop expertise</p>
                            <button className='px-16 py-1 bg-[#7773734a] rounded-lg'>Claim</button>
                        </div>
                    </div>
                    <img src={svg4} className='absolute top-[950px] left-[-80px]' alt="svg" />
                    <div className='absolute text-white h-[600px] right-[550px] w-[350px] top-[1275px]'>
                        <section className='bg-[#7773734a] rounded-xl mb-10 py-4 px-3'>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faClock} size='1px' color='yellow' />
                                <p>Rewards unlocks in</p>
                            </div>
                            <div></div>
                        </section>
                        <section className='bg-[#7773734a] text-gray-400 rounded-xl mb-10 py-4 px-3'>
                            <img src={communitypng} alt="gif" />
                            <div className='flex justify-between my-3'>
                                <h1 className=''>Exclusive Community</h1>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faDiscord} color='#7289da' />
                                    <h1 className='text-white'>Eardrops</h1>
                                </div>
                            </div>
                            <div className='h-[1px] w-full bg-slate-400 mb-4'></div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-sm'>Complete all Essential quests</h1>
                                <FontAwesomeIcon icon={faCheckCircle} color='#7289da' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-sm my-1'>Complete at least 1 Alpha Hub quest today</h1>
                                <FontAwesomeIcon icon={faCheckCircle} color='#7289da' />
                            </div>
                            <button className='flex gap-2 bg-[#7773734a] w-full mt-4 py-3 rounded-lg items-center justify-center'>
                                <h1 className='text-white'>Get Started</h1>
                                <FontAwesomeIcon icon={faArrowRight} size='1px' color='#d1d5db' />
                            </button>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}
