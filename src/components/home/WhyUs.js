import React, { useEffect } from 'react';
import { FaSmile, FaRulerCombined, FaTools } from 'react-icons/fa'; // Importing icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with duration and once to animate only once
  }, []);

  return (
    <div
      className="w-full h-auto bg-cover bg-center text-white py-20 px-8"
      style={{
        backgroundImage: "url('/whyus.jpg')",
      }}
    >
      {/* Why Fedora Heading with Fade-in Effect */}
      <h2
        className="text-center mb-20 text-4xl font-semibold"
        data-aos="fade-in" // AOS fade-in effect for the heading
      >
        WHY FEDORA TRADES OVER ANY OTHER?
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center space-y-16 md:space-y-0">
        {/* Friendly Section */}
        <div
          className="flex flex-col items-center text-center px-4"
          data-aos="fade-up" // AOS fade-in effect for the icon section
          data-aos-delay="200" // Delay for fade-in
        >
          <FaSmile className="text-6xl text-yellow-400" /> {/* Friendly Icon */}
          <h3 className="text-2xl font-bold mt-4">Customer Friendly</h3>
          <p className="text-lg mt-2">
            We pride ourselves on our friendly approach, ensuring that all our customers feel valued and heard. Our team is here to help you every step of the way.
          </p>
        </div>

        {/* Measurement Section */}
        <div
          className="flex flex-col items-center text-center px-4"
          data-aos="fade-up"
          data-aos-delay="400" // Slightly more delay than the first
        >
          <FaRulerCombined className="text-6xl text-blue-400" /> {/* Measurement Icon */}
          <h3 className="text-2xl font-bold mt-4">Accurate Measurements</h3>
          <p className="text-lg mt-2">
            Precise measurements are crucial to a perfect fit. Our expert team takes accurate measurements to ensure that your project is flawless from the start.
          </p>
        </div>

        {/* Expert Installation Section */}
        <div
          className="flex flex-col items-center text-center px-4"
          data-aos="fade-up"
          data-aos-delay="600" // More delay to create a sequence
        >
          <FaTools className="text-6xl text-green-400" /> {/* Expert Installation Icon */}
          <h3 className="text-2xl font-bold mt-4">Expert Installation</h3>
          <p className="text-lg mt-2">
            Our installers are highly trained and experienced. They provide expert installation to ensure that your flooring or painting project looks professional and lasts for years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
