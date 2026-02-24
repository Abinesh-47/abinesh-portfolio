
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { CERTIFICATIONS } from '../constants';

export const Certifications: React.FC = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center py-10 px-6 relative">
      <div className="max-w-7xl w-full mx-auto h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-blue-400 text-[10px] font-black tracking-[0.6em] uppercase mb-4"
             >
               Accreditations
             </motion.div>
             <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Verified <span className="text-gray-500">Skills</span></h3>
          </div>
          <p className="text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase max-w-[250px] leading-relaxed hidden md:block text-right">
             Industry standard credentials across AI, Data, and Software Engineering verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative"
            >
              <div className="h-full glass-card p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between group-hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-5xl font-black text-white/[0.02] select-none uppercase tracking-widest pointer-events-none group-hover:text-blue-500/[0.05] transition-colors">
                  {cert.category.split(' ')[0]}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                    <FiAward size={24} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500/60 mb-3 block">
                    {cert.category}
                  </span>
                  <h4 className="text-sm font-bold leading-relaxed group-hover:text-white transition-colors">
                    {cert.title}
                  </h4>
                </div>
                
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/5 relative z-10">
                  <div>
                    <div className="text-[8px] text-gray-600 font-black uppercase tracking-widest mb-1">Issuer</div>
                    <div className="text-[10px] text-gray-400 font-bold">{cert.issuer}</div>
                  </div>
                  <motion.a 
                    href={cert.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-blue-500 group-hover:text-white transition-all cursor-pointer"
                  >
                    <FiExternalLink />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
