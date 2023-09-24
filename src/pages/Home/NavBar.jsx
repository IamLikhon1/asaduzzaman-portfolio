import { useState } from "react";
import Lottie from "lottie-react";
import loaderAnimation from '../../assets/loaderAnimation.json'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-300 p-1">
      <div className="mx-auto sm:pl-6 lg:pl-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center ">

              <h1 className="text-white text-lg md:text-xl w-full">Asaduzzaman <span className=" text-orange-600 uppercase">Likhon</span></h1>
              <Lottie className="w-24" animationData={loaderAnimation} loop={true}></Lottie>
            </div>

            <div className="hidden md:block ml-96">
              <div className="space-x-8 ml-96">
                <a
                  href="#home"
                  className="text-black  hover:text-white px-3 py-2 rounded-md text-lg font-medium duration-500"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-black  hover:text-white px-3 py-2 rounded-md text-lg font-medium duration-500 "
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="text-black  hover:text-white px-3 py-2 rounded-md text-lg font-medium duration-500"
                >
                  Skills
                </a>
                <a
                  href="#Project"
                  className="text-black  hover:text-white px-3 py-2 rounded-md text-lg font-medium duration-500"
                >
                  Project
                </a>
                <a
                  href="#contact"
                  className="text-black  hover:text-white px-3 py-2 rounded-md text-lg font-medium duration-500"
                >
                  Contact
                </a>
              </div>

            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-400 focus:outline-none focus:bg-orange-400 focus:text-white transition duration-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-black hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-black hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-black hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
            <a
              href="#project"
              className="text-black hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-black hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;