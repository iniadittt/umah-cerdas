import React from "react"
import { Link } from "react-router-dom"
import HeadNav from "./HeadNav"
import Gallery from "./Gallery"

export default function Body() {
  return (
      <div>
        <div className="lg:w-full lg:py-24 lg:font-poppins">
          <div className="lg:w-full lg:h-auto lg:px-6 lg:flex lg:flex-col lg:gap-8 lg:py-28">
            <h1 class="text-6xl font-bold tracking-tight text-[#0F172A] lg:text-center">UMAH CERDAS</h1>
            <p className="lg:w-4/5 lg:text-center lg:mx-auto lg:font-base lg:text-medium">Industri Batik merupakan warisan turun termurun dari keluarga Ibu UU, baru pada tahun 2013 ibu Uu Kurniawati memberi nama industry Batiknya dengan nama Sanggar Batik Umah Cerdas. Kegiatan yang dilakukan adalah memproduksi batik tulis khas Cirebon, membantu ibu ibu pengrajin batik sekitar dalam penjualan batik, memberikan pelatihan-pelatihan kepada siswa TK, SD, SMP dan SMA, mahasiswa, guru dan masyarakat yang berminat untuk belajar proses membuat batik. Untuk itulah kami menamakannya Sanggar.</p>
            <div className="lg:flex lg:gap-3 lg:justify-center">
              <button className="lg:py-2 lg:px-5 lg:bg-[#0F172A] lg:text-gray-200 lg:rounded-md lg:shadow-sm lg:font-medium"><Link to="/">GET Started</Link></button>
              <button className="lg:py-2 lg:px-5 lg:border-[1px] lg:border-[#0F172A] lg:text-[#0F172A] lg:font-semibold lg:rounded-md lg:shadow-sm lg:duration-300 lg:hover:bg-[#0F172A] lg:hover:border-[#0F172A] lg:hover:text-gray-200"><a href="https://goo.gl/maps/yYr5WgoGTTUwQQPN7">Google Maps</a></button>
            </div>
          </div>
        </div>
        <HeadNav/>
        <Gallery/>
      </div>
  )
}