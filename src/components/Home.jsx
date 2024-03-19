import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import imgDev from '../assetes/DevImg.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#436aa5] '>
      {/* container*/}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-200 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
            </button>
          </div>
        </div>

        <div className='border-white'>
          <img src={imgDev} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
      
      
      
   
   {/**end of container  */}
    </div>
  )
}

export default Home
