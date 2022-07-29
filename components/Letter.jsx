import React from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

export default function Letter(props) {
  return(
    <div className="px-20 py-10">
      <div className="flex justify-center">
        <a href={props.link} className="w-[40rem]">
          <div className="bg-[url('../public/assets/paper-textured-background.jpg')] w-full h-72">
           <div className="bg-[#D8BF99] w-full h-full bg-opacity-80 border-solid border-4 border-[#D8BF99] shadow-xl hover:border-2
           ">
            <div className="flex justify-between p-5">
              <div className="text-left">
                <h3>Beatriz Sousa Liarte</h3>
                <h3>Brasília, Distrito Federal</h3>
                <h3>Brasil</h3>
              </div>
              <Image
                width={200}
                height={90}
                src="/../public/assets/stamp.png"
                alt="Letter stamp"
              />
            </div>
            <div className="text-center">
              <span className="text-xl">{props.title}</span>
              <h3 className="pt-4">Nise Magalhães da Silveira</h3>
              <h3>Rio de Janeiro, Rio de Janeiro</h3>
              <h3>Brasil</h3>
            </div>
          </div>
           </div>
        </a>
        <div className="pb-10 px-10 w-1/2">
          <h2 className="font-secondary">{props.title}</h2>
          <div className="py-4">
            <span className="text-xl">{props.text}</span>
          </div>
          <Button name="Abrir Carta" link="/"/>
        </div>
      </div>
    </div>
  )
}