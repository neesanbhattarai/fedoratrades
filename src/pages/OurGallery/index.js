import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { galleryItems } from '/src/assets/index'; // Ensure this path is correct

const OurGallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 20, // Duration of animations
      easing: 'ease-in-out', // Smooth animation easing
      once: true, // Animation occurs only once as you scroll down
      delay: 10, // Delay for fade-in effects
    });
  }, []);

  return (
    <div>
      <h1
        className="mt-16 mb-16 text-center bg-black text-2xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white"
        data-aos="flip-up" // Flip-up effect for heading
      >
        OUR EXCELLENCE IN OUR FIELD
      </h1>
      <section className="ourgallery mx-auto max-w-6xl">
        {galleryItems.map((item, index) => (
          <div key={index} className="mb-12">
            <h2
              className="text-2xl font-bold mb-6"
              data-aos="fade-left" // Fade-left effect for image headings
              data-aos-delay={index * 20} // Delay for each heading
            >
              {item.heading}
            </h2>
            <div className="flex flex-wrap -mx-2">
              {item.images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative w-full sm:w-1/2 lg:w-1/3 px-2 mb-4 group"
                  data-aos="fade-up" // Fade-up effect for images
                  data-aos-delay={(index * item.images.length + idx) * 20} // Delay for each image div
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-30 rounded-md group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
                  <img
                    src={image}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-64 object-cover rounded-md transition-transform duration-300 ease-in-out transform group-hover:scale-110 shadow-lg group-hover:shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurGallery;
