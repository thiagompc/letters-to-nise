import Link from "next/link"
import React from "react"
import Button from "./Button"

const Main = () => {
  return(
    <div className="main-background h-screen overflow-auto flex justify-center">
      <div className="bg-contain flex justify-items-center main-background bg-[url('/assets/NiseOpacity.svg')] bg-no-repeat bg-center sm:bg-auto sm:items-center">
        <div className="md:px-20 w-full">
          <h1 className="pb-10 py-10 text-center">Cartas para Nise</h1>
          <p className="px-10 pb-10 text-left font-secondary font-light text-2xl">E assim, através do tempo e dos lugares, você foi fascinando grandes, pequenos, pequeníssimos. Diante da correria dessa imensa trajetória, trouxeram-te exatamente aqui na minha interposição de palavras e busca de sentidos que visam dar voz as angústias, reflexões e inquietações da minha nova experiência. Sou Beatriz, assistente social e residente em saúde mental, e direciono todas as minhas cartas a tu, Nise, pois busco seus olhos e coração atentos a minha jornada audaciosa. Tenha uma ótima leitura!</p>
          <div className="text-end px-10">
              <br/>
              <span className="text-2xl">De sua admiradora,</span>
              <br/>
              <span className="text-2xl">Beatriz.</span>
          </div>
          <Button name="Ir às Cartas" link="/cartas"/>
          <div className="pt-50">
            <p className="pt-5 text-center ml-auto font-secondary font-light text-xl"><Link href="referencias">Referências</Link></p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Main