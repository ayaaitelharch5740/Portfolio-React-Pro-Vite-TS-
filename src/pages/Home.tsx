import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TECH = ["React","JavaScript","HTML","CSS","PHP","Java","MySQL","Python"];

const INFO_CARDS = [
  { label: "Localisation", value: "Marrakech, Maroc" },
  { label: "Formation",    value: "Licence Informatique — ENS" },
  { label: "Objectif",    value: "Stage PFE / développement" },
];

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const ProjectIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <rect x="7" y="11" width="3" height="2.5" rx="0.4"/>
    <rect x="7" y="15" width="3" height="2.5" rx="0.4"/>
    <line x1="10" y1="12.25" x2="14" y2="12.25"/>
    <line x1="10" y1="16.25" x2="13" y2="16.25"/>
    <line x1="14" y1="11" x2="14" y2="13.5"/>
    <circle cx="15.5" cy="16.25" r="1.5"/>
  </svg>
);
const CertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M8.56 14.89L7 22l5-3 5 3-1.56-7.11"/>
    <polyline points="9 8 11 10 15 6"/>
  </svg>
);

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AIT EL HARCH AYA </title>
        <meta name="description" content="Portfolio de AYA AIT EL HARCH ." />
      </Helmet>

      {/* ── HERO ───────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero__grid">

          {/* Gauche */}
          <div>
  
            <h1 className="hero-title">
             AYA<br />AIT EL HARCH 
            </h1>
            <p className="hero-desc">
              Étudiante en Licence Informatique à l'École Normale Supérieure de
              Marrakech, passionnée par le développement logiciel et les technologies web.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn--primary">
                Voir mes projets <ArrowIcon />
              </Link>
              <a
                href="https://github.com/ayaaitelharch5740"
                target="_blank" rel="noreferrer"
                className="btn btn--outline"
              >
                <GithubIcon /> GitHub
              </a>
              <a
                href= "https://ma.linkedin.com/in/ayaaitelharch"
                target="_blank" rel="noreferrer"
                className="btn btn--outline"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>

          {/* Droite — Tech card */}
          <div className="tech-card">
            <p className="tech-card__title">Technologies principales</p>
            <div className="tech-grid">
              {TECH.map(t => (
                <div key={t} className="tech-item">{t}</div>
              ))}
            </div>
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

      {/* ── PROJET EN AVANT ────────────────────── */}
      <section className="featured-section">
        <div className="featured-section__header">
          <span className="featured-section__label">Projet en avant</span>
          <Link to="/projects" className="featured-section__link">
            Voir tous les projets <ArrowIcon />
          </Link>
        </div>

        <div className="featured-card">
          {/* Colonne gauche */}
          <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div className="icon-box" style={{ color:"var(--blue)" }}>
                <ProjectIcon />
              </div>
              <span className="date-pill date-pill--amber">2026</span>
            </div>
            <h3 className="card-title" style={{ fontSize:18, fontWeight:700 }}>EduTrack App</h3>
            <p className="card-desc">
              Application Java de gestion des notes scolaires .
            </p>
          </div>

          {/* Colonne droite */}
          <div style={{ display:"flex", flexDirection:"column", gap:"1rem", justifyContent:"space-between" }}>
            <div>
              <p className="section-label">Stack</p>
              <div className="tags">
                {["Java","MySQL","JDBC","NetBeans"].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <a href="https://github.com/ayaaitelharch5740/Projet-Java-Swing.git" className="btn btn--blue btn--full">
              <GithubIcon /> Voir le code
            </a>
          </div>
        </div>
      </section>

      {/* ── CERTIF HIGHLIGHT ───────────────────── */}
      <section className="cert-highlight-section">
        <p className="section-label" style={{ marginBottom:"1.25rem" }}>Certification</p>
        <div className="cert-highlight">
          <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
            <div className="icon-box icon-box--amber" style={{ color:"var(--amber)" }}>
              <CertIcon />
            </div>
            <div>
              <p className="card-title">Kotlin</p>
              <p className="card-subtitle">MLIAEdu • 2026</p>
            </div>
          </div>
          <Link to="/certifications" className="btn btn--amber btn--sm">
            Voir le certificat <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ── CONTACT CTA ────────────────────────── */}
      <section className="contact-cta-section">
        <div className="contact-cta">
          <p className="hero-eyebrow" style={{ marginBottom:".75rem" }}>Me contacter</p>
          <p className="hero-desc" style={{ margin:"0 auto 2rem", textAlign:"center" }}>
            Je suis ouverte aux opportunités de stage, aux collaborations
            et aux projets en développement web et logiciel.
          </p>
          <div className="hero-actions" style={{ justifyContent:"center" }}>
            <Link to="/contact" className="btn btn--primary">
              Page contact <ArrowIcon />
            </Link>
            <a href="mailto:ayaaitelharch3@gmail.com" className="btn btn--outline">
              <MailIcon /> Envoyer un email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}