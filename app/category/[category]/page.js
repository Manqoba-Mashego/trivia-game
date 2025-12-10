"use client";
import DiffultyCard from '@/components/DiffucultyCard'
import { useParams } from 'next/navigation';
import React from 'react'

const Page = () => {
    const params = useParams();
    console.log(params.category);
  return (
    <div className='w-[80%] mx-auto text-center'>
        <h1 className=' mt-15 text-4xl font-semibold'>Choose a category</h1>
        <div className='flex justify-center gap-5 mt-8 '>
            <DiffultyCard diffulty={"Easy"} category={params.category}/>
            <DiffultyCard diffulty={"Medium"} category={params.category}/>
            <DiffultyCard diffulty={"Hard"} category={params.category}/>
        </div>
    </div>
  )
}

export default Page