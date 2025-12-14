"use client";
import { useSelectedCategory } from '@/stores/userCategory'
import React from 'react'

const TriviaCard = ({category, categoryId}) => {
  const setSelectedCategory = useSelectedCategory((state) => state.setSelectedCategory);
  return (
      <div
          className={`border h-[130px] w-[180px] sm:w-[250px] md:w-[210px] lg:w-[250px] rounded-3xl hover:scale-103 duration-300 flex justify-center items-center text-xl cursor-pointer  
bg-emerald-600 sm:bg-amber-300
    `}
          onClick={() => setSelectedCategory(categoryId)}
      >
          <p>{category}</p>
      </div>
  );
}





export default TriviaCard