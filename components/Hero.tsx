'use client';

import { Mail, Github } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [showBubble, setShowBubble] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ── BACKGROUNDS ── */}
      <div className="hidden lg:block absolute inset-0 bg-gray-50" />
      <div
        className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-black"
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />
      <div className="lg:hidden absolute inset-0 bg-gray-50" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-stretch">

        {/* ── LEFT: TEXT (desktop) ── */}
        <div className="hidden lg:flex w-1/2 items-center justify-center pl-16 xl:pl-24">
          <div className="space-y-6 max-w-lg">
            <p className="text-sm text-gray-500">Hi, I am</p>
            {/* ✅ FIXED: 2-line name — responsive font size to prevent 3-line wrap */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight whitespace-nowrap">
              Albert Joseph<br />Gadi
            </h1>
            <p className="text-sm text-gray-400">Full-Stack Developer | Website & Mobile Apps</p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="mailto:albertgadi@example.com"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://github.com/acode08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* ── RIGHT: PHOTO (desktop) — centered in black side ── */}
        <div className="hidden lg:flex w-1/2 items-center justify-center pl-[8%]">
          <div className="relative group">
            <div
              className="relative w-[260px] xl:w-[300px] h-[340px] xl:h-[390px] overflow-hidden shadow-2xl cursor-default"
              style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
            >
              <img
                src="/images/projects/profile.jpg"
                alt="Albert Joseph Gadi"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>

            {/* Speech bubble — desktop hover */}
            <div className="absolute bottom-12 -left-8 bg-white px-4 py-2.5 rounded-lg shadow-2xl max-w-[170px] z-20 transition-all duration-300 ease-in-out opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <p className="text-[10px] text-gray-600 leading-relaxed font-light">
                Hi, it&apos;s all smiles here! I always hope to put a good day and top tier work.
              </p>
              <div
                className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white transform -translate-y-1/2 rotate-45"
                style={{ boxShadow: '2px -2px 5px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="lg:hidden flex flex-col min-h-screen">

          {/* Mobile: Photo top half — gray bg */}
          <div className="flex-1 flex items-end justify-center pt-24 pb-6 bg-gray-50">
            <div
              className="relative w-[200px] h-[260px] overflow-hidden shadow-xl cursor-pointer border-4 border-gray-200"
              onClick={() => setShowBubble(!showBubble)}
            >
              <img
                src="/images/projects/profile.jpg"
                alt="Albert Joseph Gadi"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
          </div>

          {/* Tap hint */}
          {!showBubble && (
            <p className="text-center text-xs text-gray-400 animate-pulse pb-2 bg-gray-50">
              Tap photo
            </p>
          )}

          {/* Speech bubble mobile */}
          {showBubble && (
            <div className="bg-gray-50 flex justify-center pb-2">
              <div className="bg-white px-4 py-2.5 rounded-lg shadow-lg max-w-[200px] text-center">
                <p className="text-[10px] text-gray-600 leading-relaxed font-light">
                  Hi, it&apos;s all smiles here! I always hope to put a good day and top tier work.
                </p>
              </div>
            </div>
          )}

          {/* Mobile: Text bottom half — dark bg */}
          <div className="bg-gray-900 flex flex-col items-center justify-center py-10 px-6 space-y-4">
            <p className="text-sm text-gray-400">Hi, I am</p>
            {/* ✅ FIXED: 2-line name on mobile too */}
            <h1 className="text-5xl font-bold text-white text-center leading-tight tracking-tight">
              Albert Joseph<br />Gadi
            </h1>
            <p className="text-sm text-gray-400 text-center">
              Full-Stack Developer | Website & Mobile Apps
            </p>

            {/* Icons */}
            <div className="flex items-center justify-center space-x-4 pt-2">
              <a
                href="mailto:albertgadi@example.com"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://github.com/acode08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors shadow-lg"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ── BOTTOM: _ACODE STRIP ── */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-800 to-gray-900 py-6 z-30">
        <div className="max-w-[1400px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-white mb-2">_ACODE</h2>
          <p className="text-gray-300 text-xs leading-relaxed max-w-3xl">
            is a digital development brand focused on building scalable, production-ready web and mobile applications. We combine strong technical architecture, clean implementation, and intentional design to deliver reliable, user-focused solutions that support business growth and product success.
          </p>
        </div>
      </div>

    </section>
  );
}