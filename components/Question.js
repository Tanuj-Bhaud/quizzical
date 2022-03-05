import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'
import Ques from './Ques'
import Ans from './Ans'

export default function Question() {
  const [questions, setQuestions] = useState([])
  // const [list, setList] = useState(allNewQuestions())
  let q
  const style = {
    // backgroundColor: props.isHeld ? '#D6DBF5' : 'white',
  }

  useEffect(() => {
    axios
      .get('https://api.trivia.willfry.co.uk/questions')
      .then((res) => {
        console.log(res.data)
        setQuestions(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      {questions.map((question) => {
        const newQuestion = []
        for (let i = 0; i < 5; i++) {
          newQuestion.push({
            value: questions.question,
            isSelected: true,
            id: nanoid(),
          })
        }
        console.log(newQuestion)

        return (
          <div className="flex flex-col items-center justify-center">
            <Ques question={question.question} />

            <div className="mt-2 mb-4 flex flex-row justify-center">
              {question.incorrectAnswers.map((answer) => {
                return <Ans answer={answer} isHeld={answer.isHeld} />
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
