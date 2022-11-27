import React from 'react'
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <div className="lg:w-full lg:h-auto lg:bg-[#0F172A] lg:flex lg:flex-col lg:font-poppins lg:justify-between lg:mt-10">
        <div className="lg:flex lg:py-8 lg:px-28 lg:gap-6">
            <div className="lg:w-1/4 lg:h-full">
                <img src={process.env.PUBLIC_URL + "/images/logo-uc.png"} className="lg:h-full" alt="Logo"/>
            </div>
            <div className="lg:w-1/4 lg:h-full lg:flex lg:flex-col lg:gap-2">
                <h1 className="lg:font-semibold lg:text-gray-300 lg:mb-3">TENTANG UMAH CERDAS</h1>
                <p className="lg:w-max lg:text-gray-500 lg:font-medium lg:hover:underline"><Link to="/">Homepage</Link></p>
                <p className="lg:w-max lg:text-gray-500 lg:font-medium lg:hover:underline"><Link to="/">Products</Link></p>
                <p className="lg:w-max lg:text-gray-500 lg:font-medium lg:hover:underline"><Link to="/">Support</Link></p>
            </div>
            <div className="lg:w-1/4 lg:h-full lg:flex lg:flex-col lg:gap-2">
                <h1 className="lg:font-semibold lg:text-gray-300 lg:mb-3">FOLLOW KAMI</h1>
                <p className="lg:w-max lg:text-gray-500 lg:font-medium lg:hover:underline"><a href="https://www.google.com">Instagram</a></p>
                <p className="lg:w-max lg:text-gray-500 lg:font-medium lg:hover:underline"><a href="https://www.google.com">WhatsApp</a></p>
                <p className="lg:w-max lg:text-gray-500 lg:font-medium lg:hover:underline"><a href="https://www.google.com">Google Maps</a></p>
            </div>
            <div className="lg:w-1/4 lg:h-full lg:flex lg:flex-col lg:gap-2">
                <h1 className="lg:font-semibold lg:text-gray-300 lg:mb-3">LEGALICY</h1>
                <p className="lg:w-max lg:text-gray-500 lg:font-medium lg:hover:underline"><Link to="/">Privacy Policy</Link></p>
                <p className="lg:w-max lg:text-gray-500 lg:font-medium lg:hover:underline"><Link to="/">Terms & Conditions</Link></p>
                <p className="lg:w-max lg:text-gray-500 lg:font-medium lg:hover:underline"><Link to="/">Disclaimer</Link></p>
            </div>
        </div>
        <div className="lg:flex lg:justify-between lg:bg-[#0a1226] lg:px-28 lg:py-4">
            <p className="lg:font-medium lg:text-gray-300">&copy; Copyright 2022 Umah Cerdas. All Right Reserved.</p>
            <p className="lg:font-medium lg:text-gray-300">@ProjectKami</p>
        </div>
    </div>
  )
}
