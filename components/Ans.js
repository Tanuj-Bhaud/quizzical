import { nanoid } from 'nanoid'
import React, { useState } from 'react'

export default function Ans(props) {
  const [isSelected, setIsSelected] = useState(false)
  const styles = {
    backgroundColor: isSelected ? '#D6DBF5' : 'white',
  }
  const handleClick = () => {
    setIsSelected(!isSelected)
    console.log(isSelected)
  }

  const aid = props.id

  return (
    <div>
      <button
        onClick={handleClick}
        id={aid}
        style={styles}
        className="m-2 rounded-xl border border-[#4D5B9E] py-2 px-4 font-semibold text-[#293264]"
      >
        {props.answer}
      </button>
    </div>
  )
}
