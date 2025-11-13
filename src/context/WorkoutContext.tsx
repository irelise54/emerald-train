import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface Workout {
  id: string;
  name: string;
  exercises: string;
  duration: number;
  date: string;
}

interface WorkoutState {
  workouts: Workout[];
}

type WorkoutAction =
  | { type: 'ADD_WORKOUT'; payload: Workout }
  | { type: 'DELETE_WORKOUT'; payload: string }
  | { type: 'LOAD_WORKOUTS'; payload: Workout[] };

const workoutReducer = (state: WorkoutState, action: WorkoutAction): WorkoutState => {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return { workouts: [...state.workouts, action.payload] };
    case 'DELETE_WORKOUT':
      return { workouts: state.workouts.filter(w => w.id !== action.payload) };
    case 'LOAD_WORKOUTS':
      return { workouts: action.payload };
    default:
      return state;
  }
};

interface WorkoutContextType {
  workouts: Workout[];
  addWorkout: (workout: Omit<Workout, 'id' | 'date'>) => void;
  deleteWorkout: (id: string) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(workoutReducer, { workouts: [] });

  useEffect(() => {
    const stored = localStorage.getItem('trainnow-workouts');
    if (stored) {
      dispatch({ type: 'LOAD_WORKOUTS', payload: JSON.parse(stored) });
    }
  }, []);

  useEffect(() => {
    if (state.workouts.length > 0) {
      localStorage.setItem('trainnow-workouts', JSON.stringify(state.workouts));
    }
  }, [state.workouts]);

  const addWorkout = (workout: Omit<Workout, 'id' | 'date'>) => {
    const newWorkout: Workout = {
      ...workout,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    dispatch({ type: 'ADD_WORKOUT', payload: newWorkout });
  };

  const deleteWorkout = (id: string) => {
    dispatch({ type: 'DELETE_WORKOUT', payload: id });
  };

  return (
    <WorkoutContext.Provider value={{ workouts: state.workouts, addWorkout, deleteWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkouts = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkouts must be used within WorkoutProvider');
  }
  return context;
};
