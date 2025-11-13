import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold">TrainNow</p>
            <p className="text-sm text-muted-foreground">Your fitness journey, tracked.</p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 TrainNow. Built with 💪
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
