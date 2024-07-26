// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Tesla Clone</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
          <a href="#" className="hover:underline">Privacy & Legal</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Careers</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">Engage</a>
          <a href="#" className="hover:underline">Locations</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
