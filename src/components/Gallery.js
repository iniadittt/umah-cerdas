import React from 'react'
// import Link from 'react-router-dom'
import './css/Gallery.css'

export default function Gallery() {
  return (
    <div className="lg:px-28 lg:font-poppins lg:flex lg:flex-col lg:gap-12">
        <div className="lg:flex">
            <h1 className="lg:py-3 lg:w-[4rem] lg:border-b-[0.2rem] lg:border-[#0F172A] lg:text-[#0F172A] lg:text-3xl lg:font-semibold">Gallery</h1>
        </div>
        <div className="my_gallery grid overflow-hidden dark grid-cols-3 auto-rows-auto gap-3">
          <div className="box row-span-4 col-span-1 overflow-hidden">
            <a href="/" target="_blank" className="gallery__link">
              <figure className="gallery__thumb lg:h-full">
                  <img src={process.env.PUBLIC_URL + "/images/gambar1.jpg"} alt="Umah Cerdas" className="gallery__image lg:w-full lg:h-full"/>
                  {/* 400x600 */}
                  <figcaption className="gallery__caption">Umah Cerdas</figcaption>
              </figure>
            </a>
          </div>
          <div className="box row-span-3 col-span-2 overflow-hidden">
            <a href="/" target="_blank" className="gallery__link">
              <figure className="gallery__thumb overflow-hidden">
                  <img src={process.env.PUBLIC_URL + "/images/gambar2.jpg"} alt="Umah Cerdas" className="gallery__image lg:w-full"/>
                  {/* 800x400 */}
                  <figcaption className="gallery__caption">Umah Cerdas</figcaption>
              </figure>
            </a>
          </div>
          <div className="box row-span-4 col-span-1 overflow-hidden">
            <a href="/" target="_blank" className="gallery__link">
              <figure className="gallery__thumb overflow-hidden">
                  <img src={process.env.PUBLIC_URL + "/images/gambar3.jpg"} alt="Umah Cerdas" className="gallery__image lg:h-full lg:w-full"/>
                  {/* 400x610 */}
                  <figcaption className="gallery__caption">Umah Cerdas</figcaption>
              </figure>
            </a>
          </div>
          <div className="box row-span-4 col-span-1 overflow-hidden">
            <a href="/" target="_blank" className="gallery__link">
              <figure className="gallery__thumb overflow-hidden">
                  <img src={process.env.PUBLIC_URL + "/images/gambar4.jpg"} alt="Umah Cerdas" className="gallery__image lg:h-full lg:w-full"/>
                  {/* 400x610 */}
                  <figcaption className="gallery__caption">Umah Cerdas</figcaption>
              </figure>
            </a>
          </div>
          <div className="box row-span-3 col-span-1 overflow-hidden">
            <a href="/" target="_blank" className="gallery__link">
              <figure className="gallery__thumb overflow-hidden">
                  <img src={process.env.PUBLIC_URL + "/images/gambar5.jpg"} alt="Umah Cerdas" className="gallery__image lg:w-full lg:h-full"/>
                  {/* 400x400 */}
                  <figcaption className="gallery__caption">Umah Cerdas</figcaption>
              </figure>
            </a>
          </div>
          <div className="box row-span-3 col-span-2 overflow-hidden">
            <a href="/" target="_blank" className="gallery__link ">
              <figure className="gallery__thumb overflow-hidden">
                  <img src={process.env.PUBLIC_URL + "/images/gambar6.jpg"} alt="Umah Cerdas" className="gallery__image lg:w-full"/>
                  {/* 800x400 */}
                  <figcaption className="gallery__caption">Umah Cerdas</figcaption>
              </figure>
            </a>
          </div>
          <div className="box row-span-4 col-span-1 overflow-hidden">
            <a href="/" target="_blank" className="gallery__link">
              <figure className="gallery__thumb overflow-hidden">
                  <img src={process.env.PUBLIC_URL + "/images/gambar7.jpg"} alt="Umah Cerdas" className="gallery__image lg:w-full"/>
                  {/* 400x600 */}
                  <figcaption className="gallery__caption">Umah Cerdas</figcaption>
              </figure>
            </a>
          </div>
          <div className="box row-span-4 col-span-1 overflow-hidden">
            <a href="/" target="_blank" className="gallery__link">
              <figure className="gallery__thumb overflow-hidden">
                  <img src={process.env.PUBLIC_URL + "/images/gambar8.jpg"} alt="Umah Cerdas" className="gallery__image lg:w-full"/>
                  <figcaption className="gallery__caption">Umah Cerdas</figcaption>
              </figure>
            </a>
          </div>
          <div className="box row-span-4 col-span-1 overflow-hidden">
            <a href="/" target="_blank" className="gallery__link">
              <figure className="gallery__thumb overflow-hidden">
                  <img src={process.env.PUBLIC_URL + "/images/gambar9.jpg"} alt="Umah Cerdas" className="gallery__image lg:w-full"/>
                  <figcaption className="gallery__caption">Umah Cerdas</figcaption>
              </figure>
            </a>
          </div>
          <div className="box row-span-3 col-span-1 overflow-hidden">
          <a href="/" target="_blank" className="gallery__link">
              <figure className="gallery__thumb overflow-hidden">
                  <img src={process.env.PUBLIC_URL + "/images/gambar10.jpg"} alt="Umah Cerdas" className="gallery__image lg:w-full"/>
                  <figcaption className="gallery__caption">Umah Cerdas</figcaption>
              </figure>
            </a>
          </div>
        </div>  
    </div>
  )
}