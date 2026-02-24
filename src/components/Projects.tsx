
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, X, Database, Cpu, BarChart3 } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: "Mental Health Care System",
    description: "A comprehensive AI-driven platform for mental health monitoring and support, utilizing sentiment analysis and predictive modeling.",
    tech: ["Python", "TensorFlow", "React", "Node.js"],
    github: "https://github.com/Abinesh-47",
    stats: { architecture: "Hybrid CNN-RNN", dataset: "100k+ entries", precision: "94.2%" }
  },
  {
    title: "Hospital Management System",
    description: "An integrated system for streamlining hospital operations, patient records, and resource allocation using data science techniques.",
    tech: ["SQL", "React", "Express", "Python"],
    github: "https://github.com/Abinesh-47",
    stats: { architecture: "Microservices", dataset: "Real-time sync", precision: "99.9% Uptime" }
  },
  {
    title: "Auction Management System",
    description: "A secure, real-time auction platform with automated bidding logic and fraud detection algorithms.",
    tech: ["TypeScript", "Socket.io", "MongoDB", "React"],
    github: "https://github.com/Abinesh-47",
    stats: { architecture: "Event-Driven", dataset: "Live Bidding", precision: "ms Latency" }
  },
  {
    title: "Survey Data Analysis using R",
    description: "In-depth statistical analysis of large-scale survey data, providing actionable insights through advanced visualization.",
    tech: ["R", "ggplot2", "Shiny", "Tidyverse"],
    github: "https://github.com/Abinesh-47",
    stats: { architecture: "Statistical Model", dataset: "50k+ samples", precision: "p < 0.05" }
  },
  {
    title: "Crop Yield Prediction",
    description: "Machine learning model to predict agricultural yields based on soil quality, weather patterns, and historical data.",
    tech: ["Scikit-Learn", "Pandas", "Random Forest", "Python"],
    github: "https://github.com/Abinesh-47",
    stats: { architecture: "Random Forest", dataset: "Global Agri-Data", precision: "89.5%" }
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="py-12">
      <div className="text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-purple-500 text-[11px] font-semibold tracking-[0.8em] uppercase mb-6"
        >
          Selected Artifacts
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          className="text-5xl md:text-7xl font-royal uppercase tracking-tighter"
        >
          Projects <span className="text-gray-500">&</span> Systems
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1500}
              className="h-full"
            >
              <div className="glass-panel h-full p-8 rounded-[2.5rem] border-white/5 royal-glow group gold-border gold-glow-hover transition-all duration-500 flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                    {index % 3 === 0 ? <Cpu className="w-6 h-6" /> : index % 3 === 1 ? <Database className="w-6 h-6" /> : <BarChart3 className="w-6 h-6" />}
                  </div>
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                </div>

                <h4 className="text-2xl font-royal mb-4 text-white group-hover:text-purple-400 transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[9px] font-semibold uppercase tracking-widest text-gray-500 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-4 rounded-2xl border border-white/5 bg-white/5 text-[11px] font-semibold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  Analyze Data <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="glass-panel w-full max-w-4xl rounded-[3rem] border-purple-500/20 royal-glow overflow-hidden relative z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-12 md:p-20">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-12 h-[1px] bg-purple-500" />
                  <span className="text-purple-500 text-[11px] font-semibold uppercase tracking-[0.4em]">Technical Specification</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-royal mb-12">{selectedProject.title}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2">Architecture</div>
                    <div className="text-xl font-royal text-purple-400">{selectedProject.stats.architecture}</div>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2">Dataset</div>
                    <div className="text-xl font-royal text-purple-400">{selectedProject.stats.dataset}</div>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2">Precision</div>
                    <div className="text-xl font-royal text-purple-400">{selectedProject.stats.precision}</div>
                  </div>
                </div>

                <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 italic">
                  "{selectedProject.description}"
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-6 rounded-full bg-white text-black text-center font-semibold text-xs uppercase tracking-[0.2em] hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-3"
                  >
                    <Github className="w-5 h-5" /> View on GitHub
                  </a>
                  <button className="flex-1 py-6 rounded-full border border-white/10 text-white text-center font-semibold text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                    <ExternalLink className="w-5 h-5" /> Live Protocol
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
