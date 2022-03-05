import React, { useState } from 'react'
export default function CheckButton() {
  const [score, setScore] = useState(``)
  const handleClick = () => {
    return setScore(` You Scored ${0}/5 Correct Answers`)
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
