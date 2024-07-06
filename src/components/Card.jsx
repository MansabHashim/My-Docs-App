// import React from 'react'

const Card = ({data}) => {
    const {desc, title, download, Background}= data
  return (
    <div className=" z-[5] relative w-64 h-64 rounded-xl overflow-hidden bg-green-500/90">
    <div className="p-4">
    <h2 className=" text-black">{title}</h2>
   <p className=" font-thin text-sm"> {desc}</p>
    <h2 className=" text-black">{download}</h2>
    </div>
    {!download && <h2 style={{backgroundColor:Background}} className={` text-black p-2 w-full text-center`}>Upload Now 🚀</h2>}

    {download &&  <h2 style={{backgroundColor:Background}} className={` text-black p-2 w-full text-center`}>Download Now 🎉</h2>
     }
   
</div> 
)
}

export default Card     