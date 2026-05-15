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

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        backdropFilter: "blur(18px)",
        background: "rgba(248,247,244,0.88)",
        borderBottom: "0.5px solid var(--border)",
      }}>
        <nav className="container nav" style={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <NavLink to="/" className="logo">
            AYA<span style={{ color: "var(--brown)" }}>.</span>Hr
          </NavLink>

          {/* Desktop links */}
          <div className="links">
            <NavLink to="/projects">Projets</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/education">Formations</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Theme toggle */}
            <button className="theme-btn" onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                display: "none",
                background: "transparent",
                border: "0.5px solid var(--border-md, rgba(44,30,18,0.14))",
                borderRadius: 8,
                padding: "7px 10px",
                cursor: "pointer",
                color: "var(--text-muted)",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="hamburger-btn"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(4px)",
            zIndex: 200,
          }}
        />
      )}

      {/* Mobile menu */}
      <div style={{
        position: "fixed", top: 0, right: menuOpen ? 0 : -300,
        width: 280, height: "100vh",
        background: "var(--bg-surface)",
        borderLeft: "0.5px solid var(--border)",
        zIndex: 201,
        padding: "1.5rem",
        display: "flex", flexDirection: "column", gap: "0.5rem",
        transition: "right 0.3s ease",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <span style={{ fontWeight: 800, fontSize: 18, color: "var(--blue)" }}>AYA.Hr</span>
          <button onClick={close} style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--text-muted)" }}>
            <X size={22} />
          </button>
        </div>

        {[
          { to: "/", label: "Accueil" },
          { to: "/projects", label: "Projets" },
          { to: "/experience", label: "Experience" },
          { to: "/education", label: "Formations" },
          { to: "/certifications", label: "Certifications" },
          { to: "/contact", label: "Contact" },
        ].map(({ to, label }) => (
          <NavLink
            key={to} to={to} onClick={close}
            style={{ padding: "12px 16px", borderRadius: 10, color: "var(--text)", textDecoration: "none", fontSize: 16, fontWeight: 500, transition: "all 0.2s" }}
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* CSS mobile */}
      <style>{`
        @media (max-width: 768px) {
          .links { display: none !important; }
          .hamburger-btn { display: inline-flex !important; }
        }
      `}</style>

      <Outlet />
    </>
  );
}