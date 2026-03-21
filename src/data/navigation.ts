export type NavItem = {
  key: string;
  to: string;
};

export const aboutNavItems: NavItem[] = [
  { key: "ceoWord", to: "/about/ceo-word" },
  { key: "whyDais", to: "/about/why-dais" },
  { key: "history", to: "/about/school-history" },
  { key: "missionVision", to: "/about/mission-vision" },
  { key: "administration", to: "/about/administration-staff" },
  { key: "policies", to: "/about/school-policies" },
  { key: "conduct", to: "/about/code-of-conduct" },
  { key: "calendar", to: "/about/calendar" },
];

export const academicsNavItems: NavItem[] = [
  { key: "directorWord", to: "/academics/director-word" },
  { key: "earlyChildhood", to: "/academics/early-childhood" },
  { key: "elementary", to: "/academics/elementary-school" },
  { key: "middleHigh", to: "/academics/middle-high-school" },
  { key: "studentPortal", to: "/academics/student-portal" },
];

export const admissionsNavItems: NavItem[] = [
  { key: "admissionProcess", to: "/admissions/admission-process" },
  { key: "requirements", to: "/admissions/requirements" },
  { key: "fees", to: "/admissions/fees" },
  { key: "financialSystem", to: "/admissions/financial-system" },
  { key: "onlineApplication", to: "/admissions/online-application" },
  { key: "schoolTour", to: "/admissions/school-tour" },
  { key: "faqs", to: "/admissions/faqs" },
];

export const newsNavItems: NavItem[] = [
  { key: "upcomingEvents", to: "/news-events/upcoming-events" },
  { key: "photoGallery", to: "/gallery" },
  { key: "sportsAchievements", to: "/news-events/sports-achievements" },
  
];

export const contactNavItems: NavItem[] = [
  { key: "contact", to: "/contact/contact-us" },
  { key: "location", to: "/contact/location" },
  { key: "email", to: "/contact/email" },
  { key: "phone", to: "/contact/phone" },
];

export const footerLinks = [
  { key: "calendar", path: "/about/calendar" },
  { key: "portal", path: "/academics/student-portal" },
  { key: "directory", path: "/about/administration-staff" },
  { key: "careers", path: "/career" },
  { key: "privacy", path: "/about/school-policies" },
] as const;