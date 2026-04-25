export interface Social {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  socials: Social[];
}

export const profile: Profile = {
  name: "Votre Nom",
  title: "Développeur Full Stack",
  email: "votre@email.com",
  location: "Paris, France",
  bio: "Passionné par le développement web et les nouvelles technologies.",
  socials: [
    { label: "GitHub", href: "https://github.com/votre-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/votre-username" },
  ],
};