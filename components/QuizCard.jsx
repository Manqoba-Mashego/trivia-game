"use client";
import React from 'react'
import { useState } from 'react'
import Options from './Options';
import he from "he";

const QuizCard = ({params, questions, errorFetching}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const handleNext = () => {
        setCompleted(!completed);
        setCurrentIndex((prev) => prev + 1);
    }
    if (errorFetching){
        return <p className="text-center mt-8">Something went wrong</p>;
    }
  return (
    <div className='flex flex-col justify-between min-h-[400px] p-6 shadow-lg bg-white'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <div className="w-[700px] flex items-center justify-center border rounded-4xl bg-gray-400 h-[50px]" >
                <p>Question {currentIndex + 1} of {params.numberOfQuestions}</p>
            </div>
            <div className="w-[700px] relative h-[400px] border text-left rounded-4xl bg-gray-400 p-6">
                <p className='mb-5'>{he.decode(questions[currentIndex]?.question)}</p>
                <Options correctAnswer={questions[currentIndex]?.correct_answer} incorrectAnswers={questions[currentIndex]?.incorrect_answers} setCompleted={setCompleted} completed={completed}/>
                {completed && 
                    <button onClick={handleNext} className="px-6 bottom-3 cursor-pointer absolute left-[250px] py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                        Next Question
                    </button>
                }
            </div>

        </div>
    </div>
  )
}



export default QuizCard