// app/components/PreviewModal.tsx
'use client';

import { motion } from 'framer-motion';
import { Template } from '../pages/Templates/templates.interface';
import { 
  ProfessionalCV1, ProfessionalCV2, ProfessionalCV3,
  CreativeCV1, CreativeCV2, CreativeCV3,
  MinimalistCV1, MinimalistCV2, MinimalistCV3,
  ExecutiveCV1, ExecutiveCV2, ExecutiveCV3,
  StudentCV1, StudentCV2, StudentCV3
} from './CVPreview';

const CVComponents: Record<number, React.FC> = {
  1: ProfessionalCV1,
  2: CreativeCV1,
  3: ExecutiveCV1,
  4: MinimalistCV1,
  5: StudentCV1,
  6: ProfessionalCV2,
  7: CreativeCV2,
  8: MinimalistCV2,
  9: ExecutiveCV2,
  10: StudentCV2,
  11: ProfessionalCV3,
  12: CreativeCV3,
  13: MinimalistCV3,
  14: ExecutiveCV3,
  15: StudentCV3
};

export default function PreviewModal({ 
  template, 
  onClose 
}: { 
  template: Template | null; 
  onClose: () => void; 
}) {
  if (!template) return null;

  const CVComponent = CVComponents[template.id] || ProfessionalCV1;
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">{template.name} - Preview</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8">
          <CVComponent />
        </div>
        
        <div className="p-4 bg-gray-50 border-t flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Close Preview
          </button>
          <button 
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Use This Template
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}