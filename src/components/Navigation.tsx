import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-[8%] py-6 flex justify-between items-center bg-[#020617] border-b border-white/5">

      {/* Logo */}
      <Link to="/">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-royal tracking-tighter flex items-center gap-2"
        >
          <span className="text-white">Abinesh R</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden lg:flex gap-12 text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`hover:text-white transition relative py-2 ${
              location.pathname === item.path ? 'text-white' : ''
            }`}
          >
            {item.name}

            {location.pathname === item.path && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
              />
            )}
          </Link>
        ))}
      </motion.div>

      {/* Desktop Connect Button */}
      <div className="hidden lg:block">
        <Link to="/contact">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-white text-[11px] uppercase hover:bg-purple-500 transition-all"
          >
            Connect
          </motion.button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#020617] border-t border-white/10 flex flex-col items-center gap-6 py-8 lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 uppercase text-sm hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="px-6 py-3 rounded-full bg-purple-600 text-white text-xs uppercase">
                Connect
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};
