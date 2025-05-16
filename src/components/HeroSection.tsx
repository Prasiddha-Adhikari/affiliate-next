'use client';

import { useState, useRef } from 'react';

export default function HeroSection() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlayVideo(true);
    // Play the video programmatically
    setTimeout(() => {
      videoRef.current?.play();
    }, 100); // small delay to ensure rendering
  };

  return (
    <section className="relative w-full max-h-screen bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-24 px-4 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Unlock Your Potential with <br className="hidden md:inline" />
            <span className="text-yellow-300">Online Courses</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-10 text-white/90">
            Whether you're into programming, design, or digital marketing, we offer a wide range of courses
            to help you reach your goals.
          </p>
          <button
            onClick={handlePlay}
            className="px-8 py-4 bg-yellow-400 text-indigo-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition duration-300"
          >
            Browse Courses
          </button>
        </div>

        {/* Right Video Frame */}
        <div className="mt-10 md:mt-0 md:ml-12 w-full md:w-1/2">
          {playVideo ? (
            <video
              ref={videoRef}
              controls
              className="w-full h-auto rounded-xl shadow-2xl"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full aspect-video bg-black/20 rounded-xl flex items-center justify-center text-white text-lg border border-white/30">
              Video will appear here
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
