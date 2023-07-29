import React from 'react'

const contact = () => {
  return (
    <div className='container mx-auto px-10 pb-8 h-full'>
      <div className='text-gray-600 text-center font-semibold text-2xl md:text-4xl mb-4'>Our Contact</div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-8'>
        <div className='border rounded-lg border-gray-800 px-4 py-3 text-gray-500 hover:scale-[1.02] duration-300 hover:cursor-pointer text-center md:py-6'>WhatsApp</div>
        <div className='border rounded-lg border-gray-800 px-2 py-3 text-gray-500 hover:scale-[1.02] duration-300 hover:cursor-pointer text-center md:py-6'>GitHub</div>
        <div className='border rounded-lg border-gray-800 px-2 py-3 text-gray-500 hover:scale-[1.02] duration-300 hover:cursor-pointer text-center md:py-6'>LinkedIn</div>
        <div className='border rounded-lg border-gray-800 px-2 py-3 text-gray-500 hover:scale-[1.02] duration-300 hover:cursor-pointer text-center md:py-6'>Instagram</div>
      </div>
    </div>
  )
}

export default contact