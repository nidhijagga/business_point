import React from "react";
import Image from "next/image";
import mainImage from "../../../public/mainImage.jpg"
import image2 from "../../../public/image2.png"
const Index = () => {
  return (
    <div className="self-stretch flex w-full flex-col justify-center items-stretch px-0.5 max-md:max-w-full">
      <div className="flex-col overflow-hidden relative flex min-h-[523px] pl-20 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">

        {/* Main Image */}
        <Image
          loading="lazy"
          src={mainImage}
          alt="Main Image"
          className="absolute h-full w-full object-cover object-center inset-0"
        />

        {/* Image 2 centered at the bottom */}
        <Image
          loading="lazy"
          src={image2}
          alt="Image 2"
          className="absolute bottom-0 left-0 w-full"
          />

        {/* Main Content */}
        <div className="relative text-neutral-50 text-6xl font-black leading-[70px] w-[542px] max-w-full mt-16 max-md:text-4xl max-md:leading-[56px] max-md:mt-10">
          <span className="font-light">WE IMPROVE YOUR</span>
          <span className="font-black">
            <br />
            SALES EFFICIENCY
          </span>
        </div>
        <div className="relative text-white text-2xl w-[510px] max-w-full mt-9">
          The government they survive article of fortune
        </div>
        <div className="relative text-black text-base uppercase whitespace-nowrap justify-center items-stretch shadow-sm bg-white mt-3 mb-16 px-6 py-3.5 rounded-md max-md:mb-10 max-md:px-5">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Index;
