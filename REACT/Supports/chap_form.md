# **Introduction aux Formulaires en React**

Les formulaires sont un élément fondamental dans la plupart des applications web interactives. Dans React, vous devez gérer la valeur des champs de formulaire, la soumission du formulaire, et parfois la validation de l’entrée de l’utilisateur. Dans ce cours, nous allons couvrir différentes techniques de gestion de formulaires en React, à savoir les formulaires contrôlés, non contrôlés, et avec validation.

---

### **Formulaire Contrôlé**

Dans un formulaire contrôlé, React gère la valeur de chaque champ du formulaire via l’état local. Cela permet de modifier dynamiquement la valeur des champs et de réagir à toute modification.

#### **Exemple 1 : Formulaire Contrôlé**

```html
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <title>Formulaire Contrôlé</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        function FormulaireControle() {
            const [nom, setNom] = React.useState('');
            const [email, setEmail] = React.useState('');

            const handleNomChange = (event) => {
                setNom(event.target.value);
            };

            const handleEmailChange = (event) => {
                setEmail(event.target.value);
            };

            const handleSubmit = (event) => {
                event.preventDefault();
                alert(`Nom: ${nom}, Email: ${email}`);
            };

            return (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom:
                        <input
                            type="text"
                            value={nom}
                            onChange={handleNomChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <button type="submit">Soumettre</button>
                </form>
            );
        }

        ReactDOM.createRoot(document.getElementById('root')).render(<FormulaireControle />);
    </script>
</body>

</html>
```

Dans cet exemple, les valeurs des champs sont contrôlées par l'état React. Chaque fois que l'utilisateur tape quelque chose dans un champ, la fonction `handleNomChange` ou `handleEmailChange` est appelée pour mettre à jour l'état.

---

### **Formulaire Non Contrôlé**

Un formulaire non contrôlé utilise des références (refs) pour accéder directement aux éléments du DOM sans passer par l’état React. Cela peut être utile dans des cas où vous n’avez pas besoin de contrôler l’état des champs de manière dynamique.

#### **Exemple 2 : Formulaire Non Contrôlé**

```html
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <title>Formulaire Non Contrôlé</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        function FormulaireNonControle() {
            const nomRef = React.useRef();
            const emailRef = React.useRef();

            const handleSubmit = (event) => {
                event.preventDefault();
                alert(`Nom: ${nomRef.current.value}, Email: ${emailRef.current.value}`);
            };

            return (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom:
                        <input type="text" ref={nomRef} />
                    </label>
                    <label>
                        Email:
                        <input type="email" ref={emailRef} />
                    </label>
                    <button type="submit">Soumettre</button>
                </form>
            );
        }

        ReactDOM.createRoot(document.getElementById('root')).render(<FormulaireNonControle />);
    </script>
</body>

</html>
```

Ici, les références `nomRef` et `emailRef` sont utilisées pour accéder directement aux valeurs des champs de saisie sans gérer leur état via React.

---

### **Validation de Formulaire**

La validation de formulaire est cruciale pour assurer que les données saisies par l’utilisateur sont correctes avant leur soumission. Nous allons voir comment valider un champ d'email pour vérifier qu'il contient un `@`.

#### **Exemple 3 : Validation de Formulaire**

```html
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <title>Validation de Formulaire</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        function FormulaireAvecValidation() {
            const [email, setEmail] = React.useState('');
            const [erreur, setErreur] = React.useState('');

            const handleEmailChange = (event) => {
                const { value } = event.target;
                setEmail(value);

                // Validation simple
                if (!value.includes('@')) {
                    setErreur('L\'email doit contenir "@"');
                } else {
                    setErreur('');
                }
            };

            const handleSubmit = (event) => {
                event.preventDefault();
                if (!erreur) {
                    alert(`Email validé: ${email}`);
                } else {
                    alert('Formulaire invalide');
                }
            };

            return (
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
                    <button type="submit" disabled={!!erreur}>
                        Soumettre
                    </button>
                </form>
            );
        }

        ReactDOM.createRoot(document.getElementById('root')).render(<FormulaireAvecValidation />);
    </script>
</body>

</html>
```

Dans cet exemple, nous validons que l'email contient bien un `@` avant de permettre la soumission. Si la validation échoue, un message d’erreur est affiché et le bouton de soumission est désactivé.

---

### **Gestion des Erreurs dans un Formulaire**

Lorsque vous gérez des formulaires complexes, vous aurez souvent besoin de gérer plusieurs erreurs. L'utilisation d'un objet d'erreurs dans l'état React permet de centraliser la gestion des erreurs et d'afficher les messages appropriés pour chaque champ.

#### **Exemple 4 : Gestion des Erreurs**

```html
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <title>Formulaire avec Erreurs</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        function FormulaireAvecErreurs() {
            const [nom, setNom] = React.useState('');
            const [email, setEmail] = React.useState('');
            const [erreurs, setErreurs] = React.useState({});

            const validerFormulaire = () => {
                const nouvellesErreurs = {};
                if (!nom) {
                    nouvellesErreurs.nom = 'Le nom est requis';
                }
                if (!email.includes('@')) {
                    nouvellesErreurs.email = 'L\'email doit contenir "@"';
                }
                setErreurs(nouvellesErreurs);
                return Object.keys(nouvellesErreurs).length === 0;
            };

            const handleSubmit = (event) => {
                event.preventDefault();
                if (validerFormulaire()) {
                    alert(`Nom: ${nom}, Email: ${email}`);
                } else {
                    alert('Veuillez corriger les erreurs avant de soumettre.');
                }
            };

            return (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom:
                        <input
                            type="text"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                        {erreurs.nom && <p style={{ color: 'red' }}>{erreurs.nom}</p>}
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {erreurs.email && <p style={{ color: 'red' }}>{erreurs.email}</p>}
                    </label>
                    <button type="submit">Soumettre</button>
                </form>
            );
        }

        ReactDOM.createRoot(document.getElementById('root')).render(<FormulaireAvecErreurs />);
    </script>
</body>

</html>
```

Cet exemple montre comment centraliser la gestion des erreurs pour plusieurs champs et afficher des messages d'erreur spécifiques lorsque les données du formulaire ne sont pas valides.

---

### **Exercice : Formulaire d'Inscription avec Validation et Gestion des Erreurs**

Créez un formulaire d'inscription avec les champs suivants : 
- Nom complet
- Email
- Mot de passe
- Confirmation du mot de passe
- Date de naissance

1. **Formulaire Contrôlé** :
    - Utilisez un formulaire contrôlé pour les champs `Nom complet` et `Email` (avec gestion de l'état via `useState`).
    - Vérifiez que le `Nom complet` ait au moins 5 caractères.
    - Validez que l'`Email` contienne un `@`.

2. **Formulaire Non Contrôlé** :
    - Utilisez un formulaire non contrôlé pour les champs `Mot de passe` et `Confirmation du mot de passe` en utilisant `useRef`.
    - Vérifiez que le `Mot de passe` et la `Confirmation du mot de passe` correspondent.

3. **Validation de la Date de Naissance** :
    - Vérifiez que l'utilisateur a au moins 18 ans en utilisant la `Date de naissance` (assurez-vous que l'âge est calculé à partir de la date d'aujourd'hui).

4. **Gestion des Erreurs** :
    - Utilisez un objet d'erreurs pour centraliser les erreurs de validation.
    - Affichez des messages d'erreur sous chaque champ qui échoue à la validation.
    - Ne permettez pas la soumission du formulaire tant que toutes les validations ne sont pas passées.

5. **Soumission du Formulaire** :
    - Si toutes les validations sont réussies, affichez un message de succès avec les informations saisies (sauf le mot de passe).
    - Sinon, affichez les erreurs spécifiques à chaque champ.
