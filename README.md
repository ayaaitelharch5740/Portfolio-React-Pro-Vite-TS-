# Portfolio React Pro (Vite + TypeScript)

Portfolio moderne développé avec **React + Vite + TypeScript**, stylé avec **Tailwind CSS + shadcn/ui**, et déployé sur **Vercel**.
<img width="1911" height="894" alt="image" src="https://github.com/user-attachments/assets/10ec3407-e9a2-47fa-9938-0f07e8c2f1f5" />



##  Objectifs du projet

- Initialiser un projet React moderne avec Vite + TypeScript
- Construire une UI professionnelle avec Tailwind + shadcn/ui
- Créer un portfolio multi-pages complet
- Centraliser les données dans `src/data/`
- Ajouter SEO basique + accessibilité
- Déployer automatiquement sur Vercel via GitHub CI/CD

 ##  Structure du projet

```
src/
│
├── app/
│ ├── router.tsx
│ └── RootLayout.tsx
│
├── components/
│ ├── ui/
│ └── CertificationCard.tsx
│
├── data/
│ ├── profile.ts
│ ├── projects.ts
│ ├── education.ts
│ └── certifications.ts
│
├── pages/
│ ├── Home.tsx
│ ├── Projects.tsx
│ ├── Experience.tsx
│ ├── Education.tsx
│ ├── Certifications.tsx
│ └── Contact.tsx
│
├── main.tsx
└── index.css
```

##  Stack technique

-  React 18+
-  TypeScript
-  Vite
-  Tailwind CSS
-  shadcn/ui
-  React Router DOM
- React Helmet Async (SEO)
-  Vercel (déploiement)

## Pages disponibles

 Home → présentation
 Projects → projets réalisés
 Experience → parcours pro
 Education → formations
 Certifications → badges + filtre
 Contact → contact

 ## Fonctionnalités
**UI moderne**  

shadcn/ui components

Responsive design

Dark mode

**Certifications**  

Badges image

Filtre dynamique

Tri par date

Lien vérification

**SEO**  

Meta tags (Helmet)

Titles dynamiques

JSON-LD (bonus)

**Performance** 

Vite ultra rapide

Lazy loading images

Build optimisé


## Scripts disponibles

npm run dev       # mode développement

npm run build     # build production

npm run preview   # preview build

npm run lint      # analyse code

npm run format    # formater code


## Déploiement Vercel

Étapes :

Push sur GitHub

git add .

git commit -m "portfolio ready"

git push origin main

Aller sur 👉 https://vercel.com

Importer ton repository GitHub

Configuration automatique :

Framework: Vite

Build command: npm run build

Output directory: dist

## URL finale

Une fois déployé, ton site sera disponible ici :
https://aya-ait-el-harch.vercel.app/

