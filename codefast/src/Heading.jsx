// import React from "react";

// function Heading() {
//   return (
//     <div className="flex flex-col items-center justify-center mt-2">
//       <p className="text-9xl font-bold">
//         Learn to code in <br /> <del className="decoration-red-500">months</del> weeks
//       </p>
//     </div>
//   );
// }

// export default Heading;


import React from "react";

function Heading() {
  return (
    <div className="flex flex-col items-center justify-center mt-4 px-4">
      <p className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center">
        Learn to code in <br />
        <del className="decoration-red-500">months</del> weeks
      </p>
    </div>
  );
}

export default Heading;
