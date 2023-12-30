import React from "react";
import Image from "next/image";
import image from "../../../public/footer.png";

const Footer = () => {
  return (
    <>
      <div id="contact" className="bg-indigo-800 self-stretch w-full mt-16 px-12 py-11 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[74%] max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-5">
                    <div className="max-md:max-w-full">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                          <div className="flex grow flex-col items-stretch max-md:mt-5">
                            <div className="text-white text-lg font-bold">
                              ABOUT OUR CONSULTING
                            </div>
                            <div className="text-slate-300 text-base leading-7 mt-7">
                              That tropic port aboard this tiny ship today still
                              want by theam government they survive on up to
                              thetre east side to a deluxe as soldiers of artics
                              fortune.
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                          <div className="flex flex-col items-stretch max-md:mt-5">
                            <div className="text-white text-lg font-bold">
                              RECENT POSTS
                            </div>
                            <div className="justify-between items-center flex gap-3 mt-4">
                              <Image
                                loading="lazy"
                                src={image}
                                className="aspect-[1.49] object-contain object-center w-[94px] overflow-hidden shrink-0 max-w-full my-auto"
                              />
                              <div className="text-slate-300 text-base leading-7">
                                Till wanted by theam govern they survive as
                                soldiers.
                                <br />
                                Feb 06, 2018
                              </div>
                            </div>
                            <div className="bg-indigo-700 flex shrink-0 h-px flex-col mt-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between gap-5 px-px max-md:max-w-full max-md:flex-wrap">
                      <div className="justify-center items-stretch flex gap-5 my-auto">
                        <div className="text-white text-lg font-bold">
                          (+1) 123 456 789
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-stretch">
                        <div className="justify-between items-center flex gap-3">
                          <Image
                            loading="lazy"
                            src={image}
                            className="aspect-[1.49] object-contain object-center w-[94px] overflow-hidden shrink-0 max-w-full my-auto"
                          />
                          <div className="text-slate-300 text-base leading-7">
                            Till wanted by theam govern they survive as
                            soldiers.
                            <br />
                            Feb 06, 2018
                          </div>
                        </div>
                        <div className="bg-indigo-700 flex shrink-0 h-px flex-col mt-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch max-md:mt-5">
                    <div className="text-white text-lg font-bold">
                      SOLUTIONS
                    </div>
                    <div className="text-slate-300 text-base leading-7 mt-7">
                      <ul>
                        <li>Travel and Aviation </li>
                        <li>Business Services </li>
                        <li>Consumer Products </li>
                        <li>Financial Services </li>
                        <li>Software Research </li>
                        <li>Quality Resourcing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-10">
              <div className="text-white text-lg font-bold">NEWSLETTER</div>
              <div className="text-neutral-600 text-sm leading-7 whitespace-nowrap rounded bg-neutral-50 justify-center mt-9 pl-4 pr-16 py-3.5 items-start max-md:pr-5">
                Name
              </div>
              <div className="text-neutral-600 text-sm leading-7 whitespace-nowrap rounded bg-neutral-50 justify-center mt-6 pl-4 pr-16 py-3.5 items-start max-md:pr-5">
                Email
              </div>
              <div className="text-black text-base uppercase justify-center items-stretch shadow-sm bg-white mt-8 px-6 py-3.5 rounded-md max-md:px-5">
                SUBSCRIBE
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slate-300 text-sm leading-7 justify-center items-stretch bg-blue-900 self-stretch w-full px-12 py-7 max-md:max-w-full max-md:px-5">
        © Copyrights 2021. All Rights Reserved. About | Solutions | FAQ’s |
        Contact
      </div>
    </>
  );
};

export default Footer;
