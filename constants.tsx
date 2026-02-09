
import React from 'react';
import { Testimonial } from './types';

export const COLORS = {
  primary: '#1B5E20',
  primaryLight: '#2E7D32',
  gold: '#FFD700',
  cream: '#FAFAFA',
};

export const BismillahSVG = () => (
  <svg viewBox="0 0 400 100" className="w-64 h-auto mx-auto fill-[#1B5E20] opacity-80 mb-6">
    <path d="M50 50 Q100 20 150 50 T250 50 T350 50" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="arabic-text text-4xl">بسم الله الرحمن الرحيم</text>
  </svg>
);

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aisha Mohamed',
    location: 'Houston, USA',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&fit=crop',
    text: "My daughter used to struggle with Quran recitation, but after joining Al Mo'assis, she now reads with confidence and proper Tajweed. The method is truly effective.",
    rating: 5
  },
  {
    id: '2',
    name: 'Ahmed Hassan',
    location: 'London, UK',
    role: 'Adult Student',
    image: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: "As a busy professional, I wanted to perfect my Quran recitation. The flexible scheduling and personalized 1-on-1 approach made it possible for me to progress naturally.",
    rating: 5
  },
  {
    id: '3',
    name: 'Fatima Ali',
    location: 'Toronto, Canada',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&fit=crop',
    text: "The game-based learning approach is amazing! My son actually looks forward to his Quran classes now. It's a joyful experience rather than a chore.",
    rating: 5
  },
  {
    id: '4',
    name: 'Omar Khalid',
    location: 'Sydney, Australia',
    role: 'Adult Student',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&fit=crop',
    text: "Dr. Asim's methodology simplifies Tajweed like I've never seen before. I finally feel confident reciting in front of others after years of hesitation.",
    rating: 5
  }
];

export const STATS = [
  { label: 'Happy Students', value: '1,500+' },
  { label: 'Countries Reached', value: '25+' },
  { label: 'Certified Teachers', value: '40+' },
  { label: 'Success Rate', value: '98%' },
];
