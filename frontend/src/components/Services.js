import React from "react";
const Services = React.forwardRef((props, ref) => (
    <div className="mb-8" ref={ref}>
      <h2 className="text-2xl font-semibold mb-4">Services</h2>
      <div className="flex flex-wrap gap-2">
        <div className="bg-gray-100 px-4 py-2 rounded-full shadow-md text-sm flex items-center">
          <img
            src="https://img.icons8.com/ios/50/000000/restaurant.png"
            alt="Hot Meals icon"
            className="w-4 h-4 mr-2"
          />
          Hot and Delicious Meals
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-full shadow-md text-sm flex items-center">
          <img
            src="https://img.icons8.com/ios/50/000000/wifi.png"
            alt="High-Speed WiFi icon"
            className="w-4 h-4 mr-2"
          />
          High-Speed WiFi
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-full shadow-md text-sm flex items-center">
          <img
            src="https://img.icons8.com/?size=100&id=I434I5q3Q0FG&format=png&color=000000"
            alt="Laundry Service icon"
            className="w-4 h-4 mr-2"
          />
          Laundry Service
        </div>
      </div>
    </div>
  ));
  
  export default Services;
  