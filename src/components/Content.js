import React from 'react';
import ImageOne from '../images/burger1.jpeg';
import ImageTwo from '../images/taco1.jpeg';
import ImageThree from '../images/taco2.jpeg';
import Review1 from '../images/review1.jpeg';
import Review2 from '../images/review2.jpeg';
import Review3 from '../images/review3.jpeg';

const Content = () => {
  return (
    <>
        <div className="menu-card">
            <img  src={ImageOne} alt="burger" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Double Meat Bacon Burger</h2>
                <p className="mb-2">One of our signature items!</p>
                <span>$10 combo w/fries and medium drink</span>
            </div>
        </div>
        <div className="menu-card">
            <img  src={ImageTwo} alt="fajita" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Fajita Taco with Guacamole!</h2>
                <p className="mb-2">Voted Best Fajita Taco In Frio County</p>
                <span>$3.50 w/Guacamole, $3.00 plain</span>
            </div>
        </div>
        <div className="menu-card">
            <img  src={ImageThree} alt="taco" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Potato, Egg and Cheese Taco!</h2>
                <p className="mb-2">One of our many breakfast tacos</p>
                <span>$2.50 w/Cheese, $2.00 Plain</span>
            </div>
        </div>
    </>
  )
}

export default Content