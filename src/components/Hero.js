import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
            Rosa's Hamburger Stand
        </h1>
        <Link to="/">Order Now
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor" 
            strokeWidth={2}
            >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
            </svg>
        </Link>
    </div>
  )
}

export default Hero;