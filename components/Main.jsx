import React from "react"
import Button from "./Button"
import Typewriter from 'typewriter-effect';

const Main = () => {
  return(
    <div className="main-background">
      <div className="sm:bg[100px] md:flex justify-items-center main-background bg-[url('../public/assets/NiseOpacity.svg')] bg-no-repeat bg-center bg-auto h-screen ">
        <div className="md:px-20 py-20 w-full">
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
          <h2 className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime vero architecto excepturi quo aperiam iure optio cupiditate, nulla at autem necessitatibus unde sapiente, pariatur, quibusdam asperiores molestias labore deserunt eum.</h2>
          <Button/>
        </div>
      </div>
    </div>
    )
}

export default Main