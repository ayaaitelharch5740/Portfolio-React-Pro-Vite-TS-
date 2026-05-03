// src/pages/Education.tsx
import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return new Date(+y, +m - 1).toLocaleDateString("fr-FR", { month: "short", year: "numeric" });
}

const BookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const SkillBarRow = ({ label, pct, brown }: { label: string; pct: number; brown?: boolean }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: ".55rem" }}>
    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", width: 90, flexShrink: 0 }}>{label}</span>
    <div className="skill-bar__track" style={{ flex: 1 }}>
      <div className="skill-bar__fill" style={{ width: `${pct}%`, background: brown ? "var(--brown)" : "var(--blue)" }} />
    </div>
    <span style={{ fontSize: 11, color: "var(--text-dim)", width: 32, textAlign: "right", flexShrink: 0 }}>{pct}%</span>
  </div>
);

export default function EducationPage() {
  return (
    <div className="page-wrap">
      <Helmet>
        <title>Formation — Portfolio AYA</title>
      </Helmet>

      {/* ── Page hero ── */}
      <div className="page-hero">
        <p className="hero-eyebrow" style={{ marginBottom: ".5rem" }}>Parcours académique</p>
        <h1>Ma <span>Formation</span></h1>
        <p>Cursus universitaire, apprentissages clés et compétences développées.</p>
      </div>

      {/* ── Timeline formations ── */}
      <div className="timeline" style={{ marginBottom: "2rem" }}>
        {education.map((e, idx) => (
          <div key={e.school + e.start} className="timeline-entry">
            <div className={`timeline-dot ${idx === 0 ? "timeline-dot--active" : ""}`} />
            <div className={`card ${idx === 0 ? "card--blue" : ""}`}>
              <div className="card-head">
                <div>
                  <p className="card-type">{idx === 0 ? "Formation actuelle" : "Formation précédente"}</p>
                  <p className="card-title">
                    {e.degree}
                    {e.field && <span style={{ color: "var(--text-dim)", fontWeight: 400 }}> — {e.field}</span>}
                  </p>
                  <p className="card-subtitle" style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 3 }}>
                    {e.school}{e.location && ` · ${e.location}`}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className={`date-pill ${idx === 0 ? "date-pill--blue" : ""}`}>
                    {fmt(e.start)} — {fmt(e.end)}
                  </span>
                  {e.gpa && (
                    <div style={{ marginTop: 6 }}>
                      <span className="badge badge--brown" style={{ fontSize: 11 }}>
                        Mention {e.gpa}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {e.courses && e.courses.length > 0 && (
                <>
                  <div className="divider" />
                  <p className="section-label" style={{ marginBottom: ".5rem", display: "flex", alignItems: "center", gap: 5 }}>
                    <BookIcon /> Cours principaux
                  </p>
                  <div className="tags">
                    {e.courses.map(c => (
                      <span key={c} className={`tag ${idx === 0 ? "tag--blue" : ""}`}>{c}</span>
                    ))}
                  </div>
                </>
              )}

              {e.highlights && e.highlights.length > 0 && (
                <>
                  <div className="divider" />
                  <div className="points">
                    {e.highlights.map(h => (
                      <div key={h} className={`point ${idx === 0 ? "point--active" : ""}`}>{h}</div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Compétences ── */}
      <p className="section-label" style={{ marginBottom: ".75rem" }}>Compétences techniques</p>
      <div className="card">
        <div className="grid-2" style={{ gap: "1.25rem" }}>
          <div>
            <p className="section-label" style={{ color: "var(--blue)", marginBottom: ".75rem" }}>Langages & Frameworks</p>
            <SkillBarRow label="Java"       pct={85} />
            <SkillBarRow label="Python"     pct={75} />
            <SkillBarRow label="JavaScript" pct={70} />
            <SkillBarRow label="PHP"        pct={65} />
            <SkillBarRow label="React"      pct={68} />
          </div>
          <div>
            <p className="section-label" style={{ color: "var(--brown)", marginBottom: ".75rem" }}>Bases de données & Outils</p>
            <SkillBarRow label="MySQL"  pct={80} brown />
            <SkillBarRow label="SQL"    pct={78} brown />
            <SkillBarRow label="Git"    pct={72} brown />
            <SkillBarRow label="Kotlin" pct={60} brown />
            <SkillBarRow label="C++"    pct={55} brown />
          </div>
        </div>
      </div>
    </div>
  );
}
