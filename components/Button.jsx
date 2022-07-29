import React from "react"
import Link from "next/link"

export default function Button(props) {
  return(
    <div className="text-center py-5">
      <Link href={props.link} >
        <button className="px-10 font-secondary text-xl hover:bg-[#6b060459]]">{props.name}</button>
      </Link>
    </div>
  )
}