
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-[#003300] text-white pt-16 pb-8">
      <div className="footer-container container mx-auto px-4 md:px-8">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="footer-brand col-span-1 md:col-span-1">
            <Link to="/" className="footer-logo-link flex items-center space-x-2 mb-6">
              <img 
                src="/logo/logo-copy-removebg-preview.png" 
                alt="Al Mo'assis Logo" 
                className="footer-logo-image"
              />
              <span className="footer-brand-name font-bold text-xl">Al Mo'assis</span>
            </Link>
            <p className="footer-description text-gray-300 mb-6 leading-relaxed">
              More than just learning! Teaching the Qur'an with love, ease, and excellence.
            </p>
            <div className="social-links flex space-x-4">
              <a href="#" className="social-link w-10 h-10 rounded-full bg-[#1B5E20] flex items-center justify-center hover:bg-[#FFD700] hover:text-[#1B5E20] transition-colors">
                <i className='bx bxl-facebook social-icon text-xl'></i>
              </a>
              <a href="#" className="social-link w-10 h-10 rounded-full bg-[#1B5E20] flex items-center justify-center hover:bg-[#FFD700] hover:text-[#1B5E20] transition-colors">
                <i className='bx bxl-youtube social-icon text-xl'></i>
              </a>
              <a href="#" className="social-link w-10 h-10 rounded-full bg-[#1B5E20] flex items-center justify-center hover:bg-[#FFD700] hover:text-[#1B5E20] transition-colors">
                <i className='bx bxl-instagram social-icon text-xl'></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links col-span-1">
            <h4 className="footer-section-title text-lg font-bold mb-6 text-[#FFD700]">Explore</h4>
            <ul className="footer-nav-list space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.path} className="footer-nav-item">
                  <Link to={link.path} className="footer-nav-link text-gray-300 hover:text-white transition-colors flex items-center">
                    <i className='bx bx-chevron-right footer-link-icon mr-2 text-[#FFD700]'></i>
                    <span className="footer-link-text">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="footer-courses col-span-1">
            <h4 className="footer-section-title text-lg font-bold mb-6 text-[#FFD700]">Our Courses</h4>
            <ul className="footer-courses-list space-y-4 text-gray-300">
              <li className="footer-course-item">One-to-One Kids Classes</li>
              <li className="footer-course-item">One-to-One Adult Classes</li>
              <li className="footer-course-item">Tajweed for Beginners</li>
              <li className="footer-course-item">Hifz (Memorization)</li>
              <li className="footer-course-item">Islamic Studies</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter col-span-1">
            <h4 className="footer-section-title text-lg font-bold mb-6 text-[#FFD700]">Stay Connected</h4>
            <p className="footer-newsletter-text text-sm text-gray-300 mb-4">Subscribe for updates and learning tips.</p>
            <form className="newsletter-form space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input w-full bg-[#1B5E20] border-none rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#FFD700] outline-none"
              />
              <button type="submit" className="newsletter-submit w-full bg-[#FFD700] text-[#1B5E20] py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="footer-copyright">© {new Date().getFullYear()} Al Mo'assis Learning Center. All rights reserved.</p>
          <div className="footer-legal-links flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="footer-legal-link hover:text-white">Privacy Policy</a>
            <a href="#" className="footer-legal-link hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
