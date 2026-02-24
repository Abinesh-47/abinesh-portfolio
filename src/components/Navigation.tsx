import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

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

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-8 md:px-[8%] py-6 flex justify-between items-center bg-[#020617]/90 backdrop-blur-xl border-b border-white/5">

      {/* Logo */}
      <Link to="/">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-royal tracking-tighter cursor-pointer flex items-center gap-2 group"
        >
          <span className="text-white group-hover:text-purple-400 transition-colors">
            Abinesh R
          </span>
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
            className={`hover:text-white transition-all relative group py-2 ${
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

      {/* Connect Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link to="/contact">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-white text-[11px] font-medium tracking-[0.2em] hover:bg-purple-500 hover:text-white transition-all uppercase"
          >
            Connect
          </motion.button>
        </Link>
      </motion.div>

    </nav>
  );
};
