import { motion } from 'framer-motion';
import { useWorkouts } from '@/context/WorkoutContext';
import { Activity, Clock, TrendingUp, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import banner from '@/assets/banner.jpg';

const Dashboard = () => {
  const { workouts } = useWorkouts();

  const totalWorkouts = workouts.length;
  const totalMinutes = workouts.reduce((sum, w) => sum + w.duration, 0);
  const thisWeek = workouts.filter(w => {
    const date = new Date(w.date);
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return date >= weekAgo;
  }).length;

  const stats = [
    { label: 'Total Workouts', value: totalWorkouts, icon: Dumbbell, color: 'text-primary' },
    { label: 'Total Minutes', value: totalMinutes, icon: Clock, color: 'text-secondary' },
    { label: 'This Week', value: thisWeek, icon: TrendingUp, color: 'text-accent' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[400px]"
      >
        <img 
          src={banner} 
          alt="Fitness Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Welcome to TrainNow
              </h1>
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                Track your fitness journey, achieve your goals, and become the best version of yourself.
              </p>
              <Link to="/workouts">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                  <Activity className="mr-2" size={24} />
                  Start Training
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-xl shadow-lg p-6 border-2 border-primary/10 hover:border-primary/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-4xl font-bold text-foreground">{stat.value}</p>
              </div>
              <stat.icon size={48} className={stat.color} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-card rounded-xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-foreground mb-4">Recent Activity</h2>
        {workouts.length > 0 ? (
          <div className="space-y-3">
            {workouts.slice(0, 3).map((workout) => (
              <div
                key={workout.id}
                className="flex items-center justify-between p-4 bg-muted rounded-lg"
              >
                <div>
                  <p className="font-semibold text-foreground">{workout.name}</p>
                  <p className="text-sm text-muted-foreground">{workout.exercises}</p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-semibold">{workout.duration} min</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(workout.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-8">
            No workouts yet. Start your fitness journey today!
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Dashboard;
