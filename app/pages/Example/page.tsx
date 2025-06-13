// pages/index.tsx
"use client"
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define TypeScript interfaces
interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

interface Experience {
  id: number;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  date: string;
}

interface Skill {
  id: number;
  name: string;
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const slideIn = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const popIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20,
      duration: 0.4
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, height: 0 },
  visible: (i: number) => ({
    opacity: 1,
    height: "auto",
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  }),
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.2 }
  }
};

export default function CVBuilder() {
  // State for personal information
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: 'John Doe',
    title: 'Frontend Developer',
    email: 'john@example.com',
    phone: '(123) 456-7890',
    location: 'New York, NY',
    summary: 'Passionate developer with 5+ years of experience building responsive web applications.'
  });

  // State for work experience
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      position: 'Senior Developer',
      company: 'Tech Solutions Inc.',
      startDate: '2020-01',
      endDate: 'Present',
      description: 'Lead frontend team building React applications'
    }
  ]);

  // State for education
  const [education, setEducation] = useState<Education[]>([
    {
      id: 1,
      institution: 'University of Technology',
      degree: 'B.S. Computer Science',
      date: '2015-2019'
    }
  ]);

  // State for skills
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Next.js' }
  ]);

  const skillInputRef = useRef<HTMLInputElement>(null);

  // Handle personal info changes
  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  // Add new experience
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        position: '',
        company: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ]);
  };

  // Update experience
  const handleExperienceChange = (id: number, field: keyof Experience, value: string) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  // Add skill
  const addSkill = () => {
    if (skillInputRef.current && skillInputRef.current.value.trim()) {
      setSkills([
        ...skills,
        { id: Date.now(), name: skillInputRef.current.value.trim() }
      ]);
      skillInputRef.current.value = '';
    }
  };

  // Remove skill
  const removeSkill = (id: number) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  // Handle skill key down
  const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && skillInputRef.current?.value.trim()) {
      addSkill();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-indigo-700 text-white p-4 shadow-md"
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold">Creative CV Builder</h1>
          </motion.div>
          <motion.nav
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-700 px-4 py-2 rounded-md font-medium"
            >
              Download CV
            </motion.button>
          </motion.nav>
        </div>
      </motion.header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800">Build Your CV</h2>
            
            {/* Personal Information Section */}
            <Section title="Personal Information">
              <InputField 
                label="Full Name"
                name="name"
                value={personalInfo.name}
                onChange={handlePersonalChange}
              />
              <InputField 
                label="Professional Title"
                name="title"
                value={personalInfo.title}
                onChange={handlePersonalChange}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField 
                  label="Email"
                  name="email"
                  value={personalInfo.email}
                  onChange={handlePersonalChange}
                />
                <InputField 
                  label="Phone"
                  name="phone"
                  value={personalInfo.phone}
                  onChange={handlePersonalChange}
                />
              </div>
              <InputField 
                label="Location"
                name="location"
                value={personalInfo.location}
                onChange={handlePersonalChange}
              />
              <TextAreaField 
                label="Professional Summary"
                name="summary"
                value={personalInfo.summary}
                onChange={handlePersonalChange}
              />
            </Section>

            {/* Work Experience Section */}
            <Section title="Work Experience">
              <AnimatePresence>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={index}
                    className="mb-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputField 
                        label="Position"
                        value={exp.position}
                        onChange={(e) => handleExperienceChange(exp.id, 'position', e.target.value)}
                      />
                      <InputField 
                        label="Company"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <InputField 
                        label="Start Date"
                        placeholder="YYYY-MM"
                        value={exp.startDate}
                        onChange={(e) => handleExperienceChange(exp.id, 'startDate', e.target.value)}
                      />
                      <InputField 
                        label="End Date"
                        placeholder="YYYY-MM or Present"
                        value={exp.endDate}
                        onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                      />
                    </div>
                    <TextAreaField 
                      label="Description"
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                      className="mt-2"
                    />
                    {experiences.length > 1 && (
                      <div className="mt-2 text-right">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setExperiences(experiences.filter(e => e.id !== exp.id))}
                          className="text-red-500"
                        >
                          Remove Experience
                        </motion.button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addExperience}
                className="mt-2 text-indigo-600 flex items-center"
              >
                <PlusIcon /> Add Experience
              </motion.button>
            </Section>

            {/* Skills Section */}
            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                <AnimatePresence>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      variants={itemAnimation}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={index}
                    >
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-100 px-3 py-1 rounded-full flex items-center"
                      >
                        {skill.name}
                        <motion.button 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeSkill(skill.id)}
                          className="ml-2 text-red-500"
                        >
                          ×
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <div className="mt-4 flex">
                <input
                  ref={skillInputRef}
                  type="text"
                  placeholder="Add skill"
                  className="flex-1 border rounded-l p-2"
                  onKeyDown={handleSkillKeyDown}
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={addSkill}
                  className="bg-indigo-600 text-white px-4 rounded-r"
                >
                  Add
                </motion.button>
              </div>
            </Section>
          </motion.div>

          {/* Right Column - Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800">CV Preview</h2>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-8 border border-gray-200"
            >
              <CVPreview 
                personalInfo={personalInfo}
                experiences={experiences}
                education={education}
                skills={skills}
              />
            </motion.div>
          </motion.div>
        </div>
      </main>

      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-800 text-gray-300 py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Creative CV Builder</h3>
              <p className="mb-4">Create professional resumes that get you hired faster with our easy-to-use CV builder.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">CV Templates</a></li>
                <li><a href="#" className="hover:text-white transition">Cover Letter Examples</a></li>
                <li><a href="#" className="hover:text-white transition">Job Search Tips</a></li>
                <li><a href="#" className="hover:text-white transition">Career Advice</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Popular Guides</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">ATS-Friendly CV Guide</a></li>
                <li><a href="#" className="hover:text-white transition">CV Format Guide</a></li>
                <li><a href="#" className="hover:text-white transition">Entry-Level CV Tips</a></li>
                <li><a href="#" className="hover:text-white transition">Career Change CV</a></li>
                <li><a href="#" className="hover:text-white transition">Executive CV Writing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>© 2023 Creative CV Builder. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

// UI Components
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3 pb-2 border-b">{title}</h3>
    {children}
  </div>
);

const InputField = ({ 
  label, 
  ...props 
}: { 
  label: string; 
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="mb-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      {...props}
    />
  </div>
);

const TextAreaField = ({ 
  label, 
  ...props 
}: { 
  label: string; 
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <div className="mb-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      rows={4}
      {...props}
    />
  </div>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
);

// Preview Component
const CVPreview = ({ 
  personalInfo, 
  experiences, 
  education, 
  skills 
}: {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}) => (
  <div className="font-sans">
    {/* Header */}
    <header className="mb-6">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold text-gray-800"
      >
        {personalInfo.name}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-indigo-600"
      >
        {personalInfo.title}
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600"
      >
        <span>{personalInfo.email}</span>
        <span>•</span>
        <span>{personalInfo.phone}</span>
        <span>•</span>
        <span>{personalInfo.location}</span>
      </motion.div>
    </header>

    {/* Summary */}
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-6"
    >
      <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Summary</h2>
      <p className="text-gray-700">{personalInfo.summary}</p>
    </motion.section>

    {/* Experience */}
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mb-6"
    >
      <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">Work Experience</h2>
      <AnimatePresence>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="mb-4"
          >
            <div className="flex justify-between">
              <h3 className="font-bold text-lg">{exp.position}</h3>
              <span className="text-gray-600">{exp.startDate} - {exp.endDate}</span>
            </div>
            <p className="text-indigo-600 font-medium">{exp.company}</p>
            <p className="text-gray-700 mt-1">{exp.description}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.section>

    {/* Skills */}
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">Skills</h2>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {skills.map((skill, index) => (
            <motion.span
              key={skill.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.7 }}
              className="bg-gray-100 px-3 py-1 rounded-full"
            >
              {skill.name}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  </div>
);