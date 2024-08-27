import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Faculty = () => {
  // Dummy data for the cards
  const wardenData = [
    { name: 'Warden Name 1', phone: '123-456-7890', block: 'Block A' },
    { name: 'Warden Name 2', phone: '123-456-7891', block: 'Block B' },
    { name: 'Warden Name 3', phone: '123-456-7892', block: 'Block C' },
  ];

  const deputyWardenData = [
    { name: 'Deputy Warden 1', phone: '123-456-7893', block: 'Block A' },
    { name: 'Deputy Warden 2', phone: '123-456-7894', block: 'Block B' },
    { name: 'Deputy Warden 3', phone: '123-456-7895', block: 'Block C' },
  ];

  const dummyData = [
    { name: 'Dummy Name 1', phone: '123-456-7896', block: 'Block A' },
    { name: 'Dummy Name 2', phone: '123-456-7897', block: 'Block B' },
    { name: 'Dummy Name 3', phone: '123-456-7898', block: 'Block C' },
  ];

  // Card component
  const Card = ({ name, phone, block }) => (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-1">Phone: {phone}</p>
      <p className="text-gray-600">Block In Charge: {block}</p>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Wardens Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Wardens</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {wardenData.map((warden, index) => (
            <Card key={index} {...warden} />
          ))}
        </div>

        {/* Deputy Wardens Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Deputy Wardens</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {deputyWardenData.map((deputy, index) => (
            <Card key={index} {...deputy} />
          ))}
        </div>

        {/* Dummy Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Dummy Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {dummyData.map((dummy, index) => (
            <Card key={index} {...dummy} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faculty;
