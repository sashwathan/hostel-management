import React, { useEffect, useState } from 'react';
import sampleimage from '../assets/sampleimage.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
  const [blocks, setBlocks] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [beds, setBeds] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    // Function to animate the numbers
    const animateCounter = (setter, target, duration) => {
      let start = 0;
      const increment = Math.ceil(target / (duration / 10));
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setter(start);
      }, 10);
    };

    // Start animations
    animateCounter(setBlocks, 3, 20000); // 3-Blocks in 2 seconds
    animateCounter(setRooms, 100, 1000); // 100+ Rooms in 2 seconds
    animateCounter(setBeds, 100, 1000); // 100+ Beds in 2 seconds
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Main Content Section */}
        <div className="flex flex-col items-center max-w-7xl mx-auto p-8">
          {/* Image Section with Text in Corner */}
          <div className="relative w-full max-w-7xl mb-8">
            <img
              src={sampleimage}
              alt="Happy people"
              className="rounded-lg w-full h-[500px] object-cover"
            />
            {/* Text Overlay in Corner */}
            <div className="absolute top-8 left-8 text-left">
              <h1 className="text-4xl font-bold text-slate-800 leading-tight mb-2">
                Multiple options. <br /> Zero judgements passed.
              </h1>
              <p className="text-lg text-black">
                Co-ed. Girls-only. Boys-only. <span className="font-semibold">All types</span> of residences available.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="max-w-7xl mx-auto flex justify-around text-center">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                />
              </svg>
              <p className="text-lg font-medium">{blocks}+ Blocks</p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h1v11h16V10h1V9a1 1 0 00-1-1h-4.828l-2-2H8.828l-2 2H4a1 1 0 00-1 1v1z"
                />
              </svg>
              <p className="text-lg font-medium">{rooms}+ Rooms</p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 12c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5z"
                />
              </svg>
              <p className="text-lg font-medium">{beds}+ Beds</p>
            </div>
          </div>
        </div>

        {/* Cards Section with Alternating Layout */}
        <div className="max-w-7xl mx-auto flex flex-col gap-16 mt-20 px-8">
          {/* Card 1 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:mr-6 flex items-center justify-center">
              <div className="space-y-4">
                <p className="text-3xl lg:text-5xl font-bold text-gray-700 mb-4">
                  Start living your best life <span className="text-green-500">from day one</span>
                </p>
                <p className="text-base lg:text-lg text-gray-700">
                  Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings.
                  Everything else - furniture, appliances, food - has already been taken care of. Our residence offers a seamless transition to your new home.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full lg:w-1/2">
              <img src={sampleimage} alt="Modern Student Housing" className="rounded-lg mb-4 h-80 w-full object-cover" />
              <h2 className="text-xl lg:text-2xl font-semibold mb-2">A-Block</h2>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">Warden: Mr. John Doe</p>
                <p className="text-sm font-medium text-gray-600">Phone: +91 98765 43210</p>
                <p className="text-sm font-medium text-gray-600">Total Rooms: 50</p>
              </div>
              <button onClick={()=>{navigate("/blocks")}} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                More Info
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start w-full">
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-6 flex items-center justify-center">
              <div className="space-y-4">
                <p className="text-3xl lg:text-5xl font-bold text-gray-700 mb-4">
                  Experience unparalleled comfort <span className="text-green-500">and convenience</span>
                </p>
                <p className="text-base lg:text-lg text-gray-700">
                  Our living spaces are designed with you in mind - spacious, well-equipped, and ready to move in. All you need to do is bring yourself and your essentials.
                  Enjoy a hassle-free move-in experience with everything you need already in place.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full lg:w-1/2">
              <img src={sampleimage} alt="Co-living for Professionals" className="rounded-lg mb-4 h-80 w-full object-cover" />
              <h2 className="text-xl lg:text-2xl font-semibold mb-2">B-Block</h2>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">Warden: Mrs. Jane Smith</p>
                <p className="text-sm font-medium text-gray-600">Phone: +91 98765 43211</p>
                <p className="text-sm font-medium text-gray-600">Total Rooms: 45</p>
              </div>
              <button onClick={()=>{navigate("/blockb")}} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                More Info
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:mr-6 flex items-center justify-center">
              <div className="space-y-4">
                <p className="text-3xl lg:text-5xl font-bold text-gray-700 mb-4">
                  A home away from home <span className="text-green-500">with everything you need</span>
                </p>
                <p className="text-base lg:text-lg text-gray-700">
                  Whether you're studying or working, our accommodations provide the perfect environment to focus on what matters most.
                  With our comprehensive facilities and supportive staff, you'll have everything you need to thrive in your new home.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full lg:w-1/2">
              <img src={sampleimage} alt="Managed Apartments" className="rounded-lg mb-4 h-80 w-full object-cover" />
              <h2 className="text-xl lg:text-2xl font-semibold mb-2">C-Block</h2>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">Warden: Mr. Alex Brown</p>
                <p className="text-sm font-medium text-gray-600">Phone: +91 98765 43212</p>
                <p className="text-sm font-medium text-gray-600">Total Rooms: 60</p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300" onClick={()=>{navigate("/blockc")}}>
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Homepage;