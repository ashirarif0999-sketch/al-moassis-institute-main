
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BismillahSVG, TESTIMONIALS, STATS } from '../constants.tsx';
import GradientButton from '../components/GradientButton';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="home-page flex flex-col">
      {/* Hero Section */}
      <section className="hero-section relative min-h-[95vh] flex items-center overflow-hidden pt-12">
        <div className="hero-bg absolute inset-0 z-0">
          <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1920"
            alt="Islamic Learning background"
            className="hero-image w-full h-full object-cover opacity-15 scale-105 animate-slow-zoom"
          />
        </div>

        <div className="hero-content container mx-auto px-4 md:px-8 relative z-20">
          <div className="hero-text max-w-4xl">
            <div className="bismillah-wrapper reveal" ref={addToRefs}>
              <BismillahSVG />
            </div>

            <div className="hero-badge reveal delay-200 inline-flex items-center space-x-2 bg-[#1B5E20]/10 text-[#1B5E20] px-6 py-2.5 rounded-full font-bold text-sm mb-10 uppercase tracking-[0.25em] shadow-sm glass-effect" ref={addToRefs}>
              <span className="badge-dot relative flex h-3 w-3">
                <span className="badge-dot-ping animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B5E20] opacity-75"></span>
                <span className="badge-dot-inner relative inline-flex rounded-full h-3 w-3 bg-[#1B5E20]"></span>
              </span>
              <span className="badge-text">More than just learning!</span>
            </div>

            <h1 className="hero-title reveal delay-300 text-6xl md:text-8xl font-bold leading-[1.05] mb-10 text-gray-900 tracking-tight" ref={addToRefs}>
              Teaching the Qur'an with <br />
              <span className="hero-highlight text-gradient-green relative italic font-serif">
                Love, Ease,
                <svg className="hero-underline absolute -bottom-4 left-0 w-full opacity-60" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C60 2 140 2 198 6" stroke="#FFD700" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span><br />
              & Excellence
            </h1>

            <p className="hero-description reveal delay-400 text-xl md:text-2xl text-gray-600 mb-14 leading-relaxed max-w-3xl font-light" ref={addToRefs}>
              Step into a supportive online environment where Tajweed is simplified into clear, practical steps. For children, teenagers, and adults — progress naturally, without pressure.
            </p>

            <div className="hero-actions reveal delay-500 flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-8" ref={addToRefs}>
              <GradientButton
                variant="primary"
                onClick={() => window.location.href = '/#/contact'}
                icon={<ArrowRight />}
              >
                Start Your Journey
              </GradientButton>
              <GradientButton
                variant="secondary"
                onClick={() => window.location.href = '/#/courses'}
              >
                Explore Method
              </GradientButton>
            </div>

            <div className="hero-features reveal delay-700 mt-20 flex flex-wrap gap-10 items-center text-gray-400 font-medium" ref={addToRefs}>
              <div className="hero-feature flex items-center space-x-3 hover:text-[#1B5E20] transition-colors cursor-default group">
                <div className="feature-icon-wrapper bg-[#1B5E20]/5 p-2 rounded-lg group-hover:bg-[#1B5E20]/10 transition-colors">
                  <i className='bx bx-globe feature-icon text-3xl text-[#1B5E20]'></i>
                </div>
                <span className="feature-text text-sm uppercase tracking-widest">Global Classes</span>
              </div>
              <div className="hero-feature flex items-center space-x-3 hover:text-[#1B5E20] transition-colors cursor-default group">
                <div className="feature-icon-wrapper bg-[#1B5E20]/5 p-2 rounded-lg group-hover:bg-[#1B5E20]/10 transition-colors">
                  <i className='bx bx-male-female feature-icon text-3xl text-[#1B5E20]'></i>
                </div>
                <span className="feature-text text-sm uppercase tracking-widest">All Age Groups</span>
              </div>
              <div className="hero-feature flex items-center space-x-3 hover:text-[#1B5E20] transition-colors cursor-default group">
                <div className="feature-icon-wrapper bg-[#1B5E20]/5 p-2 rounded-lg group-hover:bg-[#1B5E20]/10 transition-colors">
                  <i className='bx bx-certification feature-icon text-3xl text-[#1B5E20]'></i>
                </div>
                <span className="feature-text text-sm uppercase tracking-widest">Scholar Led</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="stats-section bg-white py-20 border-y border-gray-100 relative overflow-hidden">
        <div className="stats-container container mx-auto px-4 md:px-8">
          <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-12">
            {STATS.map((stat, idx) => (
              <div key={idx} className="stat-item reveal text-center group" ref={addToRefs}>
                <div className="stat-value text-5xl md:text-6xl font-bold text-[#1B5E20] mb-3 group-hover:scale-110 transition-transform inline-block">{stat.value}</div>
                <div className="stat-label text-gray-400 font-semibold uppercase tracking-[0.2em] text-[10px] md:text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Deep Dive */}
      <section className="methodology-section py-32 bg-white relative overflow-hidden">
        <div className="methodology-container container mx-auto px-4 md:px-8">
          <div className="methodology-content flex flex-col lg:flex-row items-center gap-24">
            <div className="methodology-text flex-1 space-y-10">
              <div className="methodology-header reveal" ref={addToRefs}>
                <span className="methodology-badge text-[#1B5E20] font-bold text-sm tracking-[0.3em] uppercase block mb-6">Our Methodology</span>
                <h2 className="methodology-title text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Tajweed Made <br /><span className="text-gradient-green">Intuitive & Simple</span></h2>
              </div>
              <div className="methodology-steps space-y-8">
                {[
                  { step: '01', title: 'Contextual Understanding', desc: 'We don\'t just teach rules; we teach the "why" behind every sound and rhythm.' },
                  { step: '02', title: 'Interactive Practicality', desc: 'Immediate application in recitation with real-time feedback using our digital tools.' },
                  { step: '03', title: 'Layered Progression', desc: 'Build confidence in small wins, ensuring no student ever feels overwhelmed.' }
                ].map((item, idx) => (
                  <div key={idx} className="methodology-step reveal flex gap-8 group" ref={addToRefs}>
                    <div className="step-number text-5xl font-black text-gray-100 group-hover:text-[#1B5E20]/10 transition-colors">{item.step}</div>
                    <div className="step-content">
                      <h4 className="step-title text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#1B5E20] transition-colors">{item.title}</h4>
                      <p className="step-description text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Completed Digital Classroom Mockup */}
            <div className="classroom-mockup flex-1 relative reveal" ref={addToRefs}>
              <div className="mockup-container relative z-10 bg-gray-900 rounded-[3rem] p-4 shadow-[0_50px_100px_rgba(27,94,32,0.15)] overflow-hidden border-[12px] border-white group">
                {/* Simulated Classroom Screen */}
                <div className="classroom-screen aspect-video relative rounded-2xl overflow-hidden bg-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1590076215667-874553527e71?auto=format&fit=crop&q=80&w=1200"
                    className="classroom-image w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    alt="Classroom"
                  />
                  {/* Floating Video Insets */}
                  <div className="student-video absolute top-4 right-4 w-32 md:w-48 aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 z-20">
                    <img src="https://picsum.photos/400/300?student" className="student-image w-full h-full object-cover" alt="Student" />
                  </div>

                  {/* Overlay Controls */}
                  <div className="classroom-controls absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
                    <div className="controls-left flex items-center space-x-3">
                      <div className="live-indicator bg-[#1B5E20] px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest animate-pulse flex items-center">
                        <span className="live-dot w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                        Live Session
                      </div>
                      <span className="instructor-name text-white/80 text-xs font-medium">Dr. Asim Khwaja</span>
                    </div>
                    <div className="controls-right flex space-x-2">
                      <div className="control-btn w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"><i className='bx bx-microphone'></i></div>
                      <div className="control-btn w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"><i className='bx bx-video'></i></div>
                      <div className="control-btn w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white"><i className='bx bx-phone-off'></i></div>
                    </div>
                  </div>

                  {/* Digital Whiteboard Highlight Effect */}
                  <div className="whiteboard-highlight absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-dashed border-[#FFD700]/60 rounded-lg pointer-events-none">
                    <div className="highlight-label absolute top-0 left-0 bg-[#FFD700] text-[#1B5E20] text-[8px] font-bold px-2 py-0.5 rounded-sm uppercase transform -translate-y-full">Tajweed Highlight</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="decorative-blur -top-12 -right-12 bg-[#FFD700]/20 w-64 h-64 rounded-full blur-3xl -z-10"></div>
              <div className="testimonial-card absolute -bottom-10 -left-10 glass-effect p-8 rounded-3xl shadow-2xl max-w-[280px] z-20 border border-white/50">
                <div className="testimonial-header flex items-center space-x-3 mb-4">
                  <div className="testimonial-avatar w-10 h-10 bg-[#1B5E20] rounded-xl flex items-center justify-center text-white shadow-lg">
                    <i className='bx bxs-quote-left testimonial-icon text-xl'></i>
                  </div>
                  <span className="testimonial-label text-xs font-bold text-gray-400 uppercase tracking-widest">Alumni Review</span>
                </div>
                <p className="testimonial-text text-[#1B5E20] font-bold leading-tight italic">"The clarity in Dr. Asim's method is unmatched. I learned more in 3 weeks than in 3 years elsewhere."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Experience Showcase */}
      <section className="digital-showcase py-32 bg-[#064E3B] text-white relative overflow-hidden">
        <div className="showcase-bg absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full -mr-[400px] -mt-[400px]"></div>
        <div className="showcase-container container mx-auto px-4 md:px-8">
          <div className="showcase-header text-center max-w-4xl mx-auto mb-24 reveal" ref={addToRefs}>
            <h2 className="showcase-title text-5xl md:text-6xl font-bold mb-8">The <span className="text-[#FFD700]">Digital Classroom</span> Reinvented</h2>
            <p className="showcase-description text-xl text-white/70 leading-relaxed">
              Forget boring video calls. We use a suite of high-tech tools designed specifically for Qur'anic instruction to ensure clarity of sound and visual precision.
            </p>
          </div>
          <div className="showcase-grid grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'bx-microphone', title: 'Studio-Grade Audio', desc: 'Crystal clear pronunciation feedback to catch every detail of your makharij.' },
              { icon: 'bx-laptop', title: 'Interactive Boards', desc: 'Collaborative digital whiteboards where teachers highlight Tajweed rules in real-time.' },
              { icon: 'bx-archive', title: 'Lesson Recordings', desc: 'Review your personal sessions anytime. Re-watch corrections to perfect your recitation.' }
            ].map((tool, idx) => (
              <div key={idx} className="tool-card reveal bg-white/5 p-12 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group" ref={addToRefs}>
                <div className="tool-icon-wrapper w-20 h-20 bg-[#FFD700] text-[#1B5E20] rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform">
                  <i className={`bx ${tool.icon} tool-icon text-4xl`}></i>
                </div>
                <h3 className="tool-title text-2xl font-bold mb-5">{tool.title}</h3>
                <p className="tool-description text-white/60 leading-relaxed text-lg">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parental Peace of Mind Section */}
      <section className="parental-section py-32 bg-gray-50 relative overflow-hidden">
        <div className="parental-container container mx-auto px-4 md:px-8">
          <div className="parental-content flex flex-col-reverse lg:flex-row items-center gap-24">
            <div className="parental-images flex-1 relative reveal" ref={addToRefs}>
              <div className="images-grid grid grid-cols-2 gap-6">
                <img src="https://picsum.photos/400/500?parent1" className="parent-image rounded-3xl shadow-lg mt-12" alt="Safe environment" />
                <img src="https://picsum.photos/400/500?parent2" className="parent-image rounded-3xl shadow-lg" alt="Joyful learning" />
              </div>

              {/* Force Centered Overlay Badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="safety-badge bg-white p-6 md:p-10 rounded-full shadow-2xl border-4 border-[#1B5E20]/10 pointer-events-auto">
                  <i className='bx bx-check-shield safety-icon text-4xl md:text-6xl text-[#1B5E20]'></i>
                </div>
              </div>
            </div>
            <div className="parental-info flex-1 space-y-10 reveal" ref={addToRefs}>
              <span className="parental-badge text-[#1B5E20] font-bold text-sm tracking-widest uppercase block">For Parents</span>
              <h2 className="parental-title text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Your Child's Safety <br /> is <span className="text-[#1B5E20]">Our Priority</span></h2>
              <div className="safety-list space-y-6">
                {[
                  'Verified teachers with backround checks',
                  'Option for parental presence in all sessions',
                  'Monthly progress meetings with the teacher',
                  'Secure, private 1-on-1 virtual classrooms'
                ].map((item, idx) => (
                  <div key={idx} className="safety-item flex items-center space-x-5 text-xl text-gray-700 font-medium">
                    <div className="check-icon-wrapper bg-[#1B5E20] text-white p-1.5 rounded-full">
                      <i className='bx bx-check check-icon text-2xl'></i>
                    </div>
                    <span className="item-text">{item}</span>
                  </div>
                ))}
              </div>
              <p className="parental-quote text-gray-500 italic text-lg leading-relaxed">
                "We don't just teach the Qur'an—we create an environment where children naturally fall in love with learning, and parents can see real progress without having to push or enforce study."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="testimonials-section py-32 bg-white relative overflow-hidden">
        <div className="testimonials-header container mx-auto px-4 md:px-8 text-center mb-24 reveal" ref={addToRefs}>
          <span className="testimonials-badge text-[#1B5E20] font-bold text-sm tracking-[0.3em] uppercase block mb-6">Testimonials</span>
          <h2 className="testimonials-title text-5xl md:text-6xl font-bold text-gray-900">Voices from <span className="text-[#1B5E20]">the Community</span></h2>
        </div>
        <div className="testimonials-carousel">
          <div className="testimonials-track">
            {/* Duplicate testimonials for infinite scroll */}
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div key={idx} className="testimonial-card-carousel testimonial-card reveal bg-white p-10 rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between hover-card" ref={addToRefs}>
                <div className="card-content">
                  <div className="rating-stars flex text-[#FFD700] mb-8">
                    {[...Array(t.rating)].map((_, i) => <i key={i} className='bx bxs-star star-icon text-2xl'></i>)}
                  </div>
                  <p className="testimonial-text text-gray-600 italic leading-relaxed mb-10 text-lg">"{t.text}"</p>
                </div>
                <div className="testimonial-author flex items-center space-x-5 border-t border-gray-50 pt-8">
                  <div className="author-image w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-[#1B5E20]/10">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name font-bold text-gray-900 leading-tight text-lg">{t.name}</h4>
                    <p className="author-location text-sm text-[#1B5E20] font-bold uppercase tracking-widest">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Outreach Section */}
      <section className="global-section py-32 bg-[#1B5E20] text-white text-center relative overflow-hidden">
        <div className="section-overlay absolute inset-0 opacity-5 islamic-pattern"></div>
        <div className="global-container container mx-auto px-4 relative z-10">
          <div className="global-content reveal mb-16" ref={addToRefs}>
            <h2 className="global-title text-5xl md:text-7xl font-bold mb-10 leading-tight">Join Our Global <br /><span className="text-[#FFD700]">Circle of Learners</span></h2>
            <p className="global-description text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed mb-16">
              From North America to the Pacific — distance is no longer a barrier to sacred knowledge. Your spiritual journey starts here.
            </p>
          </div>
          <div className="global-cta reveal flex flex-col sm:flex-row items-center justify-center gap-8" ref={addToRefs}>
            <GradientButton
              variant="gold"
              onClick={() => window.location.href = '/#/contact'}
              className="text-[#1B5E20] shadow-2xl"
            >
              Book Your Free Demo
            </GradientButton>
            <div className="cta-note text-white/60 font-medium text-lg italic">
              * 3 Free demo classes available for all new students
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
