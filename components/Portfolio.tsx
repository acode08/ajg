'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [mobileActiveCard, setMobileActiveCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'ScanED',
      description: 'School attendance web portal with secure PIN-based authentication for real-time student monitoring and parent management.',
      category: 'coded',
      image: '/images/projects/scaned.jpg',
      tech: 'Next.js • Tailwind CSS • Authentication',
      hasImage: true,
      imageType: 'cover',
      link: 'https://www.scanedph.com/',
    },
    {
      id: 2,
      title: 'ScanED APP',
      description: 'QR code scanner app that instantly notifies parents via SMS and Telegram when their child enters or exits school.',
      category: 'coded',
      image: '/images/projects/scaned-app.jpg',
      tech: 'Flutter • Firebase • Telegram API',
      hasImage: true,
      imageType: 'contain',
      link: 'https://www.scanedph.com/',
    },
    {
      id: 3,
      title: 'Darkeum Music Studio',
      description: 'Booking system for a music rehearsal and recording studio — browse rooms, check rates, and reserve sessions instantly.',
      category: 'coded',
      image: '/images/projects/darkeum.jpg',
      tech: 'Next.js • Booking System • Vercel',
      hasImage: true,
      imageType: 'cover',
      link: 'https://darkeummusic.vercel.app/',
    },
    {
      id: 4,
      title: 'All at Home Health Care',
      description: 'Staff portal for VA health aides — monitors patient follow-ups and automates outreach calls using AI voice integration.',
      category: 'coded',
      image: '/images/projects/allathome.jpg',
      tech: 'React • AI Voice API • Automation',
      hasImage: true,
      imageType: 'cover',
      link: 'https://allathome-followup.vercel.app/',
    },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  const handleMobileClick = (projectId: number) => {
    setMobileActiveCard(prev => prev === projectId ? null : projectId);
  };

  const handleLinkClick = (e: React.MouseEvent, link?: string) => {
    if (link) {
      e.stopPropagation();
      window.open(link, '_blank', 'noopener,noreferrer');
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
          {['all', 'coded', 'designed'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-black text-white'
                  : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.map((project) => {
            const isActive = mobileActiveCard === project.id;

            return (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => handleMobileClick(project.id)}
              >
                {/* Project Image */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full ${project.imageType === 'contain' ? 'object-contain' : 'object-cover'}`}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                {/* Tap hint — mobile only, shown when not active */}
                {!isActive && (
                  <div className="lg:hidden absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                    <p className="text-white text-xs font-light animate-pulse">Tap to view details</p>
                  </div>
                )}

                {/* ✅ Overlay — absolute inset-0, clipped by parent overflow-hidden */}
                {/* Mobile: toggled by tap | Desktop: shown on hover */}
                <div
                  className={`
                    absolute inset-0 z-10
                    bg-gradient-to-t from-gray-900 via-gray-800/95 to-gray-700/90
                    flex flex-col items-center justify-center p-6 lg:p-8
                    transition-all duration-500
                    ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                  `}
                >
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3 text-center">{project.title}</h3>
                  <div className="w-12 lg:w-16 h-px bg-white/50 mb-3 lg:mb-4"></div>
                  <p className="text-[10px] text-gray-300 uppercase tracking-wider mb-3 lg:mb-4 font-light text-center">{project.tech}</p>
                  <p className="text-xs text-gray-200 text-center leading-relaxed max-w-sm font-light mb-4 lg:mb-5">{project.description}</p>
                  {project.link && (
                    <button
                      onClick={(e) => handleLinkClick(e, project.link)}
                      className="px-5 py-2 bg-white text-black text-xs font-semibold tracking-widest uppercase hover:bg-gray-200 transition-colors duration-200"
                    >
                      View Project →
                    </button>
                  )}
                  <p className="lg:hidden text-[9px] text-gray-400 mt-3 font-light animate-pulse">Tap again to close</p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <p className="text-sm text-gray-600 font-light">And many more to come!</p>
        </div>

      </div>
    </section>
  );
}