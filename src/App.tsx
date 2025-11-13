import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WorkoutProvider } from "@/context/WorkoutContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Workouts from "./pages/Workouts";
import Explore from "./pages/Explore";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WorkoutProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/about" element={<About />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </WorkoutProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
