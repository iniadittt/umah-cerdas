import React from 'react'
import StarRating from './Rating'
import { Link } from 'react-router-dom'


export default function ProductCard() {
  return (
    <div className='lg:w-1/3 lg:p-6 lg:font-poppins lg:flex lg:flex-col lg:gap-4'>
        <div className="lg:w-full lg:rounded-xl lg:overflow-hidden lg:relative lg:flex lg:justify-center">
            <div className='lg:w-full lg:h-full bg-gradient-to-t from-gray-600 to transparent lg:opacity-30 lg:absolute lg:z-[1]'/>
            <div className='lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-end lg:items-end lg:pb-3 lg:pr-5 lg:absolute lg:z-[1]'>
                <p className="lg:font-semibold lg:text-gray-100 lg:text-3xl">Rp120.000</p>
            </div>
            <img src="/images/product.png"/>
        </div>
        <div className='lg:w-full lg:flex lg:flex-col lg:gap-1 lg:justify-between'>
            <div className='lg:w-full lg:h-auto'>
                <h1 className="lg:font-semibold lg:text-[#0F172A] lg:text-lg">Batik Mega Mendung Grade A</h1>
                <p className="lg:text-[#0F172A] lg:text-medium lg:text-md lg:py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <StarRating/>
            </div>
            <button className="lg:bg-[#0F172A] lg:mt-3 lg:py-2 lg:text-sm lg:text-gray-200 lg:font-medium lg:rounded-md lg:shadow-md lg:duration-300 lg:hover:bg-[#212e4d] lg:hover:duration-300">
                <Link to="/product/1">
                    Lihat Selengkapnya
                </Link>
            </button>
        </div>
    </div>
  )
}
