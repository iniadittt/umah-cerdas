import React from "react"
import { Link } from "react-router-dom"




export default function Navigasi() {
  return (
    <div className="lg:w-full lg:fixed lg:z-20 lg:bg-[#0F172A] lg:flex lg:justify-between lg:gap-16 lg:px-28 lg:font-poppins lg:text-base lg:text-gray-200 lg:shadow-xl">
        <div className="lg:w-3/12 lg:my-auto lg:py-2">
            <img src={process.env.PUBLIC_URL + "/images/logo-uc.png"} alt="Logo" className="lg:h-[3.6rem]"/>
        </div>
        <ul className="lg:w-8/12 lg:flex lg:justify-end lg:gap-10 lg:py-4">
            <li className="lg:my-auto">
                <Link to="/">Homepage</Link>
            </li>
            <li className="lg:my-auto">
                <Link to="/products">Product</Link>
            </li>
            <li className="lg:my-auto">
                <Link to="/kuisioner/1">Kuisioner</Link>
            </li>
            <li className="lg:my-auto">
                <Link to="/support">Support</Link>
            </li>
        </ul>
        <div className="lg:w-1/12 lg:flex lg:justify-end lg:py-4">
            <button className="lg:py-2 lg:px-5 lg:border-[1px] lg:rounded-md lg:font-semibold lg:duration-300 lg:hover:border-[1px] lg:hover:border-[#0F172A] lg:hover:bg-gray-200 lg:hover:text-[#0F172A] lg:hover:duration-300">
                <Link to="/login">Login</Link>
            </button>
        </div>
    </div>
  )
}
