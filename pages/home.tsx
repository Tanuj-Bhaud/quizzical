import { captureRejectionSymbol } from 'events'
import React, { useState, useEffect } from 'react'

import App from '../components/App'

export default function Home() {
  return (
    <div>
      <img className="float-right h-[297px] w-[235px]" src="blob1.svg" alt="" />
      <div className="flex w-full flex-col items-center justify-center ">
        <App />
      </div>

      <img
        src="blob2.svg"
        className="bottom-0 float-left h-[297px] w-[235px] "
        alt=""
      />
    </div>
  )
}
