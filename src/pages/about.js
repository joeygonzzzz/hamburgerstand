import React from 'react';
import Rosa from '../images/rosa.jpeg';
import Family from '../images/rosafamily.jpeg';

const About = () => {
  return (
  <>
    <div className="h-screen flex justify-center items-center bg-red-500">
        <h1 className="text-9xl uppercase font-black">How The Stand Got Started...</h1>
    </div>
    <div className="h-screen flex justify-center items-center bg-black">
      <img src={Rosa} alt="rosa" className="h-full rounded mb-20 shadow object-scale-down"/>
      <h2 className="mb-2 text-white">Rosa hard at work</h2>
    </div>
    <div className="h-screen flex justify-center items-center bg-black">
      <img src={Family} alt="family" className="h-full rounded mb-20 shadow object-scale-down" />
    </div>
  </>
  )
}

export default About