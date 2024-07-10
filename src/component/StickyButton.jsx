import React from 'react'

export default function StickyButton() {
    return (
        <div>
            <div className='bg-[#1a1a1a82] text-white  w-[280px] m-auto mt-10 rounded-full'>
                <button className={`font-semibold px-8 py-2 rounded-full bg-[#4040407f]`}>Essentials</button>
                <button className={`font-semibold px-8 py-2 rounded-full`}>Alpha Hub</button>
            </div>
        </div>
    )
}
