// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHome, FaCog, FaSignInAlt, FaUserPlus, FaBookOpen, FaAmbulance, FaBell } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function HeroSection() {
  return (
    <>
      {/* Transparent Navbar */}
      <div className="fixed top-0 left-0 w-full text-white z-50 px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-bold text-2xl text-white">SmartCity Connect</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 text-lg font-semibold">
          {[
            { label: "Home", icon: <FaHome /> },
            { label: "Complaints", icon: <FaBookOpen /> },
            { label: "Emergency", icon: <FaBell /> },
            { label: "Services", icon: <FaCog /> },
          ].map(({ label, icon }) => (
            <a
              href="#"
              key={label}
              className="relative group flex items-center gap-1 px-1"
            >
              <span className="flex items-center gap-1 relative">
                {icon}
                <span>{label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-out"></span>
              </span>
            </a>
          ))}

          <button className="flex items-center gap-1 bg-transparent border border-white px-4 py-1 rounded hover:bg-white hover:text-blue-900 transition">
            <FaSignInAlt />
            Login
          </button>

          <button className="flex items-center gap-1 bg-white text-blue-900 px-4 py-1 rounded hover:bg-transparent border hover:text-white transition">
            <FaUserPlus />
            Register
          </button>
        </div>
      </div>

      {/* Hero Section with GIF Background */}
      <div
        className="min-h-screen pt-24 text-white flex flex-col justify-center items-center px-4 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://giffiles.alphacoders.com/212/212876.gif')`,
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        <div className="relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SmartCity Connect
          </motion.h1>

          <p className="text-lg md:text-2xl mb-6">Your City, Smarter</p>

          <div className="flex gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg">
              Report an Issue
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-lg">
              Emergency Help
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
