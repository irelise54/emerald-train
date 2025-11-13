import { motion, AnimatePresence } from 'framer-motion';
import { useWorkouts } from '@/context/WorkoutContext';
import WorkoutItem from './WorkoutItem';
import { Dumbbell } from 'lucide-react';

const WorkoutList = () => {
  const { workouts } = useWorkouts();

  if (workouts.length === 0) {
    return (
      <div className="text-center py-12 bg-muted rounded-xl">
        <Dumbbell size={48} className="mx-auto text-muted-foreground mb-4" />
        <p className="text-lg text-muted-foreground">No workouts yet. Add your first one!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground mb-4">Your Workouts</h2>
      <AnimatePresence>
        {workouts.map((workout) => (
          <WorkoutItem key={workout.id} {...workout} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default WorkoutList;
