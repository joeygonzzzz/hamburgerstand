import React from 'react';
import Rosa from '../images/rosa.jpeg';
import Family from '../images/rosafamily.jpeg';

const About = () => {
  return (
  <>
    <div className="h-screen flex justify-center items-center bg-red-500">
        <h1 className="text-9xl uppercase font-black">How The Stand Got Started...</h1>
    </div>


    <div className="flex flex-col justify-center items-center bg-black h-screen font-mono py-40">
      <img src={Rosa} alt="rosa" className="h-full rounded mb-20 shadow object-scale-down"/>
      <div className="flex justify-center items-center">
        <h2 className="text-2xl mb-2 text-white">Rosa Hard At Work</h2>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center bg-black h-screen font-mono py-40">
      <img src={Family} alt="family" className="h-full rounded mb-20 shadow object-scale-down" />
      <h2 className="text-2xl mb-2 text-white">Rosa and Daughters</h2>
    </div>
  </>
  )
}

export default About