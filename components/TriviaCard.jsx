import { useSelectedCategory } from '@/stores/userCategory'
import Image from 'next/image'
import React from 'react'

const TriviaCard = ({category, categoryId}) => {
  const setSelectedCategory = useSelectedCategory((state) => state.setSelectedCategory);
  return (
    <div className='border h-[150px] w-[250px] rounded-3xl hover:scale-103 duration-300 flex justify-center items-center text-xl cursor-pointer ' 
      onClick={() => setSelectedCategory(categoryId)}
    >
        {/* <Image src={"/icons/9.png"} className='border rounded-full' height={48} width={48} alt='icon'/> */}
        <p>{category}</p>
    </div>
  )
}





export default TriviaCard