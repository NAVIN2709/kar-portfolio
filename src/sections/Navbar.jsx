import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  const linkClasses = ({ isActive }) =>
    `transition ${
      isActive
        ? "underline underline-offset-4 font-semibold text-[#041A36]"
        : "hover:underline"
    }`;

  return (
    <>
      {/* Top Header Section */}
      <div className="w-full bg-[#062245] py-6 px-4 text-white flex flex-col items-center">

        {/* Logo + Lab Heading */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/NITT_logo.png/250px-NITT_logo.png"
            alt="Institute Logo"
            className="w-20 h-20 object-contain"
          />

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
              Printed Electronics Lab
            </h1>
            <p className="text-lg mt-1 opacity-90">
              Department of Materials Engineering
            </p>
            <p className="text-lg -mt-1 opacity-90">
              National Institute of Technology, Tiruchirapalli
            </p>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="relative w-full flex justify-center mt-6">
          <div className="bg-white text-[#07214B] px-8 py-3 rounded-2xl shadow-lg">
            <ul className="hidden md:flex space-x-10 text-lg font-medium">

              <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
              <li><NavLink to="/research" className={linkClasses}>Research</NavLink></li>
              <li><NavLink to="/facilities" className={linkClasses}>Facilities</NavLink></li>
              <li><NavLink to="/people" className={linkClasses}>People</NavLink></li>
              <li><NavLink to="/teaching" className={linkClasses}>Teaching</NavLink></li>
              <li><NavLink to="/publications" className={linkClasses}>Publications</NavLink></li>
              <li><NavLink to="/gallery" className={linkClasses}>Gallery</NavLink></li>
              <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>

            </ul>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="absolute right-5 top-1 md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {open && (
          <div className="bg-white w-[90%] mx-auto rounded-xl mt-3 shadow-lg md:hidden">
            <ul className="flex flex-col items-center py-4 space-y-3 text-[#07214B] font-medium text-lg">

              <li><NavLink to="/" className={linkClasses} onClick={handleLinkClick}>Home</NavLink></li>
              <li><NavLink to="/research" className={linkClasses} onClick={handleLinkClick}>Research</NavLink></li>
              <li><NavLink to="/facilities" className={linkClasses} onClick={handleLinkClick}>Facilities</NavLink></li>
              <li><NavLink to="/people" className={linkClasses} onClick={handleLinkClick}>People</NavLink></li>
              <li><NavLink to="/teaching" className={linkClasses} onClick={handleLinkClick}>Teaching</NavLink></li>
              <li><NavLink to="/publications" className={linkClasses} onClick={handleLinkClick}>Publications</NavLink></li>
              <li><NavLink to="/gallery" className={linkClasses} onClick={handleLinkClick}>Gallery</NavLink></li>
              <li><NavLink to="/contact" className={linkClasses} onClick={handleLinkClick}>Contact</NavLink></li>

            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
