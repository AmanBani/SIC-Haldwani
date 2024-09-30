import React, { useEffect, useState } from 'react';
import RocketImage from '../assets/rocket.png'; // Ensure the path is correct

const HeaderContent = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      setScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className="w-full py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex items-center justify-center"
      style={{
        background: 'linear-gradient(90deg, #CDFFD8, #94B9FF)', // Gradient background
      }}
    >
      <div className="text-center flex-1">
        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
          <span className="block">Launch Your Startup</span>
          <span className="block text-blue-600">With Expert Guidance</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
          Join our Start-up Incubation Centre and turn your innovative ideas into successful businesses. Get access to mentorship, resources, and a thriving entrepreneurial community.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div
        className={`flex-shrink-0 transition-transform duration-300 ${
          scrollingUp ? 'translate-y-0' : '-translate-y-5'
        }`}
      >
        <img
          src={RocketImage}
          alt="Startup"
          className={`h-50 w-60 object-cover transition-transform duration-100 ${
            scrollingUp ? 'translate-y-0' : '-translate-y-60'
          }`} // Additional animation on the rocket
        />
      </div>
    </div>
  );
};

const HeaderPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll">
      <HeaderContent />
    </div>
  );
};

export default HeaderPage;