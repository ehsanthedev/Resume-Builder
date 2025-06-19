// app/builder/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLanguage,
  FaPalette,
  FaEye,
  FaFilePdf,
  FaSave,
  FaPlus,
  FaTrash,
  FaDownload,
  FaSpinner,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // Import Variants type
import type { Variants } from 'framer-motion'; 
import Footer from '@/app/components/Footer/page';

// Define TypeScript interfaces
interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  summary: string;
  profilePic: string | null;
}

interface WorkExperience {
  id: number;
  jobTitle: string;
  employer: string;
  city: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean;
}

interface Education {
  id: number;
  school: string;
  degree: string;
  city: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Skill {
  id: number;
  name: string;
  level: string;
}

interface Language {
  id: number;
  name: string;
  proficiency: string;
}

// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const popIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring', // Use string literal
      stiffness: 300,
      damping: 20,
      duration: 0.4,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const itemAnimation: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: (i: number) => ({
    opacity: 1,
    height: 'auto',
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2 },
  },
};

export default function CVBuilder() {
  // State for form sections
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    summary: '',
    profilePic: null,
  });

  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([
    {
      id: 1,
      jobTitle: '',
      employer: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
      current: false,
    },
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      id: 1,
      school: '',
      degree: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: '', level: 'Intermediate' },
  ]);

  const [languages, setLanguages] = useState<Language[]>([
    { id: 1, name: '', proficiency: 'Fluent' },
  ]);

  const [template, setTemplate] = useState<string>('professional');
  const [activeSection, setActiveSection] = useState<string>('personal');
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState<boolean>(false);

  const cvPreviewRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /// Handle input changes with proper typing
  const handlePersonalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPersonalInfo({
            ...personalInfo,
            profilePic: event.target.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProfilePic = () => {
    setPersonalInfo({ ...personalInfo, profilePic: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleWorkChange = (
    id: number,
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;

    const updatedValue = type === 'checkbox' ? target.checked : value;

    const updatedExperience = workExperience.map((exp) =>
      exp.id === id ? { ...exp, [name]: updatedValue } : exp
    );
    setWorkExperience(updatedExperience);
  };

  const handleEducationChange = (
    id: number,
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const updatedEducation = education.map((edu) =>
      edu.id === id ? { ...edu, [name]: value } : edu
    );
    setEducation(updatedEducation);
  };

  const handleSkillChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, [name]: value } : skill
    );
    setSkills(updatedSkills);
  };

  const handleLanguageChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedLanguages = languages.map((lang) =>
      lang.id === id ? { ...lang, [name]: value } : lang
    );
    setLanguages(updatedLanguages);
  };

  // Add new entries
  const addWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      {
        id: Date.now(),
        jobTitle: '',
        employer: '',
        city: '',
        startDate: '',
        endDate: '',
        description: '',
        current: false,
      },
    ]);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: Date.now(),
        school: '',
        degree: '',
        city: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };

  const addSkill = () => {
    setSkills([...skills, { id: Date.now(), name: '', level: 'Intermediate' }]);
  };

  const addLanguage = () => {
    setLanguages([
      ...languages,
      { id: Date.now(), name: '', proficiency: 'Fluent' },
    ]);
  };

  // Remove entries
  const removeWorkExperience = (id: number) => {
    if (workExperience.length > 1) {
      setWorkExperience(workExperience.filter((exp) => exp.id !== id));
    }
  };

  const removeEducation = (id: number) => {
    if (education.length > 1) {
      setEducation(education.filter((edu) => edu.id !== id));
    }
  };

  const removeSkill = (id: number) => {
    if (skills.length > 1) {
      setSkills(skills.filter((skill) => skill.id !== id));
    }
  };

  const removeLanguage = (id: number) => {
    if (languages.length > 1) {
      setLanguages(languages.filter((lang) => lang.id !== id));
    }
  };

  // Save progress to localStorage
  const saveProgress = () => {
    const cvData = {
      personalInfo,
      workExperience,
      education,
      skills,
      languages,
      template,
    };
    localStorage.setItem('cvData', JSON.stringify(cvData));

    // Animation feedback
    const saveBtn = document.querySelector('.save-btn');
    if (saveBtn) {
      saveBtn.classList.add('animate-ping-once');
      setTimeout(() => {
        saveBtn.classList.remove('animate-ping-once');
      }, 500);
    }
  };

  // Download PDF function
  const downloadPDF = async () => {
    if (!cvPreviewRef.current) return;

    try {
      setIsGeneratingPDF(true);

      // Create a clone of the preview element
      const previewClone = cvPreviewRef.current.cloneNode(
        true
      ) as HTMLDivElement;

      // Add clone to document
      previewClone.style.position = 'fixed';
      previewClone.style.top = '0';
      previewClone.style.left = '-9999px';
      previewClone.style.zIndex = '-1000';
      previewClone.style.width = '210mm'; // A4 width
      document.body.appendChild(previewClone);

      // Generate PDF
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;

      const canvas = await html2canvas(previewClone, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: '#ffffff',
      } as any);

      document.body.removeChild(previewClone);

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${personalInfo.fullName || 'my'}-cv.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Load saved data
  useEffect(() => {
    const savedData = localStorage.getItem('cvData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setPersonalInfo(parsedData.personalInfo || personalInfo);
        setWorkExperience(parsedData.workExperience || workExperience);
        setEducation(parsedData.education || education);
        setSkills(parsedData.skills || skills);
        setLanguages(parsedData.languages || languages);
        setTemplate(parsedData.template || template);
      } catch (e) {
        console.error('Error parsing saved data:', e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-5 shadow-lg"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center mb-4 md:mb-0"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.3 }}
              className="bg-white p-2 rounded-lg mr-3"
            >
              <FaFilePdf className="text-indigo-600 text-2xl" />
            </motion.div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Professional &amp; creative CV Builder
              </h1>
              <p className="text-indigo-200 text-sm">
                Create your perfect resume in minutes
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={saveProgress}
              className="save-btn flex items-center gap-2 px-4 py-2 bg-white text-purple-700 bg-opacity-20 rounded-lg hover:bg-opacity-30 transition"
            >
              <FaSave /> Save Progress
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
            >
              <FaEye /> {showPreview ? 'Hide Preview' : 'Show Preview'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadPDF}
              disabled={isGeneratingPDF}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                isGeneratingPDF
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-white text-indigo-600 hover:bg-gray-100'
              }`}
            >
              {isGeneratingPDF ? (
                <>
                  <FaSpinner className="animate-spin" /> Generating...
                </>
              ) : (
                <>
                  <FaDownload /> Download PDF
                </>
              )}
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Left Sidebar - Form Navigation */}
          <div className="lg:w-1/4">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 sticky top-6"
            >
              <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">
                Build Your CV
              </h2>

              <div className="space-y-2">
                {[
                  'personal',
                  'work',
                  'education',
                  'skills',
                  'languages',
                  'template',
                ].map((section) => (
                  <motion.button
                    key={section}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveSection(section)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                      activeSection === section
                        ? 'bg-indigo-50 text-indigo-700 font-medium border-l-4 border-indigo-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {section === 'personal' && (
                      <FaUser className="text-indigo-500" />
                    )}
                    {section === 'work' && (
                      <FaBriefcase className="text-indigo-500" />
                    )}
                    {section === 'education' && (
                      <FaGraduationCap className="text-indigo-500" />
                    )}
                    {section === 'skills' && (
                      <FaCode className="text-indigo-500" />
                    )}
                    {section === 'languages' && (
                      <FaLanguage className="text-indigo-500" />
                    )}
                    {section === 'template' && (
                      <FaPalette className="text-indigo-500" />
                    )}
                    {section.charAt(0).toUpperCase() + section.slice(1)}{' '}
                    {section === 'work' ? 'Experience' : ''}
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-medium mb-3 text-gray-700">
                  Resume Progress
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <motion.div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{
                      width: activeSection === 'template' ? '100%' : '80%',
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  ></motion.div>
                </div>
                <p className="text-sm text-gray-600">
                  {activeSection === 'template'
                    ? 'All sections completed!'
                    : 'Complete all sections for a professional resume'}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              {showPreview ? (
                // Preview Panel
                <motion.div
                  key="preview"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white rounded-xl shadow-lg p-6 mb-8"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    CV Preview
                  </h2>

                  <div
                    ref={cvPreviewRef}
                    className="border border-gray-300 p-8 min-h-[800px] bg-white"
                    style={{ width: '210mm' }} // Set A4 width
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                      <div>
                        <h1 className="text-3xl font-bold text-indigo-700">
                          {personalInfo.fullName || 'Your Name'}
                        </h1>
                        <p className="text-xl text-indigo-500 mt-1">
                          {personalInfo.jobTitle || 'Professional Title'}
                        </p>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm">
                          {personalInfo.email && (
                            <div className="flex items-center">
                              <span className="font-medium w-16">Email:</span>
                              <span>{personalInfo.email}</span>
                            </div>
                          )}
                          {personalInfo.phone && (
                            <div className="flex items-center">
                              <span className="font-medium w-16">Phone:</span>
                              <span>{personalInfo.phone}</span>
                            </div>
                          )}
                          {personalInfo.address && (
                            <div className="flex items-center">
                              <span className="font-medium w-16">Address:</span>
                              <span>{personalInfo.address}</span>
                            </div>
                          )}
                          {personalInfo.website && (
                            <div className="flex items-center">
                              <span className="font-medium w-16">Website:</span>
                              <span>{personalInfo.website}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {personalInfo.profilePic && (
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md">
                          <img
                            src={personalInfo.profilePic}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {personalInfo.summary && (
                      <div className="mb-8">
                        <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 text-indigo-700">
                          Professional Summary
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                          {personalInfo.summary}
                        </p>
                      </div>
                    )}

                    {workExperience.some((exp) => exp.jobTitle) && (
                      <div className="mb-8">
                        <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 text-indigo-700">
                          Work Experience
                        </h2>
                        {workExperience.map(
                          (exp, index) =>
                            exp.jobTitle && (
                              <motion.div
                                key={index}
                                className="mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="flex flex-col md:flex-row justify-between">
                                  <h3 className="font-bold text-lg text-gray-800">
                                    {exp.jobTitle}
                                  </h3>
                                  <div className="text-gray-600">
                                    {exp.startDate} -{' '}
                                    {exp.current ? 'Present' : exp.endDate}
                                  </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between text-gray-700 mb-2">
                                  <div className="font-medium text-indigo-600">
                                    {exp.employer}
                                  </div>
                                  <div>{exp.city}</div>
                                </div>
                                <p className="text-gray-700 mt-2">
                                  {exp.description}
                                </p>
                              </motion.div>
                            )
                        )}
                      </div>
                    )}

                    {education.some((edu) => edu.school) && (
                      <div className="mb-8">
                        <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 text-indigo-700">
                          Education
                        </h2>
                        {education.map(
                          (edu, index) =>
                            edu.school && (
                              <motion.div
                                key={index}
                                className="mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="flex flex-col md:flex-row justify-between">
                                  <h3 className="font-bold text-gray-800">
                                    {edu.school}
                                  </h3>
                                  <div className="text-gray-600">
                                    {edu.startDate} - {edu.endDate}
                                  </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between text-gray-700">
                                  <div>{edu.degree}</div>
                                  <div>{edu.city}</div>
                                </div>
                                <p className="text-gray-700 mt-2">
                                  {edu.description}
                                </p>
                              </motion.div>
                            )
                        )}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {skills.some((skill) => skill.name) && (
                        <div>
                          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 text-indigo-700">
                            Skills
                          </h2>
                          <ul className="space-y-2">
                            {skills.map(
                              (skill, index) =>
                                skill.name && (
                                  <motion.li
                                    key={index}
                                    className="mb-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                  >
                                    <div className="flex justify-between">
                                      <span className="font-medium">
                                        {skill.name}
                                      </span>
                                      <span className="text-gray-600 bg-indigo-100 px-2 py-1 rounded text-sm">
                                        {skill.level}
                                      </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                      <div
                                        className="bg-indigo-600 h-1.5 rounded-full"
                                        style={{
                                          width:
                                            skill.level === 'Beginner'
                                              ? '30%'
                                              : skill.level === 'Intermediate'
                                              ? '60%'
                                              : skill.level === 'Advanced'
                                              ? '85%'
                                              : '100%',
                                        }}
                                      ></div>
                                    </div>
                                  </motion.li>
                                )
                            )}
                          </ul>
                        </div>
                      )}

                      {languages.some((lang) => lang.name) && (
                        <div>
                          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 text-indigo-700">
                            Languages
                          </h2>
                          <ul className="space-y-2">
                            {languages.map(
                              (lang, index) =>
                                lang.name && (
                                  <motion.li
                                    key={index}
                                    className="mb-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                  >
                                    <div className="flex justify-between">
                                      <span className="font-medium">
                                        {lang.name}
                                      </span>
                                      <span className="text-gray-600 bg-indigo-100 px-2 py-1 rounded text-sm">
                                        {lang.proficiency}
                                      </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                      <div
                                        className="bg-indigo-600 h-1.5 rounded-full"
                                        style={{
                                          width:
                                            lang.proficiency === 'Basic'
                                              ? '30%'
                                              : lang.proficiency ===
                                                'Conversational'
                                              ? '60%'
                                              : lang.proficiency === 'Fluent'
                                              ? '85%'
                                              : '100%',
                                        }}
                                      ></div>
                                    </div>
                                  </motion.li>
                                )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Form Area
                <motion.div
                  key="form"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-8"
                >
                  {/* Personal Section */}
                  {activeSection === 'personal' && (
                    <motion.div
                      variants={slideIn}
                      className="bg-white rounded-xl shadow-lg p-6"
                    >
                      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                        <FaUser className="text-indigo-600" /> Personal
                        Information
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex flex-col items-center">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-100 shadow mb-4"
                              >
                                {personalInfo.profilePic ? (
                                  <img
                                    src={personalInfo.profilePic}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <FaUser className="text-gray-400 text-4xl" />
                                  </div>
                                )}
                              </motion.div>
                              <div className="flex gap-2">
                                <input
                                  type="file"
                                  ref={fileInputRef}
                                  onChange={handleProfilePicChange}
                                  accept="image/*"
                                  className="hidden"
                                  id="profilePic"
                                />
                                <motion.label
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  htmlFor="profilePic"
                                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer flex items-center gap-2"
                                >
                                  <FaPlus /> Upload Photo
                                </motion.label>
                                {personalInfo.profilePic && (
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={removeProfilePic}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
                                  >
                                    <FaTrash /> Remove
                                  </motion.button>
                                )}
                              </div>
                            </div>
                            <div className="flex-1 mt-4 md:mt-0">
                              <p className="text-sm text-gray-600 mb-4">
                                Upload a professional photo (optional).
                                Recommended size: 200x200 pixels. Use a clear
                                headshot with a neutral background for best
                                results.
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-gray-700 mb-2">
                                    Full Name
                                  </label>
                                  <input
                                    type="text"
                                    name="fullName"
                                    value={personalInfo.fullName}
                                    onChange={handlePersonalChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="John Doe"
                                  />
                                </div>
                                <div>
                                  <label className="block text-gray-700 mb-2">
                                    Job Title
                                  </label>
                                  <input
                                    type="text"
                                    name="jobTitle"
                                    value={personalInfo.jobTitle}
                                    onChange={handlePersonalChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Software Engineer"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={personalInfo.email}
                            onChange={handlePersonalChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={personalInfo.phone}
                            onChange={handlePersonalChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={personalInfo.address}
                            onChange={handlePersonalChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="New York, NY"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">
                            Website
                          </label>
                          <input
                            type="url"
                            name="website"
                            value={personalInfo.website}
                            onChange={handlePersonalChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="https://yourwebsite.com"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 mb-2">
                            Professional Summary
                          </label>
                          <textarea
                            name="summary"
                            value={personalInfo.summary}
                            onChange={handlePersonalChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows={4}
                            placeholder="Experienced professional with 5+ years in software development specializing in web technologies..."
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Work Experience Section */}
                  {activeSection === 'work' && (
                    <motion.div
                      variants={slideIn}
                      className="bg-white rounded-xl shadow-lg p-6"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                          <FaBriefcase className="text-indigo-600" /> Work
                          Experience
                        </h2>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={addWorkExperience}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                        >
                          <FaPlus /> Add Experience
                        </motion.button>
                      </div>

                      <AnimatePresence>
                        {workExperience.map((exp, index) => (
                          <motion.div
                            key={exp.id}
                            custom={index}
                            variants={itemAnimation}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="mb-6 pb-6 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-gray-700 mb-2">
                                  Job Title
                                </label>
                                <input
                                  type="text"
                                  name="jobTitle"
                                  value={exp.jobTitle}
                                  onChange={(e) => handleWorkChange(exp.id, e)}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  placeholder="Senior Developer"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-700 mb-2">
                                  Employer
                                </label>
                                <input
                                  type="text"
                                  name="employer"
                                  value={exp.employer}
                                  onChange={(e) => handleWorkChange(exp.id, e)}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  placeholder="Google Inc."
                                />
                              </div>
                              <div>
                                <label className="block text-gray-700 mb-2">
                                  City
                                </label>
                                <input
                                  type="text"
                                  name="city"
                                  value={exp.city}
                                  onChange={(e) => handleWorkChange(exp.id, e)}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  placeholder="New York, NY"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-700 mb-2">
                                  Current Job
                                </label>
                                <div className="mt-2">
                                  <label className="inline-flex items-center">
                                    <input
                                      type="checkbox"
                                      name="current"
                                      checked={exp.current}
                                      onChange={(e) =>
                                        handleWorkChange(exp.id, e)
                                      }
                                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <span className="ml-2">
                                      I currently work here
                                    </span>
                                  </label>
                                </div>
                              </div>
                              <div>
                                <label className="block text-gray-700 mb-2">
                                  Start Date
                                </label>
                                <input
                                  type="month"
                                  name="startDate"
                                  value={exp.startDate}
                                  onChange={(e) => handleWorkChange(exp.id, e)}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                              </div>
                              {!exp.current && (
                                <div>
                                  <label className="block text-gray-700 mb-2">
                                    End Date
                                  </label>
                                  <input
                                    type="month"
                                    name="endDate"
                                    value={exp.endDate}
                                    onChange={(e) =>
                                      handleWorkChange(exp.id, e)
                                    }
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  />
                                </div>
                              )}
                              <div className="md:col-span-2">
                                <label className="block text-gray-700 mb-2">
                                  Description
                                </label>
                                <textarea
                                  name="description"
                                  value={exp.description}
                                  onChange={(e) => handleWorkChange(exp.id, e)}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  rows={3}
                                  placeholder="Describe your responsibilities, achievements, and technologies used..."
                                />
                              </div>
                            </div>
                            {workExperience.length > 1 && (
                              <div className="mt-4 text-right">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => removeWorkExperience(exp.id)}
                                  className="text-red-600 hover:text-red-800 flex items-center gap-1"
                                >
                                  <FaTrash /> Remove Experience
                                </motion.button>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  )}

                  {/* Education Section */}
                  {activeSection === 'education' && (
                    <motion.div
                      variants={slideIn}
                      className="bg-white rounded-xl shadow-lg p-6"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                          <FaGraduationCap className="text-indigo-600" />{' '}
                          Education
                        </h2>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={addEducation}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                        >
                          <FaPlus /> Add Education
                        </motion.button>
                      </div>

                      <AnimatePresence>
                        {education.map((edu, index) => (
                          <motion.div
                            key={edu.id}
                            custom={index}
                            variants={itemAnimation}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="mb-6 pb-6 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-gray-700 mb-2">
                                  School/University
                                </label>
                                <input
                                  type="text"
                                  name="school"
                                  value={edu.school}
                                  onChange={(e) =>
                                    handleEducationChange(edu.id, e)
                                  }
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  placeholder="Harvard University"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-700 mb-2">
                                  Degree
                                </label>
                                <input
                                  type="text"
                                  name="degree"
                                  value={edu.degree}
                                  onChange={(e) =>
                                    handleEducationChange(edu.id, e)
                                  }
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  placeholder="Bachelor of Science in Computer Science"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-700 mb-2">
                                  City
                                </label>
                                <input
                                  type="text"
                                  name="city"
                                  value={edu.city}
                                  onChange={(e) =>
                                    handleEducationChange(edu.id, e)
                                  }
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  placeholder="Cambridge, MA"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-700 mb-2">
                                  Start Date
                                </label>
                                <input
                                  type="month"
                                  name="startDate"
                                  value={edu.startDate}
                                  onChange={(e) =>
                                    handleEducationChange(edu.id, e)
                                  }
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-700 mb-2">
                                  End Date
                                </label>
                                <input
                                  type="month"
                                  name="endDate"
                                  value={edu.endDate}
                                  onChange={(e) =>
                                    handleEducationChange(edu.id, e)
                                  }
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-gray-700 mb-2">
                                  Description
                                </label>
                                <textarea
                                  name="description"
                                  value={edu.description}
                                  onChange={(e) =>
                                    handleEducationChange(edu.id, e)
                                  }
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  rows={3}
                                  placeholder="Relevant coursework, achievements, projects, etc."
                                />
                              </div>
                            </div>
                            {education.length > 1 && (
                              <div className="mt-4 text-right">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => removeEducation(edu.id)}
                                  className="text-red-600 hover:text-red-800 flex items-center gap-1"
                                >
                                  <FaTrash /> Remove Education
                                </motion.button>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  )}

                  {/* Skills Section */}
                  {activeSection === 'skills' && (
                    <motion.div
                      variants={slideIn}
                      className="bg-white rounded-xl shadow-lg p-6"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                          <FaCode className="text-indigo-600" /> Skills
                        </h2>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={addSkill}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                        >
                          <FaPlus /> Add Skill
                        </motion.button>
                      </div>

                      <div className="space-y-6">
                        <AnimatePresence>
                          {skills.map((skill, index) => (
                            <motion.div
                              key={skill.id}
                              custom={index}
                              variants={itemAnimation}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="flex items-start gap-4"
                            >
                              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-gray-700 mb-2">
                                    Skill Name
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    value={skill.name}
                                    onChange={(e) =>
                                      handleSkillChange(skill.id, e)
                                    }
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="JavaScript, Project Management, etc."
                                  />
                                </div>
                                <div>
                                  <label className="block text-gray-700 mb-2">
                                    Proficiency Level
                                  </label>
                                  <select
                                    name="level"
                                    value={skill.level}
                                    onChange={(e) =>
                                      handleSkillChange(skill.id, e)
                                    }
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  >
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">
                                      Intermediate
                                    </option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="Expert">Expert</option>
                                  </select>
                                </div>
                              </div>
                              {skills.length > 1 && (
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => removeSkill(skill.id)}
                                  className="mt-7 text-red-600 hover:text-red-800 flex items-center gap-1"
                                >
                                  <FaTrash />
                                </motion.button>
                              )}
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}

                  {/* Languages Section */}
                  {activeSection === 'languages' && (
                    <motion.div
                      variants={slideIn}
                      className="bg-white rounded-xl shadow-lg p-6"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                          <FaLanguage className="text-indigo-600" /> Languages
                        </h2>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={addLanguage}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                        >
                          <FaPlus /> Add Language
                        </motion.button>
                      </div>

                      <div className="space-y-6">
                        <AnimatePresence>
                          {languages.map((lang, index) => (
                            <motion.div
                              key={lang.id}
                              custom={index}
                              variants={itemAnimation}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="flex items-start gap-4"
                            >
                              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-gray-700 mb-2">
                                    Language
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    value={lang.name}
                                    onChange={(e) =>
                                      handleLanguageChange(lang.id, e)
                                    }
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="English, Spanish, etc."
                                  />
                                </div>
                                <div>
                                  <label className="block text-gray-700 mb-2">
                                    Proficiency
                                  </label>
                                  <select
                                    name="proficiency"
                                    value={lang.proficiency}
                                    onChange={(e) =>
                                      handleLanguageChange(lang.id, e)
                                    }
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  >
                                    <option value="Basic">Basic</option>
                                    <option value="Conversational">
                                      Conversational
                                    </option>
                                    <option value="Fluent">Fluent</option>
                                    <option value="Native">Native</option>
                                  </select>
                                </div>
                              </div>
                              {languages.length > 1 && (
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => removeLanguage(lang.id)}
                                  className="mt-7 text-red-600 hover:text-red-800 flex items-center gap-1"
                                >
                                  <FaTrash />
                                </motion.button>
                              )}
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}

                  {/* Template Selection Section */}
                  {activeSection === 'template' && (
                    <motion.div
                      variants={popIn}
                      initial="hidden"
                      animate="visible"
                      className="bg-white rounded-xl shadow-lg p-6"
                    >
                      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                        <FaPalette className="text-indigo-600" /> Template
                        Selection
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setTemplate('professional')}
                          className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                            template === 'professional'
                              ? 'border-indigo-600 shadow-lg scale-105'
                              : 'border-gray-200 hover:border-indigo-400'
                          }`}
                        >
                          <div className="relative h-48 bg-gradient-to-r from-indigo-50 to-indigo-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white border-2 border-dashed rounded-xl w-16 h-16" />
                              <div className="absolute bottom-4 w-4/5 h-1 bg-white rounded"></div>
                              <div className="absolute bottom-8 w-3/5 h-1 bg-white rounded"></div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-gray-800">
                              Professional
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              Clean and modern design
                            </p>
                            {template === 'professional' && (
                              <div className="mt-2 text-indigo-600 font-medium">
                                Selected
                              </div>
                            )}
                          </div>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setTemplate('creative')}
                          className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                            template === 'creative'
                              ? 'border-indigo-600 shadow-lg scale-105'
                              : 'border-gray-200 hover:border-indigo-400'
                          }`}
                        >
                          <div className="relative h-48 bg-gradient-to-r from-purple-50 to-pink-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white border-2 border-dashed rounded-xl w-16 h-16" />
                              <div className="absolute bottom-4 w-4/5 h-1 bg-white rounded-full"></div>
                              <div className="absolute bottom-8 w-3/5 h-1 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-gray-800">
                              Creative
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              For designers and artists
                            </p>
                            {template === 'creative' && (
                              <div className="mt-2 text-indigo-600 font-medium">
                                Selected
                              </div>
                            )}
                          </div>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setTemplate('minimalist')}
                          className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                            template === 'minimalist'
                              ? 'border-indigo-600 shadow-lg scale-105'
                              : 'border-gray-200 hover:border-indigo-400'
                          }`}
                        >
                          <div className="relative h-48 bg-gradient-to-r from-gray-50 to-gray-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white border-2 border-dashed rounded-xl w-16 h-16" />
                              <div className="absolute bottom-4 w-4/5 h-0.5 bg-white"></div>
                              <div className="absolute bottom-8 w-3/5 h-0.5 bg-white"></div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-gray-800">
                              Minimalist
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              Simple and elegant
                            </p>
                            {template === 'minimalist' && (
                              <div className="mt-2 text-indigo-600 font-medium">
                                Selected
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
