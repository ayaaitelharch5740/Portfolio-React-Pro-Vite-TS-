export interface Education {
  degree: string;
  field?: string;
  school: string;
  location?: string;
  start: string;       // format: "YYYY-MM"
  end?: string;        // undefined = "Présent"
  gpa?: string;
  courses?: string[];
  highlights?: string[];
}

export const education: Education[] = [
  {
    degree: "Master",
    field: "Informatique",
    school: "Université de Paris",
    location: "Paris, France",
    start: "2022-09",
    end: "2024-06",
    gpa: "16/20",
    courses: ["Algorithmique", "Base de données", "Cloud Computing", "IA"],
    highlights: [
      "Projet de fin d'études sur l'optimisation des performances web.",
      "Major de promotion 2024.",
    ],
  },
  {
    degree: "Licence",
    field: "Informatique",
    school: "IUT de Paris",
    location: "Paris, France",
    start: "2019-09",
    end: "2022-06",
    courses: ["Programmation", "Réseaux", "Systèmes d'exploitation"],
  },
];