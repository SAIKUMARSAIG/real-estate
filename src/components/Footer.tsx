// import React from 'react'

// import {assets} from '../assets/assets'



// function Footer() {
//   return (
//     <>
//       <div className='flex justify-between items-center bg-gray-900 px-32 mx-auto min-h-[300px]'>
//         <div className='flex flex-col'>
//             <div className='flex items-center'>
//                 <img src={assets.logo_dark} className='w-28 h-24' alt="" />
//                 {/* <h1 className='text-white'>Estate</h1> */}
//             </div>
//             <p className='text-gray-400 max-w-[400px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
//         </div>
//         <div className='text-gray-300 flex flex-col gap-4'>
//             <p className='text-white font-bold text-2xl'>Company</p>
//             <ul>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Contact us</li>
//                 <li>Privacy Policy</li>
//             </ul>
//         </div>
//         <div className='text-white'>
//             <h1>Subscribe to our newsletter</h1>
//             <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
//             <div className='flex gap-2 mt-2'>
//                 <input type="text" className='h-10 w-48 outline-0 px-2 py-1 rounded-sm bg-gray-600 text-' placeholder='Enter you email' />
//                 <button className='outline-0 bg-blue-500 text-gray-300 h-10 '>Subscribe</button>
//             </div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default Footer

















// import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <div className="bg-gray-900 px-16 py-12 flex flex-col md:flex-row justify-between items-start gap-10">
      {/* Logo and description */}
      <div className="flex flex-col max-w-md">
        <div className="flex items-center mb-4">
          <img src={assets.logo_dark} className="w-28 h-24 object-contain" alt="Logo" />
        </div>
        <p className="text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </div>

      {/* Company links */}
      <div className="flex flex-col gap-4 text-gray-300">
        <h2 className="text-white font-bold text-xl">Company</h2>
        <ul className="space-y-2">
          <li  className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">About us</li>
          <li className="hover:text-white cursor-pointer transition">Contact us</li>
          <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="text-gray-300 flex flex-col max-w-sm">
        <h2 className="text-white font-bold text-xl mb-2">Subscribe to our newsletter</h2>
        <p className="mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
        <div className="flex flex-col md:flex-row w-full sm:w-auto">
          <input
            type="email"
            className="flex-1 h-10 px-3 py-1 rounded-l-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none"
            placeholder="Enter your email"
          />
          <button className="h-10 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;







