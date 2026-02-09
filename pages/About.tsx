
import React from 'react';
import { BismillahSVG } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <div className="about-page flex flex-col">
      {/* Hero */}
      <section className="about-hero bg-white py-20">
        <div className="hero-container container mx-auto px-4 md:px-8 text-center">
          <h1 className="hero-title text-5xl font-bold text-[#1B5E20] mb-8">Our Mission & Story</h1>
          <p className="hero-description text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Al Mo'assis Learning Center was founded with one clear mission: to make Qur'an and Tajweed learning easy, engaging, and effective for learners of all ages across the globe.
          </p>
        </div>
      </section>

      {/* Story & Approach */}
      <section className="about-story py-20 bg-gray-50">
        <div className="story-container container mx-auto px-4 md:px-8">
          <div className="story-content max-w-4xl mx-auto space-y-12">
            <div className="story-card bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="card-title text-3xl font-bold mb-6 text-gray-900">Why We Started</h2>
              <p className="card-text text-lg text-gray-600 leading-relaxed mb-6">
                We understand that many people—both children and adults—struggle with Tajweed. The rules can feel complex, overwhelming, or difficult to apply in real recitation. 
              </p>
              <p className="card-text text-lg text-gray-600 leading-relaxed">
                That is why we developed a specialized teaching method that simplifies Tajweed into clear, practical steps, making it easier to understand and implement in everyday reading.
              </p>
            </div>

            <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Clear Instruction', icon: 'bx-bullseye', desc: 'Clear and structured Tajweed instruction for all levels.' },
                { title: 'Easy Explanations', icon: 'bx-smile', desc: 'Easy-to-understand explanations simplified for all ages.' },
                { title: 'Interactive Learning', icon: 'bx-joystick', desc: 'Interactive and engaging techniques that keep learners hooked.' },
                { title: 'Positive Vibes', icon: 'bx-heart', desc: 'Continuous encouragement and positive reinforcement.' }
              ].map((item, idx) => (
                <div key={idx} className="feature-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
                  <div className="feature-icon-wrapper w-12 h-12 bg-[#1B5E20]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`bx ${item.icon} feature-icon text-2xl text-[#1B5E20]`}></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title text-xl font-bold mb-2">{item.title}</h3>
                    <p className="feature-description text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section py-24 bg-white overflow-hidden">
        <div className="founder-container container mx-auto px-4 md:px-8">
          <div className="founder-content flex flex-col lg:flex-row items-center gap-16">
            <div className="founder-image lg:w-1/3">
              <div className="image-wrapper relative group">
                <div className="image-glow absolute inset-0 bg-[#1B5E20] rounded-full scale-95 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src="https://picsum.photos/id/1012/600/600" 
                  alt="Dr. Asim Khwaja" 
                  className="founder-photo rounded-full w-full max-w-sm mx-auto border-8 border-white shadow-2xl relative z-10"
                />
              </div>
              <div className="founder-info text-center mt-8">
                <h3 className="founder-name text-3xl font-bold text-[#1B5E20]">Dr. Asim Khwaja</h3>
                <p className="founder-title text-gray-500 font-medium">Founder & Principal</p>
                <div className="founder-socials flex justify-center space-x-4 mt-4">
                  <a href="#" className="social-link text-[#1B5E20] hover:text-[#FFD700] text-2xl"><i className='bx bxl-linkedin'></i></a>
                  <a href="#" className="social-link text-[#1B5E20] hover:text-[#FFD700] text-2xl"><i className='bx bxl-youtube'></i></a>
                </div>
              </div>
            </div>
            <div className="founder-bio lg:w-2/3 space-y-6">
              <h2 className="bio-title text-4xl font-bold text-gray-900">Meet our Founder</h2>
              <div className="bio-content prose prose-lg text-gray-600 max-w-none">
                <p>
                  Dr Asim Khwaja is a versatile individual with expertise in Islamic scholarship, education, science, and personal development. He holds a <strong>Ph.D. from Australia in Artificial Intelligence</strong> and a Masters from USA. Along with his worldly endeavors, he also pursued dars-e-nizami (traditional Islamic education).
                </p>
                <p>
                  Dr. Khwaja has served as an imam and Friday khateeb at various places in USA and Australia, including the University of Canberra. He holds certification in <strong>tajweed and qiraat</strong> in two riwaayaat from Qari Maulana Luqman Qadri.
                </p>
                <p>
                  He has been involved in dawat & tableegh for 30 years and currently heads the Decision Sciences group at the Karachi School of Business & Leadership (KSBL). His unique combination of modern academic excellence and traditional Islamic scholarship forms the backbone of Al Mo'assis.
                </p>
              </div>
              <div className="credentials-grid grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
                <div className="credential-item bg-gray-50 p-4 rounded-xl text-center">
                  <div className="credential-value text-2xl font-bold text-[#1B5E20]">Ph.D.</div>
                  <div className="credential-label text-xs text-gray-500 uppercase tracking-wide">Artificial Intelligence</div>
                </div>
                <div className="credential-item bg-gray-50 p-4 rounded-xl text-center">
                  <div className="credential-value text-2xl font-bold text-[#1B5E20]">30+ Yrs</div>
                  <div className="credential-label text-xs text-gray-500 uppercase tracking-wide">Teaching Experience</div>
                </div>
                <div className="credential-item bg-gray-50 p-4 rounded-xl text-center">
                  <div className="credential-value text-2xl font-bold text-[#1B5E20]">Certified</div>
                  <div className="credential-label text-xs text-gray-500 uppercase tracking-wide">Qiraat & Tajweed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
