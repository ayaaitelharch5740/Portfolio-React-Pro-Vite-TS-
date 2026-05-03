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
    degree: "Licence",
    field: "Informatique",
    school: "Ecole normale superieur de Marrakech ",
    location: "Marrakech, Maroc ",
    start: "2023-09",
    end: "2026-06",
    courses: ["Programmation", "Réseaux", "Systèmes d'exploitation", "Intelligence artificielle "],
  },
];