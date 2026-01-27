'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [mobileActiveCard, setMobileActiveCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'ScanED',
      description: 'Landing page with secure PIN-based access system for user authentication and management',
      category: 'coded',
      image: '/images/projects/scaned.jpg',
      tech: 'Next.js • Tailwind CSS • Authentication',
      hasImage: true,
      imageType: 'cover', // website screenshot
    },
    {
      id: 2,
      title: 'ScanED APP',
      description: 'QR code scanner with real-time parent notification via SMS and Telegram integration',
      category: 'coded',
      image: '/images/projects/scaned-app.jpg',
      tech: 'Flutter • Firebase • Telegram API',
      hasImage: true,
      imageType: 'contain', // phone mockup
    },
    {
      id: 3,
      title: 'POS System URBN CLO',
      description: 'Point of Sale system with inventory management for grocery store operations',
      category: 'coded',
      image: '/images/projects/pos-urbn.jpg',
      tech: 'PHP • MySQL • Inventory Management',
      hasImage: false,
      imageType: 'cover',
    },
    {
      id: 4,
      title: 'URBN CLO E-commerce',
      description: 'Full-featured e-commerce platform with order tracking and real-time notifications similar to Shopee',
      category: 'coded',
      image: '/images/projects/ecommerce.jpg',
      tech: 'React • Firebase • Payment Integration',
      hasImage: false,
      imageType: 'cover',
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const handleMobileClick = (projectId: number) => {
    if (mobileActiveCard === projectId) {
      setMobileActiveCard(null); // Close if already open
    } else {
      setMobileActiveCard(projectId); // Open this card
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold px-10 py-4 border-4 border-black bg-white tracking-wider">
            PORTFOLIO
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-3 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-8 py-2.5 text-sm font-semibold tracking-wider transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-black text-white'
                : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            ALL
          </button>
          <button
            onClick={() => setActiveTab('coded')}
            className={`px-8 py-2.5 text-sm font-semibold tracking-wider transition-all duration-300 ${
              activeTab === 'coded'
                ? 'bg-black text-white'
                : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            CODED
          </button>
          <button
            onClick={() => setActiveTab('designed')}
            className={`px-8 py-2.5 text-sm font-semibold tracking-wider transition-all duration-300 ${
              activeTab === 'designed'
                ? 'bg-black text-white'
                : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            DESIGNED
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => handleMobileClick(project.id)}
            >
              {/* Project Image/Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${project.imageType === 'contain' ? 'object-contain' : 'object-cover'}`}
                  onError={(e) => {
                    // Fallback to gradient background if image not found
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* "Coming Soon" Overlay - Only show if hasImage is false */}
                {!project.hasImage && (
                  <div 
                    className={`
                      absolute inset-0 bg-black/60 flex flex-col items-center justify-center
                      transition-opacity duration-500
                      lg:group-hover:opacity-0 lg:opacity-100
                      ${mobileActiveCard === project.id ? 'opacity-0' : 'opacity-100 lg:opacity-100'}
                    `}
                  >
                    <div className="text-center">
                      <p className="text-white text-sm font-light tracking-widest uppercase mb-1">Image</p>
                      <p className="text-white text-lg font-semibold tracking-wide mb-4">Coming Soon</p>
                      
                      {/* Mobile hint - Only visible on mobile */}
                      <p className="lg:hidden text-white text-xs font-light mt-4 animate-pulse">
                        Tap to view details
                      </p>
                    </div>
                  </div>
                )}

                {/* For projects with images, show tap hint on mobile */}
                {project.hasImage && (
                  <div 
                    className={`
                      lg:hidden absolute inset-0 bg-black/20 flex items-center justify-center
                      transition-opacity duration-300
                      ${mobileActiveCard === project.id ? 'opacity-0' : 'opacity-100'}
                    `}
                  >
                    <p className="text-white text-xs font-light animate-pulse">
                      Tap to view details
                    </p>
                  </div>
                )}
              </div>

              {/* Hover/Click Overlay - Details */}
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/95 to-gray-700/90 
                  flex flex-col items-center justify-center p-8
                  transition-all duration-500
                  lg:opacity-0 lg:group-hover:opacity-100
                  ${mobileActiveCard === project.id ? 'opacity-100' : 'opacity-0'}
                `}
              >
                
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  {project.title}
                </h3>

                {/* Thin divider line */}
                <div className="w-16 h-px bg-white/50 mb-4"></div>

                {/* Tech Stack - Thin, smooth */}
                <p className="text-[10px] text-gray-300 uppercase tracking-wider mb-4 font-light">
                  {project.tech}
                </p>

                {/* Description - Thin, smooth, professional */}
                <p className="text-xs text-gray-200 text-center leading-relaxed max-w-sm font-light">
                  {project.description}
                </p>

                {/* Mobile: Tap again to close hint */}
                <p className="lg:hidden text-[9px] text-gray-400 mt-6 font-light animate-pulse">
                  Tap again to close
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <p className="text-sm text-gray-600 font-light">
            And many more to come!
          </p>
        </div>

      </div>
    </section>
  );
}