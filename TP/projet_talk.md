# 🧠 Talks

### 🎯 Objectif de l'application React 

Aider les étudiants à planifier et structurer un talk ou une présentation en groupe.

---

## 🛠️ **Stacks techniques**
- **React** pour l'interface
- **Zustand** pour la gestion d'état globale (thèmes, liste des talks)
- **Tailwind CSS** ou **Bootstrap CSS**

---

- `bonus` **Zustand** avec le middleware `combine`
- `bonus` **LocalStorage** pour persister les données (pas de BDD) 
- `bonus` **routing** avec Tanstack router

---

## 📦 Features 

### 1. 🎤 Création de "Talks"
- Créez un formulaire pour définir les éléments du talk suivants :
  - Le titre
  - Le sujet
  - La durée estimée en minutes
  - Le nom de présentatrice/présentateur
  - Un objectif (ce que l'audience doit retenir)

> **Zustand** gère la liste des talks, stockée dans `localStorage` en option si vous avez le temps.

---

### 2. 📋 Liste des Talks
- Affichage de tous les talks créés.
- Possibilité de msupprimer un talk et en option de le modifier.
- Tri par durée ou ordre alphabétique.
- Les talks passés avec un design spécifique pour signifier qu'ils ne sont plus disponibles.


---

### 3. 🎨 Thème clair/sombre en option si vous avez le temps
- Toggle dark/light mode stocké dans Zustand
- Utilisation de Tailwind pour gérer les thèmes

Remarque vous pouvez soit utiliser un ctx `context API` ou `Zustand`

---

## 📅 Organisation du projet sur 2 jours :

### 🕐 **Jour 1** : 
- Mise en place du projet avec Vite
- Structure de l'app (pages, components, Zustand store, services, et routing si vous avez le temps)
- Création des fonctionnalités : création de talk, liste, suppression, modification en option.

### 🕑 **Jour 2** :
- Finitions + responsive
- Préparation finale du projet avec vos `slides`.
- Sauvegarde dans le localStorage en option.
- Le routing en option.

