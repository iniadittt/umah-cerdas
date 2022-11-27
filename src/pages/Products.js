import React from 'react'
import Navigasi from '../components/Navigasi'
import Background from '../components/Background'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'


export default function Products() {
  return (
    <div>
      <Background/>
      <Navigasi/>
      <Header/>
      <div className='lg:relative lg:z-[1]'>
        <div className="lg:w-full lg:font-poppins">
          <div className="lg:px-28 lg:font-poppins lg:flex lg:flex-col lg:gap-12">
            <div className="lg:flex">
                <h1 className="lg:py-3 lg:w-[5rem] lg:border-b-[0.2rem] lg:border-[#0F172A] lg:text-[#0F172A] lg:text-3xl lg:font-semibold">Products</h1>
            </div>
            <div className='lg:w-full lg:h-auto lg:flex lg:justify-center lg:flex-wrap lg:gap-y-12'>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
