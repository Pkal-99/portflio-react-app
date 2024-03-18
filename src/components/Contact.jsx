import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#436aa5] flex justify-center p-4'>
      <form action="https://getform.io/f/jawlxlkb" method='POSt' className='flex flex-col max-w-[600px] w-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact</p>
            <p className='text-gray-300 py-8'>Submit the Form Below or conatct me on Email: Kaleabay99@gmail.com </p>
        </div>
        <input className='my-4 p-2 bg-[#ece2e2]' type='text' placeholder='Full Name' name='name'></input>
        <input className='my-4 p-2 bg-[#ece2e2]' type='email' placeholder='Email address' name='email'></input>
        <textarea className='bg-[#ece2e2] p-2' rows={10} name='message' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Contact
