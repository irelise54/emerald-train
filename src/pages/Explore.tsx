import { motion } from 'framer-motion';
import { useFetchExercises } from '@/hooks/useFetchExercises';
import ExerciseCard from '@/components/ExerciseCard';
import Loader from '@/components/Loader';
import { AlertCircle } from 'lucide-react';

const Explore = () => {
  const { exercises, loading, error } = useFetchExercises(12);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-foreground mb-2">Explore Exercises</h1>
        <p className="text-muted-foreground">
          Discover new exercises to add to your workout routine.
        </p>
      </motion.div>

      {loading && <Loader />}

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-accent/10 border border-accent text-accent rounded-xl p-6 flex items-center gap-3"
        >
          <AlertCircle size={24} />
          <p>{error}</p>
        </motion.div>
      )}

      {!loading && !error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} {...exercise} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Explore;
