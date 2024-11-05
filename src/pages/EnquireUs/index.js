import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const EnquireUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
    address: '',
    workType: '',
    message: '',
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [transitionClass, setTransitionClass] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,

      address: formData.address,
      workType: formData.workType,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        'service_46vmha9',  // Updated service key
        'template_dxuci9k', // Updated template key
        emailParams,
        '1h-hP1d_9YXmGipTF' // Your public key (replace if it's different)
      );

      if (response.status === 200) {
        setIsPopupVisible(true);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send enquiry. Please try again later.');
    }
  };

  const handlePopupClose = () => {
    setTransitionClass('slide-out');
    setTimeout(() => {
      setIsPopupVisible(false);
      router.replace('/');
    }, 500);
  };

  const SuccessPopup = ({ onClose }) => (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${transitionClass}`}>
      <div className="bg-white p-6 rounded shadow-md text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="text-2xl font-bold mb-2">Success</h2>
        <p>Your enquiry is submitted successfully, and we will get back to you within 1-2 business days.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4 gap-8">
      {/* Contact Information Box */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg space-y-8 md:space-y-12">
        <h2 className="text-4xl font-bold mb-6">CONTACT INFORMATION</h2>
        {/* Location */}
        <div className="flex items-start space-x-6 md:space-x-8">
          <FaMapMarkerAlt className="text-black text-6xl md:text-7xl" />
          <div className="text-lg md:text-xl">
            <div className="font-semibold mb-1">Location</div>
            <div>Melbourne, Australia</div>
          </div>
        </div>
        {/* Email */}
        <div className="flex items-center space-x-6 md:space-x-8">
          <FaEnvelope className="text-black text-6xl md:text-7xl" />
          <div className="text-lg md:text-xl">
            <div className="font-semibold mb-1">Email</div>
            <a href="mailto:fedoratrades@gmail.com" className="text-blue-600 underline">fedoratrades@gmail.com</a>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-center space-x-6 md:space-x-8">
          <FaPhone className="text-black text-6xl md:text-7xl transform rotate-90" />
          <div className="text-lg md:text-xl">
            <div className="font-semibold mb-1">Phone Number</div>
            <a href="tel:+1234567890" className="text-blue-600 underline">0450737210</a>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg space-y-8">
        <h2 className="text-4xl font-bold mb-6 text-center bg-black text-white py-3">Enquire Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full"
            required
          />
          <select
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full"
            required
          >
            <option value="" disabled>Select Work Type</option>
            <option value="Carpet">Carpet</option>
            <option value="Carpet Tile">Carpet Tile</option>
            <option value="Vinyl">Vinyl</option>
            <option value="Hybrid Flooring">Hybrid Flooring</option>
            <option value="Painting">Painting</option>
            <option value="CCTV Installation">CCTV Installation</option>
          </select>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full h-32"
            required
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-lg w-full hover:bg-gray-800 transition duration-200"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
      {isPopupVisible && <SuccessPopup onClose={handlePopupClose} />}
    </div>
  );
};

export default EnquireUs;
