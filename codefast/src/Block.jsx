

// import React from "react";

// function PageLayout() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       {/* Access Button */}
//       <button className="bg-black text-white px-6 py-4 rounded-2xl shadow-lg text-xl mb-8">
//         Get Instant Access
//       </button>

//       {/* Main Content */}
//       <div className="flex items-center justify-center w-full max-w-6xl space-x-8">
//         {/* Left Section */}
//         <div className="flex flex-col gap-4 w-1/4">
//           <div className="bg-green-200 p-6 rounded-lg border-black border-2 shadow-md">
//             <h3 className="text-lg font-bold">Day1</h3>
//             <p className="font-bold text-gray-500">Content for the first div on the left.</p>
//           </div>
//           <div className="bg-red-200 p-6 rounded-lg border-black border-2 shadow-md">
//             <h3 className="text-lg font-bold">Day 2</h3>
//             <p>Content for the second div on the left.</p>
//           </div>
//         </div>

//         {/* Center (Mobile Component) */}
//         <div className="w-48 h-96 bg-black rounded-3xl relative overflow-hidden shadow-lg">
//           <img
//             src="https://imgs.search.brave.com/eeN2Z53Fd7YqfFIvQRXJwI8wZnRd9gNUYIZ4bbPfVnY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn" // Replace with your wallpaper URL
//             alt="Mobile Wallpaper"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col gap-4 w-1/4">
//           <div className="bg-yellow-100 p-6 rounded-lg border-black border-2 shadow-md">
//             <h3 className="text-lg font-bold">Day 3</h3>
//             <p>Content for the first div on the right.</p>
//           </div>
//           <div className="bg-blue-200 p-6 rounded-lg border-black border-2 shadow-md">
//             <h3 className="text-lg font-bold">Day 4</h3>
//             <p>Content for the second div on the right.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PageLayout;


import React from "react";

function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Access Button */}
      <button className="bg-black text-white px-6 py-4 rounded-2xl shadow-lg text-xl mb-8">
        Get Instant Access
      </button>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <div className="bg-green-200 p-6 rounded-lg border-black border-2 shadow-md">
            <h3 className="text-lg font-bold">Day1</h3>
            <p className="font-bold text-gray-500">
              Content for the first div on the left.
            </p>
          </div>
          <div className="bg-red-200 p-6 rounded-lg border-black border-2 shadow-md">
            <h3 className="text-lg font-bold">Day 2</h3>
            <p>Content for the second div on the left.</p>
          </div>
        </div>

        {/* Center (Mobile Component) */}
        <div className="w-72 h-96 bg-black rounded-3xl relative overflow-hidden shadow-lg">
          <img
            src="https://imgs.search.brave.com/eeN2Z53Fd7YqfFIvQRXJwI8wZnRd9gNUYIZ4bbPfVnY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn"
            alt="Mobile Wallpaper"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <div className="bg-yellow-100 p-6 rounded-lg border-black border-2 shadow-md">
            <h3 className="text-lg font-bold">Day 3</h3>
            <p>Content for the first div on the right.</p>
          </div>
          <div className="bg-blue-200 p-6 rounded-lg border-black border-2 shadow-md">
            <h3 className="text-lg font-bold">Day 4</h3>
            <p>Content for the second div on the right.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
