"use client";
import React from 'react'
import { useState } from 'react'
import Options from './Options';

const QuizCard = ({params, questions, errorFetching}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const handleNext = () => {
        setCompleted(!completed);
        if (currentIndex < questions.length) {
            setCurrentIndex(currentIndex + 1);
        }
    }
    if (errorFetching){
        return <p className="text-center mt-8">Something went wrong</p>;
    }
  return (
    <div className='w-[80%] mx-auto text-center mt-8'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <div className="w-[700px] flex items-center justify-center border rounded-4xl bg-gray-400 h-[50px]" >
                <p>Question {currentIndex + 1} of {params.numberOfQuestions}</p>
            </div>
            <div className="w-[700px] h-[400px] border text-left rounded-4xl bg-gray-400 p-6">
                <p className='mb-5'>{questions[currentIndex]?.question}</p>
                <Options correctAnswer={questions[currentIndex]?.correct_answer} incorrectAnswers={questions[currentIndex]?.incorrect_answers} setCompleted={setCompleted} completed={completed}/>
            </div>
            {completed && 
                <button onClick={handleNext}>
                    Next Question
                </button>
                }
        </div>
    </div>
  )
}


        
//        


//         {/* Next Button */}
//         <button
//           onClick={() => setCurrentIndex(i => i + 1)}
//           disabled={currentIndex === questions.length - 1}
//           className="px-4 py-2 rounded bg-blue-500 text-white"
//         >
//           Next Question
//         </button>

//       </div>
//     </div>
//   );
// }


export default QuizCard