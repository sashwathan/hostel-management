import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
    return (
        <>
        <Navbar/>
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                Contact <span className="text-green-500">Us</span>
            </h1>
            <div className="bg-white rounded-lg shadow-lg p-10">
                <div className="text-center mb-8 rounded-lg bg-gray-100 ">
                    <h2 className="text-2xl font-bold text-gray-800">
                    <span className='text-green-500 font-normal'>Hostel</span> Management
                    </h2>
                    <p className="text-gray-600">
                        20th Floor, Ireo Grand View Tower,<br />
                        Golf Course Extension Road, Sector 58<br />
                        Race course, CBE 641009
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Google Map */}
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2768455358525!2d77.08221121504589!3d28.467001682482843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19840dbf5c5d%3A0x81a1a75b632f0b36!2sIreo%20Grand%20View%20Tower%2C%20Sector%2058%2C%20Gurugram%2C%20Haryana%20122102%2C%20India!5e0!3m2!1sen!2sus!4v1636548794569!5m2!1sen!2sus"
                            width="100%"
                            height="600"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Stanza Living Location"
                        ></iframe>
                    </div>
                    {/* Contact Form */}
                    <div>
                        <form className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="first-name"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="last-name"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Select City</label>
                                <select
                                    id="city"
                                    name="city"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    required
                                >
                                    <option value="" disabled selected>Select City</option>
                                    {/* Add options for cities here */}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="locality" className="block text-sm font-medium text-gray-700">Select Locality</label>
                                <select
                                    id="locality"
                                    name="locality"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    required
                                >
                                    <option value="" disabled selected>Select Locality</option>
                                    {/* Add options for localities here */}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    className="h-4 w-4 text-green-600 border-gray-300 rounded"
                                    required
                                />
                                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                    By clicking on the button I agree to the <a href="#" className="text-green-500 hover:underline">Terms & Conditions</a>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600"
                            >
                                Connect
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ContactUs;
