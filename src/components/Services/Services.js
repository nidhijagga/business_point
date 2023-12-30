import React from "react";
import Image from "next/image";
import service1 from "../../../public/services1.png";

const ServiceItem = () => {
  return (
    <div id="services" className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
      <div className="flex grow flex-col justify-center items-stretch max-md:max-w-full max-md:mt-5">
        <div className="shadow-sm bg-white flex flex-col items-stretch pb-6 max-md:max-w-full">
          <Image loading="lazy" src={service1} className="w-full" />
          <div className="self-center flex w-[393px] max-w-full items-stretch justify-between gap-5 mt-5">
            <div className="text-neutral-600">
              <span className="text-indigo-700 text-2xl">
                Business Services
                <br />
              </span>
              <span className="text-neutral-600 text-lg">
                The tiny ship today stiller
              </span>
            </div>
            <div className="justify-center items-center self-center flex gap-1.5 my-auto">
              <div className="text-teal-600 text-lg self-stretch grow whitespace-nowrap">
                Readmore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <div className="text-neutral-600 text-center text-5xl self-center whitespace-nowrap mt-20 max-md:text-4xl max-md:mt-10">
        OUR SERVICES
      </div>
      <div className="text-neutral-600 text-center text-lg max-w-[732px] self-center mt-8 max-md:max-w-full">
        A tale of a fateful trip that started from this tropic port aboard this
        tiny ship today stillers
      </div>
      <div className="self-center w-full max-w-[1339px] mt-10 px-5 max-md:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ServiceItem key={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
