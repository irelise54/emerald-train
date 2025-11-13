import { motion } from 'framer-motion';
import { Target, Dumbbell } from 'lucide-react';

interface ExerciseCardProps {
  name: string;
  target: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
}

const ExerciseCard = ({ name, target, bodyPart, equipment, gifUrl }: ExerciseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-card rounded-xl shadow-md overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all"
    >
      <div className="aspect-square bg-muted flex items-center justify-center">
        <img 
          src={gifUrl} 
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-foreground mb-2 capitalize">{name}</h3>
        
        <div className="space-y-1 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Target size={14} className="text-primary" />
            <span className="capitalize">{target}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Dumbbell size={14} className="text-secondary" />
            <span className="capitalize">{equipment}</span>
          </div>
          
          <div className="mt-2">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full capitalize">
              {bodyPart}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExerciseCard;
