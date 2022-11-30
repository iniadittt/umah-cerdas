import React from 'react'
import Background from '../components/Background'
import Navigasi from '../components/Navigasi'


export default function Support() {
  return (
    <div>
      <Navigasi />
      <Background />
      
      <div className="lg:pt-40 pb-5 lg:font-poppins">
        <h1 className='text-center text-3xl'>Hai ada yang bisa kami bantu?</h1>
        <div className='w-full flex justify-center mt-10'>
            <div className='text-center w-3/5 h-[4rem] relative'>
                <img src='/images/search.png' alt="Icon" className="absolute z-10 right-0 p-5 mr-1 h-full hover:cursor-pointer"/>
                <input className="border-4 w-full h-full relative rounded-md p-5" type="text" placeholder="Mencari.."/>
            </div>
         </div>
      </div>
    </div>
  )
}
