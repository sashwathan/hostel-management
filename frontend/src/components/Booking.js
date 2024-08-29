import React, { useState } from "react";

const Booking = () => {
  const [formType, setFormType] = useState("visit"); // 'visit' or 'reserve'
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    collegeId: "",
    aadharNumber: "",
    residentialAddress: "",
    parentFatherName: "",
    parentMotherName: "",
    parentContactNumber: "",
    studentContactNumber: "",
    durationOfHostel: "",
  });
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    // Handle form submission logic
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="flex space-x-4 mb-4">
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-md ${
            formType === "visit"
              ? "bg-teal-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setFormType("visit")}
        >
          Schedule a Visit
        </button>
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-md ${
            formType === "reserve"
              ? "bg-teal-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setFormType("reserve")}
        >
          Reserve Now
        </button>
      </div>

      {formType === "visit" ? (
        // Schedule a Visit Form
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 flex items-center">
            <span className="mr-2">🇮🇳 +91</span>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              className="flex-1 p-2 border border-gray-300 rounded-md"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
          </div>
          <p className="mb-4 text-sm text-gray-500">
            We are accepting bookings for stay duration of minimum 3 months.
          </p>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="whatsappUpdates"
              checked={whatsappUpdates}
              onChange={(e) => setWhatsappUpdates(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="whatsappUpdates" className="text-sm">
              Get updates over WhatsApp
            </label>
          </div>
          <div className="mb-4 flex items-start">
            <input
              type="checkbox"
              id="termsAccepted"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="termsAccepted" className="text-sm">
              I have read and agreed to the{" "}
              <a href="#" className="text-teal-500">
                terms and conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-teal-500">
                privacy policy
              </a>{" "}
              and hereby confirm to proceed.
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-500 text-white rounded-md"
          >
            Schedule a Visit
          </button>
        </form>
      ) : (
        // Reserve Now Form
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="collegeId"
              placeholder="College ID Number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.collegeId}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="aadharNumber"
              placeholder="Aadhar Card Number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.aadharNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <textarea
              name="residentialAddress"
              placeholder="Residential Address"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.residentialAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="parentFatherName"
              placeholder="Father's Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.parentFatherName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="parentMotherName"
              placeholder="Mother's Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.parentMotherName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="parentContactNumber"
              placeholder="Parent Contact Number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.parentContactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="studentContactNumber"
              placeholder="Student Contact Number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.studentContactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="durationOfHostel"
              placeholder="Duration of Hostel Required (in months)"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.durationOfHostel}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 flex items-start">
            <input
              type="checkbox"
              id="termsAccepted"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="termsAccepted" className="text-sm">
              I have read and agreed to the{" "}
              <a href="#" className="text-teal-500">
                terms and conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-teal-500">
                privacy policy
              </a>{" "}
              and hereby confirm to proceed.
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-500 text-white rounded-md"
          >
            Reserve Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
