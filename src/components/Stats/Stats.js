import React from 'react'

const Stats = () => {
  return (
    <div className="bg-blue-900 self-stretch flex w-full flex-col justify-center items-center mt-24 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-[902px] max-w-full flex-col items-stretch mt-2 mb-5">
          <div className="text-white text-center text-2xl self-center whitespace-nowrap">
            COMPANY SUCCESS
          </div>{" "}
          <div className="text-white text-center text-5xl max-w-[787px] self-center mt-7 max-md:max-w-full max-md:text-4xl">
            Some fun facts about our consulting
          </div>{" "}
          <div className="flex items-start justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <div className="self-center flex grow basis-[0%] flex-col items-center my-auto">
              <div className="text-white text-center text-6xl font-light leading-[70px] max-md:text-4xl max-md:leading-[56px]">
                30+
              </div>{" "}
              <div className="text-white text-center text-lg self-stretch mt-8">
                Years of Excellence
              </div>
            </div>{" "}
            <div className="self-center flex grow basis-[0%] flex-col my-auto items-start">
              <div className="text-white text-center text-6xl font-light leading-[70px] ml-5 max-md:text-4xl max-md:leading-[56px] max-md:ml-2.5">
                100%
              </div>{" "}
              <div className="text-white text-center text-lg self-stretch mt-8">
                Client Satisfaction
                <br />
              </div>
            </div>{" "}
            <div className="self-stretch flex grow basis-[0%] flex-col items-center">
              <div className="text-white text-center text-6xl font-light leading-[70px] max-md:text-4xl max-md:leading-[56px]">
                53k
              </div>{" "}
              <div className="text-white text-center text-lg self-stretch mt-8">
                Cases Completed
              </div>
            </div>{" "}
            <div className="self-center flex grow basis-[0%] flex-col items-center my-auto">
              <div className="text-white text-center text-6xl font-light leading-[70px] max-md:text-4xl max-md:leading-[56px]">
                24
              </div>{" "}
              <div className="text-white text-center text-lg self-stretch mt-8">
                Consultants
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Stats