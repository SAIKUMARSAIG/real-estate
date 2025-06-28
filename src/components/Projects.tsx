// // import React from "react";
// // import { assets, projectsData } from "../assets/assets";

// // function Projects() {
// //   const [offset, setOffset] = React.useState(0);

// //   const slideAmount = 300; // Adjust as needed depending on card width

// //   const slideLeft = () => {
// //     setOffset((prev) => Math.max(prev - slideAmount, 0));
// //   };

// //   const slideRight = () => {
// //     const maxOffset = (projectsData.length - 1) * slideAmount;
// //     setOffset((prev) => Math.min(prev + slideAmount, maxOffset));
// //   };

// //   return (
// //     <div className="min-h-screen py-10">
// //       <div className="p-10">
// //         <h1 className="text-center font-bold text-4xl font-sans">
// //           Projects{" "}
// //           <span className="font-light relative after:absolute after:bg-black after:right-0 after:bottom-0 after:w-[90%] after:h-[3px] after:rounded-2xl">
// //             Completed
// //           </span>
// //         </h1>
// //         <p className="text-gray-600 text-center py-5 text-md">
// //           Crafting Spaces, Building Legacies—Explore Our Portfolio
// //         </p>

// //         <div className="flex justify-end gap-4 items-center mb-5">
// //           <button
// //             onClick={slideLeft}
// //             className="bg-gray-300 h-10 rounded-sm px-3 cursor-pointer"
// //           >
// //             <img src={assets.left_arrow} alt="Left" />
// //           </button>
// //           <button
// //             onClick={slideRight}
// //             className="bg-gray-300 h-10 rounded-sm px-3 cursor-pointer"
// //           >
// //             <img src={assets.right_arrow} alt="Right" />
// //           </button>
// //         </div>

// //         <div className="overflow-hidden">
// //           <div
// //             className="flex gap-4 transition-all duration-500 ease-in-out"
// //             style={{ transform: `translateX(-${offset}px)` }}
// //           >
// //             {projectsData.map((project, index) => (
// //               <div
// //                 key={index}
// //                 className="relative flex-shrink-0 w-[300px] border border-gray-700 rounded-md"
// //               >
// //                 <img
// //                   src={project.image}
// //                   alt={project.title}
// //                   className="relative w-full h-64 object-cover rounded-lg"
// //                 />
// //                 <div className="flex justify-center items-center">
// //                   <div className="absolute bottom-0 left-0 bg-white bg-opacity-50  p-2 w-48 rounded-b-lg">
// //                     <h2 className="text-lg font-semibold">{project.title}</h2>
// //                     <p className="text-sm">{project.location}</p>
// //                     <p className="text-sm">{project.price}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Projects;



// import React from "react";
// import { assets, projectsData } from "../assets/assets";

// function Projects() {
//   const [offset, setOffset] = React.useState(0);
//   const slideAmount = 320; // Matches card width + gap

//   const slideLeft = () => {
//     setOffset((prev) => Math.max(prev - slideAmount, 0));
//   };

//   const slideRight = () => {
//     const maxOffset = (projectsData.length - 1) * slideAmount;
//     setOffset((prev) => Math.min(prev + slideAmount, maxOffset));
//   };

//   return (
//     <div className="min-h-screen py-10">
//       <div className="p-4 md:p-10 max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold font-sans mb-2">
//             Projects{" "}
//             <span className="font-light relative after:absolute after:bg-black after:right-0 after:bottom-0 after:w-[90%] after:h-[2px] md:after:h-[3px] after:rounded-2xl">
//               Completed
//             </span>
//           </h1>
//           <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
//             Crafting Spaces, Building Legacies—Explore Our Portfolio
//           </p>
//         </div>

//         {/* Navigation Controls */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-xl font-semibold">Featured Works</h2>
//           <div className="flex gap-3">
//             <button
//               onClick={slideLeft}
//               className="bg-gray-300 h-10 w-10 flex items-center justify-center rounded-sm hover:bg-gray-400 transition-colors"
//               aria-label="Slide left"
//             >
//               <img src={assets.left_arrow} alt="Left" className="h-4" />
//             </button>
//             <button
//               onClick={slideRight}
//               className="bg-gray-300 h-10 w-10 flex items-center justify-center rounded-sm hover:bg-gray-400 transition-colors"
//               aria-label="Slide right"
//             >
//               <img src={assets.right_arrow} alt="Right" className="h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Projects Carousel */}
//         <div className="overflow-hidden">
//           <div
//             className="flex gap-8 transition-all duration-500 ease-in-out pb-4"
//             style={{ transform: `translateX(-${offset}px)` }}
//           >
//             {projectsData.map((project, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-[300px] border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="p-4 bg-white">
//                   <div className="mb-2">
//                     <h3 className="text-lg font-semibold line-clamp-1">{project.title}</h3>
//                     <p className="text-gray-600 text-sm">{project.location}</p>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="font-medium">{project.price}</span>
//                     <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;















import  { useCallback } from "react";
import { assets, projectsData } from "../assets/assets";

import React from 'react';

function Projects() {
  const [offset, setOffset] = React.useState(0);
  const slideAmount = 320; // Matches card width + gap
  // const cardWidth = 300; // Card width in pixels
  const visibleCards = 3; // Number of cards visible at once (for larger screens)

  const slideLeft = useCallback(() => {
    setOffset((prev) => Math.max(prev - slideAmount, 0));
  }, []);

  const slideRight = useCallback(() => {
    const maxOffset = (projectsData.length - visibleCards) * slideAmount;
    setOffset((prev) => Math.min(prev + slideAmount, maxOffset));
  }, [projectsData.length]);




  const handleTouchStart = (e : any) => {
    const touchStartX = e.touches[0].clientX;
    const handleTouchMove = (moveEvent : any) => {
      const touchEndX = moveEvent.touches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) slideRight();
        else slideLeft();
        document.removeEventListener("touchmove", handleTouchMove);
      }
    };
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener(
      "touchend",
      () => document.removeEventListener("touchmove", handleTouchMove),
      { once: true }
    );
  };

  return (
    <div className="min-h-screen py-10">
      <div className="p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-3 tracking-tight">
            Projects{" "}
            <span className="font-light relative after:absolute after:bg-gray-800 after:right-0 after:bottom-0 after:w-[80%] after:h-[3px] after:rounded-full">
              Completed
            </span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Crafting Spaces, Building Legacies—Explore Our Portfolio
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Featured Works
          </h2>
          <div className="flex gap-3">
            <button
              onClick={slideLeft}
              disabled={offset === 0}
              className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Slide left"
            >
              <img src={assets.left_arrow} alt="Left arrow" className="h-5" />
            </button>
            <button
              onClick={slideRight}
              disabled={offset >= (projectsData.length - visibleCards) * slideAmount}
              className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Slide right"
            >
              <img src={assets.right_arrow} alt="Right arrow" className="h-5" />
            </button>
          </div>
        </div>

        {/* Projects Carousel */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          role="region"
          aria-label="Projects carousel"
        >
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {projectsData.map((project : any, index : number) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] sm:w-[280px] md:w-[300px] border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                role="article"
                aria-labelledby={`project-title-${index}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 bg-white">
                  <div className="mb-3">
                    <h3
                      id={`project-title-${index}`}
                      className="text-lg md:text-xl font-semibold text-gray-800 line-clamp-1"
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base">{project.location}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{project.price}</span>
                    <button
                      className="text-sm bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                      aria-label={`View details for ${project.title}`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;