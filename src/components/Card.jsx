// import React from 'react'
import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const Card = ({data, reference}) => {
    // eslint-disable-next-line react/prop-types
    const {desc, title, download, Background}= data
  return (
    <motion.div  drag dragConstraints={reference}  whileDrag={{scale: 1.2}} className=" z-[5] relative w-64 h-64 rounded-xl overflow-hidden bg-green-500/90">
    <div className="p-4">
    <h2 className=" text-black">{title}</h2>
   <p className=" font-thin text-sm"> {desc}</p>
    <h2 className=" text-black">{download}</h2>
    </div>
    {!download && <h2 style={{backgroundColor:Background}} className={` text-black p-2 w-full text-center`}>Upload Now 🚀</h2>}

    {download &&  <h2 style={{backgroundColor:Background}} className={` text-black p-2 w-full text-center`}>Download Now 🎉</h2>
     }
   
</motion.div> 
)
}

export default Card     