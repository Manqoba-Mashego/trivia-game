import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center bg-black w-full'>
        <Image src='/logo.png' width={500} height={150} alt='logo' />
    </div>
  )
}

export default Navbar