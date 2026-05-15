import { MobileMenu } from './mobile-menu';
import { Button } from './button';
import { useTheme } from '@/lib/theme-context';
import { Sun, Moon } from 'lucide-react';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-extrabold tracking-tight">
          <span className="text-blue-600">AYA</span>
          <span className="text-brown-600"> AI</span>
        </a>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">
            Accueil
          </a>
          <a href="#projets" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">
            Projets
          </a>
          <a href="#certifications" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">
            Certifications
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">
            Contact
          </a>
          <a href="https://github.com/" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">
            GitHub
          </a>
        </nav>

        {/* Actions droite */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="hidden md:inline-flex"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          
          {/* Menu mobile */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}