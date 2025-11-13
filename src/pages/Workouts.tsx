import { motion } from 'framer-motion';
import WorkoutForm from '@/components/WorkoutForm';
import WorkoutList from '@/components/WorkoutList';

const Workouts = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-foreground mb-2">Manage Workouts</h1>
        <p className="text-muted-foreground">Add, view, and track all your workouts in one place.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <WorkoutForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <WorkoutList />
        </motion.div>
      </div>
    </div>
  );
};

export default Workouts;
