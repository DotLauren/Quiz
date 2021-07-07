# Quiz App

## Parcours utilisateur

- À l'ouverture de l'app, l'utilisateur doit entrer son nom
- L'utilisateur est redirigé vers l'écran d'accueil où il a le choix entre créer un quiz et faire un quiz

  - L'utilisateur appuie sur "créer un quiz"

    - Il rentre un titre pour le quiz
    - Sur l'écran suivant, on accède à un formulaire avec un champ texte pour la question et 4 champs texte pour les réponses accompagnés de radio buttons pour sélectionner la bonne réponse
    - L'utilisateur répète le processus 5 fois (5 questions par quiz)
    - Chaque quiz "sauvegardé" contient également le nom de l'auteur
    - L'utilisateur est alerté que son quiz a été posté avec succès et est redirigé vers l'accueil

  - L'utilisateur appuie sur "Faire un quiz"
    - L'utilisateur devra répondre à une série de 5 questions
    - À chaque fois qu'il répond à une question, il est informé si il a répondu correctement ou pas
    - Tout au long du quiz le score est affiché sur l'écran
    - Un bouton pour revenir à l'accueil et réinitialiser le score est toujours visible à l'écran
    - Quand il a fini le quiz, l'utilisateur est redirigé vers un écran qui affiche son score avec un bouton qui le mène à l'accueil

## Défi technique

- Utilisation de Google Firestore pour stocker les données
- Gérer les différents états avec des Context quand nécessaire
- Gérer les états de chargement
- Utiliser des hooks quand c'est possible (appels API, utilisation de contextes, etc.)
- Utiliser un thème (bonus: implémenter un dark theme)
