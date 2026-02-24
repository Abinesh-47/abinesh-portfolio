
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-[8%] h-full">
        {children}
      </div>
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cursor = document.getElementById('royal-cursor');
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen w-full bg-[#020617] text-white selection:bg-purple-500 selection:text-white">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loader"
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
              transition={{ duration: 0.8 }}
              className="fixed inset-0 z-[1000] bg-[#020617] flex flex-col items-center justify-center"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-royal mb-8 tracking-tighter"
              >
                Abinesh<span className="text-purple-500">.</span>
              </motion.div>
              <div className="w-64 h-[1px] bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                />
              </div>
              <p className="mt-6 text-[10px] uppercase tracking-[0.8em] text-gray-500 font-light">Establishing Royal Protocol</p>
            </motion.div>
          )}
        </AnimatePresence>

        <Navigation />

        <main className="relative z-10 pt-[110px]">
          <AnimatedRoutes />
        </main>

        {/* Royal Cursor Glow */}
        <div className="fixed pointer-events-none z-0 mix-blend-screen opacity-30">
           <div id="royal-cursor" className="w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 fixed top-0 left-0 transition-transform duration-300 ease-out" />
        </div>

        {/* Background Texture & Particles */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: Math.random() * 0.2
              }}
              animate={{ 
                y: [null, Math.random() * -200 - 100 + 'px'],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
              className="absolute w-[1px] h-[1px] bg-purple-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </Router>
  );
};

export default App;
