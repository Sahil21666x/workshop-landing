import React from "react";
import { motion } from "framer-motion";

const Header = ({ onRegisterClick }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 sm:py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 gap-3 sm:gap-0 text-center sm:text-left">
        
        {/* Left Section - Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Digiskill Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md mb-2 sm:mb-0"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide leading-tight">
              Digiskill Academy
            </h1>
            <p className="text-[11px] sm:text-xs text-blue-100 italic">
              Empowering Skills for the Digital Future
            </p>
          </div>
        </motion.div>

        {/* Right Section - CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRegisterClick}
          className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-blue-100 transition duration-300 w-full sm:w-auto"
        >
          Register Now 🚀
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
