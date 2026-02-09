
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

// Comprehensive premade responses for common questions (25+ topics)
const PREMADE_RESPONSES: Record<string, string> = {
  // Core offerings
  kids: "We offer specialized Quran and Tajweed classes for children ages 5-15. Our kids' program focuses on building a strong foundation with engaging, age-appropriate methods. Classes are 1-on-1 with certified teachers. Parents can observe all sessions. Would you like to book a free demo?",

  adults: "Yes! We have dedicated classes for adults (16+) at all levels - from beginners to advanced. Whether you're learning for the first time or improving your recitation, our flexible scheduling accommodates working professionals. Book your 3 free demo classes to get started!",

  beginners: "Perfect for complete beginners! We start from the Arabic alphabet and build up gradually. No prior knowledge needed. Our patient teachers guide you through each step with love and encouragement. Everyone starts somewhere - we're here to support your journey!",

  tajweed: "Tajweed is the proper way of reciting the Quran with correct pronunciation and rhythm. We teach it step-by-step, making rules like Makharij (articulation points) and Sifaat (characteristics) easy to understand and apply. Our focus is on practical, measurable improvement in your recitation.",

  hifz: "Yes, we offer Hifz (memorization) programs for those who want to memorize the Quran. Our structured approach combines memorization techniques with Tajweed verification. Progress is tracked carefully, and students receive personalized guidance throughout their memorization journey.",

  // Free demo & trials
  demo: "We offer 3 FREE demo classes for all new students! No commitment required. These sessions let you experience our teaching method, meet your potential teacher, and see if our approach suits you. Visit our contact page to schedule your demos today!",

  trial: "Our free trial includes 3 classes with a teacher matched to your level and goals. You'll experience our teaching method firsthand, get initial assessment, and receive personalized recommendations. No credit card needed - just your willingness to learn!",

  // Pricing & payments
  pricing: "We offer flexible pricing packages starting from $50/month for group classes and $150/month for 1-on-1 sessions. Family discounts available! Payment can be made weekly, monthly, or quarterly. Contact us for a detailed breakdown and current promotions.",

  cost: "Our pricing varies based on frequency and class type. Group classes are more affordable ($50-100/month), while 1-on-1 sessions are premium ($150-300/month). All materials are included. We also offer sibling discounts and multi-month savings.",

  discount: "Yes! We offer several discounts: 10% off for siblings, 15% off for quarterly payments, and special rates for families enrolling multiple students. Contact us to learn about our current promotional offers!",

  payment: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers. Payment is due before each billing cycle. Need a custom payment plan? Just ask - we're flexible for genuine circumstances.",

  // Scheduling
  schedule: "We offer flexible scheduling 7 days a week, including mornings, afternoons, and evenings. Classes range from 30-60 minutes. After your demo, we'll work with your availability to create a consistent weekly schedule that fits your routine.",

  timing: "Available time slots span from 6 AM to 10 PM (your local time). Sessions can be scheduled weekdays or weekends. We accommodate various time zones worldwide. Simply share your preferred times during registration.",

  timezone: "Great news - we have teachers available across multiple time zones! Simply indicate your local time zone during registration, and we'll match you with teachers who can accommodate your schedule comfortably.",

  duration: "Class duration options include 30, 45, or 60 minutes. We recommend beginners start with 30-45 minutes for focused learning without fatigue. Advanced students often prefer 60-minute sessions for deeper practice.",

  frequency: "Most students take 2-3 classes per week for optimal progress. However, we customize frequency based on your goals and availability. Some intensive learners take daily classes during breaks!",

  // Teachers & credentials
  teacher: "All our teachers are verified, background-checked professionals with proper certification in Quran recitation and Tajweed. Many are Hafiz with Ijazah (chain of narration). All have undergone our rigorous training program for online teaching.",

  qualification: "Our teachers hold certifications in Quran recitation from recognized institutions, with many having completed formal Islamic studies. All have demonstrated mastery of Tajweed rules and passed multiple assessments before joining our team.",

  gender: "We have both male and female teachers available! You can specify your preference during registration. Same-gender teaching ensures comfort and adherence to Islamic principles while maintaining learning quality.",

  experience: "Our teachers range from 3-20+ years of experience in Quran education. Many have taught hundreds of students online. Each teacher specializes in different aspects - some focus on beginners, others on advanced Tajweed or Hifz.",

  // Class format
  online: "All classes are conducted online via our secure, private virtual classroom. You'll need a computer, tablet, or smartphone with camera and microphone. We use user-friendly video conferencing with screen sharing and digital whiteboard features.",

  platform: "We use a custom-built online classroom platform designed specifically for Quran learning. Features include: HD video/audio, digital whiteboard, screen sharing, recording capability, and interactive exercises. No software download required - runs in browser!",

  materials: "We provide all necessary learning materials included at no extra cost: digital textbooks, practice recordings, worksheets, pronunciation guides, and progress tracking tools. All materials are accessible through our student portal anytime.",

  recording: "Yes! All classes can be recorded (with teacher's permission). Recordings are stored in your personal student portal for review. This is especially helpful for Hifz students and those practicing between sessions.",

  // Progress & goals
  progress: "Progress depends on dedication and practice time. Most students notice improvement within 2-4 weeks. Complete beginners typically achieve basic recitation fluency in 3-6 months. Consistent practice (daily 15-30 min) dramatically accelerates progress!",

  level: "We assess your current level during the free demo through a brief evaluation. Whether you're completely new or already recite fluently, we'll place you at the appropriate level and customize lessons to your specific needs.",

  certificate: "Upon completing designated levels, students receive completion certificates acknowledging their achievement. These certificates recognize mastery of Tajweed rules and can be shared or added to educational portfolios.",

  // Safety & parents
  safety: "Student safety is our top priority. All teachers undergo rigorous background checks. Parents can observe all sessions live or review recordings. Our platform has no open chat features for students - all communication is monitored.",

  parental: "Parents love our transparent approach! You can observe every class, receive weekly progress reports, communicate directly with teachers, and attend monthly parent-teacher meetings. We keep you involved every step of the way.",

  // About the institute
  about: "Al Mo'assis Learning Center is an online Quran and Tajweed institute founded by Dr. Asim Khwaja. We're dedicated to making Quran education accessible globally through simple, effective, and loving teaching methods. Students of all ages and backgrounds are welcome!",

  drasim: "Dr. Asim Khwaja is a renowned Quran educator and the founder of Al Mo'assis Learning Center. With advanced degrees in Islamic Studies and decades of teaching experience, he developed our unique methodology combining traditional excellence with modern accessibility.",

  methodology: "Our teaching method combines traditional Tajweed rules with modern learning science. We use visual, auditory, and kinesthetic techniques to make rules memorable. Each student learns at their own pace with patient, encouraging guidance from certified teachers.",

  // Enrollment
  enroll: "Enrolling is easy! 1) Schedule your 3 free demo classes 2) Meet your potential teacher 3) Choose your package 4) Set your schedule 5) Start learning! Our registration team guides you through each step.",

  start: "Getting started is simple: Click 'Book Free Demo' on our contact page, fill in your basic information, select your preferences, and we'll match you with a teacher within 24-48 hours for your first session!",

  requirements: "All you need is: 1) A device with camera and microphone 2) Stable internet connection 3) Quiet learning space 4) Willingness to learn! We provide everything else including all materials.",

  // Support
  support: "Our support team is available 24/7 via email, live chat, and phone. You can also reach your teacher directly through the student portal. We pride ourselves on responsive, helpful support for all students and parents.",

  refund: "We offer a satisfaction guarantee. If you're not happy after your demos, no problem - you won't be charged. For active students, we offer prorated refunds for unused portions with a 2-week advance notice.",

  contact: "You can reach us via the Contact page on our website, by email, or phone. We typically respond within 2 hours during business hours. We're happy to answer any questions before you commit to learning with us!",

  default: "Great question! For detailed information about our courses, pricing, or scheduling, please visit our dedicated pages or contact us directly. We're here to help you start your Quran learning journey!"
};

// Keywords to match for premade responses (50+ keywords across topics)
const KEYWORDS: Record<string, string[]> = {
  // Core offerings
  kids: ['kids', 'children', 'child', 'kids\'', "children's", 'youth', 'young', 'age', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
  adults: ['adult', 'adults', 'grown', 'professional', 'working', 'office', 'busy', '16', '17', '18', '19', '20', '30', '40', '50'],
  beginners: ['beginner', 'start', 'new', 'never', 'learn', 'from scratch', 'zero', 'alphabet', ' basics', 'ground'],
  tajweed: ['tajweed', 'pronunciation', 'recite', 'recitation', 'makharij', 'rules', 'pronounce', 'correct', 'rule', 'rhythm'],
  hifz: ['hifz', 'memorize', 'memorization', 'memorize', 'memory', 'hafiz', 'memorised', 'memorized', 'remember'],

  // Free demo & trials
  demo: ['demo', 'trial', 'free', 'try', 'sample', 'test'],
  trial: ['trial', 'test', 'sample', 'experience'],

  // Pricing & payments
  pricing: ['price', 'pricing', 'cost', 'fee', 'payment', 'discount', 'expensive', 'cheap', 'afford', 'rate', 'package', 'plan'],
  cost: ['cost', 'expensive', 'cheap', 'affordable', 'budget', 'rate'],
  discount: ['discount', 'off', 'promo', 'promotion', 'sale', 'deal', 'special'],
  payment: ['payment', 'pay', 'billing', 'invoice', 'credit', 'card', 'paypal'],

  // Scheduling
  schedule: ['schedule', 'scheduling', 'timing', 'time', 'slot', 'available', 'when', 'book'],
  timing: ['timing', 'time', 'hour', 'minute', 'duration', 'length'],
  timezone: ['timezone', 'time zone', 'local', 'country', 'zone', 'convert'],
  duration: ['duration', 'long', 'short', '30 min', '45 min', '60 min', 'hour'],
  frequency: ['frequency', 'often', 'weekly', 'daily', 'monthly', 'times per week'],

  // Teachers & credentials
  teacher: ['teacher', 'instructor', 'tutor', 'who', 'qualification', 'experience', 'background', 'verify'],
  qualification: ['qualification', 'certificate', 'certification', 'degree', 'credential', 'certified'],
  gender: ['gender', 'male', 'female', 'man', 'woman', 'boy', 'girl', 'same gender', 'prefer'],
  experience: ['experience', 'years', 'taught', 'how long teaching'],

  // Class format
  online: ['online', 'virtual', 'remote', 'internet', 'zoom', 'video', 'camera', 'device', 'web'],
  platform: ['platform', 'software', 'app', 'website', 'portal', 'classroom', 'meeting'],
  materials: ['material', 'book', 'textbook', 'resource', 'worksheet', 'recording', 'provide', 'included'],
  recording: ['record', 'recording', 'replay', 'watch again', 'save'],

  // Progress & goals
  progress: ['progress', 'improve', 'improvement', 'better', 'fast', 'quick', 'level'],
  level: ['level', 'start', 'beginner', 'intermediate', 'advanced', 'assess'],
  certificate: ['certificate', 'certification', 'diploma', 'credential', 'completion'],

  // Safety & parents
  safety: ['safety', 'safe', 'secure', 'protect', 'security', 'monitor'],
  parental: ['parent', 'parents', 'mother', 'father', 'family', 'observe', 'watch'],

  // About the institute
  about: ['about', 'what is', 'who is', 'introduce', 'introduction'],
  drasim: ['asim', 'dr. asim', 'dr asim', 'founder', 'founder', 'about'],
  methodology: ['method', 'methodology', 'teaching', 'approach', 'how teach', 'technique'],

  // Enrollment
  enroll: ['enroll', 'register', 'sign up', 'join', 'admission', 'registration'],
  start: ['start', 'begin', 'get started', 'begin', 'initiate', 'commence'],
  requirements: ['requirement', 'need', 'require', 'equipment', 'what need'],

  // Support
  support: ['support', 'help', 'issue', 'problem', 'question'],
  refund: ['refund', 'money back', 'cancel', 'cancellation', 'policy'],
  contact: ['contact', 'email', 'phone', 'call', 'reach', 'location', 'address', 'whatsapp', 'message']
};

const findBestResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();

  // Check for exact matches first
  for (const [key, keywords] of Object.entries(KEYWORDS)) {
    for (const keyword of keywords) {
      if (lowerInput.includes(keyword.toLowerCase())) {
        return PREMADE_RESPONSES[key];
      }
    }
  }

  return PREMADE_RESPONSES.default;
};

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string, isAIGenerated?: boolean, suggestedPrompts?: string[] }[]>([
    { role: 'assistant', content: "Assalamu'alaikum! I'm your assistant. How can I help with your journey today?", suggestedPrompts: ["Kids classes", "Adult classes", "Free demo"] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [usedPrompts, setUsedPrompts] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  // Comprehensive prompt chains for guided conversation
  const PROMPT_CHAINS: Record<string, string[]> = {
    initial: ["Kids classes", "Adult classes", "Free demo"],

    // Core offerings branches
    kids: ["Schedule", "Teacher info", "Book demo", "Pricing"],
    adults: ["Schedule", "Teacher info", "Book demo", "Pricing"],
    beginners: ["Kids classes", "Adult classes", "Free demo", "Tajweed"],
    tajweed: ["Kids classes", "Adult classes", "Free demo", "Methodology"],
    hifz: ["Schedule", "Teacher info", "Free demo", "Duration"],

    // Demo & trial branches
    demo: ["Pricing", "Schedule", "Contact us", "Book now"],
    trial: ["How it works", "Pricing", "Teacher info", "Schedule"],

    // Pricing branches
    pricing: ["Free demo", "Schedule", "Contact us", "Discounts"],
    cost: ["Free demo", "Payment options", "Schedule", "Contact us"],
    discount: ["Pricing", "Family discount", "Payment plans", "Contact us"],
    payment: ["Pricing", "Weekly vs monthly", "Refund policy", "Contact us"],

    // Scheduling branches
    schedule: ["Pricing", "Free demo", "Book now", "Timezone"],
    timing: ["Schedule", "Duration options", "Class length", "Free demo"],
    timezone: ["Schedule", "Teacher availability", "Free demo", "Contact us"],
    duration: ["Schedule", "Class frequency", "Pricing", "Free demo"],
    frequency: ["Schedule", "Pricing", "Progress", "Free demo"],

    // Teacher branches
    teacher: ["Schedule", "Free demo", "Qualification", "Gender preference"],
    qualification: ["Teacher", "Experience", "Free demo", "Contact us"],
    gender: ["Teacher", "Schedule", "Free demo", "Contact us"],
    experience: ["Teacher", "Schedule", "Free demo", "Qualification"],

    // Class format branches
    online: ["How it works", "Platform", "Materials", "Free demo"],
    platform: ["Online classes", "Features", "Requirements", "Free demo"],
    materials: ["Online classes", "Pricing", "Progress tracking", "Free demo"],
    recording: ["Online classes", "Materials", "Review", "Free demo"],

    // Progress branches
    progress: ["Schedule", "Frequency", "Pricing", "Free demo"],
    level: ["Assessment", "Free demo", "Schedule", "Pricing"],
    certificate: ["Progress", "Levels", "Pricing", "Free demo"],

    // Safety branches
    safety: ["Online classes", "Teacher info", "Free demo", "Parental"],
    parental: ["Safety", "Progress reports", "Teacher contact", "Free demo"],

    // About branches
    about: ["Free demo", "Methodology", "Contact us", "Dr. Asim"],
    drasim: ["About us", "Methodology", "Contact us", "Free demo"],
    methodology: ["Free demo", "Teacher", "Schedule", "Pricing"],

    // Enrollment branches
    enroll: ["Free demo", "Pricing", "Schedule", "Requirements"],
    start: ["Enroll now", "Free demo", "Requirements", "Pricing"],
    requirements: ["Online classes", "Materials", "Schedule", "Free demo"],

    // Support branches
    support: ["Contact us", "FAQ", "Pricing", "Schedule"],
    refund: ["Payment", "Contact us", "Pricing", "Schedule"],
    contact: ["Free demo", "Schedule", "Pricing", "Support"],

    default: ["Free demo", "Schedule", "Pricing", "Contact us"]
  };

  // Detect topic from user message
  const detectTopic = (message: string): string => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hifz') || lowerMessage.includes('memoriz')) return 'hifz';
    if (lowerMessage.includes('kids') || lowerMessage.includes('children')) return 'kids';
    if (lowerMessage.includes('adult')) return 'adults';
    if (lowerMessage.includes('demo') || lowerMessage.includes('free')) return 'demo';
    if (lowerMessage.includes('trial')) return 'trial';
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) return 'pricing';
    if (lowerMessage.includes('discount') || lowerMessage.includes('off')) return 'discount';
    if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('billing')) return 'payment';
    if (lowerMessage.includes('schedule') || lowerMessage.includes('timing')) return 'schedule';
    if (lowerMessage.includes('timezone') || lowerMessage.includes('time zone')) return 'timezone';
    if (lowerMessage.includes('duration') || lowerMessage.includes('hour') || lowerMessage.includes('minute')) return 'duration';
    if (lowerMessage.includes('frequency') || lowerMessage.includes('times per')) return 'frequency';
    if (lowerMessage.includes('teacher') || lowerMessage.includes('instructor')) return 'teacher';
    if (lowerMessage.includes('qualification') || lowerMessage.includes('certificate') || lowerMessage.includes('credential')) return 'qualification';
    if (lowerMessage.includes('gender') || lowerMessage.includes('male') || lowerMessage.includes('female')) return 'gender';
    if (lowerMessage.includes('experience') || lowerMessage.includes('years taught')) return 'experience';
    if (lowerMessage.includes('online') || lowerMessage.includes('virtual') || lowerMessage.includes('zoom')) return 'online';
    if (lowerMessage.includes('platform') || lowerMessage.includes('software') || lowerMessage.includes('app')) return 'platform';
    if (lowerMessage.includes('material') || lowerMessage.includes('book') || lowerMessage.includes('worksheet')) return 'materials';
    if (lowerMessage.includes('record') || lowerMessage.includes('replay') || lowerMessage.includes('watch again')) return 'recording';
    if (lowerMessage.includes('progress') || lowerMessage.includes('improve') || lowerMessage.includes('level')) return 'progress';
    if (lowerMessage.includes('certificate') || lowerMessage.includes('diploma')) return 'certificate';
    if (lowerMessage.includes('safety') || lowerMessage.includes('secure') || lowerMessage.includes('protect')) return 'safety';
    if (lowerMessage.includes('parent') || lowerMessage.includes('mother') || lowerMessage.includes('father')) return 'parental';
    if (lowerMessage.includes('about') || lowerMessage.includes('what is')) return 'about';
    if (lowerMessage.includes('asim') || lowerMessage.includes('founder')) return 'drasim';
    if (lowerMessage.includes('method') || lowerMessage.includes('teaching') || lowerMessage.includes('approach')) return 'methodology';
    if (lowerMessage.includes('enroll') || lowerMessage.includes('register') || lowerMessage.includes('sign up')) return 'enroll';
    if (lowerMessage.includes('start') || lowerMessage.includes('begin') || lowerMessage.includes('get started')) return 'start';
    if (lowerMessage.includes('requirement') || lowerMessage.includes('need') || lowerMessage.includes('equipment')) return 'requirements';
    if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('issue')) return 'support';
    if (lowerMessage.includes('refund') || lowerMessage.includes('money back') || lowerMessage.includes('cancel')) return 'refund';
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) return 'contact';
    if (lowerMessage.includes('beginner') || lowerMessage.includes('tajweed')) return 'beginners';

    return 'default';
  };

  // Get next prompts excluding already used ones
  const getNextPrompts = (currentTopic: string, count: number = 4): string[] => {
    const availablePrompts = PROMPT_CHAINS[currentTopic] || PROMPT_CHAINS.default;

    // Filter out used prompts
    const unusedPrompts = availablePrompts.filter(prompt => !usedPrompts.has(prompt));

    // If all prompts in chain are used, reset and start fresh
    if (unusedPrompts.length === 0) {
      setUsedPrompts(new Set());
      return availablePrompts.slice(0, count);
    }

    return unusedPrompts.slice(0, count);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (customMessage?: string) => {
    const textToSend = customMessage || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage = textToSend.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Mark prompt as used if it's a suggested prompt
    if (customMessage) {
      setUsedPrompts(prev => new Set([...prev, customMessage]));
    }

    try {
      // Check for premade response first
      const premadeResponse = findBestResponse(userMessage);
      const topic = detectTopic(userMessage);
      const nextPrompts = getNextPrompts(topic);

      // Small delay to simulate AI thinking
      await new Promise(resolve => setTimeout(resolve, 800));

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: premadeResponse,
        isAIGenerated: true,
        suggestedPrompts: nextPrompts
      }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong. Please use our contact page!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="gemini-assistant fixed bottom-6 right-6 z-[60]">
      {/* Compact Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="assistant-toggle w-14 h-14 bg-[#1B5E20] text-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group overflow-hidden"
      >
        <i className={`bx ${isOpen ? 'bx-x' : 'bx-message-square-detail'} assistant-icon text-2xl transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}></i>
      </button>

      {/* Compact Chat Window */}
      {isOpen && (
        <div className="chat-window absolute bottom-16 right-0 w-[320px] md:w-[360px] h-[480px] bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 duration-300">
          {/* Streamlined Header */}
          <div className="chat-header bg-[#1B5E20] p-4 text-white flex items-center space-x-3">
            <div className="assistant-avatar w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <i className='bx bx-bot assistant-avatar-icon text-lg'></i>
            </div>
            <div className="assistant-info">
              <h3 className="assistant-name font-bold text-sm">Learning Assistant</h3>
              <div className="assistant-status flex items-center space-x-1">
                <div className="status-indicator w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="status-text text-[9px] text-white/70 uppercase tracking-widest font-bold">Online</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="messages-container flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50/30">
            {messages.map((msg, idx) => (
              <React.Fragment key={idx}>
                <div className={`message-wrapper flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`message-bubble max-w-[90%] p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${msg.role === 'user'
                    ? 'message-user bg-[#1B5E20] text-white rounded-tr-none'
                    : 'message-assistant bg-white text-gray-700 rounded-tl-none border border-gray-100'
                    }`}>
                    {msg.role === 'assistant' && msg.isAIGenerated && (
                      <div className="ai-badge mb-1 flex items-center gap-1 text-[9px] text-[#1B5E20]/60 font-bold uppercase tracking-wider">
                        <i className='bx bx-bot'></i>
                        AI Assistant
                      </div>
                    )}
                    <p className="message-content">{msg.content}</p>
                  </div>
                </div>
                {/* Suggested Prompts as chat elements */}
                {msg.role === 'assistant' && msg.suggestedPrompts && msg.suggestedPrompts.length > 0 && (
                  <div className="suggested-prompts-wrapper flex flex-wrap gap-2 mt-2">
                    {msg.suggestedPrompts.map((prompt, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => handleSend(prompt)}
                        className="suggested-prompt px-3 py-1.5 bg-[#1B5E20]/5 border border-[#1B5E20]/20 rounded-full text-[10px] font-bold text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white transition-all"
                      >
                        <i className='bx bx-plus mr-1'></i>
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            {isLoading && (
              <div className="typing-indicator flex justify-start">
                <div className="typing-bubble bg-white px-3 py-2 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-1 border border-gray-100">
                  <div className="typing-dot w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="typing-dot w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="typing-dot w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Compact Input */}
          <div className="input-container p-4 bg-white border-t border-gray-100">
            <div className="input-wrapper relative flex items-center bg-gray-100 rounded-2xl p-1 focus-within:ring-2 focus-within:ring-[#02c269d9] transition-all">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="message-input flex-grow px-3 py-2 bg-transparent text-xs outline-none placeholder:text-gray-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="send-button w-8 h-8 bg-[#1B5E20] text-white rounded-xl flex items-center justify-center disabled:opacity-50 transition-all"
              >
                <i className='bx bxs-send send-icon text-sm'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
