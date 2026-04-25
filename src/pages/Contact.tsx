import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, CircleCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";

const inputClass =
  "w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Helmet>
        <title>Contact {"\u2014"} Portfolio</title>
      </Helmet>

      <section className="space-y-10 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
          <p className="text-muted-foreground mt-1">Discutons de votre projet ou opportunit\u00e9</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Coordonnees */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
              <h2 className="font-semibold">Coordonn\u00e9es</h2>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a
                    href={"mailto:" + profile.email}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Localisation</p>
                  <p className="text-sm font-medium">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <h2 className="font-semibold">R\u00e9seaux</h2>
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    {s.label === "GitHub" && (
                      <Github size={15} className="group-hover:text-primary transition-colors" />
                    )}
                    {s.label === "LinkedIn" && (
                      <Linkedin size={15} className="group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <span className="text-sm font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-2xl p-6">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CircleCheck size={32} className="text-primary" />
                    </div>
                  <div>
                    <h3 className="font-semibold text-lg">Message envoy\u00e9 !</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Je vous r\u00e9pondrai d\u00e8s que possible.
                    </p>
                  </div>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm text-primary hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted-foreground">Nom</label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted-foreground">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="jean@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">Sujet</label>
                    <input
                      required
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Opportunit\u00e9 de collaboration"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">Message</label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass + " resize-none"}
                      placeholder="Votre message\u2026"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-all disabled:opacity-60 shadow-lg shadow-primary/20"
                  >
                    {loading ? (
                      <span className="animate-spin inline-block">{"⟳"}</span>
                    ) : (
                      <>
                        <Send size={15} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
