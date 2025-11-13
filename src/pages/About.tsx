import { motion } from 'framer-motion';
import { Code2, Heart, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Zap,
      title: 'Fast & Responsive',
      description: 'Built with modern React and optimized for performance'
    },
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Designed with your fitness journey in mind'
    },
    {
      icon: Code2,
      title: 'Open Source',
      description: 'Built with React, TypeScript, and Tailwind CSS'
    }
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-foreground mb-4">About TrainNow</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your personal fitness tracking companion, helping you stay motivated and achieve your goals.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          TrainNow was created to make fitness tracking simple, intuitive, and effective. 
          We believe that everyone deserves access to tools that help them live healthier, 
          more active lives. Whether you're a beginner or a seasoned athlete, TrainNow 
          adapts to your needs and grows with you on your fitness journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-card rounded-xl shadow-lg p-6 text-center border-2 border-primary/10 hover:border-primary/30 transition-all"
          >
            <feature.icon size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-primary/5 rounded-xl p-8 text-center border-2 border-primary/20"
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">Built by X 💪</h2>
        <p className="text-lg text-muted-foreground mb-6">
          A passionate developer committed to creating tools that make a difference in people's lives.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'].map((tech) => (
            <span
              key={tech}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
