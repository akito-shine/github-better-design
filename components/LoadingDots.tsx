import { motion } from 'framer-motion';

export default function LoadingDots() {
  return (
    <div className="flex items-center justify-center mb-8">
      <motion.div
        className="h-2 w-2 bg-blue-500 rounded-full mr-2"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="h-2 w-2 bg-blue-500 rounded-full mr-2"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="h-2 w-2 bg-blue-500 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );
}