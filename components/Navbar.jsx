import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center bg-black w-full'>
        <Link href={'/'}>
          <Image src='/logo.png' width={200} height={100} alt='logo' />
        </Link>
    </div>
  )
}

export default Navbar