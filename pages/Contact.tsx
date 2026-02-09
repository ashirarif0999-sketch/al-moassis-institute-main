
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: 'Kids',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase or API call logic would go here
    alert("Thank you for your inquiry! We will get back to you shortly to schedule your demo classes.");
  };

  return (
    <div className="contact-page py-20">
      <div className="contact-container container mx-auto px-4 md:px-8">
        <div className="contact-content flex flex-col lg:flex-row gap-16">
          {/* Info */}
          <div className="contact-info lg:w-1/3 space-y-12">
            <div className="info-header">
              <h1 className="page-title text-5xl font-bold text-[#1B5E20] mb-6">Get in Touch</h1>
              <p className="page-description text-lg text-gray-600 leading-relaxed">
                Ready to start your journey? Contact us for any questions or to book your 3 free demo classes.
              </p>
            </div>

            <div className="contact-details space-y-8">
              <div className="contact-item flex items-start space-x-4">
                <div className="item-icon-wrapper w-12 h-12 bg-[#1B5E20]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className='bx bx-envelope item-icon text-2xl text-[#1B5E20]'></i>
                </div>
                <div className="item-content">
                  <p className="item-label font-bold text-gray-900">Email Us</p>
                  <p className="item-value text-gray-600">info@almoassis.com</p>
                </div>
              </div>

              <div className="contact-item flex items-start space-x-4">
                <div className="item-icon-wrapper w-12 h-12 bg-[#1B5E20]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className='bx bxl-whatsapp item-icon text-2xl text-[#1B5E20]'></i>
                </div>
                <div className="item-content">
                  <p className="item-label font-bold text-gray-900">WhatsApp</p>
                  <p className="item-value text-gray-600">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="contact-item flex items-start space-x-4">
                <div className="item-icon-wrapper w-12 h-12 bg-[#1B5E20]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className='bx bx-time-five item-icon text-2xl text-[#1B5E20]'></i>
                </div>
                <div className="item-content">
                  <p className="item-label font-bold text-gray-900">Support Hours</p>
                  <p className="item-value text-gray-600">Mon - Sat: 9 AM - 9 PM EST</p>
                </div>
              </div>
            </div>

            <div className="reach-card p-8 bg-[#FFD700]/10 rounded-3xl border-2 border-[#FFD700]/20">
              <h4 className="card-title text-xl font-bold mb-3 text-[#1B5E20]">Worldwide Reach</h4>
              <p className="card-description text-gray-700">We teach students across the USA, UK, Canada, Australia, and the Middle East.</p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper lg:w-2/3">
            <div className="form-container bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="form-title text-3xl font-bold mb-8">Schedule Your 3 Free Demo Classes</h2>
              <form onSubmit={handleSubmit} className="contact-form grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group space-y-2">
                  <label className="form-label text-sm font-bold text-gray-700">First Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John" 
                    className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div className="form-group space-y-2">
                  <label className="form-label text-sm font-bold text-gray-700">Last Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Doe" 
                    className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
                <div className="form-group space-y-2">
                  <label className="form-label text-sm font-bold text-gray-700">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com" 
                    className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="form-group space-y-2">
                  <label className="form-label text-sm font-bold text-gray-700">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+1 234 567 890" 
                    className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-group md:col-span-2 space-y-2">
                  <label className="form-label text-sm font-bold text-gray-700">I am interested in...</label>
                  <select 
                    className="form-select w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                    value={formData.course}
                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                  >
                    <option value="Kids">Kids One-to-One Class</option>
                    <option value="Adults">Adults One-to-One Class</option>
                    <option value="Hifz">Memorization (Hifz)</option>
                    <option value="Other">General Inquiry</option>
                  </select>
                </div>
                <div className="form-group md:col-span-2 space-y-2">
                  <label className="form-label text-sm font-bold text-gray-700">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help you?" 
                    className="form-textarea w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <div className="form-submit md:col-span-2 pt-4">
                  <button type="submit" className="submit-button w-full bg-[#1B5E20] text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-[#2E7D32] transform active:scale-95 transition-all">
                    Book Free Demo Classes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
