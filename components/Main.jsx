import React from "react"
import Image from 'next/image'
import NiseVector from "../public/assets/NiseVector.png"
import Button from "./Button"

const Main = () => {
  return(
    <div className="sm: md:flex justify-items-center bg-[url('../public/assets/Nise.svg')] bg-no-repeat bg-center h-screen">
      <div className="md:pl-20 py-10">
        <h1 className="pb-10">Cartas para Nise</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime vero architecto excepturi quo aperiam iure optio cupiditate, nulla at autem necessitatibus unde sapiente, pariatur, quibusdam asperiores molestias labore deserunt eum.</h3>
        <Button/>
      </div>
    </div>
  )
}

export default Main