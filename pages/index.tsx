import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Quizzical</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div>
          <img
            className="float-right h-[297px] w-[235px]"
            src="blob1.svg"
            alt=""
          />
        </div>
        <div className=" flex h-[300px] w-full flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-[#293264]">Quizzical</h1>
          <br />
          <h2 className="text-xl text-[#293264]">
            {' '}
            click here to start the quiz
          </h2>
          <Link href="home">
            <button className="mt-4 rounded-md bg-[#4D5B9E] p-3 text-white">
              Start Quiz
            </button>
          </Link>
        </div>
        <div></div>
      </main>
      <img
        src="blob2.svg"
        className="relative left-0 bottom-0 h-[297px] w-[235px] "
        alt=""
      />
    </div>
  )
}

export default Home
