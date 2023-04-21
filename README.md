# Back

## La structure

- src : le code source

- docs : contient la documentation en openapi3

- test : via postman ou automatisé

- RESPONSE.md : vos choix techniques

## Structure du dossier src

Le dossier src a été créé en pensant séparation des responsabilités

- main.ts : point d'entrée de l'app
- config.ts : les variables d'env de l'app
- infrastructure : les dépendances externe de l'app
- contexts : les contexts de l'app

## Executer le projet

3. exécuter la commande : yarn db:generate (générera la configuration prisma)
4. exécuter la commande : yarn db:migrate (exécutera les fichiers de migration prisma dans une bdd sqlite)
5. lancer le projet avec la commande : yarn serve
