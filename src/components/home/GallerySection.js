import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const GallerySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 20, // Very fast animations
      easing: 'ease-in-out', // Smooth animation easing
      once: true, // Animation occurs only once as you scroll down
      delay: 10, // Minimal delay for fade-in effects
    });
  }, []);

  // Array of headings
  const headings = [
    'Carpet ',
    'Carpet Tile',
    'Vinyl',
    'Hybrid Flooring',
    'Painting',
    'CCTV installation',
  ];

  // Array of image sets (update with actual image paths for each heading)
  const imageSets = [
    ['/carpet1.jpg', '/carpet2.jpg', '/carpet3.jpg'],
    ['/ct1.jpg', '/ct2.jpg', '/ct3.jpg'],
    ['/vn1.jpg', '/vn2.jpg', '/vn3.jpg'],
    ['/hf1.jpg', '/hf2.jpg', '/hf3.jpg'],
    ['/pt1.jpg', '/pt2.jpg', '/pt3.jpg'],
    ['/cm1.jpg', '/cm2.jpg', '/cm3.jpg'],
  ];

  return (
    <div>
      <h1
        className="mt-16 mb-16 text-center bg-black text-2xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white"
        data-aos="flip-up" // Flip-up effect for heading
      >
        OUR SERVICES
      </h1>
      <section className="ourgallery mx-auto max-w-6xl">
        {headings.map((heading, index) => (
          <div key={index} className="mb-12">
            <h2
              className="text-2xl font-bold mb-6"
              data-aos="fade-left" // Fade-left effect for image headings
              data-aos-delay={index * 50} // Almost instant delay for each heading
            >
              {heading}
            </h2>
            <div className="flex flex-wrap -mx-2">
              {imageSets[index].map((image, idx) => (
                <div
                  key={idx}
                  className="relative w-full sm:w-1/2 lg:w-1/3 px-2 mb-4 group"
                  data-aos="fade-up" // Fade-up effect for images
                  data-aos-delay={(index * imageSets[index].length + idx) * 50} // Almost instant delay for each image div
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-30 rounded-md group-hover:opacity-50 transition-opacity duration-100 ease-in-out"></div>
                  <img
                    src={image}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-64 object-cover rounded-md transition-transform duration-100 ease-in-out transform group-hover:scale-105 shadow-lg group-hover:shadow-2xl"
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

export default GallerySection;
