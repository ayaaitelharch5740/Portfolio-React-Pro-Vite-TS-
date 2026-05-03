// src/pages/Projects.tsx
import { Helmet } from "react-helmet-async";

interface Project {
  title: string;
  desc: string;
  year: string;
  tags: string[];
  github: string | null;
}

const projects: Project[] = [
  {
    title: "Edutrack — Gestion des notes scolaires",
    desc: "Application développée en Java permettant de gérer efficacement les notes et les informations académiques des étudiants. Elle vise à simplifier le suivi scolaire pour les enseignants, les administrateurs et les élèves.",
    year: "2024",
    tags: ["Java", "POO", "JavaFX", "SQL"],
    github: null,
  },
  {
    title: "ZeniBot — Prédiction du niveau de stress",
    desc: "Chatbot intelligent conçu pour analyser et prédire le niveau de stress des utilisateurs à partir de leurs interactions textuelles.",
    year: "2025",
    tags: ["Python", "JavaScript", "HTML/CSS", "SQL"],
    github: null,
  },
  {
    title: "Matériel Management — Gestion des demandes informatiques",
    desc: "Application web pour la gestion des demandes de matériel informatique. Les utilisateurs soumettent des demandes, consultent leur état, et les administrateurs gèrent le stock et les affectations.",
    year: "2025",
    tags: ["PHP", "JavaScript", "HTML/CSS", "SQL", "MySQL"],
    github: null,
  },
  {
    title: "E-stock — Tableau de bord de gestion de stock",
    desc: "Application conçue pour faciliter le suivi, le contrôle et l'optimisation des stocks au sein d'une entreprise. Interface claire et interactive pour centraliser toutes les informations liées aux produits.",
    year: "2025",
    tags: ["PHP", "HTML/CSS", "JavaScript", "MySQL"],
    github: null,
  },
];

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);
const ProjectIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="8" y1="13" x2="16" y2="13"/>
    <line x1="8" y1="17" x2="13" y2="17"/>
  </svg>
);

export default function Projects() {
  return (
    <div className="page-wrap">
      <Helmet>
        <title>Projets — Portfolio AYA</title>
        <meta name="description" content="Projets web, Java, IA et systèmes de gestion." />
      </Helmet>

      {/* ── Page hero ── */}
      <div className="page-hero">
        <p className="hero-eyebrow" style={{ marginBottom: ".5rem" }}>Portfolio technique</p>
        <h1>Mes <span>Projets</span></h1>
        <p>Applications web, systèmes de gestion et outils modernes.</p>
      </div>

      {/* ── Grille de cartes ── */}
      <div className="grid-2">
        {projects.map((p) => (
          <div key={p.title} className={`card card--blue`} style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>

            {/* En-tête */}
            <div className="card-head">
              <div className="icon-box" style={{ color: "var(--blue)" }}>
                <ProjectIcon />
              </div>
              <span className="date-pill date-pill--blue">{p.year}</span>
            </div>

            {/* Titre */}
            <div className="card-title" style={{ fontSize: 15, fontWeight: 700 }}>{p.title}</div>

            {/* Description */}
            <div className="card-desc" style={{ flex: 1 }}>{p.desc}</div>

            {/* Tags */}
            <div className="tags">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>

            <div className="divider" />

            {/* Bouton */}
            {p.github ? (
              <a
                href={p.github}
                target="_blank" rel="noreferrer"
                className="btn btn--primary btn--full"
              >
                <GithubIcon /> Voir le code
              </a>
            ) : (
              <div
                className="btn btn--ghost btn--full"
                style={{ opacity: 0.5, cursor: "default", justifyContent: "center" }}
              >
                <GithubIcon /> Code privé
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
