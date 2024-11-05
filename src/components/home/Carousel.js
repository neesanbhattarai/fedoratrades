import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';

function CarouselComponent() {
  return (
    <div className="relative">
      <Carousel 
        autoPlay
        infiniteLoop
        interval={5000} // Set the interval to 5000 milliseconds (5 seconds)
        navButtonsAlwaysVisible
        showStatus={false} 
        emulateTouch 
        showThumbs={false}
      >
        <div className='w-full h-[36rem] md:h-[48rem] lg:h-[60rem] relative'>
          <img 
            src="./header1.jpg" 
            alt="header one" 
            className='w-full h-full object-cover'
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        </div>
        <div className='w-full h-[36rem] md:h-[48rem] lg:h-[60rem] relative'>
          <img 
            src="./header2.jpg" 
            alt="header 2" 
            className='w-full h-full object-cover'
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        </div>
        <div className='w-full h-[36rem] md:h-[48rem] lg:h-[60rem] relative'>
          <img 
            src="./header3.jpg" 
            alt="header 3" 
            className='w-full h-full object-cover'
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        </div>
      </Carousel>
      <div className="absolute inset-0 flex items-center justify-center text-[#e1eae4] z-0">
        <div className="text-center">
          {/* Apply fade-left animation to the text with a 100ms delay */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4" data-aos="fade-left" data-aos-delay="100">
            Transform your home with professional services.
          </h1>
          {/* Apply fade-right animation to the button with a 100ms delay */}
          <Link href="/EnquireUs">
            <button className="px-4 py-2 bg-black text-white text-lg font-semibold rounded hover:bg-gray-500" data-aos="fade-right" data-aos-delay="100">
              Enquire for Free Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
