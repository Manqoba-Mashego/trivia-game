import Link from 'next/link'
import React from 'react'

const DiffultyCard = ({diffulty, category}) => {
  return (
    <Link href={`/category/${category}/${diffulty.toLowerCase()}`}>
      <div className='border h-[150px] w-[250px] rounded-3xl hover:scale-103 duration-300 flex justify-center items-center text-2xl cursor-pointer'>
        {diffulty}
      </div>
    </Link>
  )
}

export default DiffultyCard