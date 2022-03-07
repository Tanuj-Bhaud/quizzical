import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Answer from './AnswerButton'
import CheckButton from './CheckButton'

export default function Question() {
  const [questions, setQuestions] = useState([])
  const [selectedButtons, setSelectedButtons] = useState([])

  useEffect(() => {
    console.log({ selectedButtons })
  }, [selectedButtons])

  useEffect(() => {
    axios
      .get('https://api.trivia.willfry.co.uk/questions')
      .then((res) => {
        const qData = res.data
        setSelectedButtons([])
        qData.map((q) => {
          // This is just setting the default state, doing it here instead of at the top cause the number of questions could change
          setSelectedButtons((prev) => [...prev, ''])

          // Add incorrectAnswers and correctAnswer to the question object as answers and shuffle them so answer isn't always at the last
          q.answers = [...q.incorrectAnswers, q.correctAnswer].sort(
            () => Math.random() - 0.5
          )
        })

        setQuestions(qData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <p>{JSON.stringify(selectedButtons)}</p>

      {questions.map((question, qindex) => {
        return (
          <div div className="" key={qindex}>
            <h3 className=" text-center text-2xl font-bold text-[#293264]">
              {question.question + ` ${question.correctAnswer}`}
            </h3>

            <div className="mt-2 mb-4 flex flex-row justify-center">
              {question.answers.map((answer, aindex) => {
                return (
                  <Answer
                    answer={answer}
                    key={aindex}
                    id={qindex}
                    selectedButtons={selectedButtons}
                    setSelectedButtons={setSelectedButtons}
                  />
                )
              })}

              {/* <button className="m-2 rounded-xl border border-[#4D5B9E] py-2 px-4 font-semibold text-[#293264]">
                {question.correctAnswer}
              </button> */}
            </div>
          </div>
        )
      })}

      <CheckButton questions={questions} selectedButtons={selectedButtons} />
    </div>
  )
}
