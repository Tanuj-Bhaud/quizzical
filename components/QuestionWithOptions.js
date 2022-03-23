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
        className="option"
        style={getStyle(option.isSelected, option.isCorrect)}
        key={option.optid}
        onClick={() => props.onOptionClick(props.qid, option.optid)}
      >
        {option.optionTxt}
      </div>
    )
  })
  return (
    <div className="quesion-block">
      <h1 className="question">{props.questionText}</h1>
      <div className="answers">{optionsElements}</div>
      <hr />
    </div>
  )
}
