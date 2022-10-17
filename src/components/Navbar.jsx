import React from 'react'

const Navbar = () => {
  return (
    <div className='text-gray-100 flex items-center justify-between absolute w-full z-[100]'>
        <img className='h-16 cursor-pointer ml-5' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="NETFLIX" />
        <div>
        <button className='mr-8'>Sign In</button>
        <button className='mr-10 bg-red-600 p-2'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar