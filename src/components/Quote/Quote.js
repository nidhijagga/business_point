import React from 'react'
import Image from 'next/image'
import quote from "../../../public/quote.png"

const Quote = () => {
  return (
    <div className="flex-col overflow-hidden self-stretch relative flex min-h-[323px] w-full justify-center items-center mt-16 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <Image
          loading="lazy"
          src={quote}
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex w-full max-w-[980px] flex-col items-stretch mt-2.5 max-md:max-w-full">
          <div className="text-white text-center text-5xl max-md:max-w-full max-md:text-4xl">
            We provide high quality services & innovative
            <br /> solutions for the realiable growth
          </div>
          <div className="text-black text-base uppercase whitespace-nowrap justify-center items-stretch shadow-sm bg-white self-center mt-11 px-6 py-3.5 rounded-md max-md:mt-10 max-md:px-5">
            GET A QUOTES
          </div>
        </div>
      </div>
  )
}

export default Quote