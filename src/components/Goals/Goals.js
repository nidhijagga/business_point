import React from "react";
import Image from "next/image";
import vector1 from "../../../public/Vector1.png";
import vector2 from "../../../public/Vector2.png";
import HandShake from "../../../public/hand-shake.png";
import data from "./goals.json";
const Goals = () => {
  return (
    <div className="justify-center self-center w-full max-w-[1342px] mt-16 px-5 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        {data.data.cards.map((card) => {
          return (
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col justify-center items-stretch px-px max-md:max-w-full max-md:mt-5">
                <div className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col pt-9 max-md:max-w-full">
                  <Image
                  loading="lazy"
                  src={HandShake}
                  className="self-center w-12"
                  />
                  <div className="text-indigo-950 text-2xl self-center whitespace-nowrap mt-8">
                    {card.title}
                  </div>
                  <Image
                    loading="lazy"
                    src={vector1}
                    className="self-center max-w-full mt-4"
                  />
                  <div className="text-black text-center text-base leading-7 mt-11 max-md:mt-10 px-20">
                    {card.description}
                  </div>
                  <Image
                    loading="lazy"
                    src={vector2}
                    className="w-full self-stretch mt-10 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;
