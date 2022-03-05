import { captureRejectionSymbol } from 'events';
import React, {useState, useEffect} from 'react'

export default function Home() {
  const [questions, setQuestions] = useState([]);

 


useEffect(() => {
fetch("https://opentdb.com/api.php?amount=10")
.then(res => res.json())
.then(data => setQuestions(data))

}, []);

console.log(questions);


  return <div>
    <img className='h-[297px] w-[235px] float-right' src="blob1.svg" alt=""/>
    <div className='flex flex-col w-full items-center justify-center '>
     

   
      <h3 className="text-2xl font-bold text-[#293264]">uasdkjasldk</h3>
      <div className="flex flex-row mt-2">
        <button className='m-2 py-2 px-4 bg-[#D6DBF5] text-[#293264] font-semibold rounded-xl'>TOaot</button>
        <button className='m-2 py-2 px-4 border border-[#4D5B9E] text-[#293264] font-semibold rounded-xl'>Sowoa</button>
        <button className='m-2 py-2 px-4 border border-[#4D5B9E]  font-semibold rounded-xl text-[#293264]'>Sufo man</button>
        <button className='m-2 py-2 px-4 border border-[#4D5B9E] text-[#293264] font-semibold rounded-xl'> Transformers</button>
       
       </div>
    
      </div>
      <div className=' flex flex-col w-full items-center justify-center '>
     
      <h3 className="text-2xl font-bold text-[#293264]">How would one say goodbye in spanish</h3>
      <div className="flex flex-row mt-2">
        <button className='m-2 py-2 px-4 bg-[#D6DBF5] text-[#293264] font-semibold rounded-xl'>TOaot</button>
        <button className='m-2 py-2 px-4 border border-[#4D5B9E] text-[#293264] font-semibold rounded-xl'>Sowoa</button>
        <button className='m-2 py-2 px-4 border border-[#4D5B9E]  font-semibold rounded-xl text-[#293264]'>Sufo man</button>
        <button className='m-2 py-2 px-4 border border-[#4D5B9E] text-[#293264] font-semibold rounded-xl'> Transformers</button>
       </div>
    
      </div>
    <img src="blob2.svg" className='float-left bottom-0 h-[297px] w-[235px] ' alt="" />
    </div>
}
