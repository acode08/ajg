'use client';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* SKILLS Header */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold px-10 py-4 border-4 border-black bg-white tracking-wider">
            SKILLS
          </h2>
        </div>

        {/* USING NOW Section */}
        <div className="mb-16">
          <h3 className="text-base font-bold mb-8 text-gray-900 tracking-wider">USING NOW:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            
            {/* HTML5 */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                alt="HTML5" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">HTML5</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Markup language for web structure
              </p>
            </div>

            {/* CSS3 */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                alt="CSS3" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">CSS3</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Styling & layout for web pages
              </p>
            </div>

            {/* Tailwind CSS */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" 
                alt="Tailwind CSS" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">Tailwind CSS</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Utility-first CSS framework
              </p>
            </div>

            {/* JavaScript */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                alt="JavaScript" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">JavaScript</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Core language for web interactivity
              </p>
            </div>

            {/* TypeScript */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                alt="TypeScript" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">TypeScript</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Typed superset of JavaScript
              </p>
            </div>

            {/* React */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                alt="React" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">React</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                UI library for building interfaces
              </p>
            </div>

            {/* Next.js */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
                alt="Next.js" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">Next.js</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                React framework for production
              </p>
            </div>

            {/* Flutter */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" 
                alt="Flutter" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">Flutter</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Cross-platform mobile framework
              </p>
            </div>

            {/* Firebase */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
                alt="Firebase" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">Firebase</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Backend platform & database
              </p>
            </div>

            {/* PHP */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
                alt="PHP" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">PHP</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Server-side scripting language
              </p>
            </div>

            {/* MySQL */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                alt="MySQL" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">MySQL</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Relational database management
              </p>
            </div>

          </div>
        </div>

        {/* LEARNING Section */}
        <div className="mb-16">
          <h3 className="text-base font-bold mb-8 text-gray-900 tracking-wider">LEARNING:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            
            {/* Python - REPLACED SASS */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                alt="Python" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">Python</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Versatile programming language
              </p>
            </div>

            {/* Java - NEW */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
                alt="Java" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">Java</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Object-oriented programming
              </p>
            </div>

            {/* C++ */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
                alt="C++" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">C++</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                General-purpose programming
              </p>
            </div>

            {/* C */}
            <div className="flex flex-col items-center space-y-2 group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
                alt="C" 
                className="w-14 h-14 transition-transform group-hover:scale-110"
              />
              <p className="text-[10px] font-semibold text-gray-800 text-center uppercase tracking-wide">C</p>
              <p className="text-[8px] text-gray-900 text-center leading-relaxed font-normal">
                Low-level systems programming
              </p>
            </div>

          </div>
        </div>

        {/* LANGUAGES Section */}
        <div>
          <h3 className="text-base font-bold mb-8 text-gray-900 tracking-wider">LANGUAGES:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            
            {/* Tagalog/Bisaya */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">PH</span>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold text-gray-900 uppercase tracking-wide">TAGALOG/BISAYA</p>
                <p className="text-[9px] text-gray-600 mb-1">Native</p>
                <p className="text-[8px] text-gray-900 leading-relaxed font-normal">
                  First language, daily use
                </p>
              </div>
            </div>

            {/* English */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">EN</span>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold text-gray-900 uppercase tracking-wide">ENGLISH</p>
                <p className="text-[9px] text-gray-600 mb-1">Intermediate</p>
                <p className="text-[8px] text-gray-900 leading-relaxed font-normal">
                  Professional working proficiency
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}