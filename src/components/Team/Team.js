"use client"
import React from "react";
import { useTeam } from "@/app/context/TeamContext";
const Team = () => {
  const {team} = useTeam();
  return (
    <>
      <div id="team" className="justify-end text-neutral-600 text-center text-5xl self-center whitespace-nowrap mt-16 max-md:text-4xl max-md:mt-10">
        OUR TEAM
      </div>
      <div className="self-center w-full max-w-[1340px] mt-7 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          {team.map((team, index) => (
            <div
              key={index}
              className="relative flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0"
            >
              <div className="shadow-sm bg-white flex grow flex-col items-stretch w-full pb-4 max-md:mt-5">
                <div className="bg-teal-500 relative group">
                  <img
                    loading="lazy"
                    src={team.img}
                    className="aspect-[0.99] object-top object-cover w-full h-full overflow-hidden group-hover:mix-blend-multiply"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-bold text-white text-lg">
                     {team.name}
                    </span>
                    <span className="font-light text-white text-sm">
                      {team.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
