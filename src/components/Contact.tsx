
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

const ContactButton: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  href: string; 
  color: string;
}> = ({ icon, label, href, color }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="group relative flex flex-col items-center gap-4"
    >
      <div className={`w-20 h-20 rounded-full glass-panel flex items-center justify-center border border-white/5 royal-glow transition-all duration-500 group-hover:border-${color}-500/50`}>
        {icon}
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">{label}</span>
      
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-white text-black text-[10px] font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {label}
      </div>
    </motion.a>
  );
};

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="py-12 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-purple-500 text-[11px] font-semibold tracking-[0.8em] uppercase mb-6"
        >
          Initiate Connection
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          className="text-5xl md:text-7xl font-royal uppercase tracking-tighter"
        >
          Let's Connect
        </motion.h3>
      </div>

      <div className="glass-panel p-12 md:p-20 rounded-[4rem] border-white/5 royal-glow max-w-4xl w-full relative overflow-hidden gold-border">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-20">
          <ContactButton 
            icon={<Github className="w-8 h-8 text-white" />} 
            label="GitHub" 
            href="https://github.com/Abinesh-47" 
            color="purple"
          />
          <ContactButton 
            icon={<Linkedin className="w-8 h-8 text-blue-400" />} 
            label="LinkedIn" 
            href="https://www.linkedin.com/in/abinesh-r-0a99a02a2" 
            color="blue"
          />
          <ContactButton 
            icon={<Mail className="w-8 h-8 text-purple-400" />} 
            label="Email" 
            href="mailto:iabinesh47@gmail.com" 
            color="purple"
          />
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 royal-glow">
                  <CheckCircle2 className="w-10 h-10 text-purple-400" />
                </div>
                <h4 className="text-2xl font-royal mb-2">Message Dispatched</h4>
                <p className="text-gray-400 font-light italic">Your transmission has been received with royal priority.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                    <input 
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-body"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 ml-4">Email Address</label>
                    <input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-body"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 ml-4">Your Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-body resize-none"
                    placeholder="How can I assist you?"
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formState === 'submitting'}
                  className="w-full py-5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-semibold uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                  {formState === 'submitting' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 flex items-center gap-4 text-gray-600"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="text-[11px] font-medium uppercase tracking-[0.5em]">Available for Royal Collaborations</span>
      </motion.div>
    </div>
  );
};
