"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import he from "he";

const Options = ({correctAnswer, incorrectAnswers, setCompleted, completed, onCorrect}) => {
    const [answers, setAnswers] = useState([]);
    const [selected, setSelected] = useState(null);
    const [locked, setLocked] = useState(false);
    
    const safeDecode = (val) => (typeof val === "string" ? he.decode(val) : "");

    const shuffleArray = (array) => {
    const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };
    
    useEffect(() => {
        const decodedCorrect = safeDecode(correctAnswer);
        const decodedIncorrect = incorrectAnswers.map((ans) => safeDecode(ans));
        setAnswers(shuffleArray([decodedCorrect, ...decodedIncorrect]));
        setSelected(null);
        setLocked(false);

        }, [correctAnswer, incorrectAnswers]);

    const handleClick = (answer) => {
        if (locked) return;
        setSelected(answer);
        setLocked(true);
        setCompleted(!completed);
        if (answer === he.decode(correctAnswer)) {
          onCorrect(); 
        }
    }

    const getClass = (answer) => {
        if (!locked) return "hover:scale-105 transition-all";

        if (answer === he.decode(correctAnswer)) 
            return "bg-green-500 text-white scale-105 transition-all"

        if (answer === selected)
            return "bg-red-500 text-white opacity-80 transition-all"

        return "opacity-50"
    }

    
     if (answers.length < 4) return null;
     
      return (
        <ul className="flex flex-col gap-4 text-lg">
          {answers.map((ans, i) => (
            <li
              key={i}
              onClick={() => handleClick(ans)}
              className={`p-3 border rounded-xl cursor-pointer ${getClass(ans)}`}
            >
              {String.fromCharCode(65 + i)}. {ans}
            </li>
          ))}
        </ul>
      );
    };
    
export default Options

