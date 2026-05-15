import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, Award, FolderGit2, Home } from "lucide-react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Appliquer le thème
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Bloquer le scroll quand menu mobile ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => setIsDark(!isDark);
  const closeMenu = () => setMobileMenuOpen(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <>
      {/* Navigation */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection("center"); }}>
            <span>AYA</span> AI
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection("center"); }}>Accueil</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Projets</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection("certifications"); }}>Certifications</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Changer de thème">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
  className="hamburger" 
  onClick={() => setMobileMenuOpen(true)} 
  aria-label="Menu"
>
  <Menu size={22} />
</button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? "active" : ""}`} onClick={closeMenu} />
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-logo">AYA HR</span>
          <button className="close-menu" onClick={closeMenu} aria-label="Fermer">
            <X size={22} />
          </button>
        </div>
        <nav className="mobile-nav">
          <button onClick={() => scrollToSection("center")}>
            <Home size={18} /> Accueil
          </button>
          <button onClick={() => scrollToSection("projects")}>
            <FolderGit2 size={18} /> Projets
          </button>
          <button onClick={() => scrollToSection("certifications")}>
            <Award size={18} /> Certifications
          </button>
          <button onClick={() => scrollToSection("contact")}>
            <Mail size={18} /> Contact
          </button>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} /> LinkedIn
          </a>
        </nav>
        <div className="mobile-menu-footer">
          <button className="mobile-theme-toggle" onClick={toggleTheme}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            {isDark ? "Mode clair" : "Mode sombre"}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Hero" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Aya AI & Le Harch</h1>
          <p>Passionnée par le développement logiciel et les technologies web</p>
        </div>
        <button className="counter" onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Application React</h3>
            <p>Une application moderne avec React et TypeScript</p>
            <div className="tech-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Vite</span>
            </div>
          </div>
          <div className="project-card">
            <h3>API REST</h3>
            <p>Backend scalable avec Node.js et Express</p>
            <div className="tech-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      {/* Certifications Section */}
      <section id="certifications">
        <h2 className="section-title">Certifications</h2>
        <div className="certs-grid">
          <div className="cert-card">
            <h3>React Developer</h3>
            <p>Certification officielle React</p>
          </div>
          <div className="cert-card">
            <h3>JavaScript Advanced</h3>
            <p>Maîtrise des concepts avancés JS</p>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="section-title">Contactez-moi</h2>
        <div className="contact-container">
          <div className="contact-info">
            <p>📧 aya.ai@example.com</p>
            <p>📍 Marrakech, Maroc</p>
            <div className="social-links">
              <a href="https://github.com/" target="_blank"><Github size={20} /></a>
              <a href="https://linkedin.com/" target="_blank"><Linkedin size={20} /></a>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Nom" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows={4}></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Aya AI - Tous droits réservés</p>
      </footer>
    </>
  );
}

export default App;