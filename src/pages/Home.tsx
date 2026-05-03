// src/pages/Home.tsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { profile } from "../data/profile";

/* ── Icônes ── */
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const ProjectIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>
);
const CertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M8.56 14.89L7 22l5-3 5 3-1.56-7.11"/>
    <polyline points="9 8 11 10 15 6"/>
  </svg>
);
const UserIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const TECH = [
  { label: "React",       cls: "tag--blue"  },
  { label: "JavaScript",  cls: "tag--blue"  },
  { label: "Java",        cls: "tag--blue"  },
  { label: "Python",      cls: "tag--blue"  },
  { label: "MySQL",       cls: "tag--brown" },
  { label: "PHP",         cls: "tag--brown" },
  { label: "HTML",        cls: ""           },
  { label: "CSS",         cls: ""           },
];

const INFO_CARDS = [
  { label: "Localisation", value: "Marrakech, Maroc"           },
  { label: "Formation",    value: "Licence Informatique — ENS" },
  { label: "Disponibilité", value: "Ouverte aux opportunités"  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AYA AIT EL HARCH </title>
        <meta name="description" content="Portfolio de AYA AIT EL HARCH, étudiante en Licence Informatique à l'ENS Marrakech." />
      </Helmet>

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="home-hero">
        <div
          className="home-hero__grid"
          style={{ gridTemplateColumns: "1fr 280px", gap: "3rem", alignItems: "center" }}
        >
          {/* ── Gauche : texte ── */}
          <div>
            {/* Eyebrow — une seule ligne */}
            <p className="hero-eyebrow" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Étudiante · Licence Informatique · ENS Marrakech
            </p>

            {/* Nom — une seule ligne */}
            <h1 className="hero-title" style={{ whiteSpace: "nowrap" }}>
              <div>AYA</div>
              <span>AIT EL HARCH</span>
            </h1>

            {/* Technologies — juste sous le nom */}
            <div style={{ marginBottom: "1.25rem" }}>
              <p className="section-label" style={{ marginBottom: ".5rem" }}>Technologies</p>
              <div className="tags">
                {TECH.map(t => (
                  <span key={t.label} className={`tag ${t.cls}`}>{t.label}</span>
                ))}
              </div>
            </div>

            <p className="hero-desc">
              Passionnée par le développement logiciel et les technologies web.
              Ouverte aux opportunités de collaboration et aux projets innovants.
            </p>

            {/* Boutons — tous sur une ligne avec icônes */}
            <div className="hero-actions" style={{ flexWrap: "nowrap", gap: "8px" }}>
              <Link to="/projects" className="btn btn--primary" style={{ borderRadius: "99px" }}>
                Voir mes projets <ArrowIcon />
              </Link>
              <a
                href="https://github.com/ayaaitelharch5740"
                target="_blank" rel="noreferrer"
                className="btn btn--outline"
                style={{ borderRadius: "99px", padding: "10px 14px", gap: "6px" }}
              >
                <GithubIcon /> GitHub
              </a>
              <a
                href="https://ma.linkedin.com/in/ayaaitelharch"
                target="_blank" rel="noreferrer"
                className="btn btn--outline"
                style={{ borderRadius: "99px", padding: "10px 14px", gap: "6px" }}
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>

          {/* ── Droite : Photo ── */}
          <div className="hero-photo-wrap">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.photoAlt ?? "Photo de profil"}
                className="hero-photo"
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              />
            ) : (
              <div className="hero-photo-placeholder">
                <UserIcon />
                <span style={{ fontSize: 12, textAlign: "center", padding: "0 1rem" }}>
                  /public/photo.jpg
                </span>
              </div>
            )}
            {profile.photoBadge && (
              <div className="hero-photo-badge">
                <span>{profile.photoBadge.sublabel}</span>
                {profile.photoBadge.label}
              </div>
            )}
          </div>
        </div>

        {/* Info cards */}
        <div className="info-grid">
          {INFO_CARDS.map(c => (
            <div key={c.label} className="info-card">
              <p className="info-card__label">{c.label}</p>
              <p className="info-card__value">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PROJET EN AVANT ══════════════════════════════ */}
      <section className="featured-section">
        <div className="featured-section__header">
          <span className="featured-section__label">Projet en avant</span>
          <Link to="/projects" className="featured-section__link">
            Voir tous les projets <ArrowIcon />
          </Link>
        </div>

        <div className="featured-card">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="icon-box" style={{ color: "var(--blue)" }}>
                <ProjectIcon />
              </div>
              <span className="date-pill date-pill--blue">2024</span>
            </div>
            <h3 className="card-title" style={{ fontSize: 18, fontWeight: 700 }}>
              Edutrack — Gestion des notes
            </h3>
            <p className="card-desc">
              Application Java permettant de gérer efficacement les notes et les informations académiques des étudiants.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "space-between" }}>
            <div>
              <p className="section-label">Stack</p>
              <div className="tags">
                {["Java", "POO", "JavaFX", "SQL"].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <Link to="/projects" className="btn btn--primary btn--full">
              <ProjectIcon /> Voir le projet
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CERTIF HIGHLIGHT ═════════════════════════════ */}
      <section className="cert-highlight-section">
        <p className="section-label" style={{ marginBottom: "1.25rem" }}>Certification récente</p>
        <div className="cert-highlight">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div className="icon-box icon-box--brown" style={{ color: "var(--brown)" }}>
              <CertIcon />
            </div>
            <div>
              <p className="card-title">Kotlin</p>
              <p className="card-subtitle" style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 3 }}>MLIAEdu · 2026</p>
            </div>
          </div>
          <Link to="/certifications" className="btn btn--brown btn--sm">
            Voir le certificat <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ══ CONTACT CTA ══════════════════════════════════ */}
      <section className="contact-cta-section">
        <div className="contact-cta">
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: ".6rem" }}>
            Me contacter
          </p>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginBottom: ".5rem", letterSpacing: "-.02em" }}>
            Travaillons ensemble
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 440, margin: "0 auto 1.75rem", fontSize: 14, lineHeight: 1.75 }}>
            Ouverte aux collaborations, aux projets web et logiciel, et aux nouvelles opportunités.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact" className="btn" style={{ background: "#fff", color: "var(--blue)", fontWeight: 700, borderRadius: "99px" }}>
              Page contact <ArrowIcon />
            </Link>
            <a
              href="mailto:ayaaitelharch3@gmail.com"
              className="btn"
              style={{ background: "rgba(255,255,255,0.10)", color: "#fff", border: "0.5px solid rgba(255,255,255,0.22)", borderRadius: "99px" }}
            >
              <MailIcon /> Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
