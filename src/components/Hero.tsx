
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "AI & Data Science Engineer";
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 40;
    const y = (clientY - innerHeight / 2) / 40;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="min-h-[80vh] w-full flex flex-col justify-center items-center text-center relative"
    >
      {/* Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <motion.div 
        style={{ x: springX, y: springY }}
        className="z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-purple-400 font-medium uppercase mb-8 block text-[11px] md:text-xs tracking-[0.8em]"
        >
          Portfolio
        </motion.div>

        <h1 className="text-7xl md:text-[10rem] font-royal mb-6 tracking-tighter leading-none relative">
          <motion.span
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="block text-white"
          >
            ABINESH R
          </motion.span>
        </h1>

        <div className="h-12 flex items-center justify-center mb-12">
          <p className="text-xl md:text-3xl font-body font-light text-gray-400 tracking-[0.2em] uppercase">
            {displayText}
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1.5 h-8 bg-purple-500 ml-2 align-middle"
            />
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col md:flex-row gap-8 items-center justify-center"
        >
          <Link to="/projects">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168, 85, 247, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 overflow-hidden rounded-full bg-white transition-all flex items-center gap-3"
            >
               <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
               <span className="relative text-black group-hover:text-white font-semibold text-[11px] tracking-[0.2em] uppercase transition-colors">View Projects</span>
               <ChevronRight className="relative w-4 h-4 text-black group-hover:text-white transition-colors" />
            </motion.button>
          </Link>
          
          <motion.a 
            href={`${import.meta.env.BASE_URL}AbineshCV.pdf`} 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 overflow-hidden rounded-full border border-white/10 hover:border-purple-500/50 transition-all backdrop-blur-xl flex items-center gap-3"
          >
             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <Download className="w-4 h-4 text-purple-400" />
             <span className="relative text-white font-semibold text-[11px] tracking-[0.2em] uppercase">Download CV</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
