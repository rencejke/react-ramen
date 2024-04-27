import React from 'react'
import Header from '../partials/Header'
import { baseImgUrl } from '../helpers/functions-general'
import { RxCaretRight } from 'react-icons/rx'
import { bannerText, ctaImg, ctaText, instruction, menu } from './data';
import Footer from '../partials/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className='bg-[#141414] text-white'>
    <div className={`banner bg-[url('../../img//banner.jpg')] bg-cover h-[100vh] object-cover relative isolate`}>
       
       <div className="backdrop bg-black/30 absolute top-0 legft-0 h-full w-full -z-10"></div>
        <Header />

        <div className='absolute  left-1/2 top-[350px] -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='text-[5rem] font-bold uppercase'>{bannerText[0].title}</h1>
            <p className='font-bold uppercase text-[1.4rem]'>{bannerText[0].sched}</p>
        </div>
            
    </div>
    
    </div>
        <div className='Order bg-[#FDF7EF] pt-8 pb-20'>
            <h4 className='text-center mt-8 mb-5 text-3xl text-red-600 font-bold uppercase'>How to Order At Miochi?</h4>
        <div className='max-w-[1000px] w-full mx-auto px-4 py-1 flex justify-center gap-5 items-center'>


           {instruction.map((i, k) =>(
            <div className='flex flex-col justify-center items-center gap-5'>
            <div className='flex justify-center items-center gap-5'>
            <img src={`${baseImgUrl}/order/${i.img}`} alt="" className=' w-full h-[120px] object-cover' key={k}/>

            {/* print two icon */}
            {k < 2 && (
          <div>
             <RxCaretRight className='text-5xl text-red-500 font-extrabold'/>
          </div>
        )}
            </div>

            <div className='text-center font-bold text-[1rem] upp'>
            <span className='uppercase'>{i.text}</span>
            </div>
            </div>

            
))}
           
        </div>
        </div>

        <div className='Food__Menu bg-btnClr pb-12'>
            <h4 className='text-center font-bold text-5xl uppercase text-white pt-12'>Ramen Menu</h4>
        <div className='max-w-[1000px] w-full mx-auto px-4 py-1 grid grid-cols-2'>

            
              {menu.map((item, key) => (
              <div>
              <div className='flex flex-row gap-3 pt-[4rem]'>
              <div className='text '>

                <h1 className='mb-5 text-[2.3rem] uppercase font-bold' key={key}>{item.type}</h1>
                <ul className='text-md font-bold text-white'>
                   
                    <li  className='text-red-600 text-[1.5rem] font-extrabold'>{item.price}</li>
                    {item.ingridients.map((ingridient, key2) => (
                    <li key={key2} className='font-bold text-[18px]'>{ingridient}</li>
                ))}
                     {item.extra === "none" ? (<li></li>) : (<li className='text-red-600 font-extrabold'>+ egg-free noodles $1.00</li>) }
                    
                </ul>
                <h5 className='mt-3 font-bold text-[1.3rem] uppercase'>{item.name}</h5>
                
              </div>
               

              <div className='image'>
              <img src={`${baseImgUrl}/menu/${item.img}`} alt="" className='size-[170px]'/>
             </div>
              </div>
                
            </div>
         ))}
        </div>
        <div className='text-center pb-16 pt-20'>
                    <button className='btn2'><Link to="">View Our Full Menu</Link></button>
                 </div>
        </div>

        <div className='CTA bg-[#FDF7EF]'>

            <div className='max-w-[1000px] w-full mx-auto px-4 py-1 text-center flex flex-col gap-4 uppercase pt-12 py-16 '>
                <h3 className='text-red-600 text-4xl font-extrabold'>Join Us For Happy Hour</h3>
                <p className=' text-btnClr font-bold text-2xl'>{ctaText[0].sched}</p>
            </div>

            <div className='flex overflow-hidden'>
                {ctaImg.map((img2, key) => (
            <img src={`${baseImgUrl}/${img2.img}`} alt="" className='w-[35rem] h-[25rem]' key={key}/>))}
         </div>
        </div>

        <Footer />
    </>
  )
}

export default Home