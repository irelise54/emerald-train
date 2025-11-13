import { useRef } from 'react';
import { useWorkouts } from '@/context/WorkoutContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

const WorkoutForm = () => {
  const { addWorkout } = useWorkouts();
  const nameRef = useRef<HTMLInputElement>(null);
  const exercisesRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const name = nameRef.current?.value;
    const exercises = exercisesRef.current?.value;
    const duration = parseInt(durationRef.current?.value || '0');

    if (!name || !exercises || !duration) {
      toast.error('Please fill all fields');
      return;
    }

    addWorkout({ name, exercises, duration });
    
    // Reset form
    if (nameRef.current) nameRef.current.value = '';
    if (exercisesRef.current) exercisesRef.current.value = '';
    if (durationRef.current) durationRef.current.value = '';
    
    toast.success('Workout added successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold text-foreground mb-4">Add New Workout</h2>
      
      <div className="space-y-2">
        <Label htmlFor="name">Workout Name</Label>
        <Input
          id="name"
          ref={nameRef}
          placeholder="e.g., Morning Cardio"
          className="border-border focus:ring-primary"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="exercises">Exercises</Label>
        <Input
          id="exercises"
          ref={exercisesRef}
          placeholder="e.g., Running, Push-ups, Squats"
          className="border-border focus:ring-primary"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="duration">Duration (minutes)</Label>
        <Input
          id="duration"
          ref={durationRef}
          type="number"
          placeholder="30"
          min="1"
          className="border-border focus:ring-primary"
        />
      </div>
      
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        <Plus className="mr-2" size={20} />
        Add Workout
      </Button>
    </form>
  );
};

export default WorkoutForm;
