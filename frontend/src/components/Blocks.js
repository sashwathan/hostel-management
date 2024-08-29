import React, { useRef, useState } from 'react';
import sampleimage1 from '../assets/ablock1.jpeg'; // Sample image 1
import sampleimage2 from '../assets/ablock2.jpeg'; // Sample image 2
import sampleimage3 from '../assets/ablock3.jpg'; // Sample image 3
import Navbar from './Navbar';
import Footer from './Footer';
import Booking from './Booking';

const Blocks = () => {
  const images = [sampleimage2, sampleimage1, sampleimage3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // State to manage current image index

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Refs for sections
  const occupancyRef = useRef(null);
  const amenitiesRef = useRef(null);
  const servicesRef = useRef(null);
  const rulesRef = useRef(null);

  // State to track active tab
  const [activeTab, setActiveTab] = useState('occupancy');

  const scrollToSection = (sectionRef, tabName) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tabName);
  };

  return (
    <>
      <Navbar />
      <h1 className='text-green-500 text-4xl text-center mb-8'>
        A-<span className='text-black font-bold'>Block</span>
      </h1>
      <div className="flex flex-col items-center max-w-7xl mx-auto p-8">
        {/* Image Carousel Section */}
        <div className="relative w-full max-w-7xl mb-8">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="rounded-lg w-full h-[500px] object-cover"
          />
          {/* Previous Button */}
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 transition"
          >
            &lt;
          </button>
          {/* Next Button */}
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 transition"
          >
            &gt;
          </button>
        </div>

        {/* Hostel Info Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-md mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-2">Warden: Mr. John Doe</h2>
          <p className="text-lg text-gray-700 mb-2">Phone: +91 98765 43210</p>
          <p className="text-lg text-gray-700">Total Rooms: 50</p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row flex-grow mx-auto p-8 gap-8 w-full max-w-7xl">
          {/* Left Side: Tabs and Sections */}
          <div className="lg:w-2/3 flex flex-col justify-between">
            {/* Tabs */}
            <div className="flex border-b mb-4">
              <button
                className={`text-lg font-medium px-4 py-2 border-b-2 ${activeTab === 'occupancy' ? 'border-green-500 text-green-500' : 'border-transparent hover:border-gray-300 text-gray-600'}`}
                onClick={() => scrollToSection(occupancyRef, 'occupancy')}
              >
                Occupancy
              </button>
              <button
                className={`text-lg font-medium px-4 py-2 border-b-2 ${activeTab === 'amenities' ? 'border-green-500 text-green-500' : 'border-transparent hover:border-gray-300 text-gray-600'}`}
                onClick={() => scrollToSection(amenitiesRef, 'amenities')}
              >
                Amenities
              </button>
              <button
                className={`text-lg font-medium px-4 py-2 border-b-2 ${activeTab === 'services' ? 'border-green-500 text-green-500' : 'border-transparent hover:border-gray-300 text-gray-600'}`}
                onClick={() => scrollToSection(servicesRef, 'services')}
              >
                Services
              </button>
              <button
                className={`text-lg font-medium px-4 py-2 border-b-2 ${activeTab === 'rules' ? 'border-green-500 text-green-500' : 'border-transparent hover:border-gray-300 text-gray-600'}`}
                onClick={() => scrollToSection(rulesRef, 'rules')}
              >
                Rules
              </button>
            </div>

            {/* Available Occupancies */}
            <div className="mb-8" ref={occupancyRef}>
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
                    <span className="text-lg font-semibold">x 2</span>
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
                    <span className="text-lg font-semibold">x 3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Triple Occupancy</h3>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8" ref={amenitiesRef}>
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

            {/* Services */}
            <div className="mb-8" ref={servicesRef}>
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
                    src="https://img.icons8.com/ios/50/000000/laundry.png"
                    alt="Laundry Service icon"
                    className="w-4 h-4 mr-2"
                  />
                  Laundry Service
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="mb-8" ref={rulesRef}>
              <h2 className="text-2xl font-semibold mb-4">Rules</h2>
              <ul className="list-disc list-inside">
                <li>No loud music after 10 PM.</li>
                <li>Visitors must register at the front desk.</li>
                <li>Keep common areas clean.</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Schedule Visit Form */}
          <div className="xl  flex flex-col ">
              <Booking />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blocks;
