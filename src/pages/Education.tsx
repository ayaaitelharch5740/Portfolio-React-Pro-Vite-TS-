import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";

function fmt(s?: string) {
  if (!s) return "Pr\u00e9sent";
  const [y, m] = s.split("-");
  return new Date(+y, +m - 1).toLocaleDateString("fr-FR", {
    month: "short",
    year: "numeric",
  });
}

export default function EducationPage() {
  return (
    <>
      <Helmet>
        <title>Formation {"\u2014"} Portfolio</title>
      </Helmet>

      <section className="space-y-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold tracking-tight">Formation</h1>
          <p className="text-muted-foreground mt-1">Mon parcours acad\u00e9mique</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-8">
            {education.map((e, idx) => (
              <motion.div
                key={e.school + e.start}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="relative pl-12"
              >
                <div className="absolute left-2 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <GraduationCap size={10} className="text-primary" />
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                    <div>
                      <h2 className="font-semibold text-lg">
                        {e.degree}
                        {e.field && (
                          <span className="text-muted-foreground font-normal"> {"\u2014"} {e.field}</span>
                        )}
                      </h2>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        {e.school}
                        {e.location && " \u00b7 " + e.location}
                      </p>
                    </div>

                    <div className="text-right space-y-1">
                      <p className="text-xs text-muted-foreground">
                        {fmt(e.start)} {"\u2014"} {fmt(e.end)}
                      </p>
                      {e.gpa && (
                        <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          <Award size={10} />
                          {e.gpa}
                        </span>
                      )}
                    </div>
                  </div>

                  {e.courses && e.courses.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-2">
                        <BookOpen size={12} />
                        Cours principaux
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {e.courses.map((c) => (
                          <span
                            key={c}
                            className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-lg"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {e.highlights && e.highlights.length > 0 && (
                    <div className="pt-4 border-t border-border space-y-1.5">
                      {e.highlights.map((h) => (
                        <p key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5 shrink-0">{"✦"}</span>
                          {h}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
