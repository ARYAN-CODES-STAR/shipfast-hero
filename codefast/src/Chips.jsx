

// import React from "react";

// function Chips() {
//   return (
//     <div className="flex flex-row items-center justify-center mt-8 gap-4">
//       {/* Chip 1 */}
//       <div className="bg-pink-100 text-pink-800 py-2 px-4 rounded-full flex items-center space-x-1">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
//           alt="Star"
//           className="h-5 w-5 rounded-full border-2 border-pink-400"
//         />
//         <span>Built by Aryan</span>
//       </div>

//       {/* Chip 2 */}
//       <div className="bg-pink-100 text-pink-800 py-2 px-4 rounded-full flex items-center gap-2">
//         <div className="flex -space-x-2">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
//             alt="Star"
//             className="h-5 w-5 rounded-full border-2 border-pink-400"
//           />
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/889/889221.png"
//             alt="Heart"
//             className="h-5 w-5 rounded-full border-2 border-pink-400"
//           />
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/889/889140.png"
//             alt="Like"
//             className="h-5 w-5 rounded-full border-2 border-pink-400"
//           />
//         </div>
//         <span>Used by 1,801+ entrepreneurs</span>
//       </div>
//     </div>
//   );
// }

// export default Chips;


import React from "react";

function Chips() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
      {/* Chip 1 */}
      <div className="bg-pink-100 text-pink-800 py-2 px-4 rounded-full flex items-center space-x-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
          alt="Star"
          className="h-5 w-5 rounded-full border-2 border-pink-400"
        />
        <span>Built by Aryan</span>
      </div>

      {/* Chip 2 */}
      <div className="bg-pink-100 text-pink-800 py-2 px-4 rounded-full flex items-center gap-2">
        <div className="flex -space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
            alt="Star"
            className="h-5 w-5 rounded-full border-2 border-pink-400"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/889/889221.png"
            alt="Heart"
            className="h-5 w-5 rounded-full border-2 border-pink-400"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/889/889140.png"
            alt="Like"
            className="h-5 w-5 rounded-full border-2 border-pink-400"
          />
        </div>
        <span>Used by 1,801+ entrepreneurs</span>
      </div>
    </div>
  );
}

export default Chips;
