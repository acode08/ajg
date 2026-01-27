'use client';

import { Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  // State for mobile click
  const [showBubble, setShowBubble] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Desktop: Diagonal Black Background */}
      <div 
        className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-black"
        style={{
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />
      
      {/* Desktop: Gray Background Left Side */}
      <div className="hidden lg:block absolute top-0 left-0 w-1/2 h-full bg-gray-50"></div>

      {/* Mobile: Full Screen Gray Background */}
      <div className="lg:hidden absolute inset-0 bg-gray-50"></div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-0">
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            
            {/* PHOTO SECTION */}
            <div className="relative flex items-center justify-center w-full lg:order-2 mb-8 lg:mb-0">
              {/* 
                PHOTO SIZING - SMALLER TO FIT BOX PERFECTLY!
                Mobile: 220x280px (smaller, fits better)
                Tablet: 250x320px
                Desktop: 280x360px
                All with visible borders on mobile!
              */}
              <div className="relative w-full max-w-[220px] sm:max-w-[250px] lg:max-w-[280px] group">
                {/* 
                  BOX CONTAINER with BORDER
                  Mobile: Gray border (visible box)
                  Desktop: No border
                  Mobile: Click to show bubble
                  Desktop: Hover to show bubble
                */}
                <div 
                  className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] 
                             border-4 border-gray-300 lg:border-transparent
                             overflow-hidden shadow-2xl 
                             cursor-pointer lg:cursor-default
                             transform group-hover:scale-105 transition-transform duration-300"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                  onClick={() => setShowBubble(!showBubble)}
                >
                  {/* 
                    IMAGE - SCALED TO FIT BOX PERFECTLY
                    Smaller photo that fits completely in the box
                    No overflow, no cutting!
                  */}
                  <img 
                    src="/images/projects/profile.jpg"
                    alt="Albert Joseph Gadi"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>

                {/* 
                  SPEECH BUBBLE
                  Mobile: Shows when clicked (showBubble state)
                  Desktop: Shows on hover (group-hover)
                */}
                <div 
                  className={`
                    absolute bottom-8 sm:bottom-10 lg:bottom-12 
                    -left-4 sm:-left-6 lg:-left-8 
                    bg-white px-3 sm:px-4 py-2 sm:py-2.5 
                    rounded-lg shadow-2xl 
                    max-w-[140px] sm:max-w-[160px] lg:max-w-[170px] 
                    z-20 
                    transition-all duration-300 ease-in-out
                    ${showBubble ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}
                    lg:opacity-0 lg:invisible
                    lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0
                  `}
                >
                  <p className="text-[9px] sm:text-[10px] text-gray-600 leading-relaxed font-light">
                    Hi, it's all smiles here! I always hope to put a good day and top tier work.
                  </p>
                  {/* Arrow */}
                  <div 
                    className="absolute top-1/2 -right-1.5 sm:-right-2 
                               w-2.5 h-2.5 sm:w-3 sm:h-3 
                               bg-white transform -translate-y-1/2 rotate-45"
                    style={{ boxShadow: '2px -2px 5px rgba(0,0,0,0.1)' }}
                  />
                </div>

                {/* Mobile: Tap Hint (shows only when bubble is hidden) */}
                {!showBubble && (
                  <div className="lg:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 animate-pulse">
                    Tap photo
                  </div>
                )}
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="relative w-full lg:order-1">
              {/* Mobile: Black background behind text */}
              <div className="lg:hidden absolute inset-0 -mx-6 bg-gradient-to-b from-gray-900 to-black -z-10 rounded-2xl"></div>
              
              <div className="space-y-4 lg:space-y-6 text-center lg:text-left py-8 lg:py-0">
                {/* Greeting */}
                <p className="text-sm sm:text-base text-white lg:text-gray-500">
                  Hi, I am
                </p>
                
                {/* Name */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white lg:text-gray-900 leading-[0.95] tracking-tight">
                  Albert Joseph<br />Gadi
                </h1>
                
                {/* Title */}
                <p className="text-sm sm:text-base text-gray-300 lg:text-gray-400">
                  Full-Stack Developer | Web & Mobile Apps
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
                  <a 
                    href="mailto:albertgadi@example.com"
                    className="w-11 h-11 sm:w-12 sm:h-12 
                               bg-gray-700 lg:bg-gray-800 
                               rounded-full flex items-center justify-center 
                               hover:bg-gray-600 lg:hover:bg-gray-700 
                               transition-colors shadow-lg"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                  
                  <a 
                    href="https://github.com/acode08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 
                               bg-gray-700 lg:bg-gray-800 
                               rounded-full flex items-center justify-center 
                               hover:bg-gray-600 lg:hover:bg-gray-700 
                               transition-colors shadow-lg"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  
                  {/* Facebook */}
           
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section - _ACODE */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-800 to-gray-900 py-6 sm:py-8 z-30">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
              _ACODE
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
              is a digital development brand focused on building scalable, production-ready web and mobile applications. We combine strong technical architecture, clean implementation, and intentional design to deliver reliable, user-focused solutions that support business growth and product success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}