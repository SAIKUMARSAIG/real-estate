// import React from "react";
// import logo from "../assets/logo.svg";
// import HomeBg from "../assets/header_img.png";

// function NavBar() {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <nav className="flex items-center justify-between  bg-transparent p-4  mx-auto">
//         <div className="flex items-center gap-2">
//           <img src={logo} className="h-10 w-16" alt="Logo" />
//           <h1 className="text-xl font-bold text-gray-700"></h1>
//         </div>

//         <ul className="hidden md:flex items-center text-white gap-6 font-semibold ml-auto">
//           <li className="hover:text-black cursor-pointer">Home</li>
//           <li className="hover:text-black cursor-pointer">About</li>
//           <li className="hover:text-black cursor-pointer">Project</li>
//           <li className="hover:text-black cursor-pointer">Testimonials</li>
//         </ul>

//         <button
//           className="lg:hidden text-white focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>

//         <div>
//           <button className=" bg-white px-6 py-[4px] rounded-lg">
//             Contact
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;



import { useState } from 'react';
import logo from '../assets/logo.svg';
// import HomeBg from '../assets/header_img.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between backdrop-blur-md p-4 mx-auto shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img src={logo} className="h-12 w-20 transition-transform hover:scale-105" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-8 text-white font-medium text-lg">
        {['Home', 'About', 'Project', 'Testimonials'].map((item) => (
          <li
            key={item}
            className="relative cursor-pointer transition-colors duration-300 hover:text-blue-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-900/95 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col items-center text-white font-medium py-4 gap-4">
          {['Home', 'About', 'Project', 'Testimonials'].map((item) => (
            <>
              <li
              key={item}
              className="relative cursor-pointer transition-colors duration-300 hover:text-blue-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
            {/* <div className='absolute w-5 h-1 bg-amber-500'></div> */}
            </>
          ))}
          <li>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Desktop Contact Button */}
      <div className="hidden lg:block">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
          Contact
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
