export interface ServiceItem {
  id: string;
  title: string;
  category: 'cctv' | 'electrical';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  benefits: string[];
  whatsIncluded: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'cctv' | 'commercial' | 'residential' | 'electrical' | 'lighting';
  categoryLabel: string;
  location: string;
  servicesProvided: string[];
  shortDesc: string;
  fullDesc: string;
  completionDate: string;
  image: string;
  highlights: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  challenges: string[];
  solutions: string[];
  recommendedServices: string[];
  image: string;
}

export interface FaqItem {
  id: string;
  category: 'general' | 'cctv' | 'electrical' | 'quote';
  question: string;
  answer: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: 'CCTV Guides' | 'Electrical Guides' | 'Business Security';
  categoryColor: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export interface CustomerReview {
  id: string;
  author?: string;
  location: string;
  serviceType: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  desc: string;
  details: string;
  iconName: string;
}
