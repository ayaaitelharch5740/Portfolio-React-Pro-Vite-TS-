// src/pages/Contact.tsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
);
const MapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
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
const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    fontSize: 14,
    fontFamily: "inherit",
    background: "var(--bg-surface2)",
    border: "0.5px solid var(--border-md)",
    borderRadius: "var(--r-md)",
    color: "var(--text)",
    outline: "none",
    marginBottom: ".6rem",
    transition: "border-color .2s, box-shadow .2s",
  };

  const socials = [
    { label: "GitHub",   href: "https://github.com/ayaaitelharch5740",       icon: <GithubIcon /> },
    { label: "LinkedIn", href: "https://ma.linkedin.com/in/ayaaitelharch",    icon: <LinkedInIcon /> },
  ];

  return (
    <div className="page-wrap">
      <Helmet>
        <title>Contact — Portfolio AYA</title>
      </Helmet>

      {/* ── Page hero ── */}
      <div className="page-hero">
        <p className="hero-eyebrow" style={{ marginBottom: ".5rem" }}>Parlons de votre projet</p>
        <h1>Me <span>Contacter</span></h1>
        <p>Disponible pour une collaboration, un échange ou toute nouvelle opportunité.</p>
      </div>

      {/* ── Grille contact ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "1rem" }}>

        {/* ── Colonne gauche : infos ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>

          {/* Coordonnées */}
          <div className="card">
            <p className="section-label" style={{ marginBottom: ".85rem" }}>Coordonnées</p>

            <div className="social-row" style={{ borderBottom: "0.5px solid var(--border)" }}>
              <div className="icon-box" style={{ color: "var(--blue)", width: 36, height: 36 }}>
                <MailIcon />
              </div>
              <div>
                <p className="field__label">Email</p>
                <a href={`mailto:${profile.email}`} className="field__value" style={{ display: "block", color: "var(--blue)", fontSize: 13 }}>
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="social-row" style={{ borderBottom: "none" }}>
              <div className="icon-box" style={{ color: "var(--blue)", width: 36, height: 36 }}>
                <MapIcon />
              </div>
              <div>
                <p className="field__label">Localisation</p>
                <p className="field__value" style={{ fontSize: 13 }}>{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Réseaux */}
          <div className="card">
            <p className="section-label" style={{ marginBottom: ".85rem" }}>Réseaux</p>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank" rel="noreferrer"
                className="social-row"
                style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  className="icon-box"
                  style={{ color: "var(--blue)", width: 34, height: 34, flexShrink: 0 }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="social-name">{s.label}</p>
                  <p className="social-url" style={{ fontSize: 12 }}>
                    {s.href.replace("https://", "")}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Colonne droite : formulaire ── */}
        <div className="card card--blue">
          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem 1rem", gap: "1rem", textAlign: "center" }}>
              <div className="icon-circle" style={{ width: 64, height: 64, fontSize: 20, color: "var(--blue)", background: "var(--blue-dim)", borderColor: "var(--border-blue)" }}>
                <CheckIcon />
              </div>
              <div>
                <p className="card-title" style={{ fontSize: 17, marginBottom: ".35rem" }}>Message envoyé !</p>
                <p className="card-desc">Je vous répondrai dès que possible.</p>
              </div>
              <button
                onClick={() => setSent(false)}
                className="btn btn--outline btn--sm"
                style={{ marginTop: ".5rem" }}
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="section-label" style={{ marginBottom: ".85rem" }}>Envoyer un message</p>

              <div className="grid-2" style={{ gap: ".6rem", marginBottom: 0 }}>
                <div>
                  <p className="field__label" style={{ marginBottom: 4 }}>Nom</p>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Votre nom" style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = "var(--blue)"; e.target.style.boxShadow = "0 0 0 3px var(--blue-dim)"; }}
                    onBlur={e => { e.target.style.borderColor = "var(--border-md)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <p className="field__label" style={{ marginBottom: 4 }}>Email</p>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = "var(--blue)"; e.target.style.boxShadow = "0 0 0 3px var(--blue-dim)"; }}
                    onBlur={e => { e.target.style.borderColor = "var(--border-md)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              </div>

              <p className="field__label" style={{ marginBottom: 4 }}>Sujet</p>
              <input required name="subject" value={form.subject} onChange={handleChange} placeholder="Opportunité de collaboration" style={inputStyle}
                onFocus={e => { e.target.style.borderColor = "var(--blue)"; e.target.style.boxShadow = "0 0 0 3px var(--blue-dim)"; }}
                onBlur={e => { e.target.style.borderColor = "var(--border-md)"; e.target.style.boxShadow = "none"; }}
              />

              <p className="field__label" style={{ marginBottom: 4 }}>Message</p>
              <textarea required rows={5} name="message" value={form.message} onChange={handleChange} placeholder="Votre message…"
                style={{ ...inputStyle, resize: "none" }}
                onFocus={e => { e.target.style.borderColor = "var(--blue)"; e.target.style.boxShadow = "0 0 0 3px var(--blue-dim)"; }}
                onBlur={e => { e.target.style.borderColor = "var(--border-md)"; e.target.style.boxShadow = "none"; }}
              />

              <button
                type="submit"
                disabled={loading}
                className="btn btn--primary btn--full"
                style={{ marginTop: ".25rem", opacity: loading ? 0.7 : 1 }}
              >
                {loading
                  ? <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⟳</span>
                  : <><SendIcon /> Envoyer le message</>
                }
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
