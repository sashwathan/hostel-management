import React from 'react';

const Tabs = ({ activeTab, scrollToSection }) => (
  <div className="flex border-b mb-4">
    <button
      className={`text-lg font-medium px-4 py-2 border-b-2 ${activeTab === 'occupancy' ? 'border-green-500 text-green-500' : 'border-transparent hover:border-gray-300 text-gray-600'}`}
      onClick={() => scrollToSection('occupancy')}
    >
      Occupancy
    </button>
    <button
      className={`text-lg font-medium px-4 py-2 border-b-2 ${activeTab === 'amenities' ? 'border-green-500 text-green-500' : 'border-transparent hover:border-gray-300 text-gray-600'}`}
      onClick={() => scrollToSection('amenities')}
    >
      Amenities
    </button>
    <button
      className={`text-lg font-medium px-4 py-2 border-b-2 ${activeTab === 'services' ? 'border-green-500 text-green-500' : 'border-transparent hover:border-gray-300 text-gray-600'}`}
      onClick={() => scrollToSection('services')}
    >
      Services
    </button>
    <button
      className={`text-lg font-medium px-4 py-2 border-b-2 ${activeTab === 'rules' ? 'border-green-500 text-green-500' : 'border-transparent hover:border-gray-300 text-gray-600'}`}
      onClick={() => scrollToSection('rules')}
    >
      Rules
    </button>
  </div>
);

export default Tabs;
