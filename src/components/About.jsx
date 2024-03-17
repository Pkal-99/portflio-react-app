import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#436aa5] text-gray-300 '>
      <div className=' flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About Me</p>
            </div>
            <div>
              <p></p>
            </div>
        </div>
        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right text-4xl font-bold '> <p>Hi, I am Kaleab, nice to meet You. please take a look around and find me on contact to work collaborately </p>
          </div> 
          <div>
            <p>I am proud to have a unique background that combines system engineering, computer networking, and software development. In my various roles, I have found myself regularly called upon to tackle technical challenges, resolve coding issues and engage with different teams working on different projects. My love of coding drives me internally and I relish every opportunity to tackle the deepest technical challenges. From developing a user-friendly frontend to building reliable web servers, I've worked on many projects. Also, have experience with cross-platform mobile application development.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
