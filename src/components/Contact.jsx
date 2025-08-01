import React from "react";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Information</h2>
      
      <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 text-lg">
        <div className="flex items-center justify-center gap-3">
          <FaUser className="text-blue-600" />
          <span>Muhammad Junaid</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <FaPhoneAlt className="text-blue-600" />
          <span>+92 3355099641</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <FaEnvelope className="text-blue-600" />
          <span>islamicdigitalshelf@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
