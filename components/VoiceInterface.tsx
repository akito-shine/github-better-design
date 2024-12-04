"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { initializePlayAI } from '@/lib/playai';
import { MicIcon } from './icons/MicIcon';

export function VoiceInterface() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = async () => {
    if (isActive) return;
    setIsActive(true);
    try {
      await initializePlayAI();
    } finally {
      setIsActive(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-16">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          p-6 rounded-full bg-black text-white shadow-lg transition-all
          ${isActive ? 'shadow-blue-200' : 'hover:shadow-xl'}
        `}
      >
        <MicIcon className="w-8 h-8" />
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          >
            <span className="text-sm text-gray-600">Listening...</span>
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}