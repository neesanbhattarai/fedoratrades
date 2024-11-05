import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/banner.jpeg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl bg-black font-semibold mb-6">FREE QUOTE AND MEASURE</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Discover how our expert team can provide you with the best solutions for your needs. 
            Contact us for a free quote and take advantage of our professional services tailored to 
            your requirements. We look forward to working with you and providing exceptional value.
          </p>
          <Link href="/EnquireUs" className="bg-black text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-gray-700">
            Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
