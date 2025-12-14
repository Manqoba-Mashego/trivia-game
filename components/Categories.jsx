
import React from 'react'
import Link from "next/link";
import TriviaCard from "@/components/TriviaCard";



const Categories = ({categories}) => {
  return (
        <div className='w-[80%] mx-auto text-center'>
        <h1 className=' mt-15 text-4xl font-semibold'>Choose a category</h1>
        {categories.length > 0 && 
        <div className='grid grid-cols-2 gap-6 sm:gap-4 md:grid-cols-3 md:gap-8 lg:gap-4 xl:grid-cols-4 xl:gap-2 mt-8'>
          {categories.map((cat)=> (
            <Link href={`/category/${cat.id}`} key={cat.id}>
              <TriviaCard category={cat.name} categoryId={cat.id}/>
            </Link>
          ))}
        </div>
        }
    </div>
  )
}

export default Categories
