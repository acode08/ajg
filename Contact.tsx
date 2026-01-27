'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold px-10 py-4 border-4 border-black bg-white tracking-wider">
            CONTACT
          </h2>
        </div>

        {/* Description */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-gray-700 text-sm leading-relaxed font-light">
            Feel free to reach out through any of these channels. I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px w-24 bg-gray-400"></div>
          <div className="mx-6">
            <svg width="60" height="20" viewBox="0 0 60 20">
              <path d="M5 10 L15 5 L25 10 L35 5 L45 10 L55 5" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="h-px w-24 bg-gray-400"></div>
        </div>

        {/* Contact Links - Clean & Smooth */}
        <div className="max-w-xl mx-auto space-y-6 mb-12">
          
          {/* Email */}
          <a 
            href="mailto:ajskie438@gmail.com"
            className="flex items-center space-x-4 p-4 border-b border-gray-300 hover:bg-gray-50 transition-colors group"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
              <Mail className="w-5 h-5 text-gray-700" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-light">Email</p>
              <p className="text-sm text-gray-900 font-normal">ajskie438@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a 
            href="tel:+639123456789"
            className="flex items-center space-x-4 p-4 border-b border-gray-300 hover:bg-gray-50 transition-colors group"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
              <Phone className="w-5 h-5 text-gray-700" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-light">Phone</p>
              <p className="text-sm text-gray-900 font-normal">+63 991 575 4383</p>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-center space-x-4 p-4 border-b border-gray-300">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
              <MapPin className="w-5 h-5 text-gray-700" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-light">Location</p>
              <p className="text-sm text-gray-900 font-normal">Davao City, Philippines</p>
            </div>
          </div>

        </div>

        {/* Social Media Links */}
        <div className="text-center mb-8">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-6 font-light">Connect with me</p>
          <div className="flex justify-center space-x-4">
            
            {/* Facebook */}
            <a
              href="https://facebook.com/aj.gadi.5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dripxz.aj/?igsh=MTYyeWhqYnpqMm1pMw%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/acode08"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

           

          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-black text-white mt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          
          {/* Back to Top */}
          <div className="text-center mb-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs tracking-widest hover:text-gray-400 transition-colors flex flex-col items-center mx-auto"
            >
              <span className="text-2xl mb-2">↑</span>
              <span>BACK TO TOP</span>
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-400 font-light">
            <p>© 2026 Albert Joseph Gadi. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </section>
  );
}