
export enum CourseType {
  KIDS = 'KIDS',
  ADULTS = 'ADULTS'
}

// ============================================================================
// COURSE CATALOG TYPES
// ============================================================================

export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type EnrollmentStatus = 'OPEN' | 'CLOSED' | 'WAITLIST';
export type LessonType = 'VIDEO' | 'LIVE' | 'QUIZ' | 'READING';
export type PlanPeriod = 'MONTHLY' | 'QUARTERLY' | 'YEARLY';
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // Sunday = 0, Saturday = 6

// ----------------------------------------------------------------------------
// COURSE TYPES
// ----------------------------------------------------------------------------

export interface CourseLesson {
  id: string;
  title: string;
  type: LessonType;
  duration: number; // minutes
  description: string;
  resources?: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: CourseLesson[];
  duration: string; // e.g., "3 weeks"
  objectives: string[];
}

export interface CoursePrice {
  monthly: number;
  quarterly: number;
  yearly?: number;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  ageGroup: 'KIDS' | 'ADULTS' | 'ALL';
  level: CourseLevel;
  duration: string; // e.g., "3 months"
  sessionsPerWeek: number;
  sessionDuration: number; // minutes
  price: CoursePrice;
  features: string[];
  curriculum: CourseModule[];
  teachers: string[]; // teacher IDs
  prerequisites: string[];
  whatYouWillLearn: string[];
  materialsIncluded: string[];
  thumbnailImage: string;
  galleryImages: string[];
  enrollmentStatus: EnrollmentStatus;
  rating: number;
  reviewCount: number;
  tags: string[];
}

// ----------------------------------------------------------------------------
// PRICING PLAN TYPES
// ---------------------------------------------------------------------------

export interface PricingPlanFeatures {
  included: string[];
  excluded: string[];
}

export interface PlanSessionInfo {
  perWeek: number;
  duration: number; // minutes
}

export interface PricingPlan {
  id: string;
  courseId: string;
  name: string;
  price: number;
  period: PlanPeriod;
  discount?: number;
  features: PricingPlanFeatures;
  popular?: boolean;
  ctaText: string;
  sessionInfo: PlanSessionInfo;
  bonusFeatures?: string[];
}

// ----------------------------------------------------------------------------
// TEACHER TYPES
// ---------------------------------------------------------------------------

export interface TimeSlot {
  id: string;
  startTime: string; // "09:00"
  endTime: string; // "10:00"
  timezone: string;
  available: boolean;
}

export interface TeacherAvailability {
  dayOfWeek: DayOfWeek;
  slots: TimeSlot[];
}

export interface Teacher {
  id: string;
  slug: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  specialties: string[]; // e.g., ["Tajweed", "Nazira", "Hifz"]
  languages: string[]; // e.g., ["English", "Urdu", "Arabic"]
  certifications: string[];
  experience: number; // years
  rating: number;
  reviewCount: number;
  teachingPhilosophy: string;
  availability: TeacherAvailability[];
  featured: boolean;
  gender: 'MALE' | 'FEMALE';
}

// ----------------------------------------------------------------------------
// ENROLLMENT TYPES
// ---------------------------------------------------------------------------

export interface StudentInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age?: number;
  timezone: string;
}

export interface CourseSelection {
  courseId: string;
  planId: string;
  preferredTeacherId?: string;
  preferredDays: DayOfWeek[];
  preferredTimeSlot: string;
}

export interface ParentInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  relationship: string;
}

export interface AdditionalInfo {
  howFoundUs: string;
  specialRequirements?: string;
  agreedToTerms: boolean;
}

export interface EnrollmentData {
  studentInfo: StudentInfo;
  courseSelection: CourseSelection;
  parentInfo?: ParentInfo;
  additionalInfo: AdditionalInfo;
}

// ----------------------------------------------------------------------------
// SCHEDULE TYPES
// ---------------------------------------------------------------------------

export interface BookingSlot {
  id: string;
  courseId: string;
  teacherId: string;
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
  timezone: string;
  booked: boolean;
  studentName?: string;
}

export interface BookingRequest {
  slotId: string;
  studentId: string;
  courseId: string;
  notes?: string;
}

export interface BookingConfirmation {
  bookingId: string;
  status: 'CONFIRMED' | 'PENDING' | 'CANCELLED';
  slotDetails: BookingSlot;
  confirmationCode: string;
  createdAt: string;
}

// ----------------------------------------------------------------------------
// API RESPONSE TYPES
// ---------------------------------------------------------------------------

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export interface EnrollmentConfirmation {
  enrollmentId: string;
  status: 'PENDING' | 'CONFIRMED' | 'WAITLIST';
  courseId: string;
  planId: string;
  studentName: string;
  confirmationCode: string;
  nextSteps: string[];
  createdAt: string;
}

// ============================================================================
// EXISTING TYPES (Preserved)
// ============================================================================

export interface NavLink {
  name: string;
  path: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  role: string;
  image?: string;
}
