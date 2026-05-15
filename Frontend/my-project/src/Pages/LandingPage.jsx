// src/pages/LandingPage.jsx

import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-bold text-indigo-700">
          VisionCaption AI
        </h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-indigo-600 text-indigo-700 hover:bg-indigo-50 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 py-16">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold leading-tight text-gray-800">
            AI Powered{" "}
            <span className="text-indigo-600">Image Captioning</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Upload images and instantly generate intelligent captions using
            advanced AI models.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-7 py-3 rounded-2xl shadow-lg hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="border border-indigo-600 text-indigo-700 px-7 py-3 rounded-2xl hover:bg-indigo-50 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="mb-10 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="AI"
            className="w-[500px] rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;