# Portfolio de Yacine Salah

Portfolio Next.js / React / TypeScript, conçu autour du corail `#fd5a4f`, d’un fond anthracite et d’un monogramme YS vectoriel.

## Démarrer

Node.js 24 et npm sont nécessaires.

```sh
npm ci
npm run dev
```

Ouvrir http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Sur un clone neuf, lancer `npm run build` avant le premier `typecheck` pour générer les types Next.js.

## Contenu et identité

- `src/app/components/sections/Hero.tsx` : accueil, expertise, projet, parcours et ressources.
- `src/app/components/sections/PersonalProject.tsx` : présentation et lien vers Why the Blockchain, partagés entre l’accueil et la rubrique Projets.
- `src/app/components/sections/Experience.tsx` : expériences et dates du parcours original.
- `src/app/components/sections/CaseStudies.tsx` : étude de cas et indicateurs du site original.
- `src/app/components/sections/Skills.tsx` : compétences et détails dépliables.
- `src/app/data/portfolio.ts` : données de formation.
- `src/app/components/sections/TechWatch.tsx` : sources officielles de veille, filtrables par thème.
- `src/app/globals.css` : mise en page responsive et variables graphiques.
- `public/brand/ys-mark.svg` : logo original YS ; utilisé aussi comme favicon.
- `public/brand/apple-touch-icon.png` : version PNG du logo.

Les données professionnelles et les chiffres de l’étude de cas proviennent du dépôt existant ; ils n’ont pas été actualisés ou vérifiés auprès de Yacine pendant cette refonte. La veille est une sélection de liens vers les sources, sans flux automatique ni faux articles datés.

La localisation a été mise à jour à Bondoufle à la demande de Yacine. Son expérience Thales et le projet full Ansible reposent sur ses précisions : ingénieur SysOps, gestion de l’infrastructure des contrôleurs aériens, développement dans une équipe de quatre personnes. Aucune date n’a été ajoutée pour Thales, faute d’information. Le lien Why the Blockchain pointe vers `https://whytheblockchain.com/`, vérifié dans le navigateur.

`src/app/data/thales.ts` centralise le contenu Thales. Le mini-lab dans `AnsibleDemo.tsx` est une simulation pédagogique locale, distincte de l’infrastructure réelle : lancement, second passage sans changement et réinitialisation. Il respecte la préférence de réduction des animations. Les études de cas sont accessibles directement via `#case-studies/thales` et `#case-studies/crm`.

Les six rubriques utilisent des fragments d’URL (`#home`, `#skills`, `#experience`, `#case-studies`, `#education`, `#tech-watch`) et prennent en charge les liens directs et l’historique du navigateur. Le bouton de contact ouvre la messagerie du visiteur.

## Motion design

Le mouvement reste ponctuel : portrait en perspective avec reflet au pointeur, profondeur légère sur les cartes, parallaxe limitée au portrait, apparitions uniques au scroll et transitions entre rubriques. Les durées et ressorts sont centralisés dans `src/app/lib/motion.ts` ; les composants réutilisables se trouvent dans `src/app/components/motion/`.

Motion utilise `LazyMotion` avec les seules fonctionnalités nécessaires. Aucun moteur WebGL, curseur de remplacement, scroll forcé ou animation décorative en boucle. Les suivis du pointeur utilisent des valeurs animées sans rendu React à chaque image. Ils sont désactivés sur les écrans tactiles et les appareils à faible nombre de cœurs.

Le contenu est visible dans le HTML initial. Les éléments révélés au scroll deviennent immédiatement visibles s’ils reçoivent le focus au clavier. `prefers-reduced-motion` désactive les mouvements, y compris lors d’un changement de préférence pendant la visite. Le bouton en pied de page permet de mettre les animations en pause ; ce choix est mémorisé localement et la préférence système reste prioritaire.

## Déploiement

Conserver le projet GitHub/Vercel existant, le framework Next.js, la racine du dépôt et Node.js 24. La commande de build est `npm run build` et la sortie reste celle de Next.js. Aucun secret ni variable d’environnement n’est nécessaire.

La branche de travail est `design/coral-portfolio`, basée sur le commit `04f04718c97f42ad9c916ea94ed1ca779c87e617` de `Yacine-salah/portfolio`. Une publication nécessite un accès au dépôt GitHub et au projet Vercel correspondant.
