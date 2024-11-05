import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  const handleNav = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-icon')) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (href) => {
    if (router.pathname !== href) {
      router.push(href);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full h-18 shadow-xl bg-white z-50">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/fedoralogo.png"
            alt="logo"
            width="200"
            height="70"
            className="cursor-pointer p-2"
          />
        </Link>
        <div className="hidden sm:flex items-center">
          <ul className="flex space-x-10">
            <li className="relative text-xl uppercase group">
              <Link href="/" >Home</Link>
              <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
            </li>
            <li className="relative text-xl uppercase group">
              <Link href="/AboutUs" >About Us</Link>
              <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
            </li>
            <li className="relative text-xl uppercase group">
              <Link href="/OurGallery">Our Gallery</Link>
              <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
            </li>
           
            <li>
              <Link href="/EnquireUs">
              <button
                onClick={() => handleLinkClick('/EnquireUs')}
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-600 flex items-center"
              >
                CONTACT US
                <AiOutlineUser size={20} className="ml-2" />
              </button>
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="sm:hidden cursor-pointer pl-24 m-5 menu-icon"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        ref={menuRef}
        className={`fixed left-0 top-0 w-[70%] sm:hidden h-screen bg-[#282827] p-10 ease-in duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}
      >
        <div className="flex items-center mb-8">
          <Link href="/">
            <Image
              src="/fedoralogo.png"
              alt="logo"
              width="150"
              height="50"
              className="cursor-pointer bg-white p-2"
              
            />
          </Link>
        </div>
        <ul>
          <li className="py-4 text-xl text-white hover:text-gray-200 transition-transform duration-300 transform hover:scale-105">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className="py-4 text-xl text-white hover:text-gray-200 transition-transform duration-300 transform hover:scale-105">
            <Link href="/AboutUs" onClick={() => setMenuOpen(false)}>About Us</Link>
          </li>
          <li className="py-4 text-xl text-white hover:text-gray-200 transition-transform duration-300 transform hover:scale-105">
            <Link href="/OurGallery" onClick={() => setMenuOpen(false)}>Our Gallery</Link>
          </li>
          
          <li className="py-4 text-xl text-white hover:text-gray-200 transition-transform duration-300 transform hover:scale-105">
            <Link href="/EnquireUs" onClick={() => setMenuOpen(false)}>
                 Contact Us 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
