import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { footerText } from '../pages/data'

const Footer = () => {
  return (
    <div className='bg-[#433D3C] py-12 text-white font-bold'>
        <div className='flex justify-between items-center max-w-[1000px] w-full mx-auto px-4 py-1'>
            <ul className='flex gap-5 text-2xl text-btnClr'>
                <li><FaYoutube /></li>
                <li><FaTwitter /></li>
                <li><FaFacebookF /></li>
                <li><FaInstagram /></li>
            </ul>
            
            <div className='text-center text-lg'>
           <p>{footerText[0].contact1}</p>
            <p>{footerText[0].contact2  }</p>    
           </div>

           <button className='btn'><Link>Order Online</Link></button>
            
        </div>
    </div>
  )
}

export default Footer