import React from "react";
const Amenities = React.forwardRef((props, ref) => (
    <div className="mb-8" ref={ref}>
      <h2 className="text-2xl font-semibold mb-4 text-green-500">Amenities</h2>
      <div className="flex flex-wrap gap-2">
        <div className="bg-gray-100 px-4 py-2 rounded-full shadow-md text-sm flex items-center">
          <img
            src="https://img.icons8.com/ios/50/000000/bath.png"
            alt="Attached Washroom icon"
            className="w-4 h-4 mr-2"
          />
          Attached Washroom
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-full shadow-md text-sm flex items-center">
          <img
            src="https://img.icons8.com/ios/50/000000/wardrobe.png"
            alt="Spacious Cupboard icon"
            className="w-4 h-4 mr-2"
          />
          Spacious Cupboard
        </div>
      </div>
    </div>
  ));
  
  export default Amenities;
  