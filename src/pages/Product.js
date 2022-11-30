import React from 'react'
import Background from '../components/Background'
import Navigasi from '../components/Navigasi'

export default function Product() {
  return (
    <div>
      <Navigasi/>
      <Background/>
      DETAIL PRODUCT
      <div className="grid grid-cols-3 h-full mt-14 font-poppins">
        <div className=" bg-blue-400 flex overflow-hidden w-full h-full gap-12">
          <img src="/images/product.png" alt="gambar Produk" />
      ` </div>
        <div className='col-span-2 flex text-left bg-red-400'>
          <div className='bg-yellow-200'>
            <h1 className='text-2xl pt-1'>BATIK MEGA MENDUNG</h1>
            <h2 className='bg-green-300 pt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, tenetur! Placeat et facere, officia nemo eveniet vitae cum dolor minus nesciunt incidunt architecto excepturi recusandae culpa soluta cumque officiis. </h2>
            <div className='w-14 h-full block object-cover border-4 '>
              <img src="/images/gambar1.jpg" alt="" />
              <img src="/images/gambar1.jpg" alt="" />
              <img src="/images/gambar1.jpg" alt="" />
              <img src="/images/gambar1.jpg" alt="" />
            </div>
          </div>
          <div className='w-full h-full flex cursor-pointer '>
          </div>
        </div>
      </div>
      
    </div>
  )
}
