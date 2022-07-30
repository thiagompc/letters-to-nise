import Navbar from "../../components/Navbar.jsx";
import { lettersData } from "../../data/data.js";
import Back from "../../components/Back.jsx";

export async function getStaticProps({ params }) {

  const letters = lettersData.filter(l => l.letterId.toString() === params.id)

  return {
    props : {
      letter: letters[0],
    },
  }
}

export async function getStaticPaths() {
  const paths = lettersData.map(letter => ({
    params: { id: letter.letterId.toString() },
  }))
  return { paths, fallback: false }
}


export default function LetterText({letter}){
  return(
    <div className="letters-background w-full bg-auto h-screen overflow-auto">
      {/* <Navbar/> */}
      {/* <Back/> */}
      <div className="px-10 py-10 sm:px-60">
        <h1 className="text-center">{letter.title}</h1>
        <div className="py-10">
          <span className="text-xl" dangerouslySetInnerHTML={{__html:letter.fullText}}/>
          <div className="text-end">
              <br/>
              <span className="text-xl">Com amor,</span>
              <br/>
              <span className="text-xl">Beatriz.</span>
            </div>
        </div>
      </div>
    </div>
  )
}