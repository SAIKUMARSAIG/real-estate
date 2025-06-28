// import React from "react";
// import { testimonialsData } from "../assets/assets";
// import { assets } from "../assets/assets";

// function Testimonials() {
//   return (
//     <div className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             <span className="text-black">Customer </span>
//             <span className="underline decoration-black">Testimonials</span>
//           </h2>
//           <p className="mt-3 text-gray-500 text-sm md:text-base">
//             Real Stories from Those Who Found Home with Us
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonialsData.map((testimonial:Object, index:Number) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-100 shadow-md rounded-lg p-6 text-center transition hover:shadow-xl"
//             >
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.alt}
//                 className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="text-lg font-bold text-gray-800">
//                 {testimonial.name}
//               </h3>
//               <p className="text-gray-500 text-sm mb-2">{testimonial.title}</p>

//               <div className="flex justify-center mb-3">
//                 {Array.from({ length: testimonial.rating }).map((_, i) => (
//                   <img
//                     key={i}
//                     src={assets.star_icon}
//                     alt="star"
//                     className="w-4 h-4 text-yellow-400"
//                   />
//                 ))}
//               </div>

//               <p className="text-gray-600 text-sm">
//                 {testimonial.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testimonials;



// import React from "react";
import { testimonialsData, assets } from "../assets/assets";

interface Testimonial {
  image: string;
  alt: string;
  name: string;
  title: string;
  rating: number;
  text: string;
}

function Testimonials() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-black">Customer </span>
            <span className="underline decoration-black">Testimonials</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Real Stories from Those Who Found Home with Us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial: Testimonial, index: number) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-md rounded-lg p-6 text-center transition hover:shadow-xl"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{testimonial.title}</p>

              <div className="flex justify-center mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <img
                    key={i}
                    src={assets.star_icon}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
