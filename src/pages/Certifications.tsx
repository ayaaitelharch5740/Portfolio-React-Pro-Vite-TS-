import { Helmet } from "react-helmet-async";
import { useState, useMemo } from "react";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  tags: string[];
  link: string | null;
  icon: string;
}

const certifications: Certification[] = [
  {
    title: "Kotlin",
    issuer: "MLIAedu",
    year: "2026",
    tags: ["Kotlin", "POO", "Android"],
    link: "https://mliaedu.toubkalit.com/verify-certificate/40-aca3c957-20a8-44db-8534-2b40a96f2a40-583474",
    icon: "K",
  },
  { title: "PHP",              issuer: "MLIAedu", year: "2026", tags: ["PHP", "Web", "Backend"],          link:"https://mliaedu.toubkalit.com/verify-certificate/44-aca3c957-20a8-44db-8534-2b40a96f2a40-269710", icon: "P"  },
  { title: "Java",             issuer: "MLIAedu", year: "2025", tags: ["Java", "POO", "Backend"],         link: "https://mliaedu.toubkalit.com/verify-certificate/6-aca3c957-20a8-44db-8534-2b40a96f2a40-221358",icon: "J"  },
  { title: "Python",           issuer: "MLIAedu", year: "2025", tags: ["Python", "Data", "Scripts"],      link: "https://mliaedu.toubkalit.com/verify-certificate/11-aca3c957-20a8-44db-8534-2b40a96f2a40-330662",icon: "Py" },
  { title: "C++",              issuer: "MLIAedu", year: "2025", tags: ["C++", "Système", "Performance"],  link: "https://mliaedu.toubkalit.com/verify-certificate/12-aca3c957-20a8-44db-8534-2b40a96f2a40-303236", icon: "C+" },
  { title: "Bases de données", issuer: "MLIAedu", year: "2025", tags: ["SQL", "MySQL", "Modélisation"],   link: "https://mliaedu.toubkalit.com/verify-certificate/15-aca3c957-20a8-44db-8534-2b40a96f2a40-117318",icon: "DB" },
];

const cardStyle: React.CSSProperties = {
  background: "#0f172a",
  border: "0.5px solid rgba(148,163,184,0.15)",
  borderRadius: 16,
  padding: "1.75rem 1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: ".75rem",
};

const iconStyle: React.CSSProperties = {
  width: 56,
  height: 56,
  borderRadius: "50%",
  background: "rgba(96,165,250,0.12)",
  border: "1px solid rgba(96,165,250,0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 15,
  fontWeight: 700,
  color: "#60a5fa",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  background: "rgba(34,197,94,0.1)",
  color: "#4ade80",
  fontSize: 11,
  padding: "3px 10px",
  borderRadius: 99,
  border: "0.5px solid rgba(74,222,128,0.2)",
};

const btnActiveStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  color: "#e2e8f0",
  border: "0.5px solid rgba(148,163,184,0.2)",
  borderRadius: 8,
  padding: "9px 14px",
  fontSize: 13,
  fontWeight: 500,
  textDecoration: "none",
  marginTop: ".5rem",
  opacity: 1,
};

const btnDisabledStyle: React.CSSProperties = {
  ...btnActiveStyle,
  opacity: 0.4,
  pointerEvents: "none",
};

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      certifications.filter((c) =>
        [c.title, c.issuer, ...c.tags]
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase())
      ),
    [q]
  );

  return (
    <section style={{ maxWidth: 960, margin: "0 auto", padding: "2rem 1rem" }}>
      <Helmet>
        <title>Certifications — Portfolio</title>
        <meta
          name="description"
          content="Certifications en Kotlin, PHP, Java, Python, C++ et Bases de données."
        />
      </Helmet>

      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          borderRadius: 16,
          padding: "2.5rem",
          marginBottom: "2rem",
          border: "0.5px solid rgba(148,163,184,0.15)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 600, color: "#f8fafc", marginBottom: ".5rem" }}>
          Certifications
        </h1>
        <p style={{ fontSize: 15, color: "#94a3b8" }}>
          Validation de mes compétences techniques et académiques.
        </p>
      </div>

      {/* Filtre */}
      <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "1.5rem" }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filtrer (ex: Python, Java...)"
          aria-label="Filtrer les certifications"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "5px solid rgba(148,163,184,0.2)",
            borderRadius: 14,
            padding: "9px 44px",
            fontSize: 14,
            color: "#e2e8f0",
            outline: "none",
            width: 260,
          }}
        />
      </div>

      {/* Grille */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
        {list.length === 0 && (
          <p style={{ color: "#64748b", fontSize: 14, gridColumn: "1 / -1", textAlign: "center", padding: "3rem" }}>
            Aucune certification trouvée.
          </p>
        )}

        {list.map((c) => (
          <div key={c.title} style={cardStyle}>
            <div style={iconStyle}>{c.icon}</div>

            <div style={{ fontSize: 15, fontWeight: 600, color: "#f8fafc" }}>{c.title}</div>
            <div style={{ fontSize: 12, color: "#64748b" }}>{c.issuer} • {c.year}</div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
              {c.tags.map((t) => (
                <span
                  key={t}
                  style={{ background: "rgba(255,255,255,0.06)", color: "#94a3b8", fontSize: 11, padding: "2px 8px", borderRadius: 6 }}
                >
                  {t}
                </span>
              ))}
            </div>

            <span style={badgeStyle}>✓ Certificat vérifié</span>

            {c.link ? (
              <a href={c.link} target="_blank" rel="noreferrer" style={btnActiveStyle}>
                🔍 Vérifier en ligne
              </a>
            ) : (
              <span style={btnDisabledStyle}>🔍 Vérifier en ligne</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}