# OC Projet n°14 : HRnet

## Objectifs
- Convertir une application JQuery en une application React.
- Développer l'application avec Typecscript.
- Créer et publier un package npm.
- Utiliser le stockage local pour la persistance des données.
- Etablir un rapport de performance à l'aide de Lighthouse.

## Description
HRnet est une application interne permettant de consulter et gérer une base de données d'employés.

## Technologies
Framework :
- React

Langages :
- Typescript
- HTML
- CSS

Outils :
- React Router
- SASS
- Figma

Librairies :
- react-datepicker
- @kgabard/react-data-table

## Projet d'origine
Le projet d'origine en JQuery est fourni par Openclassrooms : [ici](https://github.com/OpenClassrooms-Student-Center/P12_Front-end)

## Maquettes
Les maquettes du site sont disponible : [ici](https://www.figma.com/file/HdRiMG5LMDhYYz7b2eV5GJ/HRnet?t=jrCrwPRjIxWDiOXg-6)

## Démo du site
La démo du site est disponible : [ici](https://kgabard.github.io/OC_P14_HRnet/)

## Création d'un package npm
Le package npm créé se nomme react-data-table et concerne le composant Table qui permet d'afficher un tableau de données sous forme d'une table. (Voir page 'employees')</br>
Lien Github du package : [ici](https://github.com/KGabard/react-data-table)</br>
Lien npm du package : [ici](https://www.npmjs.com/package/@kgabard/react-data-table) 

## Rapport de comparaison Lighthouse
Le rapport de comparaison Lighthouse entre les deux versions est disponible : [ici](https://github.com/KGabard/OC_P14_HRnet/tree/main/documents/Comparaison_des_rapports_Lighthouse.pdf)

## Règles de convention de nommage pour ce projet :

### SCSS :
Pour les noms de variables et de classes : `kebab-case`
```
  ex: .user-page{...}
  ex: $highlight-primary: #ff0101
```

### JS :
Pour les noms de variables et de fonctions : `camelCase`
```
  ex: const caloriesCoef = 0.2
  ex: function convertDuration(duration) {...}
```