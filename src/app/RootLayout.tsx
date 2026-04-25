import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav className="container nav">
        {/* LEFT */}
        <NavLink to="/" className="logo">
          AYA<span style={{ color: "var(--violet)" }}>.</span>Hr
        </NavLink>

        {/* RIGHT */}
        <div className="nav-right">
          <div className="links">
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projets</NavLink>
            <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink>
            <NavLink to="/education" className={({ isActive }) => isActive ? "active" : ""}>Formations</NavLink>
            <NavLink to="/certifications" className={({ isActive }) => isActive ? "active" : ""}>Certifications</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </div>

        
        </div>
      </nav>

      <Outlet />
    </>
  );
}