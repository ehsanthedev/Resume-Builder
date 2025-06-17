// app/components/CVPreviews.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils'; // Or create a simple cn utility if not using shadcn
// Simple cn utility - add this at the top of CVPreviews.tsx instead of the import
// const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Simple cn utility if not using shadcn
// const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// ============== PROFESSIONAL CVS ==============
export const ProfessionalCV1 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <div className="border-b border-gray-300 pb-1 mb-1">
      <h2 className="font-bold text-sm">JOHN ANDERSON</h2>
      <p className="text-gray-600 text-xs">Senior Software Engineer</p>
    </div>
    <div className="grid grid-cols-2 gap-1">
      <div>
        <p className="font-semibold">Contact</p>
        <p>john@example.com</p>
        <p>(123) 456-7890</p>
        <p>San Francisco, CA</p>
      </div>
      <div>
        <p className="font-semibold">Skills</p>
        <ul className="list-disc list-inside pl-2">
          <li>JavaScript/TypeScript</li>
          <li>React/Next.js</li>
          <li>Node.js</li>
          <li>AWS</li>
        </ul>
      </div>
    </div>
    <div className="mt-1">
      <p className="font-semibold border-t pt-1">Experience</p>
      <p className="font-medium">Senior Developer @ TechCorp</p>
      <p className="text-gray-600 text-xs">2020-Present</p>
      <p className="text-xs mt-0.5">Lead team of 5 developers building enterprise applications</p>
    </div>
  </div>
);

export const ProfessionalCV2 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <div className="text-center mb-1">
      <h2 className="font-bold text-sm">SARAH JOHNSON</h2>
      <p className="text-gray-600 text-xs">Product Manager</p>
    </div>
    <div className="space-y-1">
      <p className="font-semibold">Experience</p>
      <div>
        <p className="font-medium">Product Lead @ InnovateCo</p>
        <p className="text-gray-600 text-xs">2018-Present</p>
      </div>
      <div>
        <p className="font-medium">Associate PM @ StartUp Inc</p>
        <p className="text-gray-600 text-xs">2016-2018</p>
      </div>
    </div>
    <div className="mt-1">
      <p className="font-semibold border-t pt-1">Education</p>
      <p>MBA, Harvard Business School</p>
    </div>
  </div>
);

export const ProfessionalCV3 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <div className="flex justify-between items-start">
      <div>
        <h2 className="font-bold text-sm">MICHAEL CHEN</h2>
        <p className="text-gray-600 text-xs">Data Scientist</p>
      </div>
      <div className="text-right">
        <p>michael@example.com</p>
        <p>(987) 654-3210</p>
      </div>
    </div>
    <div className="mt-1 grid grid-cols-2 gap-1">
      <div>
        <p className="font-semibold">Technical Skills</p>
        <p>Python, SQL, TensorFlow</p>
      </div>
      <div>
        <p className="font-semibold">Projects</p>
        <p>5+ research papers published</p>
      </div>
    </div>
  </div>
);

// ============== CREATIVE CVS ==============
export const CreativeCV1 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)} style={{ fontFamily: "'Brush Script MT', cursive" }}>
    <div className="text-center mb-1">
      <h2 className="font-bold text-lg">EMMA RODRIGUEZ</h2>
      <p className="text-purple-600 text-sm">Graphic Designer & Illustrator</p>
    </div>
    <div className="flex">
      <div className="w-1/3 border-r pr-1">
        <p>Portfolio:</p>
        <p>emma.design</p>
      </div>
      <div className="w-2/3 pl-1">
        <p>Specializing in brand identity and digital illustration with 7+ years experience</p>
      </div>
    </div>
    <div className="mt-1 flex justify-around text-center">
      <div>
        <p className="font-semibold">Clients</p>
        <p>50+</p>
      </div>
      <div>
        <p className="font-semibold">Projects</p>
        <p>200+</p>
      </div>
    </div>
  </div>
);

export const CreativeCV2 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)} style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
    <div className="flex items-center mb-1">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
      <div>
        <h2 className="font-bold">ALEX MORGAN</h2>
        <p>Creative Director</p>
      </div>
    </div>
    <p className="italic">"Transforming ideas into visual experiences"</p>
    <div className="mt-1 grid grid-cols-3 gap-1 text-center">
      <div>
        <p className="font-semibold">Awards</p>
        <p>12</p>
      </div>
      <div>
        <p className="font-semibold">Exhibitions</p>
        <p>8</p>
      </div>
      <div>
        <p className="font-semibold">Clients</p>
        <p>75+</p>
      </div>
    </div>
  </div>
);

export const CreativeCV3 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <div className="grid grid-cols-3 gap-1">
      <div className="col-span-1 bg-yellow-100 p-1 rounded">
        <p className="font-bold">Skills</p>
        <ul className="list-disc list-inside pl-2">
          <li>UI/UX Design</li>
          <li>Motion Graphics</li>
          <li>Branding</li>
        </ul>
      </div>
      <div className="col-span-2">
        <h2 className="font-bold text-lg">JAMIE SMITH</h2>
        <p>Digital Artist</p>
        <p className="mt-1">Exhibitions: NY, London, Tokyo</p>
        <p className="mt-1 text-sm">Specializing in interactive digital installations</p>
      </div>
    </div>
  </div>
);

// ============== MINIMALIST CVS ==============
export const MinimalistCV1 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <div className="text-center">
      <h2 className="font-bold">DAVID WILSON</h2>
      <p>Software Developer</p>
    </div>
    <div className="mt-2 space-y-1">
      <p className="font-semibold border-t pt-1">Experience</p>
      <p>DevOps Engineer - 5 years</p>
      <p>Full Stack Developer - 3 years</p>
      
      <p className="font-semibold border-t pt-1 mt-1">Education</p>
      <p>BSc Computer Science</p>
      <p>University of Washington</p>
    </div>
  </div>
);

export const MinimalistCV2 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <div className="flex justify-between">
      <div>
        <h2 className="font-bold">LISA KIM</h2>
        <p>UX Researcher</p>
      </div>
      <div className="text-right">
        <p>lisa@example.com</p>
        <p>(987) 654-3210</p>
      </div>
    </div>
    <div className="mt-2 space-y-1">
      <p className="font-semibold border-t pt-1">Companies</p>
      <p>Google | Meta | Netflix</p>
      
      <p className="font-semibold border-t pt-1 mt-1">Specialties</p>
      <p>User Testing | Analytics | Prototyping</p>
    </div>
  </div>
);

export const MinimalistCV3 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <h2 className="font-bold mb-1">THOMAS BROWN</h2>
    <div className="space-y-1">
      <p><span className="font-semibold">Role:</span> Systems Architect</p>
      <p><span className="font-semibold">Tech:</span> AWS, Kubernetes, Terraform</p>
      <p><span className="font-semibold">Cert:</span> AWS Solutions Architect</p>
      <p><span className="font-semibold">Experience:</span> 10+ years</p>
    </div>
  </div>
);

// ============== EXECUTIVE CVS ==============
export const ExecutiveCV1 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <div className="border-b-2 border-gray-800 pb-1 mb-1">
      <h2 className="font-bold text-lg">ROBERT JOHNSON</h2>
      <p className="text-gray-600">Chief Technology Officer</p>
    </div>
    <div className="grid grid-cols-3 gap-1">
      <div className="col-span-1">
        <p className="font-semibold">Leadership</p>
      </div>
      <div className="col-span-2">
        <p>15+ years in tech leadership</p>
        <p>Managed teams up to 200+</p>
        <p>Scaled engineering org from 10 to 150</p>
      </div>
    </div>
    <div className="mt-1">
      <p className="font-semibold border-t pt-1">Companies</p>
      <p>Fortune 500 tech firms | 3 successful exits</p>
    </div>
  </div>
);

export const ExecutiveCV2 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)} style={{ background: '#f8f9fa' }}>
    <div className="flex">
      <div className="w-1/3 pr-1 border-r">
        <h2 className="font-bold">ELIZABETH TAYLOR</h2>
        <p>CFO</p>
      </div>
      <div className="w-2/3 pl-1">
        <p className="font-semibold">Achievements</p>
        <p>+$500M revenue growth</p>
        <p>Successful IPO in 2020</p>
        <p>Reduced costs by 22%</p>
      </div>
    </div>
    <div className="mt-1 border-t pt-1">
      <p>Harvard MBA | Stanford BS</p>
    </div>
  </div>
);

export const ExecutiveCV3 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <div className="text-center mb-1">
      <h2 className="font-bold">JAMES WILSON</h2>
      <p className="text-gray-600">VP of Operations</p>
    </div>
    <div className="flex justify-around">
      <div className="text-center">
        <p className="font-semibold">Teams</p>
        <p>15+</p>
      </div>
      <div className="text-center">
        <p className="font-semibold">Revenue</p>
        <p>$1.2B+</p>
      </div>
      <div className="text-center">
        <p className="font-semibold">Efficiency</p>
        <p>+35%</p>
      </div>
    </div>
    <div className="mt-1 border-t pt-1">
      <p>Specialties: Scaling operations, Process optimization</p>
    </div>
  </div>
);

// ============== STUDENT CVS ==============
export const StudentCV1 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <div className="text-center mb-1">
      <h2 className="font-bold">SOPHIA MARTINEZ</h2>
      <p>Computer Science Student</p>
    </div>
    <div className="grid grid-cols-2 gap-1">
      <div>
        <p className="font-semibold">Education</p>
        <p>MIT '24</p>
        <p>GPA: 3.9/4.0</p>
      </div>
      <div>
        <p className="font-semibold">Projects</p>
        <p>5+ hackathons</p>
        <p>3 research projects</p>
      </div>
    </div>
    <div className="mt-1">
      <p className="font-semibold border-t pt-1">Internships</p>
      <p>Google, Microsoft, SpaceX</p>
    </div>
  </div>
);

export const StudentCV2 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <h2 className="font-bold">DANIEL LEE</h2>
    <p>Business Administration Student</p>
    <div className="mt-1 space-y-1">
      <p className="font-semibold border-t pt-1">Leadership</p>
      <p>Student Body President</p>
      <p>Business Club Founder</p>
      
      <p className="font-semibold border-t pt-1 mt-1">Skills</p>
      <p>Excel, PPT, Market Analysis</p>
    </div>
  </div>
);

export const StudentCV3 = ({ className }: { className?: string }) => (
  <div className={cn("cv-preview bg-white p-3 text-xs", className)}>
    <div className="flex items-center mb-1">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
      <div>
        <h2 className="font-bold">OLIVIA DAVIS</h2>
        <p>Psychology Major</p>
      </div>
    </div>
    <div className="space-y-1">
      <p className="font-semibold border-t pt-1">Research</p>
      <p>3 published papers</p>
      <p>RA for Prof. Smith</p>
      
      <p className="font-semibold border-t pt-1 mt-1">Internships</p>
      <p>Mental Health Clinic</p>
      <p>Child Development Center</p>
    </div>
  </div>
);