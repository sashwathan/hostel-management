import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Booking from './Booking';
import ImageCarousel from './ImageCarousel';
import HostelInfo from './HostelInfo';
import Tabs from './Tabs';
import Occupancy from './Occupancy';
import Amenities from './Amenities';
import Services from './Services';
import Rules from './Rules';

const Blocks = () => {
  const occupancyRef = useRef(null);
  const amenitiesRef = useRef(null);
  const servicesRef = useRef(null);
  const rulesRef = useRef(null);

  const [activeTab, setActiveTab] = useState('occupancy');

  const scrollToSection = (tabName) => {
    const refMap = {
      occupancy: occupancyRef,
      amenities: amenitiesRef,
      services: servicesRef,
      rules: rulesRef,
    };
    refMap[tabName].current.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tabName);
  };

  return (
    <>
      <Navbar />
      <h1 className='text-green-500 text-4xl text-center mb-8'>
        B-<span className='text-black font-bold'>Block</span>
      </h1>
      <div className="flex flex-col items-center max-w-7xl mx-auto p-8">
        <ImageCarousel />
        <HostelInfo />
        <div className="flex flex-col lg:flex-row flex-grow mx-auto p-8 gap-8 w-full max-w-7xl">
          <div className="lg:w-2/3 flex flex-col justify-between">
            <Tabs activeTab={activeTab} scrollToSection={scrollToSection} />
            <div className="mb-12">
              <Occupancy ref={occupancyRef} />
            </div>
            <div className="mb-12">
              <Amenities ref={amenitiesRef} />
            </div>
            <div className="mb-12">
              <Services ref={servicesRef} msg={'meals'}/>
            </div>
            <div className="mb-12">
              <Rules ref={rulesRef} />
            </div>
          </div>
          <div className="xl flex flex-col ">
            <Booking />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blocks;
