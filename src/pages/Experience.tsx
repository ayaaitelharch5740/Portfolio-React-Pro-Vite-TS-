// src/pages/Experience.tsx
import { Helmet } from "react-helmet-async";


export default function Experience() {
  return (
    <div className="page-wrap">
      <Helmet>
        <title>Expérience — Portfolio AYA</title>
        <meta name="description" content="Expérience professionnelle de AYA AIT EL HARCH." />
      </Helmet>

      {/* ── Page hero ── */}
      <div className="page-hero">
        <p className="hero-eyebrow" style={{ marginBottom: ".5rem" }}>Parcours professionnel</p>
        <h1>Mon <span>Expérience</span></h1>
        <p>Stages, projets académiques et disponibilités pour de nouvelles opportunités.</p>
      </div>

      {/* ── Timeline ── */}
      <div className="timeline">

        {/* ── Entrée 1 : Ouverte aux opportunités ── */}
        <div className="timeline-entry">
          <div className="timeline-dot timeline-dot--active" />
          <div className="card card--blue">
            <div className="card-head">
              <div>
                <p className="card-type">Recherche d'opportunités</p>
                <p className="card-title">Développement web & logiciel</p>
                <p className="card-subtitle" style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 3 }}>
                  École Normale Supérieure — Licence Informatique
                </p>
              </div>
              <span className="badge badge--blue badge-blink">Disponible</span>
            </div>

            <div className="divider" />

            {/* Info grid */}
            <div className="grid-2" style={{ gap: ".6rem", marginBottom: "1rem" }}>
              {[
                { label: "Type",          val: "Stage / Alternance / Projet" },
                { label: "Disponibilité", val: "Immédiate" },
                { label: "Durée",         val: "Flexible" },
                { label: "Localisation",  val: "Marrakech & environs" },
              ].map(({ label, val }) => (
                <div key={label} className="info-item">
                  <div className="info-item__label">{label}</div>
                  <div className="info-item__value">{val}</div>
                </div>
              ))}
            </div>

            <div className="divider" />
            <p className="section-label" style={{ marginBottom: ".6rem" }}>Domaines recherchés</p>
            <div className="points" style={{ marginBottom: ".85rem" }}>
              <div className="point point--active">Développement web fullstack (React, PHP, Node.js)</div>
              <div className="point point--active">Systèmes informatiques et architecture logicielle</div>
              <div className="point point--active">Technologies modernes et outils collaboratifs</div>
            </div>

            <div className="divider" />
            <p className="section-label" style={{ marginBottom: ".6rem" }}>Compétences apportées</p>
            <div className="tags">
              {["React", "Java", "Python", "MySQL", "PHP", "Kotlin", "JavaScript", "SQL"].map(t => (
                <span key={t} className="tag tag--blue">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Entrée 2 : Stage terminé ── */}
        <div className="timeline-entry">
          <div className="timeline-dot" />
          <div className="card">
            <div className="card-head">
              <div>
                <p className="card-type">Stage</p>
                <p className="card-title">Développement informatique & Gestion de bases de données</p>
                <p className="card-subtitle" style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 3 }}>
                  Département Informatique — SEOCOM
                </p>
              </div>
              <span className="date-pill">2025 · 1 mois</span>
            </div>

            <span className="badge badge--gray" style={{ marginBottom: ".85rem" }}>
              ✓ Stage terminé
            </span>

            <div className="divider" />
            <p className="section-label" style={{ marginBottom: ".6rem" }}>Missions réalisées</p>
            <div className="points" style={{ marginBottom: ".85rem" }}>
              <div className="point">Développement d'outils informatiques pour le département</div>
              <div className="point">Administration et gestion de bases de données</div>
              <div className="point">Support technique et participation aux projets internes du service</div>
            </div>

            <div className="divider" />
            <p className="section-label" style={{ marginBottom: ".6rem" }}>Technologies utilisées</p>
            <div className="tags">
              {["Bases de données", "SQL", "Développement logiciel", "Administration système"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
