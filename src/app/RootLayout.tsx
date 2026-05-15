import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const navLinks = [
    { to: "/projects", label: "Projets" },
    { to: "/experience", label: "Expérience" },
    { to: "/education", label: "Formations" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="root-header">
        <nav className="root-nav">
          {/* Logo */}
          <NavLink to="/" className="root-logo">
            AYA<span className="root-logo__dot">.</span>Hr
          </NavLink>

          {/* Desktop links */}
          <div className="root-links">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to} to={to}
                className={({ isActive }) => `root-link ${isActive ? "root-link--active" : ""}`}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="root-actions">
            <button className="root-theme-btn" onClick={() => setIsDark(!isDark)} aria-label="Thème">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              <span>{isDark ? "Clair" : "Sombre"}</span>
            </button>
            <button className="root-hamburger" onClick={() => setMenuOpen(true)} aria-label="Menu">
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`root-overlay ${menuOpen ? "root-overlay--active" : ""}`}
        onClick={close}
      />

      {/* Mobile menu */}
      <div className={`root-mobile-menu ${menuOpen ? "root-mobile-menu--active" : ""}`}>
        <div className="root-mobile-header">
          <span className="root-mobile-logo">AYA<span className="root-logo__dot">.</span>Hr</span>
          <button className="root-close-btn" onClick={close}>
            <X size={20} />
          </button>
        </div>

        <nav className="root-mobile-links">
          <NavLink to="/" onClick={close} className={({ isActive }) => `root-mobile-link ${isActive ? "root-mobile-link--active" : ""}`}>
            Accueil
          </NavLink>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to} to={to} onClick={close}
              className={({ isActive }) => `root-mobile-link ${isActive ? "root-mobile-link--active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="root-mobile-footer">
          <button className="root-mobile-theme" onClick={() => { setIsDark(!isDark); }}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            {isDark ? "Passer en mode clair" : "Passer en mode sombre"}
          </button>
        </div>
      </div>

      <Outlet />
    </>
  );
}