import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl w-full hover:shadow-xl transition-shadow duration-300"
    >
      <div className="space-y-6">
        {children}
      </div>
    </motion.div>
  );
}