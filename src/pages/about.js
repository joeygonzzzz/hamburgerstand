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
      <div className="center-content">
        <h2 className="text-2xl mb-2 text-white">Rosa Hard At Work</h2>
        <p className="text-white mb-2 flex break-words justify-center items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center bg-black h-screen font-mono py-40">
      <img src={Family} alt="family" className="h-full rounded mb-20 shadow object-scale-down" />
      <div className="center-content">
        <h2 className="text-2xl mb-2 text-white">Rosa and Daughters</h2>
        <p className="text-white">Family run business, support local!</p>
      </div>
    </div>
  </>
  )
}

export default About