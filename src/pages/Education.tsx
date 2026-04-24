export default function Education() {
  // Données temporaires
  const education = [
    { period: "2020-2023", degree: "Master en Informatique", school: "Université de [Ville]" },
    { period: "2017-2020", degree: "Licence en Informatique", school: "Université de [Ville]" }
  ];

  const fmt = (s?: string) => {
    if(!s) return "Présent"; 
    const [y,m]=s.split("-"); 
    return `${m}/${y}`;
  };

  return (
    <section className="grid gap-6">
      <h2 className="text-3xl font-bold mb-4">Formation</h2>
      <ol className="relative border-s">
        {education.map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="text-sm font-medium text-muted-foreground">{fmt(item.period)}</time>
            <h3 className="text-lg font-semibold">{item.degree}</h3>
            <p className="text-muted-foreground">{item.school}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}