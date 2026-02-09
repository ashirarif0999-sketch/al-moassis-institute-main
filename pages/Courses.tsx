
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CourseType } from '../types';

const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CourseType>(CourseType.KIDS);

  return (
    <div className="courses-page py-16">
      <div className="courses-container container mx-auto px-4 md:px-8">
        <header className="courses-header text-center mb-16">
          <h1 className="page-title text-5xl font-bold text-[#1B5E20] mb-4">Our Courses</h1>
          <p className="page-description text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect path for your learning journey. We offer personalized 1-on-1 sessions.
          </p>
        </header>

        {/* Tabs */}
        <div className="courses-tabs flex justify-center mb-12">
          <div className="tabs-wrapper bg-gray-100 p-1.5 rounded-2xl flex space-x-1 shadow-inner">
            <button 
              onClick={() => setActiveTab(CourseType.KIDS)}
              className={`tab-button px-8 py-3 rounded-xl font-bold text-lg transition-all ${
                activeTab === CourseType.KIDS 
                ? 'bg-[#1B5E20] text-white shadow-lg' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className='bx bx-child tab-icon mr-2'></i>
              <span className="tab-text">For Kids</span>
            </button>
            <button 
              onClick={() => setActiveTab(CourseType.ADULTS)}
              className={`tab-button px-8 py-3 rounded-xl font-bold text-lg transition-all ${
                activeTab === CourseType.ADULTS 
                ? 'bg-[#1B5E20] text-white shadow-lg' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className='bx bx-user tab-icon mr-2'></i>
              <span className="tab-text">For Adults</span>
            </button>
          </div>
        </div>

        {/* Course Content */}
        <div className="courses-content max-w-6xl mx-auto">
          {activeTab === CourseType.KIDS ? (
            <div className="kids-courses space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="course-section flex flex-col lg:flex-row items-center gap-12">
                <div className="section-text flex-1">
                  <h2 className="section-title text-4xl font-bold mb-6 text-gray-900">Fun & Interactive Learning for Kids</h2>
                  <p className="section-description text-lg text-gray-600 mb-8 leading-relaxed">
                    At Al Mo'assis Learning Center, our kids' one-to-one classes are carefully designed to make Qur'an learning fun, engaging, and highly effective.
                  </p>
                  <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: 'bx-joystick', title: 'Game-Based', desc: 'Learning through activities' },
                      { icon: 'bx-brain', title: 'Child-Friendly', desc: 'Simplified Tajweed steps' },
                      { icon: 'bx-target-lock', title: '1-on-1 Focus', desc: 'Personalized attention' },
                      { icon: 'bx-heart', title: 'Positive Env', desc: 'Nurturing confidence' }
                    ].map((item, idx) => (
                      <div key={idx} className="feature-item flex items-start space-x-3 bg-white p-4 rounded-xl border border-gray-100">
                        <i className={`bx ${item.icon} feature-icon text-2xl text-[#1B5E20]`}></i>
                        <div className="feature-content">
                          <p className="feature-title font-bold text-gray-900">{item.title}</p>
                          <p className="feature-desc text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="section-image flex-1">
                  <img src="https://picsum.photos/600/400?kids" alt="Kid learning" className="course-image rounded-3xl shadow-xl" />
                </div>
              </div>

              <div className="course-cards grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card card-teach bg-[#1B5E20] text-white p-8 rounded-3xl shadow-xl">
                  <h3 className="card-title text-2xl font-bold mb-6 border-b border-white/20 pb-4 text-[#FFD700]">What We Teach</h3>
                  <ul className="card-list space-y-4">
                    {['Qur\'an Nazira with easy Tajweed', 'Moral stories and Nasheeds', 'Basic Arabic', 'Hizb of Manson Dias', '6 Kalimahs + last 10 Surahs', 'Basic Islamic Fiqh'].map((item, idx) => (
                      <li key={idx} className="list-item flex items-center space-x-3">
                        <i className='bx bx-check-circle check-icon text-[#FFD700]'></i>
                        <span className="item-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card card-benefits md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
                  <h3 className="card-title text-3xl font-bold mb-6 text-[#1B5E20]">Benefits for Your Child</h3>
                  <div className="benefits-content space-y-6">
                    <p className="benefits-intro text-lg text-gray-600">We don't just teach the Qur'an—we create an environment where children naturally fall in love with learning.</p>
                    <div className="benefits-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        'Correct and confident recitation',
                        'Strong foundation in Tajweed',
                        'Engaging and enjoyable journey',
                        'Lifelong love for the Qur\'an'
                      ].map((benefit, idx) => (
                        <div key={idx} className="benefit-item flex items-center space-x-3 text-gray-700 font-medium">
                          <div className="benefit-icon w-8 h-8 rounded-full bg-[#1B5E20]/10 flex items-center justify-center">
                            <i className='bx bx-check benefit-check text-[#1B5E20]'></i>
                          </div>
                          <span className="benefit-text">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="cta-wrapper mt-8">
                      <Link to="/contact" className="cta-button inline-block bg-[#1B5E20] text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg">
                        Get 3 Demo Classes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="adult-courses space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="course-section flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="section-text flex-1">
                  <h2 className="section-title text-4xl font-bold mb-6 text-gray-900">Empowering Adults with Sacred Wisdom</h2>
                  <p className="section-description text-lg text-gray-600 mb-8 leading-relaxed">
                    Designed to make Qur'an learning accessible, practical, and deeply meaningful. Whether starting from scratch or refining your recitation, we support you.
                  </p>
                  <div className="features-list space-y-4">
                    {[
                      { icon: 'bx-calendar', title: 'Personalized Plans', desc: 'Custom tailored to your goals and pace.' },
                      { icon: 'bx-bulb', title: 'Simplified Rules', desc: 'Practical Tajweed steps for easy recall.' },
                      { icon: 'bx-refresh', title: 'Practical Focus', desc: 'Immediate application in daily recitation.' },
                      { icon: 'bx-female', title: 'Female Teachers', desc: 'Dedicated sisters for our female students.' }
                    ].map((item, idx) => (
                      <div key={idx} className="feature-item flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="feature-icon-wrapper w-12 h-12 bg-[#FFD700]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <i className={`bx ${item.icon} feature-icon text-2xl text-[#1B5E20]`}></i>
                        </div>
                        <div className="feature-content">
                          <p className="feature-title font-bold text-lg text-gray-900">{item.title}</p>
                          <p className="feature-desc text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="section-image flex-1">
                  <img src="https://picsum.photos/600/400?adults" alt="Adult learning" className="course-image rounded-3xl shadow-xl" />
                </div>
              </div>

              <div className="outcomes-section bg-[#1B5E20] rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="outcomes-bg absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div className="outcomes-content relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                   <div className="outcomes-list">
                    <h3 className="outcomes-title text-3xl font-bold mb-6 text-[#FFD700]">The Outcomes</h3>
                    <ul className="outcomes-grid grid grid-cols-1 gap-4">
                      {[
                        'Recite correctly and confidently',
                        'Practical, easy-to-apply method',
                        'Natural flow in daily recitation',
                        'Flexible learning that fits your lifestyle',
                        'Build a lasting spiritual connection'
                      ].map((item, idx) => (
                        <li key={idx} className="outcome-item flex items-center space-x-4">
                          <i className='bx bxs-star star-icon text-[#FFD700]'></i>
                          <span className="outcome-text text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="cta-section flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
                    <p className="cta-quote text-xl mb-8 font-medium italic">"We ensure you experience the Qur'an's beauty and spiritual depth in an enriching way."</p>
                    <Link to="/contact" className="cta-button bg-[#FFD700] text-[#1B5E20] px-12 py-4 rounded-2xl font-bold text-xl hover:bg-yellow-400 transition-all shadow-2xl">
                      Book Your Free Trial
                    </Link>
                    <p className="cta-note mt-4 text-white/70 text-sm">3 Free Demo Classes Available</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
