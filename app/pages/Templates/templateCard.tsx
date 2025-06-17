// app/templates/TemplateCard.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Template } from './templates.interface';
import { 
  ProfessionalCV1, ProfessionalCV2, ProfessionalCV3,
  CreativeCV1, CreativeCV2, CreativeCV3,
  MinimalistCV1, MinimalistCV2, MinimalistCV3,
  ExecutiveCV1, ExecutiveCV2, ExecutiveCV3,
  StudentCV1, StudentCV2, StudentCV3
} from '../../components/CVPreview';

// Map template IDs to CV components
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

export default function TemplateCard({ template }: { template: Template }) {
  const CVComponent = CVComponents[template.id] || ProfessionalCV1;

  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      layout
    >
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        {/* Preview Toggle */}
        <div className="absolute top-2 right-2 z-10 flex gap-1">
          <button className="bg-white bg-opacity-80 px-2 py-1 rounded text-xs font-medium">
            Image
          </button>
          <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
            Preview
          </button>
        </div>
        
        {/* CV Preview */}
        <div className="absolute inset-0">
          <CVComponent />
        </div>
        
        {/* Image Overlay */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="relative h-full w-full">
            <Image
              src={template.image}
              alt={`${template.name} template`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <div>
            <motion.h3 
              className="text-white text-xl font-semibold"
              whileHover={{ x: 5 }}
            >
              {template.name}
            </motion.h3>
            <div className="flex items-center mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(template.popularity / 20) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <motion.span 
                className="text-white text-sm ml-1"
                whileHover={{ scale: 1.1 }}
              >
                {template.popularity}%
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 mb-4">{template.description}</p>
        <div className="flex justify-between items-center">
          <motion.span 
            className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            whileHover={{ scale: 1.05 }}
          >
            {template.category}
          </motion.span>
          <Link href={`/builder?template=${template.id}`} passHref>
            <motion.a
              className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center cursor-pointer"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Use Template 
              <motion.span 
                className="ml-1"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}