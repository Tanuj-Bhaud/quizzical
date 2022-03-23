import React from 'react'

export default function QuestionWithOptions(props) {
  function getStyle(isSelected, isCorrect) {
    let style = props.isAnswerPage
      ? isCorrect
        ? { backgroundColor: '#94D7A2' }
        : isSelected && !isCorrect
        ? { backgroundColor: '#F8BCBC' }
        : {}
      : isSelected
      ? { backgroundColor: '#D6DBF5' }
      : {}
    return style
  }
  const optionsElements = props.options.map((option) => {
    return (
      <div
        className="m-2 rounded-xl border border-[#4D5B9E] py-2 px-4 font-semibold text-[#293264]"
        style={getStyle(option.isSelected, option.isCorrect)}
        key={option.optid}
        onClick={() => props.onOptionClick(props.qid, option.optid)}
      >
        {option.optionTxt}
      </div>
    )
  })
  return (
    <div className="">
      <h1 className="mt-2 text-center text-2xl font-bold text-[#293264]">
        {props.questionText}
      </h1>

      <div className="m-2 mt-2 mb-4 flex flex-row justify-center rounded-xl py-2 px-4 font-semibold text-[#293264]">
        {optionsElements}
      </div>
      <hr />
    </div>
  )
}
