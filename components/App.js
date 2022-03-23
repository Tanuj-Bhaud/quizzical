import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'
import Answer from './Answer'
import CheckButton from './CheckButton'
import QuestionWithOptions from './QuestionWithOptions'

export default function App() {
  const [questions, setQuestions] = useState([])
  const [selectedButtons, setSelectedButtons] = useState([])

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
      return { correctAnswerCount: 0 }
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
        <button onClick={fetchQuestions}>Start Quiz</button>
      ) : (
        <div id="questions-page">
          {questionElements}
          <div className="buttonAndText" id="buttonAndText">
            {pageFlags.isAnswerPage && (
              <h1 className="question">
                You Scored {pageFlags.correctAnswerCount}/5 correct Answers{' '}
              </h1>
            )}
            <button
              className="checkAnsButton"
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
//   useEffect(() => {
//     axios
//       .get(
//         'https://thingproxy.freeboard.io/fetch/https://api.trivia.willfry.co.uk/questions'
//       )
//       .then((res) => {
//         console.log(res.data)
//         const qData = res.data
//         console.log(qData)
//         setSelectedButtons([])
//         qData.map((q) => {
//           // This is just setting the default state, doing it here instead of at the top cause the number of questions could change
//           setSelectedButtons((prev) => [...prev, ''])

//           // Add incorrectAnswers and correctAnswer to the question object as answers and shuffle them so answer isn't always at the last
//           q.answers = [...q.incorrectAnswers, q.correctAnswer].sort(
//             () => Math.random() - 0.5
//           )
//         })

//         setQuestions(qData)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [])

//   return (
//     <div className="flex flex-col items-center justify-center">
//       {questions.map((question, qindex) => {
//         return (
//           <div className="" key={qindex}>
//             <h3 className=" text-center text-2xl font-bold text-[#293264]">
//               {question.question}
//             </h3>

//             <div className="mt-2 mb-4 flex flex-row justify-center">
//               {question.answers.map((answer, aindex) => {
//                 return (
//                   <Answer
//                     answer={answer}
//                     key={aindex}
//                     questionPosition={qindex}
//                     selectedButtons={selectedButtons}
//                     setSelectedButtons={setSelectedButtons}
//                   />
//                 )
//               })}

//               {/* <button className="m-2 rounded-xl border border-[#4D5B9E] py-2 px-4 font-semibold text-[#293264]">
//                 {question.correctAnswer}
//               </button> */}
//             </div>
//           </div>
//         )
//       })}

//       <CheckButton questions={questions} selectedButtons={selectedButtons} />
//     </div>
//   )
// }
