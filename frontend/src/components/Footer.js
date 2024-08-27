import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hostel Management</h3>
          </div>
          <div>
            <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Team</li>
              <li className="mb-2">Investor Relations</li>
              <li className="mb-2">Media</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2">Blogs</li>
              <li className="mb-2">FAQs</li>
              <li className="mb-2">Refer and Earn</li>
              <li className="mb-2">House Rules</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2">T&C</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Partner With Us</li>
              <li className="mb-2">Cookie Policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <p className="text-sm">© 2024 | All Rights Reserved by Hostel Management | Sitemap</p>
          <div className="flex space-x-4">
            <FaFacebookF className="text-white hover:text-green-500 cursor-pointer" />
            <FaLinkedinIn className="text-white hover:text-green-500 cursor-pointer" />
            <FaInstagram className="text-white hover:text-green-500 cursor-pointer" />
            <FaYoutube className="text-white hover:text-green-500 cursor-pointer" />
          </div>
        </div>

        <p className="text-sm mt-4 text-gray-400">
          Images shown are for representational purposes only. Amenities depicted may or may not form a part of that individual property.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
