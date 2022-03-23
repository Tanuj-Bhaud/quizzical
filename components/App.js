import React, { useState } from 'react'

import { nanoid } from 'nanoid'
import QuestionWithOptions from './QuestionWithOptions'

export default function App() {
  const [questionData, setQuestionData] = React.useState([])
  const [pageFlags, setPageFlags] = React.useState({
    isStartPage: true,
    isAnswerPage: false,
    correctAnswerCount: 0,
  })

  function convertData(data) {
    const questionArr = []
    for (let i = 0; i < data.results.length; i++) {
      //options
      const answers = []
      answers.push({
        optid: nanoid(),
        optionTxt: data.results[i].correct_answer,
        isCorrect: true,
        isSelected: false,
      })
      const incorrectAnswers = data.results[i].incorrect_answers.map((ica) => {
        return {
          optid: nanoid(),
          optionTxt: ica,
          isCorrect: false,
          isSelected: false,
        }
      })
      questionArr.push({
        qid: nanoid(),
        questionText: data.results[i].question,
        options: shuffleArray(answers.concat(incorrectAnswers)),
      })
    }
    // console.log(questionArr);
    setQuestionData(questionArr)
  }

  function fetchQuestions() {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((response) => response.json())
      .then((data) => {
        convertData(data)
      })

    //change the page
    setPageFlags((prevFlags) => {
      return { isStartPage: false, isAnswerPage: false, correctAnswerCount: 0 }
    })
  }
  function onOptionClick(qid, optid) {
    //
    setQuestionData((preQuestionData) => {
      const postData = preQuestionData.map((question) => {
        const newQuestion =
          question.qid === qid
            ? {
                ...question,
                options: question.options.map((option) => {
                  const newOption =
                    option.optid === optid
                      ? {
                          ...option,
                          isSelected: !option.isSelected,
                        }
                      : { ...option, isSelected: false }
                  return newOption
                }),
              }
            : question
        return newQuestion
      })
      return postData
    })
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1))

      var temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array
  }
  const questionElements = questionData.map((question) => {
    return (
      <QuestionWithOptions
        key={question.qid}
        questionText={question.questionText}
        options={question.options}
        qid={question.qid}
        onOptionClick={onOptionClick}
        isAnswerPage={pageFlags.isAnswerPage}
      />
    )
  })
  function checkAnswersOrPlayAgain() {
    //if isSelected and isCorrect Same increase the counter
    if (!pageFlags.isAnswerPage) {
      let correctAnswersCount = 0

      questionData.forEach((question) => {
        question.options.forEach((option) => {
          option.isSelected && option.isCorrect && correctAnswersCount++
        })
      })

      setPageFlags((prevFlags) => {
        return {
          ...prevFlags,
          correctAnswerCount: correctAnswersCount,
          isAnswerPage: true,
        }
      })
    } else {
      fetchQuestions()
    }
  }

  return (
    <div>
      {pageFlags.isStartPage ? (
        <button
          className="mt-4 rounded-md bg-[#4D5B9E] p-3 text-white"
          onClick={fetchQuestions}
        >
          Start Quiz
        </button>
      ) : (
        <div id="questions-page">
          {questionElements}
          <div
            className="flex w-screen items-center justify-center"
            id="buttonAndText"
          >
            {pageFlags.isAnswerPage && (
              <h1 className="question">
                You Scored {pageFlags.correctAnswerCount}/5 correct Answers{' '}
              </h1>
            )}
            <button
              className="ml-4 mt-2 rounded-md bg-[#4D5B9E] p-3 text-white"
              onClick={checkAnswersOrPlayAgain}
            >
              {!pageFlags.isAnswerPage ? 'Check Answers' : 'Play Again'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
