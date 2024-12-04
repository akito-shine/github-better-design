"use client";

import { motion } from 'framer-motion';
import { MicIcon } from './icons/MicIcon';
import { initializePlayAI } from '@/lib/playai';

interface MicButtonProps {
  isListening: boolean;
  onListeningChange: (isListening: boolean) => void;
}

export function MicButton({ isListening, onListeningChange }: MicButtonProps) {
  const handleClick = async () => {
    if (isListening) return;
    
    onListeningChange(true);
    try {
      await initializePlayAI();
    } finally {
      onListeningChange(false);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        p-6 rounded-full bg-white shadow-lg transition-all
        ${isListening ? 'shadow-blue-200' : 'hover:shadow-xl'}
      `}
    >
      <MicIcon className="w-8 h-8 text-gray-800" />
    </motion.button>
  );
}