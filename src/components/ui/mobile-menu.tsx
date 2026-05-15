import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Home, FolderGit2, Award, Mail, Github } from 'lucide-react';
import { Button } from './button';
import { useTheme } from '@/lib/theme-context;
interface MobileMenuProps {
  links?: Array<{ href: string; label: string; icon?: React.ReactNode }>;
}

const defaultLinks = [
  { href: '#home', label: 'Accueil', icon: <Home size={18} /> },
  { href: '#projets', label: 'Projets', icon: <FolderGit2 size={18} /> },
  { href: '#certifications', label: 'Certifications', icon: <Award size={18} /> },
  { href: '#contact', label: 'Contact', icon: <Mail size={18} /> },
  { href: 'https://github.com/', label: 'GitHub', icon: <Github size={18} />, external: true },
];

export function MobileMenu({ links = defaultLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // À implémenter

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) return;
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <>
      {/* Bouton hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-border bg-transparent text-muted-foreground hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50/10 transition-all"
        aria-label="Menu"
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Menu latéral */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-card border-l border-border z-50 shadow-xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* En-tête du menu */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-brown-600 bg-clip-text text-transparent">
            Menu
          </span>
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Liens de navigation */}
        <nav className="flex flex-col p-4 gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.external)}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-blue-50/10 hover:text-blue-500 hover:pl-6 transition-all duration-200"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Section thème */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <Button
            variant="outline"
            onClick={toggleTheme}
            className="w-full justify-center gap-2"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
          </Button>
        </div>
      </div>
    </>
  );
}