import React from 'react'
import ImageOne from '../images/burger1.jpeg'

const Content = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
            <img  src={ImageOne} alt="burger" className="h-full rounded mb-20 shadow" />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">Double Meat Bacon Burger</h2>
                <p className="mb-2">One of our signature items!</p>
                <span>$10 combo w/fries and medium drink</span>
            </div>
        </div>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
            <img  src={ImageOne} alt="burger" className="h-full rounded mb-20 shadow" />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">Double Meat Bacon Burger</h2>
                <p className="mb-2">One of our signature items!</p>
                <span>$10 combo w/fries and medium drink</span>
            </div>
        </div>
    </>
  )
}

export default Content