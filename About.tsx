'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* ABOUT ME Header */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold px-10 py-4 border-4 border-black bg-white tracking-wider">
            ABOUT ME
          </h2>
        </div>

        {/* Description Text */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-gray-700 text-sm leading-relaxed">
             I am a full-stack web and mobile developer behind <strong>_acode</strong>, focused on building
    scalable, production-ready applications. My work blends clean, maintainable
    code with thoughtful UI/UX design to create digital products that are
    reliable, efficient, and built for real-world use.
          </p>
        </div>

        {/* Explore Button */}
        <div className="text-center mb-16">
          <button className="px-10 py-3 border-2 border-black text-black text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 tracking-wider">
            EXPLORE
          </button>
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

        {/* Services Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* DESIGN */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="1" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 tracking-wide">DESIGN</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              I can design the site based on your needs and suggestions. I can also design a site from scratch by 
              consulting with you during the job.
            </p>
          </div>

          {/* DEVELOPMENT */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 6l-4 6 4 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 6l4 6-4 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 4l-2 16" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 tracking-wide">DEVELOPMENT</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              I can design the site based on your needs and suggestions. I can also design a site from scratch by 
              consulting with you during the job.
            </p>
          </div>

          {/* MAINTENANCE */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 tracking-wide">MAINTENANCE</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              I can design the site based on your needs and suggestions. I can also design a site from scratch by 
              consulting with you during the job.
            </p>
          </div>

        </div>

        {/* Bottom Decorative Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px w-24 bg-gray-400"></div>
          <div className="mx-6">
            <svg width="60" height="20" viewBox="0 0 60 20">
              <path d="M5 10 L15 5 L25 10 L35 5 L45 10 L55 5" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="h-px w-24 bg-gray-400"></div>
        </div>

      </div>
    </section>
  );
}