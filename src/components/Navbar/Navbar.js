import React from "react";
import "./Navbar.css"

const NavBar = () => {
  return (
    <div className="flex justify-between shadow-sm bg-white self-stretch w-full gap-5 px-14 items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <div className="flex w-[216px] shrink-0 h-[45px] flex-col">
        <h1 className="text-lg font-bold">
          Business{" "}
          <span className="text-green-500">Point</span>
        </h1>
        <p className="text-neutral-600 text-xs leading-4">
          BEST TIPS FOR DIGITAL MARKETERS
        </p>
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <button className="btn">Home</button>
        <button className="btn">About us</button>
        <button className="btn">Services</button>
        <button className="btn">Our Team</button>
        <button className="btn">Our Project</button>
        <button className="btn">Contact us</button>
      </div>
    </div>
  );
};

export default NavBar;