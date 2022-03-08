import React, { useState } from 'react'
export default function CheckButton({ questions, selectedButtons }) {
  const [score, setScore] = useState(``)
  const handleClick = () => {
    const correctAnswers = questions.map((question) => {
      return question.correctAnswer
    })
    let score = 0

    //Verify how many elements between the two arrays are the same
    selectedButtons.map((item, index) => {
      if (item === correctAnswers[index]) score += 1
    })

    return setScore(` You Scored ${score}/5 Correct Answers`)
  }
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="text-center text-xl font-bold text-[#293264]">
        {score}
      </div>
      <button
        onClick={handleClick}
        className="ml-4 rounded-md bg-[#4D5B9E] p-3 text-white"
      >
        Check your Score
      </button>
    </div>
  )
}
