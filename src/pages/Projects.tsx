import { Helmet } from "react-helmet-async";

interface Project {
  title: string;
  desc: string;
  year: string;
  tags: string[];
  github: string | null;
  ai?: boolean;
  featured?: boolean;
  features?: string[];
}

const projects: Project[] = [
  {
title: "Edutrack — Gestion des notes scolaire ",
    desc: "une application développée en Java permettant de gérer efficacement les notes et les informations académiques des étudiants. Elle vise à simplifier le suivi scolaire pour les enseignants, les administrateurs et les élèves.",
    year: "2024",
    tags: ["Java", "POO", "JavaFX", "SQL"],
    github: null,
  },
   {
    title: "ZeniBot — chatboot de prediction du niveau de stress",
    desc: "un chatbot intelligent conçu pour analyser et prédire le niveau de stress des utilisateurs à partir de leurs interactions textuelles.",
    year: "2025",
    tags: [ "Python", "JavaScript", "HTML/CSS", "SQL"],
    github: null,
   
  },
{
    title: "Matériel Management — Gestion des demandes informatiques",
    desc: "Application web pour la gestion des demandes de matériel informatique. Les utilisateurs soumettent des demandes, consultent leur état, et les administrateurs gèrent le stock, valident ou refusent les demandes et suivent l'affectation des matériels.",
    year: "2025",
    tags: ["PHP", "JavaScript", "HTML/CSS", "SQL", "MySQL"],
    github: null,
  },
  
   
  {
    title: "E-stock — Tableau de bord de gestion de stock",
    desc: "Tableau de bord de gestion de stock est une application conçue pour faciliter le suivi, le contrôle et l’optimisation des stocks au sein d’une entreprise ou d’une organisation. Ce projet vise à centraliser toutes les informations liées aux produits dans une interface claire et interactive.",
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

/* Icône circuit/document — fidèle à l'image uploadée */
const ProjectIcon = ({ stroke }: { stroke: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {/* Corps du document */}
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    {/* Coin plié */}
    <polyline points="14 2 14 8 20 8"/>
    {/* Nœud haut-gauche */}
    <rect x="7" y="10" width="3" height="3" rx="0.5"/>
    {/* Nœud milieu */}
    <rect x="7" y="15" width="3" height="3" rx="0.5"/>
    {/* Trait vertical depuis nœud haut */}
    <line x1="10" y1="11.5" x2="14" y2="11.5"/>
    {/* Trait vertical depuis nœud milieu vers droite */}
    <line x1="10" y1="16.5" x2="13" y2="16.5"/>
    {/* Connexion verticale droite */}
    <line x1="14" y1="10" x2="14" y2="13"/>
    {/* Cercle en bas à droite */}
    <circle cx="15.5" cy="16.5" r="1.5"/>
  </svg>
);

export default function Projects() {
  return (
    <section style={{ maxWidth: 960, margin: "0 auto", padding: "2rem 1rem" }}>
      <Helmet>
        <title>Projets — Portfolio</title>
        <meta name="description" content="Projets web, Java, IA et systèmes de gestion." />
      </Helmet>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        borderRadius: 16,
        padding: "2rem 2.5rem",
        marginBottom: "2rem",
        border: "0.5px solid rgba(148,163,184,0.15)",
      }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 600, color: "#f8fafc", marginBottom: ".5rem" }}>
          Mes Projets
        </h1>
        <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.7 }}>
          Découvrez mes réalisations techniques — applications web, systèmes de gestion et outils modernes.
        </p>
      </div>

      {/* Grille de cartes */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
        {projects.map(p => (
          <div
            key={p.title}
            style={{
              background: "#0f172a",
              border: `0.5px solid ${p.ai ? "rgba(139,92,246,0.25)" : "rgba(148,163,184,0.15)"}`,
              borderRadius: 16,
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: ".85rem",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            {/* En-tête : icône + badges */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              {/* Icône circuit/document */}
              <div style={{
                width: 44, height: 44, borderRadius: 11, flexShrink: 0,
                background: p.ai ? "rgba(139,92,246,0.12)" : "rgba(96,165,250,0.12)",
                border: `0.5px solid ${p.ai ? "rgba(167,139,250,0.25)" : "rgba(96,165,250,0.2)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <ProjectIcon stroke={p.ai ? "#a78bfa" : "#60a5fa"} />
              </div>

              {/* Badges année + IA */}
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                {p.ai && (
                  <span style={{
                    fontSize: 10, fontWeight: 600, letterSpacing: ".05em",
                    background: "rgba(139,92,246,0.12)", color: "#a78bfa",
                    border: "0.5px solid rgba(167,139,250,0.25)",
                    padding: "2px 8px", borderRadius: 99,
                  }}>IA</span>
                )} 
                <span style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "0.5px solid rgba(148,163,184,0.12)",
                  borderRadius: 9, padding:"11px",
                  fontSize: 11, color: "#64748b",
                }}>{p.year}</span>
              </div>
            </div>

            {/* Titre */}
            <div style={{ fontSize: 15, fontWeight: 600, color: "#f8fafc" }}>{p.title}</div>

            {/* Description */}
            <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, flex: 1 }}>{p.desc}</div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontSize: 11, padding: "2px 8px", borderRadius: 5,
                  background: p.ai && t === "IA / ML" ? "rgba(139,92,246,0.08)" : "rgba(255,255,255,0.05)",
                  color: p.ai && t === "IA / ML" ? "#a78bfa" : "#94a3b8",
                  border: `0.5px solid ${p.ai && t === "IA / ML" ? "rgba(167,139,250,0.2)" : "rgba(148,163,184,0.1)"}`,
                }}>{t}</span>
              ))}
            </div>

            {/* Séparateur */}
            <div style={{ height: "0.5px", background: "rgba(148,163,184,0.08)" }} />

            {/* Bouton GitHub — dans la carte */}
            <a
              href={p.github ?? "#"}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                width: "100%", boxSizing: "border-box",
                background: p.ai ? "#5b21b6" : "#1d4ed8",
                color: "#fff", border: "none", borderRadius: 9,
                padding: "10px 16px", fontSize: 13, fontWeight: 500,
                cursor: "pointer", textDecoration: "none",
              }}
            >
              <GithubIcon /> Voir le code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}