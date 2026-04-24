import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 border-b backdrop-blur">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold">MonPortfolio</NavLink>
          <div className="flex items-center gap-4">
            <NavLink to="/projects">Projets</NavLink>
            <NavLink to="/experience">Parcours</NavLink>
            <NavLink to="/education">Formations</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-sm">
        © {new Date().getFullYear()} • Mon Nom
      </footer>
    </div>
  );
}