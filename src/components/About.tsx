// import React from 'react'

// import brand from '../assets/brand_img.png'

// function About() {
//   return (
//     <>
//         <div className='py-8  '>
//             <h1 className='text-center text-2xl font-bold'>About <span className='relative min-h-screen font-light after:absolute after:bottom-0 after:bg-gray-500 after:left-0 after:w-full after:h-[1.5px]'>Our Brand</span></h1>

//             <h2 className='text-center'>Passionate About Properties, Dedicated to Your Vision</h2>

//             <div className='flex flex-col md:flex-row mx-auto justify-between items-center gap-4 px-4 md:px-0 mt-8'>
//                 <div><img src={brand} className='max-w-lg' alt="" />
//                 </div>
//             </div>

//             <div>
//                 [{exp: "10+",brand: "Years of Excellence"},{},{},{}]
//             </div>

//         </div>
//     </>
//   )
// }

// export default About

// import React from "react";
import brand from "../assets/brand_img.png";

function About() {
  const stats = [
    { exp: "10+", brand: "Years of Excellence" },
    { exp: "12+", brand: "Projects Completed" },
    { exp: "20+", brand: "Mn. Sq. Ft. Delivered" },
    { exp: "25+", brand: "Ongoing Projects" },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 relative">
          About <span className="relative text-blue-600 font-bold font-light after:absolute after:bg-violet-500 after:left-0 after:bottom-0 after:w-full after:h-1 after:rounded-2xl">Our Brand</span>
          {/* <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded"></span> */}
        </h1>
        <h2 className="text-center text-xl sm:text-2xl text-gray-600 mt-4 font-medium animate-fade-in">
          Passionate About Properties, Dedicated to Your Vision
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-12">
          <div className="flex-1 items-center justify-center flex">
            <img
              src={brand}
              className="w-[80%] h-auto rounded-lg  transform hover:scale-105 transition-transform duration-300"
              alt="Brand"
            />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-12 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-3xl font-bold text-blue-600">
                    {stat.exp}
                  </h3>
                  <p className="text-gray-600 mt-2 font-medium">{stat.brand}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a
                href="#learn-more"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Learn More
              </a>
            </div>
          </div>
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
            animation: slide-up 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default About;
