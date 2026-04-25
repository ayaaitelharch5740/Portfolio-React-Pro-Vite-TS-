import { Helmet } from "react-helmet-async";

const dotStyle = (active: boolean): React.CSSProperties => ({
  position: "absolute", left: "-2.5rem", top: "1.5rem",
  width: 14, height: 14, borderRadius: "50%",
  background: active ? "#1e40af" : "#0f172a",
  border: `2px solid ${active ? "#60a5fa" : "#334155"}`,
});

const tagStyle = (active: boolean): React.CSSProperties => ({
  fontSize: 11, padding: "3px 9px", borderRadius: 6,
  background: active ? "rgba(96,165,250,0.08)" : "rgba(255,255,255,0.05)",
  color: active ? "#60a5fa" : "#94a3b8",
  border: `0.5px solid ${active ? "rgba(96,165,250,0.2)" : "rgba(148,163,184,0.1)"}`,
});

const divider: React.CSSProperties = {
  height: "0.5px", background: "rgba(148,163,184,0.08)", margin: ".85rem 0"
};

const sLabel: React.CSSProperties = {
  fontSize: 10, fontWeight: 600, letterSpacing: ".1em",
  textTransform: "uppercase", color: "#475569", marginBottom: ".55rem"
};

const Point = ({ text, active }: { text: string; active: boolean }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
    <span style={{ width: 5, height: 5, borderRadius: "50%", background: active ? "#3b82f6" : "#334155", flexShrink: 0, marginTop: 6, display: "inline-block" }} />
    {text}
  </div>
);

export default function Experience() {
  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <Helmet>
        <title>Expérience — Portfolio</title>
        <meta name="description" content="Stage Province de Safi et recherche stage PFE 2026." />
      </Helmet>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        borderRadius: 16, padding: "2rem 2.5rem", marginBottom: "2.5rem",
        border: "0.5px solid rgba(148,163,184,0.15)"
      }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 600, color: "#f8fafc", marginBottom: ".5rem" }}>Expérience</h1>
        <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.7 }}>
          Mon parcours professionnel et mes disponibilités pour de nouvelles opportunités.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
        <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1, background: "rgba(148,163,184,0.12)" }} />

        {/* 1 — Recherche PFE (EN PREMIER) */}
        <div style={{ position: "relative", marginBottom: "1.5rem" }}>
          <div style={dotStyle(true)} />
          <div style={{ background: "#0f172a", border: "0.5px solid rgba(96,165,250,0.3)", borderRadius: 16, padding: "1.5rem 1.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: ".85rem" }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "#94a3b8", marginBottom: ".3rem" }}>Recherche de stage</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#f8fafc" }}>Stage de Fin d'Études (PFE)</div>
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 3 }}>École Normale Supérieure — Licence Informatique</div>
              </div>
              <span style={{ background: "rgba(96,165,250,0.1)", border: "0.5px solid rgba(96,165,250,0.3)", borderRadius: 99, padding: "4px 14px", fontSize: 12, color: "#60a5fa", whiteSpace: "nowrap" }}>
                Disponible dès 2026
              </span>
            </div>

            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(34,197,94,0.1)", color: "#4ade80", border: "0.5px solid rgba(74,222,128,0.2)", fontSize: 11, padding: "3px 10px", borderRadius: 99, marginBottom: ".85rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              Ouverte aux opportunités
            </span>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: ".85rem 0" }}>
              {[
                { label: "Durée souhaitée", val: "2 mois minimum" },
                { label: "Disponibilité", val: "À partir de 2026" },
                { label: "Type", val: "Stage PFE" },
                { label: "Localisation", val: "Marrakech & environs" },
              ].map(({ label, val }) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(148,163,184,0.08)", borderRadius: 8, padding: ".75rem 1rem" }}>
                  <div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 13, color: "#e2e8f0", fontWeight: 500 }}>{val}</div>
                </div>
              ))}
            </div>

            <div style={divider} />
            <div style={sLabel}>Domaines recherchés</div>
            <div style={{ display: "flex", flexDirection: "column", gap: ".4rem", marginBottom: ".75rem" }}>
              <Point text="Développement web fullstack (React, Spring Boot)" active={true} />
              <Point text="Systèmes informatiques et architecture logicielle" active={true} />
              <Point text="Technologies modernes et DevOps" active={true} />
            </div>

            <div style={divider} />
            <div style={sLabel}>Compétences apportées</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["React", "Spring Boot", "Java", "MySQL", "Kotlin", "Python", "DevOps"].map(t => (
                <span key={t} style={tagStyle(true)}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 2 — Stage terminé */}
        <div style={{ position: "relative" }}>
          <div style={dotStyle(false)} />
          <div style={{ background: "#0f172a", border: "0.5px solid rgba(148,163,184,0.15)", borderRadius: 16, padding: "1.5rem 1.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: ".85rem" }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "#94a3b8", marginBottom: ".3rem" }}>Stage</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#f8fafc" }}>Développement informatique & Gestion de bases de données</div>
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 3 }}>Département Informatique — Province de Safi</div>
              </div>
              <span style={{ background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(148,163,184,0.15)", borderRadius: 99, padding: "4px 14px", fontSize: 12, color: "#94a3b8", whiteSpace: "nowrap" }}>
                2025 • 1 mois
              </span>
            </div>

            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(100,116,139,0.12)", color: "#94a3b8", border: "0.5px solid rgba(148,163,184,0.15)", fontSize: 11, padding: "3px 10px", borderRadius: 99, marginBottom: ".85rem" }}>
              ✓ Stage terminé
            </span>

            <div style={divider} />
            <div style={sLabel}>Missions réalisées</div>
            <div style={{ display: "flex", flexDirection: "column", gap: ".4rem", marginBottom: ".75rem" }}>
              <Point text="Développement d'outils informatiques pour le département" active={false} />
              <Point text="Administration et gestion de bases de données" active={false} />
              <Point text="Support technique et participation aux projets internes du service" active={false} />
            </div>

            <div style={divider} />
            <div style={sLabel}>Technologies utilisées</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Bases de données", "SQL", "Développement logiciel", "Administration système"].map(t => (
                <span key={t} style={tagStyle(false)}>{t}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}