
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorGlow: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        left: -250,
        top: -250,
      }}
      className="fixed w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen"
    />
  );
};
