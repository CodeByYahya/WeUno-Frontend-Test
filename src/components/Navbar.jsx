import { useState } from "react";
import Logo from "../assets/Logo.png";
import TikTok from "../assets/TikTok.png";
import Twitter from "../assets/Twitter.png";
import Insta from "../assets/Insta.png";
import Notification from "../assets/Notification.png";
import LanguageDropdown from "./DropDown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Social media icons data
  const socialIcons = [
    { src: TikTok, alt: "TikTok", className: "h-6" },
    { src: Insta, alt: "Instagram", className: "w-6" },
    { src: Twitter, alt: "Twitter", className: "h-6" },
    { src: Notification, alt: "Notifications", className: "h-6" },
  ];

  // Mobile menu links data
  const mobileLinks = [
    { id: "1", text: "DINE WITH US" },
    { id: "2", text: "PLAN YOUR WISIT" },
    { id: "3", text: "EVENTS" },
    { id: "4", text: "VIEW GROVES MAP" },
    { id: "5", text: "OUR STORY" },
    { id: "6", text: "CONTACT US" },
  ];

  return (
    <nav
      className={`absolute top-0 left-0 z-50 min-h-full  w-full ${
        isOpen && "bg-custom-gradient"
      } `}
    >
      <div className="mx-auto px-2  md:px-8">
        <div className="relative flex items-center justify-between px-3 md:px-5 h-16">
          {/* Brand/Logo */}
          <div className="flex-shrink-0">
            <img className="w-36 md:w-52" src={Logo} alt="Logo" />
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${
                  isOpen ? "hidden" : "block"
                } h-6 w-6 text-[#c7a361]`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
              <svg
                className={`${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 text-[#c7a361]`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 18L18 6" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
            <ul className="flex items-center space-x-4">
              {socialIcons.map((icon, index) => (
                <li
                  key={index}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <img
                    className={icon.className}
                    src={icon.src}
                    alt={icon.alt}
                  />
                </li>
              ))}
              <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <button className="h-10 px-10 rounded-xl bg-[#c7a361] text-white">
                  Log in
                </button>
              </li>
              <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <LanguageDropdown />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu with yellow background */}
      <div
        className={`md:hidden  ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <ul className="pt-2 pb-3 ">
          {mobileLinks.map((link, index) => (
            <li
              key={index}
              className={`${
                index === 0 && "border-t-[1px]"
              } text-white border-b-[1px] hover:bg-gray-700 hover:text-white block px-4 py-4 text-sm font-normal`}
            >
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
          <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium  mt-8 mb-3">
            <LanguageDropdown />
          </li>
          <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <button className="h-10 px-10 rounded-xl bg-[#c7a361] text-white">
              Log in
            </button>
          </li>
          
        </ul>
        <div className="flex absolute bottom-10 left-0">
        {socialIcons.map((icon, index) => (
                <span
                  key={index}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <img
                    className={icon.className}
                    src={icon.src}
                    alt={icon.alt}
                  />
                </span>
              ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
