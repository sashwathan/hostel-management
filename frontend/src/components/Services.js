import React from "react";

const Services = React.forwardRef((props,ref) => (
  <div className="mb-8" ref={ref}>
    <h2 className="text-2xl font-semibold mb-4">Services</h2>
    <div className="flex flex-wrap gap-4">
      <div className="bg-gray-100 px-4 py-2 rounded-full shadow-md text-sm flex items-center">
        <img
          src="https://img.icons8.com/ios/50/000000/restaurant.png"
          alt="Hot Meals icon"
          className="w-6 h-6 mr-2"
        />
        {props.msg}
      </div>
      <div className="bg-gray-100 px-4 py-2 rounded-full shadow-md text-sm flex items-center">
        <img
          src="https://img.icons8.com/ios/50/000000/wifi.png"
          alt="High-Speed WiFi icon"
          className="w-6 h-6 mr-2"
        />
        High-Speed WiFi
      </div>
      <div className="bg-gray-100 px-4 py-2 rounded-full shadow-md text-sm flex items-center">
        <img
          src="https://img.icons8.com/ios/50/000000/air-conditioner.png"
          alt="Air Conditioning icon"
          className="w-6 h-6 mr-2"
        />
        Air Conditioning
      </div>
      <div className="bg-gray-100 px-4 py-2 rounded-full shadow-md text-sm flex items-center">
        <img
          src="https://img.icons8.com/?size=100&id=BH1dwMAiBfeP&format=png&color=000000"
          alt="24/7 Security icon"
          className="w-6 h-6 mr-2"
        />
        24/7 Security
        
      </div>      
    </div>
  </div>
));

export default Services;
