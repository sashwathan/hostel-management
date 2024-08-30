import React from "react";
const Occupancy = React.forwardRef((props, ref) => (
    <div className="mb-8" ref={ref}>
      <h1 className='text-green-500 text-4xl text-center mb-8'>
        Available <span className='text-black font-bold'>Occupancies</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
          <div className="flex justify-center items-center mb-2">
            <img
              src="https://img.icons8.com/ios/50/000000/bed.png"
              alt="Double Occupancy icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-lg font-semibold">x2</span>
          </div>
          <h3 className="text-xl font-semibold mb-1">Double Occupancy</h3>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
          <div className="flex justify-center items-center mb-2">
            <img
              src="https://img.icons8.com/ios/50/000000/bed.png"
              alt="Triple Occupancy icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-lg font-semibold">x3</span>
          </div>
          <h3 className="text-xl font-semibold mb-1">Triple Occupancy</h3>
        </div>
      </div>
    </div>
  ));
  
  export default Occupancy;
  