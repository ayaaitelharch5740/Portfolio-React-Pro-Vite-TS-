import { projects } from "@/data/projects";

export default function Projects() {
  const projects = [
    { title: "Projet 1", summary: "Description du projet 1" },
    { title: "Projet 2", summary: "Description du projet 2" },
  ];

  return (
    <section className="grid gap-6">
      <h2 className="text-3xl font-bold mb-4">Mes projets</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}