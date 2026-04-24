
interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  credentialId?: string;
}

export function CertificationCard({ title, issuer, date, skills, credentialId }: CertificationCardProps) {
  return (
    <article className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-1">{issuer}</p>
      <p className="text-sm text-muted-foreground mb-3">{date}</p>
      
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
            {skill}
          </span>
        ))}
      </div>
      
      {credentialId && (
        <p className="text-xs text-muted-foreground mt-3">
          ID: {credentialId}
        </p>
      )}
    </article>
  );
}