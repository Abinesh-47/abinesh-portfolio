
import React from 'react';
import { motion } from 'framer-motion';
import { School, BookOpen, GraduationCap } from 'lucide-react';

const EducationItem: React.FC<{ 
  year: string; 
  title: string; 
  institution: string; 
  description: string; 
  icon: React.ReactNode;
  isLeft: boolean;
  score: string;
}> = ({ year, title, institution, description, icon, isLeft, score }) => {
  return (
    <div className={`relative flex items-center justify-between w-full mb-24 ${isLeft ? 'flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-5/12" />
      
      <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0f1e] border border-purple-500/50 z-20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
        {icon}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-purple-500"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-5/12"
      >
        <div className={`glass-panel p-8 rounded-[2.5rem] border-white/5 royal-glow relative group gold-border ${isLeft ? 'text-right' : 'text-left'}`}>
          <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <span className="px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-semibold uppercase tracking-widest border border-purple-500/20">
              {year}
            </span>
            <span className="px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-[10px] font-semibold uppercase tracking-widest royal-glow">
              {score}
            </span>
          </div>
          <h4 className="text-2xl font-royal mb-2 text-white group-hover:text-purple-400 transition-colors">{title}</h4>
          <p className="text-purple-300/80 text-sm font-medium mb-4">{institution}</p>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export const Education: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-purple-500 text-[11px] font-semibold tracking-[0.8em] uppercase mb-6"
        >
          Academic Lineage
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          className="text-5xl md:text-7xl font-royal uppercase tracking-tighter"
        >
          Education
        </motion.h3>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent -translate-x-1/2" />

        <div className="relative z-10">
          <EducationItem 
            year="2023 – 2027"
            title="B.Tech – AI & DS"
            institution="K. Ramakrishnan College of Technology"
            description="Specializing in Artificial Intelligence and Data Science. Focusing on neural networks, deep learning, and advanced data analytics."
            icon={<GraduationCap className="w-6 h-6 text-purple-400" />}
            isLeft={false}
            score="CGPA: 7.53"
          />
          <EducationItem 
            year="2022 – 2023"
            title="HSC (12th Standard)"
            institution="Seventh Day Adventist Matriculation Higher Secondary School"
            description="Completed higher secondary education with a focus on Computer Science and Mathematics."
            icon={<BookOpen className="w-6 h-6 text-purple-400" />}
            isLeft={true}
            score="Percentage: 72%"
          />
          <EducationItem 
            year="2020 – 2021"
            title="SSLC (10th Standard)"
            institution="Seventh Day Adventist Matriculation Higher Secondary School"
            description="Foundational secondary education with excellence in science and technology subjects."
            icon={<School className="w-6 h-6 text-purple-400" />}
            isLeft={false}
            score="Percentage: Pass"
          />
        </div>
      </div>
    </div>
  );
};
