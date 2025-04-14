# 🧠 Talks

### 🎯 Objectif de l'application React 

Aider les étudiants à planifier et structurer un talk ou une présentation en groupe.

---

## 🛠️ **Stack technique**
- **React** pour l'interface
- **Zustand** pour la gestion d'état globale (thèmes, liste des talks, timer...)
- **Tailwind CSS** pour un style moderne rapide

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
  - Le nom de(s) présentateur(s)
  - Un objectif (ce que l'audience doit retenir)

> **Zustand** gère la liste des talks, stockée dans `localStorage`.

---

### 2. 📋 Liste des Talks
- Affichage de tous les talks créés
- Possibilité de modifier/supprimer un talk
- Tri par durée ou ordre alphabétique

---

### 3. 🎨 Thème clair/sombre
- Toggle dark/light mode stocké dans Zustand
- Utilisation de Tailwind pour gérer les thèmes

---

## 📅 Organisation du projet sur 2 jours :

### 🕐 **Jour 1** : 
- Mise en place du projet avec Vite ou Create React App
- Structure de l'app (pages, components, Zustand store)
- Création des fonctionnalités : création de talk, liste, suppression, modification

### 🕑 **Jour 2** :
- Finitions + responsive + test
- Présentation finale du projet avec vos `slides`.
- Sauvegarde dans le localStorage (si vous avez le temps)
- Le routing

