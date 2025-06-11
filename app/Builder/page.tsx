// app/builder/page.js
'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  FaUser, FaBriefcase, FaGraduationCap, FaCode, 
  FaLanguage, FaPalette, FaEye, FaFilePdf, 
  FaSave, FaPlus, FaTrash, FaDownload 
} from 'react-icons/fa';

export default function CVBuilder() {
  // State for form sections
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    summary: '',
    profilePic: null,
  });
  
  const [workExperience, setWorkExperience] = useState([
    { id: 1, jobTitle: '', employer: '', city: '', startDate: '', endDate: '', description: '', current: false },
  ]);
  
  const [education, setEducation] = useState([
    { id: 1, school: '', degree: '', city: '', startDate: '', endDate: '', description: '' },
  ]);
  
  const [skills, setSkills] = useState([
    { id: 1, name: '', level: 'Intermediate' },
  ]);
  
  const [languages, setLanguages] = useState([
    { id: 1, name: '', proficiency: 'Fluent' },
  ]);
  
  const [template, setTemplate] = useState('professional');
  const [activeSection, setActiveSection] = useState('personal');
  const [showPreview, setShowPreview] = useState(false);
  
  const cvPreviewRef = useRef(null);
  const fileInputRef = useRef(null);

  // Handle input changes
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPersonalInfo({ ...personalInfo, profilePic: event.target.result });
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

  const handleWorkChange = (id, e) => {
    const { name, value, type, checked } = e.target;
    const updatedExperience = workExperience.map(exp => 
      exp.id === id ? { ...exp, [name]: type === 'checkbox' ? checked : value } : exp
    );
    setWorkExperience(updatedExperience);
  };

  const handleEducationChange = (id, e) => {
    const { name, value } = e.target;
    const updatedEducation = education.map(edu => 
      edu.id === id ? { ...edu, [name]: value } : edu
    );
    setEducation(updatedEducation);
  };

  const handleSkillChange = (id, e) => {
    const { name, value } = e.target;
    const updatedSkills = skills.map(skill => 
      skill.id === id ? { ...skill, [name]: value } : skill
    );
    setSkills(updatedSkills);
  };

  const handleLanguageChange = (id, e) => {
    const { name, value } = e.target;
    const updatedLanguages = languages.map(lang => 
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
        current: false
      }
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
        description: '' 
      }
    ]);
  };

  const addSkill = () => {
    setSkills([
      ...skills,
      { id: Date.now(), name: '', level: 'Intermediate' }
    ]);
  };

  const addLanguage = () => {
    setLanguages([
      ...languages,
      { id: Date.now(), name: '', proficiency: 'Fluent' }
    ]);
  };

  // Remove entries
  const removeWorkExperience = (id) => {
    if (workExperience.length > 1) {
      setWorkExperience(workExperience.filter(exp => exp.id !== id));
    }
  };

  const removeEducation = (id) => {
    if (education.length > 1) {
      setEducation(education.filter(edu => edu.id !== id));
    }
  };

  const removeSkill = (id) => {
    if (skills.length > 1) {
      setSkills(skills.filter(skill => skill.id !== id));
    }
  };

  const removeLanguage = (id) => {
    if (languages.length > 1) {
      setLanguages(languages.filter(lang => lang.id !== id));
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
      template
    };
    localStorage.setItem('cvData', JSON.stringify(cvData));
    alert('Progress saved successfully!');
  };

  // Download PDF function
  const downloadPDF = async () => {
  if (!cvPreviewRef.current) return;
  
  try {
    // Create a clone of the preview element to modify colors
    const previewClone = cvPreviewRef.current.cloneNode(true);
    document.body.appendChild(previewClone);
    
    // Convert all OKLCH colors to RGB
    const elementsWithColor = previewClone.querySelectorAll('*');
    elementsWithColor.forEach(el => {
      const styles = window.getComputedStyle(el);
      
      // Check and convert background color
      if (styles.backgroundColor.includes('oklch')) {
        el.style.backgroundColor = convertOklchToRgb(styles.backgroundColor);
      }
      
      // Check and convert text color
      if (styles.color.includes('oklch')) {
        el.style.color = convertOklchToRgb(styles.color);
      }
      
      // Add more property checks if needed
    });

    // Generate PDF
    const html2canvas = (await import('html2canvas')).default;
    const jsPDF = (await import('jspdf')).default;
    
    const canvas = await html2canvas(previewClone, {
      scale: 2,
      logging: false,
      useCORS: true,
      backgroundColor: null,
    });
    
    document.body.removeChild(previewClone);
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${personalInfo.fullName || 'my'}-cv.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again.');
  }
};
// --------------------------------------


// Helper function to convert OKLCH to RGB
const convertOklchToRgb = (oklchColor) => {
  // This is a simplified conversion - you may need a more robust solution
  if (oklchColor.includes('oklch(0.5 0.1 120)')) {
    return 'rgb(100, 200, 100)'; // Example conversion
  }
  if (oklchColor.includes('oklch(0.6 0.2 240)')) {
    return 'rgb(100, 100, 200)'; // Example conversion
  }
  // Add more conversions as needed
  return 'rgb(0, 0, 0)'; // Default fallback
};


// --------------------------------------

  // Load saved data
  useEffect(() => {
    const savedData = localStorage.getItem('cvData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setPersonalInfo(parsedData.personalInfo || personalInfo);
      setWorkExperience(parsedData.workExperience || workExperience);
      setEducation(parsedData.education || education);
      setSkills(parsedData.skills || skills);
      setLanguages(parsedData.languages || languages);
      setTemplate(parsedData.template || template);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-5 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white p-2 rounded-lg mr-3">
              <FaFilePdf className="text-indigo-600 text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Professional CV Builder</h1>
              <p className="text-indigo-200 text-sm">Create your perfect resume in minutes</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={saveProgress}
              className="flex items-center gap-2 px-4 py-2 bg-white text-purple-700 bg-opacity-20 rounded-lg hover:bg-opacity-30 transition"
            >
              <FaSave /> Save Progress
            </button>
            <button 
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
            >
              <FaEye /> {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
            <button 
              onClick={downloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              <FaDownload /> Download PDF
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Form Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">Build Your CV</h2>
              
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveSection('personal')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                    activeSection === 'personal' 
                      ? 'bg-indigo-50 text-indigo-700 font-medium border-l-4 border-indigo-600' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <FaUser className="text-indigo-500" /> Personal Information
                </button>
                
                <button 
                  onClick={() => setActiveSection('work')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                    activeSection === 'work' 
                      ? 'bg-indigo-50 text-indigo-700 font-medium border-l-4 border-indigo-600' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <FaBriefcase className="text-indigo-500" /> Work Experience
                </button>
                
                <button 
                  onClick={() => setActiveSection('education')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                    activeSection === 'education' 
                      ? 'bg-indigo-50 text-indigo-700 font-medium border-l-4 border-indigo-600' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <FaGraduationCap className="text-indigo-500" /> Education
                </button>
                
                <button 
                  onClick={() => setActiveSection('skills')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                    activeSection === 'skills' 
                      ? 'bg-indigo-50 text-indigo-700 font-medium border-l-4 border-indigo-600' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <FaCode className="text-indigo-500" /> Skills
                </button>
                
                <button 
                  onClick={() => setActiveSection('languages')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                    activeSection === 'languages' 
                      ? 'bg-indigo-50 text-indigo-700 font-medium border-l-4 border-indigo-600' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <FaLanguage className="text-indigo-500" /> Languages
                </button>
                
                <button 
                  onClick={() => setActiveSection('template')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                    activeSection === 'template' 
                      ? 'bg-indigo-50 text-indigo-700 font-medium border-l-4 border-indigo-600' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <FaPalette className="text-indigo-500" /> Template Selection
                </button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-medium mb-3 text-gray-700">Resume Progress</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${activeSection === 'template' ? '100%' : '80%'}` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {activeSection === 'template' 
                    ? 'All sections completed!' 
                    : 'Complete all sections for a professional resume'}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {showPreview ? (
              // Preview Panel
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">CV Preview</h2>
                
                <div 
                  ref={cvPreviewRef}
                  className="border border-gray-300 p-8 min-h-[800px] bg-white"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                    <div>
                      <h1 className="text-3xl font-bold text-indigo-700">{personalInfo.fullName || 'Your Name'}</h1>
                      <p className="text-xl text-indigo-500 mt-1">{personalInfo.jobTitle || 'Professional Title'}</p>
                      
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
                      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 text-indigo-700">Professional Summary</h2>
                      <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
                    </div>
                  )}
                  
                  {workExperience.some(exp => exp.jobTitle) && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 text-indigo-700">Work Experience</h2>
                      {workExperience.map((exp, index) => (
                        exp.jobTitle && (
                          <div key={index} className="mb-6">
                            <div className="flex flex-col md:flex-row justify-between">
                              <h3 className="font-bold text-lg text-gray-800">{exp.jobTitle}</h3>
                              <div className="text-gray-600">
                                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between text-gray-700 mb-2">
                              <div className="font-medium text-indigo-600">{exp.employer}</div>
                              <div>{exp.city}</div>
                            </div>
                            <p className="text-gray-700 mt-2">{exp.description}</p>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                  
                  {education.some(edu => edu.school) && (
                    <div className="mb-8">
                      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 text-indigo-700">Education</h2>
                      {education.map((edu, index) => (
                        edu.school && (
                          <div key={index} className="mb-4">
                            <div className="flex flex-col md:flex-row justify-between">
                              <h3 className="font-bold text-gray-800">{edu.school}</h3>
                              <div className="text-gray-600">
                                {edu.startDate} - {edu.endDate}
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between text-gray-700">
                              <div>{edu.degree}</div>
                              <div>{edu.city}</div>
                            </div>
                            <p className="text-gray-700 mt-2">{edu.description}</p>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.some(skill => skill.name) && (
                      <div>
                        <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 text-indigo-700">Skills</h2>
                        <ul className="space-y-2">
                          {skills.map((skill, index) => (
                            skill.name && (
                              <li key={index} className="mb-2">
                                <div className="flex justify-between">
                                  <span className="font-medium">{skill.name}</span>
                                  <span className="text-gray-600 bg-indigo-100 px-2 py-1 rounded text-sm">
                                    {skill.level}
                                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                  <div 
                                    className="bg-indigo-600 h-1.5 rounded-full" 
                                    style={{ 
                                      width: skill.level === 'Beginner' ? '30%' : 
                                              skill.level === 'Intermediate' ? '60%' : 
                                              skill.level === 'Advanced' ? '85%' : '100%' 
                                    }}
                                  ></div>
                                </div>
                              </li>
                            )
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {languages.some(lang => lang.name) && (
                      <div>
                        <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 text-indigo-700">Languages</h2>
                        <ul className="space-y-2">
                          {languages.map((lang, index) => (
                            lang.name && (
                              <li key={index} className="mb-2">
                                <div className="flex justify-between">
                                  <span className="font-medium">{lang.name}</span>
                                  <span className="text-gray-600 bg-indigo-100 px-2 py-1 rounded text-sm">
                                    {lang.proficiency}
                                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                  <div 
                                    className="bg-indigo-600 h-1.5 rounded-full" 
                                    style={{ 
                                      width: lang.proficiency === 'Basic' ? '30%' : 
                                              lang.proficiency === 'Conversational' ? '60%' : 
                                              lang.proficiency === 'Fluent' ? '85%' : '100%' 
                                    }}
                                  ></div>
                                </div>
                              </li>
                            )
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // Form Area
              <>
                {activeSection === 'personal' && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                      <FaUser className="text-indigo-600" /> Personal Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                          <div className="flex flex-col items-center">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-100 shadow mb-4">
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
                            </div>
                            <div className="flex gap-2">
                              <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleProfilePicChange}
                                accept="image/*"
                                className="hidden"
                                id="profilePic"
                              />
                              <label
                                htmlFor="profilePic"
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer flex items-center gap-2"
                              >
                                <FaPlus /> Upload Photo
                              </label>
                              {personalInfo.profilePic && (
                                <button
                                  onClick={removeProfilePic}
                                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
                                >
                                  <FaTrash /> Remove
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="flex-1 mt-4 md:mt-0">
                            <p className="text-sm text-gray-600 mb-4">
                              Upload a professional photo (optional). Recommended size: 200x200 pixels. 
                              Use a clear headshot with a neutral background for best results.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-gray-700 mb-2">Full Name</label>
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
                                <label className="block text-gray-700 mb-2">Job Title</label>
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
                        <label className="block text-gray-700 mb-2">Email</label>
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
                        <label className="block text-gray-700 mb-2">Phone</label>
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
                        <label className="block text-gray-700 mb-2">Address</label>
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
                        <label className="block text-gray-700 mb-2">Website</label>
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
                        <label className="block text-gray-700 mb-2">Professional Summary</label>
                        <textarea
                          name="summary"
                          value={personalInfo.summary}
                          onChange={handlePersonalChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          rows="4"
                          placeholder="Experienced professional with 5+ years in software development specializing in web technologies..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Work Experience Section */}
                {activeSection === 'work' && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <FaBriefcase className="text-indigo-600" /> Work Experience
                      </h2>
                      <button 
                        onClick={addWorkExperience}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                      >
                        <FaPlus /> Add Experience
                      </button>
                    </div>
                    
                    {workExperience.map((exp) => (
                      <div key={exp.id} className="mb-6 pb-6 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 mb-2">Job Title</label>
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
                            <label className="block text-gray-700 mb-2">Employer</label>
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
                            <label className="block text-gray-700 mb-2">City</label>
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
                            <label className="block text-gray-700 mb-2">Current Job</label>
                            <div className="mt-2">
                              <label className="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  name="current"
                                  checked={exp.current}
                                  onChange={(e) => handleWorkChange(exp.id, e)}
                                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2">I currently work here</span>
                              </label>
                            </div>
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-2">Start Date</label>
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
                              <label className="block text-gray-700 mb-2">End Date</label>
                              <input
                                type="month"
                                name="endDate"
                                value={exp.endDate}
                                onChange={(e) => handleWorkChange(exp.id, e)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              />
                            </div>
                          )}
                          <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2">Description</label>
                            <textarea
                              name="description"
                              value={exp.description}
                              onChange={(e) => handleWorkChange(exp.id, e)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              rows="3"
                              placeholder="Describe your responsibilities, achievements, and technologies used..."
                            />
                          </div>
                        </div>
                        {workExperience.length > 1 && (
                          <div className="mt-4 text-right">
                            <button 
                              onClick={() => removeWorkExperience(exp.id)}
                              className="text-red-600 hover:text-red-800 flex items-center gap-1"
                            >
                              <FaTrash /> Remove Experience
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Education Section */}
                {activeSection === 'education' && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <FaGraduationCap className="text-indigo-600" /> Education
                      </h2>
                      <button 
                        onClick={addEducation}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                      >
                        <FaPlus /> Add Education
                      </button>
                    </div>
                    
                    {education.map((edu) => (
                      <div key={edu.id} className="mb-6 pb-6 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 mb-2">School/University</label>
                            <input
                              type="text"
                              name="school"
                              value={edu.school}
                              onChange={(e) => handleEducationChange(edu.id, e)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              placeholder="Harvard University"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-2">Degree</label>
                            <input
                              type="text"
                              name="degree"
                              value={edu.degree}
                              onChange={(e) => handleEducationChange(edu.id, e)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              placeholder="Bachelor of Science in Computer Science"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-2">City</label>
                            <input
                              type="text"
                              name="city"
                              value={edu.city}
                              onChange={(e) => handleEducationChange(edu.id, e)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              placeholder="Cambridge, MA"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-2">Start Date</label>
                            <input
                              type="month"
                              name="startDate"
                              value={edu.startDate}
                              onChange={(e) => handleEducationChange(edu.id, e)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-2">End Date</label>
                            <input
                              type="month"
                              name="endDate"
                              value={edu.endDate}
                              onChange={(e) => handleEducationChange(edu.id, e)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2">Description</label>
                            <textarea
                              name="description"
                              value={edu.description}
                              onChange={(e) => handleEducationChange(edu.id, e)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              rows="3"
                              placeholder="Relevant coursework, achievements, projects, etc."
                            />
                          </div>
                        </div>
                        {education.length > 1 && (
                          <div className="mt-4 text-right">
                            <button 
                              onClick={() => removeEducation(edu.id)}
                              className="text-red-600 hover:text-red-800 flex items-center gap-1"
                            >
                              <FaTrash /> Remove Education
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills Section */}
                {activeSection === 'skills' && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <FaCode className="text-indigo-600" /> Skills
                      </h2>
                      <button 
                        onClick={addSkill}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                      >
                        <FaPlus /> Add Skill
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      {skills.map((skill) => (
                        <div key={skill.id} className="flex items-start gap-4">
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-700 mb-2">Skill Name</label>
                              <input
                                type="text"
                                name="name"
                                value={skill.name}
                                onChange={(e) => handleSkillChange(skill.id, e)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="JavaScript, Project Management, etc."
                              />
                            </div>
                            <div>
                              <label className="block text-gray-700 mb-2">Proficiency Level</label>
                              <select
                                name="level"
                                value={skill.level}
                                onChange={(e) => handleSkillChange(skill.id, e)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Expert">Expert</option>
                              </select>
                            </div>
                          </div>
                          {skills.length > 1 && (
                            <button 
                              onClick={() => removeSkill(skill.id)}
                              className="mt-7 text-red-600 hover:text-red-800 flex items-center gap-1"
                            >
                              <FaTrash />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Languages Section */}
                {activeSection === 'languages' && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <FaLanguage className="text-indigo-600" /> Languages
                      </h2>
                      <button 
                        onClick={addLanguage}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                      >
                        <FaPlus /> Add Language
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      {languages.map((lang) => (
                        <div key={lang.id} className="flex items-start gap-4">
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-700 mb-2">Language</label>
                              <input
                                type="text"
                                name="name"
                                value={lang.name}
                                onChange={(e) => handleLanguageChange(lang.id, e)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="English, Spanish, etc."
                              />
                            </div>
                            <div>
                              <label className="block text-gray-700 mb-2">Proficiency</label>
                              <select
                                name="proficiency"
                                value={lang.proficiency}
                                onChange={(e) => handleLanguageChange(lang.id, e)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              >
                                <option value="Basic">Basic</option>
                                <option value="Conversational">Conversational</option>
                                <option value="Fluent">Fluent</option>
                                <option value="Native">Native</option>
                              </select>
                            </div>
                          </div>
                          {languages.length > 1 && (
                            <button 
                              onClick={() => removeLanguage(lang.id)}
                              className="mt-7 text-red-600 hover:text-red-800 flex items-center gap-1"
                            >
                              <FaTrash />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Template Selection Section */}
                {activeSection === 'template' && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                      <FaPalette className="text-indigo-600" /> Template Selection
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div 
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
                          <h3 className="font-medium text-gray-800">Professional</h3>
                          <p className="text-gray-600 text-sm mt-1">Clean and modern design</p>
                          {template === 'professional' && (
                            <div className="mt-2 text-indigo-600 font-medium">Selected</div>
                          )}
                        </div>
                      </div>
                      
                      <div 
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
                          <h3 className="font-medium text-gray-800">Creative</h3>
                          <p className="text-gray-600 text-sm mt-1">For designers and artists</p>
                          {template === 'creative' && (
                            <div className="mt-2 text-indigo-600 font-medium">Selected</div>
                          )}
                        </div>
                      </div>
                      
                      <div 
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
                          <h3 className="font-medium text-gray-800">Minimalist</h3>
                          <p className="text-gray-600 text-sm mt-1">Simple and elegant</p>
                          {template === 'minimalist' && (
                            <div className="mt-2 text-indigo-600 font-medium">Selected</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}