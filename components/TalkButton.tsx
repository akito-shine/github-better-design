import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChatIcon } from './icons/ChatIcon';
import { Tooltip } from './ui/Tooltip';
import { initializePlayAI } from '@/lib/playai';

export default function TalkButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      await initializePlayAI();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      disabled={isLoading}
      className={`fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all ${
        isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
      }`}
    >
      <ChatIcon />
      {isHovered && !isLoading && <Tooltip text="Start conversation" />}
    </motion.button>
  );
}