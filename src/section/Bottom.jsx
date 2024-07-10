import React from 'react'
import Seperator from '../component/Seperator'
import CryptoDic from '../component/CryptoDic'
import CryptoCreator from '../component/CryptoCreator'
import StickyButton from '../component/StickyButton'
import Footer from '../component/Footer'

export default function Bottom() {
    return (
        <div className='text-white w-full pb-10'>
            <Seperator />
            <CryptoCreator />
            <Seperator />
            <CryptoDic />
        </div>
    )
}
