# MES CHOIX TECHNIQUES

Nous utilisons pour ce gestionnaire de tâches une architecture "clean architecture" vue en cours. 
Nous travaillons avec le langage Typescript et les bibliothèques : Prisma et Express. Notre base de données utilise SQLITE.

Dans cette API, nous pouvons créer des tâches (TASK). Nous pouvons ensuite assigner des tag (TAG). Une TASK peut vivre sans TAG ou avec 1 à plusieurs TAG. Un TAG ne peut pas exister sans être assigné à une TASK.

Nous pouvons créer une TASK. Nous pouvons afficher l'ensemble des TASK, une TASK particulière via son id. Nous pouvons modifier une tâche, ou uniquement son statut (complété ou non). Nous pouvons supprimer une tâche.
Nous pouvons trier les tâches par ordre de priorité (croissant ou décroissant). Nous pouvons paginer les tâches par page de 10.

Nous pouvons créer un TAG et nous pouvons afficher l'ensemble des TAG.