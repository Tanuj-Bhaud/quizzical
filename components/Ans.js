import React from 'react'

export default function Ans(props) {
  return (
    <button className="m-2 rounded-xl border border-[#4D5B9E] py-2 px-4 font-semibold text-[#293264]">
      {props.answer}
    </button>
  )
}
