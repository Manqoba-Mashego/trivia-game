"use client";
import React from 'react'
import { useState, useEffect } from 'react';

const Options = ({correctAnswer, incorrectAnswers, setCompleted, completed}) => {
    const [answers, setAnswers] = useState([]);
    const shuffleArray = (array) => {
    const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };
    
  useEffect(() => {
        const allAnswers = [{
            value: correctAnswer,
            isCorrect: true
        }, ...incorrectAnswers.map(ans => ({value: ans, isCorrect: false}))];
        setAnswers(shuffleArray(allAnswers));
    }, [correctAnswer, incorrectAnswers]);
  return (
    <ol type='A' className='ml-[50px] flex flex-col gap-5' onClick={() => setCompleted(!completed)}>
        {answers.map((answer, idx) => (
            <button key={idx}> {answer.value}</button>
        ))}
    </ol>
  )
}

export default Options