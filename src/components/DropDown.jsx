import { useState } from "react";
import FlagUK from "../assets/Flag.png"; // Assuming you have the UK flag icon

const LanguageDropdown = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <li className="relative ">
      <button
        onClick={toggleLanguageDropdown}
        className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-white"
      >
          <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        <img src={FlagUK} alt="English" className="w-5 h-5" />
        <span>{selectedLanguage}</span>
      
      </button>

      {/* Dropdown Menu */}
      {isLanguageOpen && (
        <ul className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
          <li
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleLanguageChange("English")}
          >
            English
          </li>
          <li
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleLanguageChange("Spanish")}
          >
            Spanish
          </li>
          <li
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleLanguageChange("French")}
          >
            French
          </li>
        </ul>
      )}
    </li>
  );
};

export default LanguageDropdown;
