// import React from 'react'
import Card from "./Card"
import Data from "./Data"

const ForeGround = () => {
  return (
    <div>
    <div className=" w-full justify-center bg--400/20 top-28 left-0 z-[3] absolute gap-5  flex flex-wrap px-10">
        {Data.map((item, index)=>(
             <Card key={index} data={item}/>
        ))}
    </div>
     {/* <Card/>     */}
    </div>
  )
}

export default ForeGround