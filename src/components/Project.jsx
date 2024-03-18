import React from 'react'
import workImg from '../assetes/projects/workImg.jpeg'
import realEstate from '../assetes/projects/realestate.jpg'


const Project = () => {
  return (
    <div  name="projects" className='w-full md:h-screen bg-[#436aa5] text-gray-300'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Projects</p>
            <p className='py-4'>Check Out some of Projects that I have been working so far.</p>
        </div>

        {/*Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        
         {/*Grid Items*/}
          <div style={{ backgroundImage: `url(${workImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'> 
                  React Website
              </span>
              <div className='pt-8 text-center'>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo </button>
                </a>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>           
                
                </a>

              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'> 
                  React Website
              </span>
              <div className='pt-8 text-center'>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo </button>
                </a>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>           
                
                </a>

              
            </div>
          </div>
        </div>
        {/* Grid Item theother 4 items */}
        <div style={{ backgroundImage: `url(${workImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'> 
                  React Website
              </span>
              <div className='pt-8 text-center'>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo </button>
                </a>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>           
                
                </a>

              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'> 
                  React Website
              </span>
              <div className='pt-8 text-center'>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo </button>
                </a>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>           
                
                </a>

              
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${workImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'> 
                  React Website
              </span>
              <div className='pt-8 text-center'>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo </button>
                </a>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>           
                
                </a>

              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wide'> 
                  React Website
              </span>
              <div className='pt-8 text-center'>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo </button>
                </a>
                <a href='/'> 
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>           
                
                </a>

              
            </div>
          </div>
        </div>
        {/* this is 4 items end  */}

        </div>
        {/** end of container the total6 items */}
        
        
                
         
        
        


        {/* end of  Grid Item the other 5 items */}
      </div>
    </div>
  )
}

export default Project
