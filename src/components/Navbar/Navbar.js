"use client"
import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop-200, // Adjust the offset as needed
      behavior: "smooth",
    });
  }
};

const NavBar = () => {
  const [_document, set_document] = useState(null);

  useEffect(() => {
    set_document(document);
  }, []);
  return (
    <div className="flex justify-between shadow-sm bg-white self-stretch w-full gap-5 px-14 items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <div className="flex w-[216px] shrink-0 h-[45px] flex-col">
        <h1 className="text-lg font-bold">
          Business
          <span className="text-green-500">Point</span>
        </h1>
        <p className="text-neutral-600 text-xs leading-4">
          BEST TIPS FOR DIGITAL MARKETERS
        </p>
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <button onClick={() => scrollToSection("home")} className="btn">
          Home
        </button>
        <button onClick={() => scrollToSection("about")} className="btn">
          About us
        </button>
        <button onClick={() => scrollToSection("services")} className="btn">
          Services
        </button>
        <button onClick={() => scrollToSection("team")} className="btn">
          Our Team
        </button>
        <button onClick={() => scrollToSection("project")} className="btn">
          Our Project
        </button>
        <button onClick={() => scrollToSection("contact")} className="btn">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default NavBar;
