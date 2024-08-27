import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Payments = () => {
  // Dummy data for the payment cards
  const paymentData = [
    { method: 'Hostel fee', dueDate: '2024-09-15', amount: '$150.00' },
    { method: 'Mess fee', dueDate: '2024-10-01', amount: '$200.00' },
    { method: 'Other amenities', dueDate: '2024-09-30', amount: '$100.00' },
  ];

  const pastPaymentsData = [
    { method: 'Hostel Fee', date: '2024-07-15', amount: '$150.00' },
    { method: 'Mess Fee', date: '2024-06-01', amount: '$200.00' },
    { method: 'Other amenities', date: '2024-05-30', amount: '$100.00' },
  ];

  const futurePaymentsData = [
    { method: 'Hostel Fee', dueDate: '2024-12-15', amount: '$150.00' },
    { method: 'Mess Fee', dueDate: '2024-11-01', amount: '$200.00' },
    { method: 'Other amenities', dueDate: '2024-11-30', amount: '$100.00' },
  ];

  // Card component
  const PaymentCard = ({ method, dueDate, amount }) => (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-semibold">
        {method.charAt(0)}
      </div>
      <h3 className="text-xl font-semibold mb-2">{method}</h3>
      <p className="text-gray-600 mb-1">Due Date: {dueDate}</p>
      <p className="text-gray-600">Amount Due: {amount}</p>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Current Payments Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Current Payments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {paymentData.map((payment, index) => (
            <PaymentCard key={index} {...payment} />
          ))}
        </div>

        {/* Past Payments Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Past Payments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {pastPaymentsData.map((payment, index) => (
            <PaymentCard key={index} {...payment} />
          ))}
        </div>

        {/* Future Payments Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Future Payments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {futurePaymentsData.map((payment, index) => (
            <PaymentCard key={index} {...payment} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payments;
