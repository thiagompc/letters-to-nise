import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Letter from '../components/Letter'
import {lettersData} from '../data/letters.json'


export async function getStaticProps() {

  return {
    props : {
      letters: lettersData,
    },
  }
}

export default function Letters({ letters }) {
  return (
    <div>
      <Head>
        <title>Cartas para Nise</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" size="32x32" type="image/png" href="/assets/mail.png" />
      </Head>
      <div className="letters-background">
        <Navbar/>
        <div className="text-center pt-5">
          <h1>Cartas</h1>
        </div>
        {lettersData.map((letter) => (
          <Letter
            key={letter.letterId}
            link="/"
            title={letter.title}
            text={letter.description}
          ></Letter>
        ))}
      </div>
    </div>
  )
}

