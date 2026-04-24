import { CertificationCard } from "@/components/CertificationCard";

export default function Certifications() {
  // Données temporaires
  const certifications = [
    {
      title: "Certification React",
      issuer: "Meta",
      date: "2024",
      skills: ["React", "Hooks", "Router"],
      credentialId: "12345"
    }
  ];

  return (
    <section className="grid gap-6">
      <h2 className="text-3xl font-bold mb-4">Certifications</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
}