import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4 ">
      <div className="max-w-[1240px] py-[12px]  mx-auto flex justify-between items-center  ] ">
        <div className="text-3xl font-bold">WEB DEV</div>

        {toggle ? (
          <AiOutlineClose
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-8">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Resources</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Responsive Design Menu */}

        <ul className={`duration-500 md:hidden w-full h-screen text-white fixed bg-black  top-[92px]
         ${toggle? 'left-[0]':'left-[-100%]'}
        
        `}>
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}
