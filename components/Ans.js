import { nanoid } from 'nanoid'
import React, { useState } from 'react'

export default function Ans(props) {
  const handleClick = () => {
    //GEt the answerr of  this button, and set it to the source fo truth

    props.setSelectedButtons([
      { selected: props.answer },
      { selected: props.answer },
      { selected: props.answer },
      { selected: props.answer },
      { selected: props.answer },
    ])
  }

  // props.setSelectedButtons.map((item, index )=> {
  //   {}
  // })

  return (
    <button
      onClick={handleClick}
      className={` ${
        props.selectedButtons ? 'bg-[#D6DBF5]' : ''
      } m-2 rounded-xl border border-[#4D5B9E] py-2 px-4 font-semibold text-[#293264]`}
    >
      {props.answer}
    </button>
  )
}
