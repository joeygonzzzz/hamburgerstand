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
        <p className="text-white mb-2 flex break-words justify-center items-center">Rosa G. Rodriguez began her journey in the food industry in the 1980's, waitressing at local restaurants in Dilley, Texas. As a mother of ten children, Mrs. Rodriguez quickly realized she possessed what the food industry calls, a servant's heart. Determined to capitalize on her abilities to provide excellent customer service and a quality meal, Mrs. Rodriquez, with the aide and support of her family, established her entrepreneurship as a small business owner in 1991. Rosa's Hamburger Stand, named after and in memory of Rosa G. Rodriguez, has been a family owned and operated establishment that has created home style hamburgers for over 30 years. Rosa's Hamburger Stand, better known as Rosa's, strives to maintain the vision, goals, and standards that have made this establishment a "must have" when customers find themselves traveling on I-35. The simplistic menu has created a loyal customer base and has allowed Rosa's to compete against bigger chain restaurants. Their top sellers, the hamburger, cheeseburger and bacon cheeseburger are made to order from the finest 80-20 ground beef. Customers never fail to compliment their burgers with Rosa's signature french fries drizzled with a secret fry seasoning. Rosa's Hamburger Stand has been a staple across south Texas cuisine and quickly became the comfort food of Frio County. They say if you head over to Rosa's during the good ol' witching hour, you can hear and see you flipping burgers in her favorite apron, singing along to a Ramon Ayala tune. </p>
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