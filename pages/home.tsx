import { captureRejectionSymbol } from 'events';
import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Home() {
  const [questions, setQuestions] = useState([]);

 


useEffect(() => {
  axios.get('https://api.trivia.willfry.co.uk/questions')
  .then(res => {
    console.log(res.data);
    setQuestions(res.data);
  })
  .catch(err => {
    console.log(err);
  })
}, [])




  return ( 
  <div>
    <img className='h-[297px] w-[235px] float-right' src="blob1.svg" alt=""/>
    <div className='flex flex-col w-full items-center justify-center '>
     {/* iterate through questions and load them in view */}
      {questions.map(question => {
        return (
        <div className="flex items-center justify-center flex-col">
        <h3 className=" text-2xl font-bold text-[#293264] text-center">{question.question}</h3>

        <div className="flex flex-row mt-2 mb-4 justify-center">

        {question.incorrectAnswers.map(answer => {
          return (
            <button className='m-2 py-2 px-4 border border-[#4D5B9E] text-[#293264] font-semibold rounded-xl'>{answer}</button>
           
          )
        }  
        )}
       
         
         </div>
         </div>
         )
      })}

{/* <button className='m-2 py-2 px-4 bg-[#D6DBF5] text-[#293264] font-semibold rounded-xl'>{}</button> */}


{/* <button className='m-2 py-2 px-4 bg-[#D6DBF5] text-[#293264] font-semibold rounded-xl'>asd</button>
        <button className='m-2 py-2 px-4 border border-[#4D5B9E] text-[#293264] font-semibold rounded-xl'>Sowoa</button>
        <button className='m-2 py-2 px-4 border border-[#4D5B9E]  font-semibold rounded-xl text-[#293264]'>Sufo man</button>
        <button className='m-2 py-2 px-4 border border-[#4D5B9E] text-[#293264] font-semibold rounded-xl'> Transformers</button> */}
     
      </div>
     
    <img src="blob2.svg" className='float-left bottom-0 h-[297px] w-[235px] ' alt="" />
    </div> )
}
