import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Welcome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of 1 second
      easing: 'ease-in-out', // Smooth animation easing
      once: true, // Animation occurs only once as you scroll down
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h2
        className="text-3xl font-bold mt-4 mb-4"
        data-aos="fade-up" // Apply fade-up animation
        data-aos-duration="1000" // Duration of 1 second
      >
      WELCOME TO FEDORA TRADES
      </h2>
      <p
        className="text-lg"
        data-aos="zoom-out" // Apply zoom-out animation
        data-aos-duration="1000" // Duration of 1 second
      >
       Welcome to Fedora Trades, where quality meets reliability. As a trusted service provider, we specialize in transforming your spaces with our wide range of services. Whether you're looking to enhance the comfort of your home or the functionality of your business, we have the expertise to deliver exceptional results.

Our flooring solutions, including carpets, carpet tiles, hybrid flooring, and vinyl, are designed to meet the highest standards of durability and style, giving your interiors a fresh and modern look. In addition, our professional painting services breathe new life into your walls, ensuring a pristine finish that reflects your taste and personality.

At Fedora Trades, safety is a priority. That's why we offer state-of-the-art CCTV installation services, providing peace of mind by securing your premises. Our experienced electricians are ready to handle all your electrical needs, ensuring your systems are safe, efficient, and up to code. Trust Fedora Trades for comprehensive, high-quality services that cater to your every need.
      </p>
    </div>
  );
};

export default Welcome;
