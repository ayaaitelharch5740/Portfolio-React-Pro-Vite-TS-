// src/data/profile.ts

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
  // ── Champs ajoutés pour la photo ──
  photo?: string;
  photoAlt?: string;
  photoBadge?: { label: string; sublabel: string };
}

export const profile: Profile = {
  name: "AYA AIT EL HARCH",
  title: "Étudiante en Licence Informatique — ENS Marrakech",
  email: "ayaaitelharch3@gmail.com",
  location: "Marrakech, Maroc",
  bio: "Passionnée par le développement logiciel et les technologies web, je cherche un stage PFE pour mettre en pratique mes compétences.",
  socials: [
    { label: "GitHub",   href: "https://github.com/ayaaitelharch5740" },
    { label: "LinkedIn", href: "https://ma.linkedin.com/in/ayaaitelharch" },
  ],

  
  photo:      "/MOI.jpeg",
  photoAlt:   "Photo professionnelle de AYA AIT EL HARCH",
 }
;