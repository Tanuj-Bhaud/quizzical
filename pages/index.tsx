import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div>
          <img className='h-[297px] w-[235px] float-right' src="blob1.svg" alt=""/></div>
        <div className=" flex flex-col h-[300px] w-full items-center justify-center">
          <h1 className="text-[#293264] font-bold text-2xl" >Quizzical</h1>
          <br />
          <h2 className="text-[#293264] text-xl"> click here to start the quiz</h2>
          <Link href="home"><button className='bg-[#4D5B9E] rounded-md p-3 mt-4 text-white'>Start Quiz</button></Link>
        </div>
        <div></div>
      </main>
      <img src="blob2.svg" className='relative left-0 bottom-0 h-[297px] w-[235px] ' alt="" />
    </div>
  )
}

export default Home
