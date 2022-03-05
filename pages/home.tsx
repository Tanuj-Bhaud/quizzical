import { captureRejectionSymbol } from 'events'
import React, { useState, useEffect } from 'react'

import Question from '../components/Question'

export default function Home() {
 

  return (
    <div>
      <img className="float-right h-[297px] w-[235px]" src="blob1.svg" alt="" />
      <div className="flex w-full flex-col items-center justify-center ">
        {/* iterate through questions and load them in view */}
      
      <Question />
     
      </div>

      <img
        src="blob2.svg"
        className="bottom-0 float-left h-[297px] w-[235px] "
        alt=""
      />
    </div>
  )

  
}
