import React from "react"
import Image from "next/image"
import Button from "./Button"
import { useRouter } from "next/router"

export default function Letter(props) {
  const router = useRouter()
  return(
    <div className="px-4 sm:px-20 py-10">
      <div className="sm:flex justify-center md:">
        <div onClick={()=>router.push(props.link)} className="sm:w-[40rem] cursor-pointer">
          <div className="bg-[url('/assets/paper-textured-background.jpg')] sm:w-full h-60 sm:h-72">
           <div className="bg-[#D8BF99] w-full h-full bg-opacity-80 border-solid border-4 border-[#D8BF99] shadow-xl hover:border-2">
            <div className="flex justify-between p-5">
              <div className="text-sm text-left sm:text-lg">
                <span>Beatriz Sousa Liarte</span><br/>
                <span>Brasília, Distrito Federal</span><br/>
                <span>Brasil</span><br/>
              </div>
              <div className="w-32 sm:w-52">
                <Image
                  width={200}
                  height={90}
                  src="/assets/stamp.png"
                  alt="Letter stamp"
                />
            </div>
              </div>
            <div className="text-sm text-center sm:text-lg">
              <div className="pb-2">
                <span className="text-sm sm:text-xl">{props.title}</span><br/>
              </div>
              <span className="pt-4">Nise Magalhães da Silveira</span><br/>
              <span>Rio de Janeiro, Rio de Janeiro</span><br/>
              <span>Brasil</span><br/>
            </div>
          </div>
           </div>
        </div>
        <div className="px-4 pt-10 w-full sm:w-1/2 sm:pt-0 sm:px-10 ">
          <span className="font-secondary text-2xl">{props.title}</span>
          <div className="py-4">
            <span className="text-lg font-secondary">{props.text}</span>
          </div>
          <Button name="Abrir Carta" link={props.link}/>
        </div>
      </div>
    </div>
  )
}