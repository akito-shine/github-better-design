import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({ children, isLoading, className = '', ...props }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    disabled={isLoading}
    className={`fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-lg transition-all ${
      isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 hover:shadow-xl'
    } ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);