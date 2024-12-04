import { motion } from 'framer-motion';

export function ListeningIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
    >
      <span className="text-sm text-gray-600">Listening...</span>
    </motion.div>
  );
}