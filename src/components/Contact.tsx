import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';

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
      <div
        className={`w-20 h-20 rounded-full glass-panel flex items-center justify-center border border-white/5 royal-glow transition-all duration-500 group-hover:border-${color}-500/50`}
      >
        {icon}
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">
        {label}
      </span>

      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-white text-black text-[10px] font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {label}
      </div>
    </motion.a>
  );
};

export const Contact: React.FC = () => {
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

        {/* Social Buttons */}
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

        {/* NETLIFY FORM */}
        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 ml-4">
                Full Name
              </label>
              <input
                required
                type="text"
                name="name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-body"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 ml-4">
                Email Address
              </label>
              <input
                required
                type="email"
                name="email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-body"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 ml-4">
              Your Message
            </label>
            <textarea
              required
              name="message"
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-body resize-none"
              placeholder="How can I assist you?"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-semibold uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            <Send className="w-4 h-4" />
            <span>Dispatch Message</span>
          </motion.button>
        </motion.form>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 flex items-center gap-4 text-gray-600"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="text-[11px] font-medium uppercase tracking-[0.5em]">
          Available for Royal Collaborations
        </span>
      </motion.div>
    </div>
  );
};
