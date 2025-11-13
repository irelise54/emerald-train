import { motion } from 'framer-motion';
import { Trash2, Clock, Dumbbell } from 'lucide-react';
import { useWorkouts } from '@/context/WorkoutContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface WorkoutItemProps {
  id: string;
  name: string;
  exercises: string;
  duration: number;
  date: string;
}

const WorkoutItem = ({ id, name, exercises, duration, date }: WorkoutItemProps) => {
  const { deleteWorkout } = useWorkouts();

  const handleDelete = () => {
    deleteWorkout(id);
    toast.success('Workout deleted');
  };

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-card rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-primary/20"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Dumbbell size={16} className="text-primary" />
            <span className="text-sm">{exercises}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-secondary" />
              <span>{duration} min</span>
            </div>
            <span>{formattedDate}</span>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDelete}
          className="text-accent hover:text-accent hover:bg-accent/10"
        >
          <Trash2 size={20} />
        </Button>
      </div>
    </motion.div>
  );
};

export default WorkoutItem;
