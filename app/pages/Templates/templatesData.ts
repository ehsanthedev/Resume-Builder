// app/templates/templatesData.ts
import { Template, TemplateCategory } from './templates.interface';

export const categories: TemplateCategory[] = [
  { id: 'all', name: 'All Templates' },
  { id: 'Professional', name: 'Professional' },
  { id: 'Creative', name: 'Creative' },
  { id: 'Minimalist', name: 'Minimalist' },
  { id: 'Executive', name: 'Executive' },
  { id: 'Student', name: 'Student' },
];

export const allTemplates: Template[] = [
  // Professional CVs (3)
  {
    id: 1,
    name: 'Modern Professional',
    category: 'Professional',
    description: 'Clean layout perfect for corporate roles',
    popularity: 95,
    image: '/templates/modern-professional.jpg'
  },
  {
    id: 6,
    name: 'Corporate Classic',
    category: 'Professional',
    description: 'Timeless design for all industries',
    popularity: 90,
    image: '/templates/corporate-classic.jpg'
  },
  {
    id: 11,
    name: 'Business Pro',
    category: 'Professional',
    description: 'For finance and business roles',
    popularity: 93,
    image: '/templates/business-pro.jpg'
  },
  
  // Creative CVs (3)
  {
    id: 2,
    name: 'Creative Portfolio',
    category: 'Creative',
    description: 'For designers and creatives',
    popularity: 87,
    image: '/templates/creative-portfolio.jpg'
  },
  {
    id: 7,
    name: 'Artistic Flair',
    category: 'Creative',
    description: 'Showcase your creative personality',
    popularity: 82,
    image: '/templates/artistic-flair.jpg'
  },
  {
    id: 12,
    name: 'Design Vision',
    category: 'Creative',
    description: 'Showcases design sensibilities',
    popularity: 86,
    image: '/templates/design-vision.jpg'
  },
  
  // Minimalist CVs (3)
  {
    id: 4,
    name: 'Tech Minimal',
    category: 'Minimalist',
    description: 'Optimized for tech roles',
    popularity: 89,
    image: '/templates/tech-minimal.jpg'
  },
  {
    id: 8,
    name: 'Simple Elegance',
    category: 'Minimalist',
    description: 'Understated yet professional',
    popularity: 88,
    image: '/templates/simple-elegance.jpg'
  },
  {
    id: 13,
    name: 'Clean Lines',
    category: 'Minimalist',
    description: 'Ultra-modern minimalist approach',
    popularity: 87,
    image: '/templates/clean-lines.jpg'
  },
  
  // Executive CVs (3)
  {
    id: 3,
    name: 'Executive Blue',
    category: 'Executive',
    description: 'Sophisticated design for senior roles',
    popularity: 92,
    image: '/templates/executive-blue.jpg'
  },
  {
    id: 9,
    name: 'Senior Executive',
    category: 'Executive',
    description: 'For C-level positions',
    popularity: 91,
    image: '/templates/senior-executive.jpg'
  },
  {
    id: 14,
    name: 'Leadership',
    category: 'Executive',
    description: 'For managers and team leaders',
    popularity: 89,
    image: '/templates/leadership.jpg'
  },
  
  // Student CVs (3)
  {
    id: 5,
    name: 'Fresh Graduate',
    category: 'Student',
    description: 'Perfect for entry-level candidates',
    popularity: 85,
    image: '/templates/fresh-graduate.jpg'
  },
  {
    id: 10,
    name: 'Academic Scholar',
    category: 'Student',
    description: 'Ideal for academic positions',
    popularity: 84,
    image: '/templates/academic-scholar.jpg'
  },
  {
    id: 15,
    name: 'Intern Ready',
    category: 'Student',
    description: 'Designed for internships',
    popularity: 83,
    image: '/templates/intern-ready.jpg'
  }
];