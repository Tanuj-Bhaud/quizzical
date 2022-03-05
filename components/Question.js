import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'
import Ques from './Ques'
import Ans from './Ans'
import CheckButton from './CheckButton'

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

  function setid() {
    return nanoid()
  }

  return (
    <div>
      {questions.map((question) => {
        return (
          <div className="flex flex-col items-center justify-center">
            <Ques question={question.question} />

            <div className="mt-2 mb-4 flex flex-row justify-center">
              {question.incorrectAnswers.map((answer) => {
                return <Ans answer={answer} id={setid()} />
              })}
            </div>
          </div>
        )
      })}
      <CheckButton />
    </div>
  )
}
