import { nanoid } from 'nanoid'
import React, { useState } from 'react'

export default function Answer({
  setSelectedButtons,
  selectedButtons,
  answer,
  id,
}) {
  const handleClick = () => {
    //GEt the answerr of  this button, and set it to the source fo truth

    //Just a temp array to hold the selected buttons
    const beep = [...selectedButtons]
    //set that specific element(the question's position) in the array to the answer you just selected
    beep[id] = answer
    //set the selected buttons to the temp array
    setSelectedButtons(beep)
  }

  // props.setSelectedButtons.map((item, index )=> {
  //   {}
  // })

  return (
    <button
      onClick={handleClick}
      className={` 
      ${selectedButtons[id] === answer ? 'bg-[#4D5B9E]' : 'bg-red-300'}
       m-2 rounded-xl border border-[#4D5B9E] py-2 px-4 font-semibold text-[#293264]`}
    >
      {answer}
    </button>
  )
}
