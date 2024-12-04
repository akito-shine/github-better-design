import { motion } from 'framer-motion';

interface TooltipProps {
  text: string;
}

export const Tooltip = ({ text }: TooltipProps) => (
  <motion.span
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className="absolute right-full mr-3 whitespace-nowrap bg-black px-2 py-1 rounded text-sm"
  >
    {text}
  </motion.span>
);