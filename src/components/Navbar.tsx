import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, LayoutDashboard, ListTodo, Compass, Info } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-secondary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <img src={logo} alt="TrainNow Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-secondary-foreground">TrainNow</span>
          </Link>
          
          <div className="flex items-center gap-1 md:gap-2">
            <Link
              to="/"
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all ${
                isActive('/') 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-secondary-foreground hover:bg-secondary-foreground/10'
              }`}
            >
              <LayoutDashboard size={20} />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
            
            <Link
              to="/workouts"
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all ${
                isActive('/workouts') 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-secondary-foreground hover:bg-secondary-foreground/10'
              }`}
            >
              <ListTodo size={20} />
              <span className="hidden sm:inline">Workouts</span>
            </Link>
            
            <Link
              to="/explore"
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all ${
                isActive('/explore') 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-secondary-foreground hover:bg-secondary-foreground/10'
              }`}
            >
              <Compass size={20} />
              <span className="hidden sm:inline">Explore</span>
            </Link>
            
            <Link
              to="/about"
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all ${
                isActive('/about') 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-secondary-foreground hover:bg-secondary-foreground/10'
              }`}
            >
              <Info size={20} />
              <span className="hidden sm:inline">About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
