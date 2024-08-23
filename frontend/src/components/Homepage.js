import React from 'react';
import sampleimage from '../assets/sampleimage.jpg';
import Navbar from './Navbar';

const Homepage = () => {
  return (
    <>
    <Navbar/>
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
            <p className="text-lg font-medium">3-Blocks</p>
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
            <p className="text-lg font-medium">100+ Rooms</p>
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
            <p className="text-lg font-medium">70+ Beds</p>
          </div>
        </div>
      </div>

      {/* Cards Section with Alternating Layout */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16 mt-20 px-8">
        {/* Card 1 with updated text */}
        <div className="flex flex-col lg:flex-row items-start w-full">
          <div className="w-full lg:w-1/4 text-center lg:text-left lg:mr-6 flex items-center justify-center">
            <p className="text-5xl font-bold text-gray-700">
              <span className="font-bold">Start living your best life </span>
              <span className="font-bold text-green-500">from day one</span>
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full lg:w-3/4">
            <img src={sampleimage} alt="Modern Student Housing" className="rounded-lg mb-4 h-60 w-full object-cover" />
            <h2 className="text-2xl font-semibold mb-2">A-Block</h2>
            <div className="flex justify-end">
              <button className="text-green-500 text-2xl">&#8594;</button>
            </div>
          </div>
        </div>

        {/* Card 2 with text on the right side */}
        <div className="flex flex-col lg:flex-row-reverse items-start w-full">
          <div className="w-full lg:w-1/4 text-center lg:text-right lg:ml-6 flex items-center justify-center">
            <p className="text-lg font-medium text-gray-700">Text for Card 2</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full lg:w-3/4">
            <img src={sampleimage} alt="Co-living for Professionals" className="rounded-lg mb-4 h-60 w-full object-cover" />
            <h2 className="text-2xl font-semibold mb-2">B-Block</h2>
            <div className="flex justify-end">
              <button className="text-green-500 text-2xl">&#8594;</button>
            </div>
          </div>
        </div>

        {/* Card 3 with text on the left side */}
        <div className="flex flex-col lg:flex-row items-start w-full">
          <div className="w-full lg:w-1/4 text-center lg:text-left lg:mr-6 flex items-center justify-center">
            <p className="text-lg font-medium text-gray-700">Text for Card 3</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full lg:w-3/4">
            <img src={sampleimage} alt="Managed Apartments" className="rounded-lg mb-4 h-60 w-full object-cover" />
            <h2 className="text-2xl font-semibold mb-2">C-Block</h2>
            <div className="flex justify-end">
              <button className="text-green-500 text-2xl">&#8594;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Homepage;
