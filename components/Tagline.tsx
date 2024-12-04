import { motion } from 'framer-motion';

export function Tagline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
        Your AI coach
      </h1>
      <p className="mt-2 text-xl text-red-400">
        for smarter recruitment decisions
      </p>
    </motion.div>
  );
}