import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Ques from './Ques'
import Ans from './Ans'
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
        console.log(res.data)
        const qData = res.data
        qData.map((q) => {
          // This is just setting the default state, doing it here instead of at the top cause the number of questions could change
          setSelectedButtons((prev) => [...prev, { selected: '', key: '' }])

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
      {questions.map((question, index) => {
        return (
          <div className="" key={index}>
            <Ques question={question.question + ` ${question.correctAnswer}`} />

            <div className="mt-2 mb-4 flex flex-row justify-center">
              {question.answers.map((answer, index) => {
                return (
                  <Ans
                    answer={answer}
                    correct={question.correctAnswer}
                    key={index}
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

      <CheckButton />
    </div>
  )
}
