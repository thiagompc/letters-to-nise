import React from "react"
import Image from "next/image"

export default function Letter() {
  return(
    <div className="p-20">
      <div className="flex">
        <div className="bg-[url('../public/assets/paper-textured-background.jpg')] w-[40rem] h-72">
           <div className="bg-[#D8BF99] w-full h-full bg-opacity-80 border-solid border-2 border-[#D8BF99] shadow-lg">
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
              <h3>Nise Magalhães da Silveira</h3>
              <h3>Rio de Janeiro, Rio de Janeiro</h3>
              <h3>Brasil</h3>
            </div>
          </div>
           </div>
        <div className="p-10 w-1/2">
          <h2>Carta 1</h2>
          <span className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quia itaque, inventore culpa non qui corporis cupiditate neque, repudiandae atque repellendus alias vitae assumenda modi explicabo recusandae magnam natus velit.</span>
        </div>
      </div>
    </div>
  )
}