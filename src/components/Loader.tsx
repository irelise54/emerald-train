import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center py-12"
    >
      <Loader2 size={48} className="text-primary animate-spin" />
    </motion.div>
  );
};

export default Loader;
