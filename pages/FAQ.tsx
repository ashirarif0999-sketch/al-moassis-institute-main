
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item border-b border-gray-200 py-6 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="faq-question w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="question-text text-xl font-bold text-gray-900 pr-8">{question}</span>
        <i className={`faq-icon bx ${isOpen ? 'bx-minus' : 'bx-plus'} text-2xl text-[#1B5E20] transition-transform duration-300`}></i>
      </button>
      <div className={`faq-answer mt-4 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="answer-text text-lg text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How do I book a class?",
      answer: "You can book your classes by filling out our contact form or messaging us on WhatsApp. We will schedule 3 free demo classes for you to experience our teaching method first-hand."
    },
    {
      question: "What ages do you teach?",
      answer: "We teach all ages! We have specialized curriculum for kids (4+), teenagers, and adults. Our methods are tailored to the learner's age and starting point."
    },
    {
      question: "Do you offer free demo classes?",
      answer: "Yes! We offer 3 free demo classes for all new students. This allows you to meet your teacher, see our interactive learning platform, and understand our teaching style with no commitment."
    },
    {
      question: "Are female teachers available?",
      answer: "Absolutely. We have qualified female teachers for our female students and younger children to ensure a comfortable and professional learning environment."
    },
    {
      question: "How does online learning work?",
      answer: "Classes are conducted 1-on-1 via platforms like Zoom or Google Meet. We use interactive digital Qur'an tools, whiteboards, and games for kids to make it as effective as physical classes, if not more."
    },
    {
      question: "What is your schedule like?",
      answer: "We offer worldwide online classes with flexible timings. Whether you are in the USA, UK, Australia, or anywhere else, we can find a time slot that fits your daily routine."
    }
  ];

  return (
    <div className="faq-page py-20 bg-gray-50">
      <div className="faq-container container mx-auto px-4 md:px-8">
        <header className="faq-header text-center mb-16">
          <h1 className="page-title text-5xl font-bold text-[#1B5E20] mb-4">Frequently Asked Questions</h1>
          <p className="page-description text-xl text-gray-600">Find answers to common queries about our learning center.</p>
        </header>

        <div className="faq-content max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="faq-list divide-y divide-gray-100">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="faq-cta mt-16 text-center">
          <p className="cta-text text-lg text-gray-600 mb-6">Still have questions?</p>
          <a href="/#/contact" className="cta-button bg-[#1B5E20] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#2E7D32] transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
