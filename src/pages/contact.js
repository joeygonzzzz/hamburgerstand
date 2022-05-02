import React from 'react'
import Stand from '../images/stand.jpeg';

const Contact = () => {
  return (
  <>
    <div className="h-screen flex justify-center items-center bg-red-900">
        <h1 className="text-9xl uppercase font-black">Come Visit Us!</h1>
    </div>

  <div className="menu-card">
  <img  src={Stand} alt="stand" className="h-full rounded mb-20 shadow" />
  <div className="center-content">
      <h2 className="text-2xl mb-2">Located in downtown Dilley, TX!</h2>
      <p className="mb-2">Please note that we only take cash</p>
      <span>Thank you for your business!</span>
  </div>
  </div>
</>
  )
}

export default Contact