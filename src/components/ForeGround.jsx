// import React from 'react'
import { useRef } from "react"
import Card from "./Card"
import Data from "./Data"

const ForeGround = () => {
    const ref = useRef(null)
  return (
    // <div>
    <div ref={ref} className=" w-fit h-[85vh] justify-center bg--400/20 top-28 left-0 z-[3] absolute gap-5  flex flex-wrap px-10">
        {Data.map((item, index)=>(
             <Card key={index} data={item} reference={ref}/>
        ))}
    </div>
  )
    // </div>
  
}

export default ForeGround