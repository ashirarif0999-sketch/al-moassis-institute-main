
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title = 'Thank You!',
  message = 'We have received your inquiry and will get back to you shortly to schedule your demo classes.'
}) => {
  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Decorative gradient header */}
            <div className="h-2 bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#FFD700]" />
            
            <div className="p-8 text-center">
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
                className="w-20 h-20 mx-auto mb-6 bg-[#1B5E20]/10 rounded-full flex items-center justify-center"
              >
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="w-10 h-10 text-[#1B5E20]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </motion.div>

              {/* Confetti Effect */}
              <div className="confetti-container absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      x: '50%',
                      y: '50%',
                      opacity: 1,
                      scale: 1
                    }}
                    animate={{
                      x: `${Math.random() * 200 - 100}%`,
                      y: `${Math.random() * 200 - 100}%`,
                      opacity: 0,
                      scale: 0
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + i * 0.05,
                      ease: 'easeOut'
                    }}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: ['#1B5E20', '#2E7D32', '#FFD700', '#4CAF50'][i % 4]
                    }}
                  />
                ))}
              </div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-900 mb-3"
              >
                {title}
              </motion.h3>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 leading-relaxed mb-8"
              >
                {message}
              </motion.p>

              {/* What Happens Next */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-50 rounded-2xl p-5 mb-6 text-left"
              >
                <p className="text-sm font-semibold text-[#1B5E20] mb-3 uppercase tracking-wider">
                  What's Next?
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check-circle text-[#1B5E20]'></i>
                    <span>Confirmation email sent</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-time text-[#1B5E20]'></i>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-calendar-check text-[#1B5E20]'></i>
                    <span>Schedule your free demo</span>
                  </li>
                </ul>
              </motion.div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={onClose}
                className="w-full bg-[#1B5E20] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#2E7D32] transform active:scale-95 transition-all"
              >
                Got It!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
