import React from 'react';
import { FaTwitter, FaFacebookSquare, FaInstagram, FaTiktok, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond in 1-2 business days.
            </h5>
            <div className="mt-6 mb-6 flex flex-wrap items-center">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full mr-2 focus:outline-none transform hover:scale-110 transition-transform duration-200" type="button">
                <FaTwitter size={28} />
              </button>
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full mr-2 focus:outline-none transform hover:scale-110 transition-transform duration-200" type="button">
                <FaFacebookSquare size={28} />
              </button>
              <button className="bg-white text-pink-500 shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full mr-2 focus:outline-none transform hover:scale-110 transition-transform duration-200" type="button">
                <FaInstagram size={28} />
              </button>
              <button className="bg-white text-black shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full mr-2 focus:outline-none transform hover:scale-110 transition-transform duration-200" type="button">
                <FaTiktok size={28} />
              </button>
              <button className="mt-4 flex items-center bg-black text-white px-4 py-2 rounded focus:outline-none">
                <FaPhone className="mr-2 rotate-90" size={28} /> +6145108987
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-lg font-bold mb-2">Our Services</span>
                <ul className="list-none">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Carpet</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Carpet Tiles</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Hybrid Flooring</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Vinyl</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Painting</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">CCTV Installation</a>
                  </li>
                 
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-lg font-bold mb-2">Useful Links</span>
                <ul className="list-none">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/AboutUs">About Us</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="OurGallery">Our Gallery</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/EnquireUs">Contact Us</a>
                  </li>
                </ul>
              </div>
             
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-lg font-bold mb-2">Company</span>
                <ul className="list-none">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-blueGray-500  text-lg font-semibold py-1">
              Copyright © {new Date().getFullYear()} Fedora Trades
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
