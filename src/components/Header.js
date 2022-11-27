import React from 'react'

export default function Header() {
  return (
    <div className="lg:w-full lg:h-[30rem] lg:px-28 lg:pt-32 lg:mb-8">
      <div className="lg:w-full lg:h-full lg:rounded-xl lg:shadow-xl lg:overflow-hidden lg:relative">
        <div className="lg:w-full lg:h-full lg:absolute lg:z-[1] lg:flex lg:flex-col lg:justify-center lg:cursor-pointer lg:opacity-0 lg:duration-500 lg:hover:duration-500 lg:hover:opacity-100">
          <p className="lg:text-center lg:font-poppins lg:font-semibold lg:text-gray-200 lg:text-7xl lg:tracking-[1.4rem]">UMAH BATIK</p>
        </div>
        <img src={process.env.PUBLIC_URL + "/images/header2.jpg"} alt="Gambar Background" className="lg:w-full lg:relative lg:bottom-[9rem]"/>
      </div>
    </div>
  )
}
