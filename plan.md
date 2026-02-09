# Al Mo'assis Learning Center - Development Plan

## 📋 Project Overview

**Institute Name:** Al Mo'assis Learning Center  
**Tag Line:** "More than just learning!"  
**Mission:** Teaching the Qur'an with Love, Ease, and Excellence

---

## 🎯 Tech Stack

### Primary Stack
- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Raw CSS** - For custom animations, transitions, and specific component styling

### External Resources (Preloaded)
- **Boxicons** - For icons (preload)
- **Ionicons** - For icons (preload)
- **Google Fonts**:
  - **Cursive**: Dancing Script, Great Vibes, or Amiri (for headings)
  - **Normal**: Poppins, Space Grotesk, or Inter (for body text)

### Arabic Calligraphy
- Use SVG/PNG assets for "Bismillah" and Quranic symbols
- Consider using Google Fonts Arabic (Amiri, Scheherazade) for Arabic text

---

## 📄 Pages Structure

### 1. Homepage
### 2. About Us
### 3. Courses
### 4. Contact
### 5. FAQ
### 6. Testimonials

---

## 🎨 Design Guidelines

### Color Scheme
```css
:root {
    --primary-green: #1B5E20;
    --primary-green-light: #2E7D32;
    --primary-green-dark: #003300;
    --gold: #FFD700;
    --gold-light: #FFECB3;
    --gold-dark: #FFC107;
    --cream: #FAFAFA;
    --text-dark: #1a1a1a;
    --text-light: #666666;
    --white: #ffffff;
}
```

### Typography
- **Headings**: Space Grotesk or Amiri (cursive for special emphasis)
- **Body**: Poppins
- **Arabic Text**: Amiri or Scheherazade

### Mobile Breakpoints
- **Under 480px**: Mobile-first adjustments
- **768px**: Tablet adjustments
- **1024px & above**: Desktop adjustments

---

## 🔄 Page Transitions

### Smooth Transition Classes
```css
/* Page transition animations */
.page-enter {
    opacity: 0;
    transform: translateY(20px);
}

.page-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.page-exit {
    opacity: 1;
    transform: translateY(0);
}

.page-exit-active {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
}

/* Component animations */
.fade-in {
    animation: fadeIn 0.5s ease forwards;
}

.slide-up {
    animation: slideUp 0.6s ease forwards;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from { 
        opacity: 0; 
        transform: translateY(30px); 
    }
    to { 
        opacity: 1; 
        transform: translateY(0); 
    }
}
```

---

## 📱 Component Classnames (Manual CSS Editing)

### Navigation Components
```css
/* Navbar */
.navbar { }
.navbar.scrolled { }
.logo { }
.logo-icon { }
.logo-text { }
.nav-links { }
.nav-links.active { }
.nav-link { }
.hamburger { }
.hamburger.active { }

/* Mobile menu */
.mobile-menu { }
.mobile-menu.open { }
```

### Hero Section
```css
.hero { }
.hero-content { }
.hero-badge { }
.hero-title { }
.hero-title span { }
.hero-description { }
.hero-buttons { }
.hero-btn-primary { }
.hero-btn-secondary { }
.hero-features { }
.hero-feature { }
.hero-feature i { }
.hero-image { }
.hero-img { }
```

### Features Section
```css
.features { }
.section-header { }
.section-title { }
.section-subtitle { }
.features-grid { }
.feature-card { }
.feature-card:hover { }
.feature-icon { }
.feature-title { }
.feature-description { }
```

### Courses Section
```css
.courses { }
.courses-tabs { }
.tab-btn { }
.tab-btn.active { }
.course-content { }
.course-content.active { }
.pricing-grid { }
.pricing-card { }
.pricing-card:hover { }
.pricing-card.featured { }
.pricing-header { }
.pricing-title { }
.pricing-price { }
.pricing-price span { }
.pricing-body { }
.pricing-features { }
.pricing-feature { }
.pricing-feature i { }
.pricing-feature.not-included { }
```

### About Section
```css
.about { }
.about-container { }
.about-image { }
.about-img { }
.about-badge { }
.about-content { }
.about-title { }
.about-description { }
.about-highlights { }
.about-highlight { }
.about-highlight i { }
```

### Founder Section
```css
.founder { }
.founder-container { }
.founder-image { }
.founder-avatar { }
.founder-content { }
.founder-title { }
.founder-name { }
.founder-subtitle { }
.founder-bio { }
```

### Testimonials Section
```css
.testimonials { }
.testimonials-grid { }
.testimonial-card { }
.testimonial-card:hover { }
.testimonial-header { }
.testimonial-avatar { }
.testimonial-info { }
.testimonial-name { }
.testimonial-role { }
.testimonial-rating { }
.testimonial-stars { }
.testimonial-text { }
```

### Contact Section
```css
.contact { }
.contact-container { }
.contact-info { }
.contact-title { }
.contact-description { }
.contact-details { }
.contact-item { }
.contact-icon { }
.contact-label { }
.contact-value { }
.contact-form { }
.form-group { }
.form-label { }
.form-input { }
.form-select { }
.form-textarea { }
.form-submit { }
```

### FAQ Section
```css
.faq { }
.faq-container { }
.faq-title { }
.faq-list { }
.faq-item { }
.faq-item.open { }
.faq-question { }
.faq-answer { }
.faq-toggle { }
```

### Footer Section
```css
.footer { }
.footer-container { }
.footer-brand { }
.footer-logo { }
.footer-description { }
.social-links { }
.social-link { }
.social-link:hover { }
.footer-links { }
.footer-title { }
.footer-menu { }
.footer-menu-item { }
.footer-menu-link { }
.footer-bottom { }
```

---

## 🏠 Page 1: Homepage

### Content (from PRD)
```
Introduction:
Teaching the Qur'an with Love, Ease, and Excellence

Al Mo'assis Learning Center is an online Qur'an institute dedicated to teaching Qur'an and Tajweed through a method that is simple, effective, and easy to understand for learners of all ages.

Our carefully designed approach breaks down Tajweed rules into clear, practical steps, making it possible for children, teenagers, and adults to learn with confidence — regardless of their starting level.

We focus on creating a supportive and engaging learning environment where students progress naturally, without pressure, and develop a lasting connection with the Qur'an.

🌍 Worldwide online classes
📖 Easy-to-learn Tajweed method
👨‍👩‍👧 For children and adults
🎯 One-on-one personalized learning

Begin your Qur'an learning journey with clarity and confidence.
```

### Components
1. **Navbar** - Logo, Navigation links, CTA button
2. **Hero Section** - Main headline, description, CTA buttons, key features
3. **Features Grid** - 6 key benefits with icons
4. **Courses Preview** - Kids/Adults tabs with pricing cards
5. **About Preview** - Brief intro with CTA
6. **Testimonials Preview** - 3 sample testimonials
7. **CTA Section** - Book demo class
8. **Footer** - Links, social media, copyright

### Icons (Boxicons/Ionicons)
- `bx bx-mosque` - Logo
- `bx bx-globe` - Worldwide
- `bx bx-calendar-check` - Book demo
- `bx bx-book-open` - Courses
- `bx bx-check-circle` - Features
- `bx bx-child`, `bx bx-user` - Kids/Adults
- `bx bx-video` - Online
- `bx bx-group` - Teachers
- `bx bx-female` - Female teachers

---

## 📖 Page 2: About Us

### Content (from PRD)
```
About Al Mo'assis Learning Center was founded with one clear mission: to make Qur'an and Tajweed learning easy, engaging, and effective for learners of all ages across the globe.

We understand that many people—both children and adults—struggle with Tajweed. The rules can feel complex, overwhelming, or difficult to apply in real recitation. That is why we developed a specialized teaching method that simplifies Tajweed into clear, practical steps, making it easier to understand and implement in everyday reading.

Our approach is thoughtfully designed to suit different learning styles and combines:

- Clear and structured Tajweed instruction
- Easy-to-understand explanations for all ages
- Interactive and engaging learning techniques
- Continuous encouragement and positive reinforcement

Our goal goes beyond correct pronunciation. We aim to help students recite the Qur'an with confidence, understanding, and ease, while nurturing a lasting connection with the Book of Allah—whether they are beginning their journey or refining their recitation.

Founder: Dr Asim Khwaja
[Full bio content from PRD]
```

### Components
1. **Page Header** - Title, subtitle
2. **Mission Section** - Mission statement
3. **Story Section** - How it started
4. **Approach Section** - Our teaching method
5. **Founder Section** - Photo, bio, credentials
6. **Stats/Highlights** - Years experience, students, etc.
7. **CTA Section** - Join us

### Icons (Boxicons/Ionicons)
- `bx bx-heart` - Mission
- `bx bx-book` - Education
- `bx bx-group` - Community
- `bx bx-award` - Achievement
- `bx bx-time` - Years
- `bx bx-user` - Founder

---

## 📚 Page 3: Courses

### Content (from PRD)

#### Kids One-to-One Quran Classes
```
At Al Mo'assis Learning Center, our kids' one-to-one classes are carefully designed to make Qur'an learning fun, engaging, and highly effective.

What Makes Our Classes Special?
1. Game-Based & Interactive Learning
2. Child-Friendly Tajweed Instruction
3. Personalized One-on-One Attention
4. Positive & Supportive Environment
5. Flexible & Accessible Online

What We Teach:
- Qur'an Nazira with easy Tajweed
- Tarbiyah through moral stories and Nasheeds
- Basic Arabic
- Hizb of Manson Dias + 6 Kalimahs + last 10 Surahs
- Basic Islamic Fiqh
- General Islamic Knowledge

Benefits for Your Child:
- Develops correct and confident Qur'an recitation
- Gains a strong foundation in Tajweed from an early age
- Learns in an engaging and enjoyable way
- Builds a lifelong love and connection with the Qur'an

3 demo classes are available.
```

#### Adults One-to-One Quran Classes
```
At Al Mo'assis Learning Center, our adults' one-to-one classes are designed to make Qur'an learning accessible, practical, and deeply meaningful.

What makes our classes special?
1. Personalized Learning Plan
2. Simplified and Easy-to-Remember Tajweed Rules
3. Focus on Practical Application
4. Interactive & Engaging Sessions
5. Flexible & Comfortable Learning
6. Supportive and Encouraging Environment

Benefits for Adult Learners:
- Recite the Qur'an correctly and confidently
- Learn Tajweed in a practical, easy-to-apply method
- Apply Tajweed rules naturally in daily recitation
- Flexible learning that fits your lifestyle
- Build a lasting spiritual connection with the Qur'an

Female teachers will be provided for female students.
3 free demo classes are available.
```

### Components
1. **Page Header** - Title, subtitle
2. **Course Tabs** - Kids / Adults toggle
3. **Kids Courses Section**
   - Starter Pack (3 free)
   - Monthly ($150)
   - Quarterly ($400)
4. **Adults Courses Section**
   - Demo Classes (3 free)
   - Monthly ($180)
   - Intensive ($500)
5. **Course Comparison** - Side by side
6. **FAQ Preview** - Common questions

### Icons (Boxicons/Ionicons)
- `bx bx-child` - Kids
- `bx bx-user` - Adults
- `bx bx-check` - Features
- `bx bx-gift` - Free
- `bx bx-dollar` - Pricing
- `bx bx-calendar` - Schedule

---

## 📞 Page 4: Contact

### Components
1. **Page Header** - Title, subtitle
2. **Contact Info** - Email, phone, location, hours
3. **Contact Form**
   - First Name, Last Name
   - Email, Phone
   - Course Interest (Kids/Adults)
   - Message
   - Submit Button
4. **Map Section** - (Optional)
5. **Social Links** - Facebook, YouTube, Instagram, Twitter

### Icons (Boxicons/Ionicons)
- `bx bx-envelope` - Email
- `bx bx-phone` - Phone
- `bx bx-map-alt` - Location
- `bx bx-time` - Hours
- `bx bx-paper-plane` - Submit
- `bxl-facebook`, `bxl-youtube`, `bxl-instagram`, `bxl-twitter` - Social

---

## ❓ Page 5: FAQ

### Components
1. **Page Header** - Title, subtitle
2. **FAQ Accordion**
   - How do I book a class?
   - What ages do you teach?
   - Do you offer free demo classes?
   - Are female teachers available?
   - What is your refund policy?
   - How does online learning work?
   - What Tajweed rules do you teach?
   - Can I choose my schedule?

### Icons (Boxicons/Ionicons)
- `bx bx-question-mark` - FAQ
- `bx bx-plus` - Expand
- `bx bx-minus` - Collapse

---

## 💬 Page 6: Testimonials

### Content (Sample)
```
Aisha Mohamed (Parent, USA) - 5 stars
"My daughter used to struggle with Quran recitation, but after joining Al Mo'assis, she now reads with confidence and proper Tajweed."

Ahmed Hassan (Adult Student, UK) - 5 stars
"As a busy professional, I wanted to perfect my Quran recitation. The flexible scheduling made it possible."

Fatima Ali (Parent, Canada) - 5 stars
"The game-based learning approach is amazing! My son actually looks forward to his Quran classes."
```

### Components
1. **Page Header** - Title, subtitle
2. **Testimonials Grid**
   - Student/Parent photo (or avatar)
   - Name, Location
   - Star rating
   - Testimonial text
3. **Video Testimonials** - (Optional)
4. **Trust Badges** - Stats, certifications

### Icons (Boxicons/Ionicons)
- `bx bx-user` - Avatar
- `bxs-star` - Rating
- `bx bx-quote-left` - Quote

---

## 🔧 Implementation Steps

### Step 1: Project Setup
```
1. Create React app
2. Install Tailwind CSS
3. Configure Tailwind
4. Create CSS variables
5. Set up folder structure
```

### Step 2: Shared Components
```
1. Navbar (responsive, hamburger menu)
2. Footer
3. Button components
4. Card components
5. Form components
6. Modal components
7. Page transition wrapper
```

### Step 3: Page Components
```
1. Homepage
2. About Page
3. Courses Page
4. Contact Page
5. FAQ Page
6. Testimonials Page
```

### Step 4: Styling & Animations
```
1. Apply Tailwind classes
2. Add custom CSS for:
   - Page transitions
   - Hover effects
   - Mobile responsiveness
   - Arabic calligraphy
```

### Step 5: Testing & Optimization
```
1. Mobile responsiveness check
2. Cross-browser testing
3. Performance optimization
4. SEO optimization
5. Accessibility audit
```

---

## 📦 Dependencies to Install

```bash
# React + Vite
npm create vite@latest al-moassis -- --template react

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# React Router (for page navigation)
npm install react-router-dom

# Icons (Boxicons)
npm install boxicons

# Animation library (optional)
npm install framer-motion
```

---

## 🎯 Key Features Summary

### For Kids
- Game-based learning
- Interactive activities
- Child-friendly Tajweed
- Moral stories & Nasheeds
- Flexible scheduling
- 3 free demo classes

### For Adults
- Personalized learning plans
- Simplified Tajweed rules
- Practical application focus
- Female teachers available
- Flexible scheduling
- 3 free demo classes

### General
- One-on-one personalized learning
- Worldwide online classes
- Easy-to-learn Tajweed method
- Supportive environment
- Expert certified teachers

---

## 📝 Notes for Developers

### Arabic Calligraphy Placement
- Add "Bismillah" SVG at the start of Quran-related sections
- Use Quranic geometric patterns for backgrounds (subtle)
- Consider using Arabic script for decorative elements

### Icon Preloading
```html
<!-- In index.html head -->
<link rel="preload" href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css" as="style">
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" as="style">
```

### Manual CSS Editing
- All components have classnames documented above
- Use these classnames to add custom styles in CSS files
- Tailwind can be used alongside raw CSS
- Follow the mobile breakpoints (480px, 768px, 1024px)

### Page Transitions
- Use Framer Motion or CSS animations for smooth transitions
- Apply page-enter/page-exit classes
- Consider scroll-triggered animations

---

*Document Version: 1.0*  
*Last Updated: 2024*
