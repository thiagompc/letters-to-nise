import React from "react"
import { useRouter } from "next/router"

export default function Button(props) {
  const router = useRouter()
  return(
    <div className="text-center py-5">
      <button className="px-10 font-secondary text-xl hover:bg-[#6b060459]]" onClick={()=>{router.push(props.link)}}>{props.name}</button>
    </div>
  )
}