// import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <div
        className="min-h-screen mb-4 bg-cover bg-center w-[100%]"
        style={{ backgroundImage: "url(./header_img.png)" }}
      >
        <NavBar />
        {/* <div className="flex flex-col items-center justify-center my-52 font-bold font-serif">
                <div >
                    <h1 className='text-7xl text-white text-balance'>Explore homes that <br /> fit your dreams</h1>
                </div>
                <div className='py-10 flex gap-16'>
                    <button className='border-1 border-white h-12 w-28 rounded-md text-md text-white h-10 cursor-pointer'>Project</button>
                    <button className='h-12 w-28 text-md rounded-md h-10 bg-blue-500 text-white cursor-pointer'>Contact Us</button>
                </div>
            </div> */}

        <div className="relative flex flex-col items-center justify-center min-h-[60vh] my-20 px-4 font-serif text-center bg-gradient-to-b from-transparent to-gray-900/30">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-extrabold tracking-tight leading-tight animate-fade-in">
              Explore Homes That <br className="hidden sm:block" /> Fit Your
              Dreams
            </h1>
          </div>
          <div className="py-8 flex flex-col sm:flex-row gap-4 sm:gap-6 animate-slide-up">
            <button className="h-12 w-36 rounded-lg border-2 border-white text-white text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
              Projects
            </button>
            <button className="h-12 w-36 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
        <style>
          {`
     @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slide-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }
  .animate-slide-up {
    animation: slide-up 1s ease-out forwards 0.3s;
  }
`}
        </style>
      </div>
    </>
  );
}

export default Header;
