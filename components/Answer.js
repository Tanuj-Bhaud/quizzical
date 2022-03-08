import { nanoid } from 'nanoid'
import React, { useState } from 'react'

export default function Answer({
  selectedButtons,
  questionPosition,
  answer,

  setSelectedButtons,
}) {
  const handleClick = () => {
    //GEt the answerr of  this button, and set it to the source fo truth
    const selectedButtonsTemp = [...selectedButtons]
    selectedButtonsTemp[questionPosition] = answer
    setSelectedButtons(selectedButtonsTemp)
  }

  // props.setSelectedButtons.map((item, index )=> {
  //   {}
  // })

  return (
    <button
      onClick={handleClick}
      className={`    ${
        selectedButtons[questionPosition] === answer ? 'bg-[#D6DBF5]' : ''
      } m-2 rounded-xl border border-[#4D5B9E] py-2 px-4 font-semibold text-[#293264]`}
    >
      {answer}
    </button>
  )
}
