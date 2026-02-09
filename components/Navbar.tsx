
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import StaggeredMenu, { StaggeredMenuRef } from './StaggeredMenu';
import { NAV_LINKS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<StaggeredMenuRef>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Convert NAV_LINKS to StaggeredMenu items format
  const menuItems = NAV_LINKS.map((link) => ({
    label: link.name,
    link: link.path,
  }));

  // Add Contact CTA as the last item
  menuItems.push({
    label: 'Book Demo',
    link: '/contact',
  });

  // Social items for the menu
  const socialItems = [
    { label: 'WhatsApp', link: 'https://wa.me/1234567890' },
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'YouTube', link: 'https://youtube.com' },
  ];

  return (
    <nav
      className={`navbar fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled
        ? 'py-3'
        : 'py-6'
        }`}
    >
      <div className="navbar-container container mx-auto px-6 md:px-12 relative">
        {/* Floating Background */}
        <motion.div
          className="navbar-bg absolute inset-x-4 md:inset-x-8 -inset-y-2 rounded-3xl z-0 shadow-2xl pointer-events-none"
          animate={{
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0)',
            backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
            boxShadow: isScrolled ? '0 10px 40px -10px rgba(0,0,0,0.1)' : '0 10px 40px -10px rgba(0,0,0,0)',
            border: isScrolled ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0)'
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />

        <div className="navbar-content relative z-10 flex justify-between items-center">
          <Link to="/" className="navbar-brand flex items-center group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="./logo/logo-inverted-removebg-preview.png"
              alt="Al Mo'assis Logo"
              className="navbar-logo-image"
            />
            <div className="navbar-brand-text ml-3 flex flex-col">
              <span className="navbar-title font-black text-2xl leading-none text-[#1B5E20] tracking-tighter">Al Mo'assis</span>
              <span className="navbar-subtitle text-[9px] font-bold tracking-[0.3em] text-gray-400 uppercase mt-1">Learning Center</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu hidden lg:flex items-center space-x-12">
            <div className="nav-links flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link relative font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 py-2 group ${location.pathname === link.path ? 'text-[#1B5E20]' : 'text-gray-500 hover:text-[#1B5E20]'
                    }}`}
                >
                  <span className="nav-link-text">{link.name}</span>
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="activeNav"
                      className="nav-indicator absolute -bottom-1 left-0 right-0 h-1 bg-[#1B5E20] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="cta-button relative overflow-hidden group bg-[#1B5E20] text-white px-8 py-3.5 rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all"
            >
              <span className="cta-button-text relative z-10 flex items-center">
                Book Demo
                <i className='bx bx-right-arrow-alt ml-2 text-lg group-hover:translate-x-1 transition-transform'></i>
              </span>
              <motion.div
                className="cta-button-bg absolute inset-0 bg-[#2E7D32] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-[#1B5E20] text-3xl p-2 focus:outline-none transition-transform active:scale-95"
            onMouseDown={(e) => {
              e.stopPropagation();
              menuRef.current?.toggle();
            }}
            aria-label="Toggle Menu"
          >
            <i className='bx bx-menu-alt-right'></i>
          </button>

          {/* Staggered Menu Hidden Sidebar */}
          <StaggeredMenu
            ref={menuRef}
            className=""
            position="right"
            colors={['#1B5E20', '#064E3B']}
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={false}
            accentColor="#FFD700"
            isFixed={true}
            closeOnClickAway={true}
            onMenuOpen={() => { }}
            onMenuClose={() => { }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
