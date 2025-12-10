import Link from 'next/link'
import React from 'react'

const QuestionsCard = ({category, difficulty, numOfQuestions}) => {
    
  return (
    <Link href={`/category/${category}/${difficulty}/${numOfQuestions}`}>
        <div className='border rounded-3xl h-[120px] w-[200px] hover:scale-103 duration-300 flex flex-col justify-center'>
            <p className='text-3xl'>{numOfQuestions}</p>
            <p>Questions</p>
        </div>
    </Link>
  )
}

export default QuestionsCard