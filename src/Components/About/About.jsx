import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='py-16 bg-cyan-900 bg-opacity-80'>
  <div className='container m-auto px-2 text-gray-600 md:px-12 xl:px-6'>
    <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-2'>

      {/* Left Section Description */}
      <div className='md:w-7/12 lg:w-7/12'>
        <h2 className='mt-6 text-gray-400 font-bold md:text-4xl'>
          Bardia Nazeri Multi-Media Student Programming Journey
        </h2>
        <p className="rounded-3xl p-6 -m-10 mt-6 ml-0 font-semibold text-black text-2xl bg-black bg-opacity-5">
          Hello My Name is Bardia Nazeri I have always been a video Game Nerd and interested in Computer and Technology. at a certain Point of life while always trying to fix my own tech problems... I realized my passion is in creating video games and programming. creating functionalities and visualizations using my brain through code and knowing how technology work together to create such a Powerful presentation in which we call Apps and Secure technologies.
        </p>
        <p className="mt-12 text-red-800 text-lg font-semibold ">
          Join me on my Journey to get better at programming and become real life batman.
        </p>
      </div>

      {/* Right Section Image */}
      <div className='md:w-5/12 lg:w-5/12 flex justify-end'>
        <img className='w-80 rounded-full' src="./src/assets/bardia1.jpg" alt="image" />
      </div>
      
    </div>
  </div>
</div>
  )
}

export default About


//<Link to='/' className='flex items-center'>back</Link>