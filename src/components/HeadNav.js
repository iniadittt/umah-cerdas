import React from 'react'

export default function HeadNav() {
  return (
    <div className="lg:w-full lg:h-auto lg:px-28 lg:mb-14">
      <div className="lg:w-full lg:h-full lg:flex lg:gap-12">
        <p className="lg:w-2/5 lg:my-auto lg:text-right lg:font-poppins lg:font-base lg:text-medium">Pelatihan yang diberikan adalah pelatihan proses membuat batik baik teori maupun praktik, mencakup proses pembuatan desain, proses pencantingan, proses pewarnaan dan proses finishing baik batik tradisional maupun batik modern.</p>
        <div className="lg:w-3/5 lg:relative lg:overflow-hidden lg:rounded-2xl lg:shadow-2xl">
          <div className="lg:absolute lg:w-full lg:h-full lg:opacity-0 lg:hover:opacity-100 lg:flex lg:flex-col lg:justify-center lg:cursor-pointer lg:duration-300 lg:hover:duration-300">
            <p className="lg:py-3 lg:bg-white lg:font-poppins lg:text-medium lg:text-xl lg:font-semibold lg:text-center lg:rotate-[-3deg] lg:scale-125">Pelatihan Batik Umah Cerdas</p>
          </div>
          <img src={process.env.PUBLIC_URL + "/images/header1.jpg"} className="lg:w-full" alt="Image Background"/>
        </div>
      </div>
    </div>
  )
}
