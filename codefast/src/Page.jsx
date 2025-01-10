// import React from "react";

// function Page() {
//   return (
//     <div className="flex flex-col items-center justify-center max-h-screen">
//       {/* Navbar */}
//       <div className="w-[50%] h-20 rounded-3xl mt-4 text-white bg-black flex items-center relative">
//         <div className="bg-pink-400 rounded-lg h-12 w-12 flex items-center justify-center font-bold ml-2">
//           &lt;/&gt;
//         </div>
//         {/* <div className='justify-around'><span>CodeFast</span> <span>AAAA</span> <span>nnndd</span> </div> */}
//         <div className="flex flex-row font-mono justify-around flex-grow gap-4">
//           <span>Reviews</span>
//           <span>Pricing</span>
//           <span>FAQ</span>
//         </div>

//         <button className="bg-white text-black px-6 py-3 rounded-xl mr-4 font-bold">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Page;


// import React from "react";

// function Page() {
//   return (
//     <div className="flex flex-col items-center justify-center max-h-screen">
//       {/* Navbar */}
//       <div className="w-[90%] sm:w-[70%] lg:w-[50%] h-20 rounded-3xl mt-4 text-white bg-black flex items-center relative">
//         <div className="bg-pink-400 rounded-lg h-12 w-12 flex items-center justify-center font-bold ml-2">
//           &lt;/&gt;
//         </div>
//         <div className="hidden sm:flex flex-row font-mono justify-around flex-grow gap-4">
//           <span>Reviews</span>
//           <span>Pricing</span>
//           <span>FAQ</span>
//         </div>
//         <button className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-xl mr-2 sm:mr-4 font-bold">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Page;


import React, { useState } from "react";

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      {/* Navbar */}
      <div className="w-full md:w-[50%] h-20 rounded-3xl mt-4 text-white bg-black flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="bg-pink-400 rounded-lg h-12 w-12 flex items-center justify-center font-bold">
          &lt;/&gt;
        </div>

        {/* Menu Items */}
        <div
          className={`absolute top-20 left-0 w-full md:w-auto bg-black md:bg-transparent md:static flex flex-col md:flex-row items-center gap-4 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <span className="text-white hover:text-gray-300">Reviews</span>
          <span className="text-white hover:text-gray-300">Pricing</span>
          <span className="text-white hover:text-gray-300">FAQ</span>
        </div>

        {/* Hamburger Icon */}
        <button
          className="text-white md:hidden flex items-center"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Login Button */}
        <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hidden md:block">
          Login
        </button>
      </div>
    </div>
  );
}

export default Page;
