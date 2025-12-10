"use client";
import QuestionsCard from '@/components/QuestionsCard';
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
    const params = useParams();
    console.log(params);
  return (
    <div className='w-[80%] mx-auto text-center'>
      <h1 className='mt-15 text-4xl font-semibold'>Select the number of questions</h1>
      <div className='flex gap-8 justify-center mt-8'>
        <QuestionsCard category={params.category} difficulty={params.difficulty} numOfQuestions={5}/>
        <QuestionsCard category={params.category} difficulty={params.difficulty} numOfQuestions={10}/>
        <QuestionsCard category={params.category} difficulty={params.difficulty} numOfQuestions={15}/>
        <QuestionsCard category={params.category} difficulty={params.difficulty} numOfQuestions={20}/>
      </div>
    </div>
  )
}

export default Page