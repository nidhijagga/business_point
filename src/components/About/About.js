import React from "react";
import Image from "next/image";
import about from "../../../public/about.png";
import medal from "../../../public/medal.png";
const About = () => {
  return (
    <>
      <div className="text-neutral-600 text-center text-5xl max-w-[492px] self-center mt-20 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        ABOUT OUR COMPANY
      </div>
      <div className="self-center w-full max-w-[1341px] mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              src={about}
              className="aspect-[1.6] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch mt-2 px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-neutral-600 text-center text-base leading-7 max-md:max-w-full">
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today still wanted by the government they
                survive as soldiers of fortune to a deluxe apartment in the sky
                moving on up to the east side a family.
                <br />
                <br />
                The government they survive as soldiers of fortune baby if
                you've ever wondered the east side to a deluxe apartment.
              </div>{" "}
              <div className="mt-12 px-0.5 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                    <div className="border flex grow flex-col items-center w-full px-16 py-6 rounded-xl border-solid border-black border-opacity-20 max-md:mt-4 max-md:px-5">
                      <Image src={medal} className="w-12" />
                      <div className="text-teal-600 text-center text-3xl font-medium self-stretch whitespace-nowrap mt-7">
                        Vision
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="border flex grow flex-col items-center w-full px-11 py-6 rounded-xl border-solid border-black border-opacity-20 max-md:mt-4 max-md:px-5">
                      <Image src={medal} className="w-12" />
                      <div className="text-teal-600 text-center text-3xl font-medium self-stretch whitespace-nowrap mt-7">
                        Missions
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="border flex grow flex-col items-center w-full px-16 py-6 rounded-xl border-solid border-black border-opacity-20 max-md:mt-4 max-md:px-5">
                      <Image src={medal} className="w-12" />
                      <div className="text-teal-600 text-center text-3xl font-medium self-stretch whitespace-nowrap mt-7">
                        Goals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
