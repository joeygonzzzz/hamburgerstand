import React from 'react'
import Menupic from '../images/menu.jpeg';

const Menu = () => {
  return (
    <>
    <div className="h-screen flex justify-center items-center bg-blue-300">
        <h1 className="text-9xl uppercase font-black">Menu</h1>
    </div>
    <div className="h-screen flex justify-center bg-black">
      <img src={Menupic} alt="menu" className="h-full rounded mb-20 shadow" />
    </div>
    </>
  )
}

export default Menu