import React, { useState } from 'react';
import { Menu, Minimize2 } from 'react-feather';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-row  lg:mr-48 lg:ml-24 mr-6 ml-6 text-gray-400 justify-between ">
        <div className="lg:flex  items-center justify-between l:py-5 py-1">
          <span className="font-bold lg:mt-0 mt-6 text-3xl   lg:text-4xl text-slate-900 cursor-pointer flex items-center font-[poppins]">
            ShortLynks
          </span>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden pt-3 lg:pt-0 "
          >
            {isOpen ? (
              <span className="text-gray font-medium">
                <Minimize2 />
              </span>
            ) : (
              <Menu />
            )}
          </div>

          <ul
            className={`lg:flex lg:justify-between lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z[-1] left-0 w-full 

            lg:w-auto lg:pl-18 pl-9 transition-all duration-[800ms] ease-in-out  bg-indigo-50 ${
              isOpen ? 'top-20 ' : 'top-[-401px] '
            } 
            `}
          >
            <li
              className="lg:ml-8 text-base font-medium lg:text-md lg:my-0 my-7"
              onClick={() => setIsOpen(false)}
            >
              Features
            </li>

            <li
              className="lg:ml-8 text-base font-medium lg:text-md lg:my-0 my-7"
              onClick={() => setIsOpen(false)}
            >
              About
            </li>
            <li
              className="lg:ml-8 text-base font-medium lg:text-md lg:my-0 my-7"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </li>

            <div className="lg:absolute right-[5rem] top-5">
              {/* redirects to login page */}
              <button className=" bg-gray-500 rounded-full text-white text-sm h-9 py-2 px-3 font-[poppins] lg:h-10 lg:w-18 lg:text-md lg:font-semibold hover:bg-blue-500 duration-300">
                Sign In
              </button>

              {/* redirects to sign up page */}
              <button className="bg-sky-500 text-white py-2 px-3 ml-14 rounded-full font-[poppins] text-sm h-9 lg:h-10 lg:w-18 lg:text-md lg:font-semibold lg:ml-8 hover:bg-indigo-400 duration-500">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
