import React from 'react'
import { baseImgUrl } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header bg-black/40 py-4'>
    <div className="max-w-[1000px] w-full mx-auto px-4 py-1">
    <div className="flex justify-around items-center ">
        <img src={`${baseImgUrl}/logo.jpg`} alt="" className=' h-[90px] object-cover'/>
        
        <ul className='flex items-center gap-7 text-white uppercase font-bold text-[15px]'>
                        <li><Link to="">Menu</Link></li>
                        <li><Link to="">Locations</Link></li>
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Blog</Link></li>
        </ul>
        <button className='btn'><Link to="">Order Online</Link></button>
    </div>
    </div>
    </header>
  )
}

export default Header