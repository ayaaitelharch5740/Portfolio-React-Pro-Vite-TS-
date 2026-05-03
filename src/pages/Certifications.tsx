// src/pages/Certifications.tsx
import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  tags: string[];
  link: string | null;
  icon: string;
  color: "blue" | "brown";
}

const certifications: Certification[] = [
  { title: "Kotlin",           issuer: "MLIAedu", year: "2026", tags: ["Kotlin", "POO", "Android"],        link: "https://mliaedu.toubkalit.com/verify-certificate/40-aca3c957-20a8-44db-8534-2b40a96f2a40-583474", icon: "K",  color: "blue"  },
  { title: "PHP",              issuer: "MLIAedu", year: "2026", tags: ["PHP", "Web", "Backend"],            link: "https://mliaedu.toubkalit.com/verify-certificate/44-aca3c957-20a8-44db-8534-2b40a96f2a40-269710", icon: "P",  color: "brown" },
  { title: "Java",             issuer: "MLIAedu", year: "2025", tags: ["Java", "POO", "Backend"],           link: "https://mliaedu.toubkalit.com/verify-certificate/6-aca3c957-20a8-44db-8534-2b40a96f2a40-221358",  icon: "J",  color: "blue"  },
  { title: "Python",           issuer: "MLIAedu", year: "2025", tags: ["Python", "Data", "Scripts"],        link: "https://mliaedu.toubkalit.com/verify-certificate/11-aca3c957-20a8-44db-8534-2b40a96f2a40-330662", icon: "Py", color: "brown" },
  { title: "C++",              issuer: "MLIAedu", year: "2025", tags: ["C++", "Système", "Performance"],    link: "https://mliaedu.toubkalit.com/verify-certificate/12-aca3c957-20a8-44db-8534-2b40a96f2a40-303236", icon: "C+", color: "blue"  },
  { title: "Bases de données", issuer: "MLIAedu", year: "2025", tags: ["SQL", "MySQL", "Modélisation"],     link: "https://mliaedu.toubkalit.com/verify-certificate/15-aca3c957-20a8-44db-8534-2b40a96f2a40-117318", icon: "DB", color: "brown" },
];

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-dim)" }}>
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(
    () => certifications.filter(c =>
      [c.title, c.issuer, ...c.tags].join(" ").toLowerCase().includes(q.toLowerCase())
    ),
    [q]
  );

  return (
    <div className="page-wrap">
      <Helmet>
        <title>Certifications — Portfolio AYA</title>
        <meta name="description" content="Certifications en Kotlin, PHP, Java, Python, C++ et Bases de données." />
      </Helmet>

      {/* ── Page hero ── */}
      <div className="page-hero">
        <p className="hero-eyebrow" style={{ marginBottom: ".5rem" }}>Validation des compétences</p>
        <h1>Mes <span>Certifications</span></h1>
        <p>Compétences techniques certifiées et vérifiées — {certifications.length} certifications obtenues.</p>
      </div>

      {/* ── Filtre ── */}
      <div style={{ position: "relative", display: "inline-flex", marginBottom: "1.5rem" }}>
        <SearchIcon />
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Filtrer (ex: Python, Java...)"
          className="input"
          style={{ paddingLeft: "2rem", width: 260 }}
        />
      </div>

      {/* ── Grille ── */}
      <div className="grid-3">
        {list.length === 0 && (
          <p style={{ color: "var(--text-dim)", fontSize: 14, gridColumn: "1 / -1", textAlign: "center", padding: "3rem" }}>
            Aucune certification trouvée.
          </p>
        )}

        {list.map(c => (
          <div key={c.title} className={`cert-card card--${c.color}`}>
            {/* Icône lettre */}
            <div
              className="icon-circle"
              style={{
                background: c.color === "blue" ? "var(--blue-dim)" : "var(--brown-dim)",
                borderColor: c.color === "blue" ? "var(--border-blue)" : "var(--border-brown)",
                color: c.color === "blue" ? "var(--blue)" : "var(--brown)",
                fontSize: 16, fontWeight: 800,
              }}
            >
              {c.icon}
            </div>

            {/* Titre */}
            <p className="card-title" style={{ fontSize: 15 }}>{c.title}</p>
            <p style={{ fontSize: 12, color: "var(--text-dim)" }}>{c.issuer} · {c.year}</p>

            {/* Tags */}
            <div className="tags" style={{ justifyContent: "center" }}>
              {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>

            {/* Badge vérifié */}
            <span className="badge badge--green">
              ✓ Certificat vérifié
            </span>

            {/* Bouton */}
            {c.link ? (
              <a
                href={c.link}
                target="_blank" rel="noreferrer"
                className="btn btn--outline btn--full btn--sm"
                style={{ marginTop: ".25rem" }}
              >
                <LinkIcon /> Vérifier en ligne
              </a>
            ) : (
              <div
                className="btn btn--ghost btn--full btn--sm"
                style={{ marginTop: ".25rem", opacity: 0.45, cursor: "default" }}
              >
                Lien indisponible
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
