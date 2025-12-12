import React from 'react'
import { Trophy, RefreshCcw } from 'lucide-react'

const FeedbackCard = ({numberOfQuestions, correctAnswers}) => {
  return (
    <div className='bg-[#fff8f8] mx-auto h-[350px] rounded-2xl w-[300px] flex flex-col items-center'>
      <div className='bg-yellow-100 rounded-full w-20 h-20 flex justify-center items-center mt-2'>
        <Trophy color='gold' size={50} />
      </div>
      <p className='mt-3'>Quiz Complete!</p>
      <div className='mt-8 bg-[#DAD4EF] w-[250px] rounded-2xl h-[120px] flex flex-col items-center justify-center'>
          <p className='text-gray-800'>Your Score:</p>
          <p>
            <span className='text-5xl'>{correctAnswers}</span>
            <span className='text-2xl mx-2'>/</span>
            <span className='text-3xl font-light text-gray-600'>{numberOfQuestions}</span>
            </p>
      </div>
      <button className='flex mt-6 bg-[#846B8A] py-3 px-10 rounded-2xl text-white'><RefreshCcw /> <span>Play Again</span></button>
    </div>
  )
}

export default FeedbackCard