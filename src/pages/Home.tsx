export default function Home() {
  return (
    <section className="grid gap-6 md:grid-cols-2 items-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Bonjour, je suis [Votre Nom]</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Développeur Full Stack passionné par la création d'applications web modernes.
        </p>
        <div className="flex gap-4">
          <a href="/projects" className="bg-primary text-primary-foreground px-6 py-2 rounded-md">
            Voir mes projets
          </a>
          <a href="/contact" className="border border-input px-6 py-2 rounded-md">
            Me contacter
          </a>
        </div>
      </div>
      <div className="bg-muted p-8 rounded-lg text-center">
        <p className="text-muted-foreground">[Image ou illustration ici]</p>
      </div>
    </section>
  );
}