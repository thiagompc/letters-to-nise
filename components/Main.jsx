import React from "react"
import Button from "./Button"
import Typewriter from 'typewriter-effect';

import Navbar from "./Navbar";

const Main = () => {
  return(
    <div className="main-background h-screen overflow-auto flex justify-center">
      <div className="bg-contain md:flex justify-items-center main-background bg-[url('/assets/NiseOpacity.svg')] bg-no-repeat bg-center sm:bg-auto h-screen max-w-7xl items-center">
        <div className="md:px-20 py-10 w-full">
        {/* <h1>
          <Typewriter
            options={{
              strings: ['Cartas para Nise'],
              autoStart: true,
              cursor: "",
              deleteSpeed: 100000000000000000,
              deleteChars: 0,
            }}
          />
        </h1> */}
          <h1 className="pb-10 text-center">Cartas para Nise</h1>
          <h2 className="px-10 pb-10 text-center font-secondary font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime vero architecto excepturi quo aperiam iure optio cupiditate, nulla at autem necessitatibus unde sapiente, pariatur, quibusdam asperiores molestias labore deserunt eum.</h2>
          <Button name="Ir às Cartas" link="/cartas"/>
        </div>
      </div>
    </div>
    )
}

export default Main