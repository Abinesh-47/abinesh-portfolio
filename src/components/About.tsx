import profilePic from "../assets/abinesh.jpg";
import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Zap, Award, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 royal-glow group transition-transform duration-500 hover:scale-[1.02]">
            <img 
            src={profilePic} 
            alt="Abinesh R" 
            className="w-full object-cover aspect-[4/5] will-change-transform"
            style={{ imageRendering: "auto" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Royal Floating Badge */}
          <motion.div 
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 -right-12 glass-panel p-10 rounded-[2.5rem] border-purple-500/20 z-20 backdrop-blur-3xl royal-glow"
          >
            <div className="text-5xl font-royal text-purple-400 mb-2">04+</div>
            <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.4em] leading-relaxed">Specialized<br/>Certifications</div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-12 -left-12 w-48 h-48 border border-purple-500/10 rounded-full animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 border border-blue-500/5 rounded-full animate-pulse delay-1000" />
        </motion.div>

        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-purple-500 text-[11px] font-semibold tracking-[0.8em] uppercase mb-8"
          >
            Dossier: Profile
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-royal uppercase tracking-tighter mb-12 leading-none text-white"
          >
            Engineering Intelligence Through Data
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-400 text-xl leading-relaxed mb-6 font-light max-w-2xl italic"
          >
            "In the intersection of data and elegance lies the future of intelligence." 
            <br/><br/>
            I am a dedicated AI Engineer and Data Scientist, committed to crafting sophisticated neural architectures that solve complex real-world challenges with royal precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-2 text-gray-500 text-sm mb-16"
          >
            <MapPin className="w-4 h-4 text-purple-500" />
            <span>Thanjavur, Tamil Nadu, India</span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: <Target className="w-5 h-5" />, title: "Vision", desc: "Autonomous Intelligence" },
              { icon: <Zap className="w-5 h-5" />, title: "Focus", desc: "Neural Architectures" },
              { icon: <Award className="w-5 h-5" />, title: "Standard", desc: "Excellence in Data" },
              { icon: <User className="w-5 h-5" />, title: "Role", desc: "AI Strategist" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="p-8 glass-panel rounded-3xl border-white/5 flex items-center gap-6 group hover:border-purple-500/30 transition-all gold-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1">{item.title}</div>
                  <div className="text-sm font-bold text-white">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
