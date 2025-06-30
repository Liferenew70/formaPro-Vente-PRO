import { updateCartCount, showToast } from './helpers.js';

// Configuration des produits avec le nouveau système de catégories
export const PRODUCTS = {
    capcut: {
        id: 'capcut',
        title: "Formation CapCut Pro mobile",
        price: 18000,
        prixPromo: 7500,
        fees: 1000,
        image: "assets/images/formations/capcut.jpeg",
        description: "Maîtrisez le montage vidéo professionnel sur mobile avec notre formation complète CapCut.",
        fullDescription: `
            <h3>Description complète :</h3>
            <p>Cette formation intensive vous transformera en expert du montage vidéo sur mobile avec CapCut.</p>
            <h3>Contenu de la formation :</h3>
            <ul>
                <li>Interface et fonctionnalités avancées</li>
                <li>Techniques de montage professionnel</li>
                <li>Montage vidéo avec IA</li>
                <li>Effets spéciaux et transitions</li>
                <li>Optimisation pour les réseaux sociaux</li>
            </ul>
            <p><strong>Durée :</strong> 6h de formation pratique</p>
            <p><strong>Niveau :</strong> Débutant à Intermédiaire</p>
        `,
        duration: "6h de formation",
        instructor: "Jadsmith, Monteur professionnel",
        level: "Débutant à professionnel",
        categories: ["infographie", "infographie-android"], // Multiple categories
        isFeatured: true,
        popularity: 5
    },
    iaprompt: {
        id: 'iaprompt',
        title: "Maîtrise des Prompts IA",
        price: 12000,
        prixPromo: 4000,
        fees: 0,
        image: "assets/images/formations/iaprompt.jpeg",
        description: "Découvrez comment communiquer efficacement avec les intelligences artificielles.",
        fullDescription: `
            <h3>Description complète :</h3>
            <p>Formation complète pour maîtriser l'art du prompt engineering avec les IA modernes.</p>
            <h3>Vous apprendrez :</h3>
            <ul>
                <li>Les principes fondamentaux des prompts</li>
                <li>Techniques avancées pour des résultats précis</li>
                <li>Création de site avec IA</li>
                <li>Création de logo avec IA</li>
                <li>Faire de la musique avec IA</li>
                <li>Ecrire des scripts et générer des vidéos réaliste avec IA</li>
                <li>Optimisation des réponses des IA</li>
                <li>Apprendre à pirater avec IA (l'IA répond à toutes vos questions, sans contraite)</li>
                <li>BONUS: un pdf de plus de 15000 prompts</li>
            </ul>
            <p><strong>Durée :</strong> 8h de formation intensive</p>
            <p><strong>Niveau :</strong> Tous niveaux</p>
        `,
        duration: "8h de formation",
        instructor: "Marie Martin, Experte en IA",
        level: "Tous niveaux",
        categories: ["hacking", "pc-hack"], // Multiple categories
        isFeatured: true,
        popularity: 1
    },
    office: {
        id: 'office',
        title: "Pack Microsoft Office",
        price: 25000,
        prixPromo: 7000,
        fees: 500,
        image: "assets/images/formations/officeMicro.png",
        description: "Formation complète sur Word, Excel et PowerPoint.",
        fullDescription: `
            <h3>Description complète :</h3>
            <p>Maîtrisez la suite Office pour booster votre productivité au quotidien.</p>
            <h3>Modules inclus :</h3>
            <ul>
                <li><strong>Word :</strong> Rédaction professionnelle</li>
                <li><strong>Excel :</strong> Tableaux et formules avancées</li>
                <li><strong>PowerPoint :</strong> Création de présentations percutantes</li>
                <li><strong>Bonus : </strong> En plus de la formation, nous vous offrons un pack office pro de votre <strong>choix</strong></li>
            </ul>
            <p><strong>Durée :</strong> 12h de formation pratique</p>
            <p><strong>Niveau :</strong> Débutant</p>
        `,
        duration: "10h de formation",
        instructor: "Pierre Durand, Formateur certifié",
        level: "Intermédiare",
        categories: ["application-mod", "apk-mod-pc"], // Multiple categories
        isFeatured: true,
        popularity: 4
    },
    cerveau: {
        id: 'cerveau',
        title: "Comprendre le cerveau",
        price: 17000,
        prixPromo: 3500,
        fees: 0,
        image: "assets/images/formations/comprendreLeCerveau.jpg",
        description: "On ne vous apprend pas comment rétenir ou du moins comment fonctionne le cerveau",
        fullDescription: `
            <h3>Description complète :</h3>
            <p>Avec cette formation, vous sauriez comment fonctionne le cerveau et comprendre les méthodes pour apprendre à retenir éfficacemmet</p>
            <h3>Modules inclus :</h3>
            <ul>
                <li>La courbe de l'oublie</li>
                <li>L'encodage</li>
                <li>Savoir comment lire un livre rapidement et éfficacemment</li>
                <li>Des technique psychologique pour apprendre à bosser </li>
                <li>La concentration</li>
                <li>Loi de Pareto</li>
                <li>L'activation</li>
                <li>Guide visuel / Champ visuel</li>
                <li>Mémorisation</li>
                <li>Règle de prise de note</li>
                <li>Subvocalisation</li>
                <li>BONUS: des pdf sur la PNL</li>
            </ul>
            <p><strong>Durée :</strong> 10h de formation pratique</p>
            <p><strong>Niveau :</strong> Débutant</p>
        `,
        duration: "6h de formation",
        instructor: "Abdeb Kali, Formateur certifié",
        level: "Intermédiare à Professionnelle",
        categories: ["dev-perso", "bien-etre"], // Multiple categories
        isFeatured: true,
        popularity: 4
    },
    photoshopPro: {
    id: 'photoshopPro',
    title: "Formation Photoshop Pro",
    price: 28000,
    prixPromo: 10000,
    fees: 0,
    image: "assets/images/formations/photoshop.jpg", // Remplacez par la vraie image plus tard
    description: "Devenez un expert en Photoshop et transformez vos idées en créations visuelles impressionnantes.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation complète vous initiera aux bases essentielles de Photoshop, tout en vous plongeant dans des techniques avancées pour réaliser des projets concrets.</p>
        
        <h3>Ce que vous allez apprendre :</h3>
        <ul>
            <li>Les fondamentaux de l'interface Photoshop</li>
            <li>Les outils essentiels pour la retouche d'images</li>
            <li>La théorie des couleurs et son application</li>
            <li>Différents types d'images : .svg, .png, .jpg, .jpeg</li>
            <li>Formats d'affiches : flyers, posters, logos, et plus encore</li>
            <li>Techniques avancées de manipulation d'images</li>
            <li>Création de projets pratiques pour un portfolio impressionnant</li>
            <li>Conseils et astuces pour gagner en efficacité</li>
            <li>BONUS: Un Pdf de plus de 100 tutos vous serez offert</li>
        </ul>
        
        <p><strong>Durée :</strong> 12h de formation intensive</p>
        <p><strong>Niveau :</strong> Débutant à intermédiaire</p>
        <p><strong>Format :</strong> Cours en ligne avec accès illimité aux vidéos</p>
    `,
    duration: "2 semaine",
    instructor: "Marie Dupont, Designer Graphique Certifiée",
    level: "Débutant à Intermédiaire",
    categories: ["infographie", "infographie-pc",], // Multiple categories
    isFeatured: true,
    popularity: 128
    },
    freeSurf: {
    id: 'freeSurf',
    title: "Free Surf",
    price: 10000,
    prixPromo: 3000,
    fees: 0,
    image: "assets/images/formations/Freesurf2.Jpg", // Remplacez par la vraie image plus tard
    description: "Accédez à Internet gratuitement grâce à nos techniques de VPN avancées.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Avec la formation Free Surf, découvrez comment bénéficier d'une connexion Internet gratuite en utilisant des VPN. Apprenez à configurer des vpn en : SlowDNS, SSH, UDP et SNI, et maîtrisez les techniques pour optimiser votre connexion.</p>
        
        <h3>Ce que vous allez apprendre :</h3>
        <ul>
            <li>Configurer SlowDNS pour une connexion rapide et sécurisée</li>
            <li>Utiliser SSH et UDP pour contourner les restrictions Internet</li>
            <li>Personnaliser et configurer des hôtes pour une meilleure connexion</li>
            <li>Bidouiller les APN pour optimiser votre réseau</li>
            <li>Mettre en place des redirections de ports pour une connectivité améliorée</li>
            <li>Stabiliser votre connexion VPN pour une expérience fluide</li>
            <li>BONUS: Conseils pour sécuriser votre navigation en ligne</li>
        </ul>
        
        <p><strong>Durée :</strong> 8h de formation pratique</p>
        <p><strong>Niveau :</strong> Débutant à intermédiaire</p>
        <p><strong>Format :</strong> Cours en ligne avec accès illimité aux vidéos</p>
    `,
    duration: "8h de formation",
    instructor: "Lucas Martin, Expert en Free Surf",
    level: "Débutant à Intermédiaire",
    categories: ["hacking", "dev-perso"], // Multiple categories
    isFeatured: true,
    popularity: 2
    },
    developpementhtmlcss: {
    id: 'developpementhtmlcss',
    title: "Développement en HTML et CSS 🖥✨",
    price: 12000,
    prixPromo: 4000,
    fees: 0,
    image: "assets/images/formations/htmlEtcss.jpg",
    description: "Apprenez à créer des pages web responsives et attrayantes avec HTML5 et CSS3.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation complète vous transformera en développeur web capable de créer des sites modernes et responsives. Maîtrisez les fondamentaux du développement front-end et donnez vie à vos designs.</p>
        
        <h3>Ce que vous allez maîtriser :</h3>
        <ul>
            <li>Structure HTML5 sémantique pour un SEO optimal 🏗</li>
            <li>Styliser avec CSS3 (Flexbox, Grid) comme un pro 🎨</li>
            <li>Intégration de médias et iframes 🎥</li>
            <li>Bonnes pratiques d'accessibilité web ♿</li>
            <li>Responsive design pour tous les appareils 📱💻</li>
            <li>Animations et transitions CSS pour des sites dynamiques ✨</li>
            <li>Optimisation des performances ⚡</li>
            <li>BONUS: Template professionnel HTML/CSS inclus</li>
            <li><strong>BONUS PRO : </strong> Création de site avec IA et 5 pdf pour vous booster</li>
            <li> <p style="color:green;" >Pour être vraiment complet en html et css , je vous conseil de voir notre formation sur le framework <strong> bootstrap 5⚠️</strong><p></li>
        </ul>
        <p><strong>Durée :</strong> 1 Semaine de formation intensive</p>
        <p><strong>Prérequis :</strong> <span style="color:red;">Allez voir notre formation sur </span> <strong>Initiation à l'informatique</strong></p>
    `,
    duration: "1 Semaine",
    instructor: "Formateur web expert 🌐",
    level: "Débutant",
    categories: ["dev-web", "front-end", "dev-mobile"],
    isFeatured: true,
    popularity: 4
},

bootstrap5formation: {
    id: 'bootstrap5formation',
    title: "Maîtrise complète de Bootstrap 5 🎨🚀",
    price: 25000,
    prixPromo: 6000,
    fees: 0,
    image: "assets/images/formations/Boostrap5.jpg",
    description: "Devenez un expert du framework CSS le plus populaire et créez des sites modernes et responsives en un temps record.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation intensive vous transformera en développeur front-end accompli avec Bootstrap 5, vous permettant de créer des interfaces professionnelles sans effort grâce aux composants pré-construits et au système de grille révolutionnaire.</p>
        
        <h3>Ce que vous allez maîtriser :</h3>
        <ul>
            <li>Installation et configuration de Bootstrap 5 (npm, CDN)</li>
            <li>Système de grille avancé pour des layouts parfaits</li>
            <li>Composants clés : navbar, carousels, cards, modals</li>
            <li>Utilisation des utilitaires CSS pour un style rapide</li>
            <li>Personnalisation avec SASS et variables CSS</li>
            <li>Création de thèmes personnalisés</li>
            <li>Intégration avec JavaScript pour l'interactivité</li>
            <li>Techniques avancées d'optimisation</li>
            <li>BONUS : PDF de bootstrap 5</li>
        </ul>
        
        <h3>Projets pratiques :</h3>
        <ul>
            <li>Site vitrine responsive</li>
            <li>Tableau de bord admin moderne</li>
            <li>Portfolio élégant</li>
            <li>Landing page convertisseuse</li>
        </ul>
        <p style="color:violet;"><strong>Maintenant que vous maîtrisez le font end, il est temps de passer au backend avec javascript, python, PHP , etc</strong></p><br>
        
        <p><strong>Durée :</strong> 1 Semaine 3 jours de formation intensive</p>
        <p><strong>Niveau :</strong> Débutant à intermédiaire</p>
        <p><strong>Prérequis :</strong> Bases de HTML/CSS</p>
    `,
    duration: "8h",
    instructor: "Expert Front-end",
    level: "Débutant à intermédiaire",
    categories: ["dev-web", "front-end", "dev-mobile"],
    isFeatured: true,
    popularity: 5
},
javascript: {
    id: 'javascript',
    title: "JavaScript Modernes 🌐✨",
    price: 25000,
    prixPromo: 7500,
    fees: 0,
    image: "assets/images/formations/javascript.webp",
    description: "Devenez un expert en JavaScript ES6+ avec les bonnes pratiques et fonctionnalités modernes.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Formation complète pour dominer JavaScript des bases aux concepts avancés. Inclus les dernières features ES2023.</p>
        
        <h3>Programme détaillé :</h3>
        <ul>
            <li>Fondamentaux JS (variables, fonctions, portée) 📦</li>
            <li>Manipulation du DOM comme un pro 🖱️</li>
            <li>ES6+ : Arrow functions, destructuring, modules 🎯</li>
            <li>Asynchrone (Promises, async/await) ⏳</li>
            <li>Programmation fonctionnelle en JS ♻️</li>
            <li>Création d'APIs avec Fetch/Axios 🌍</li>
            <li>Webpack et outils modernes 🛠️</li>
            <li>Projet final : Application complète 🏆</li>
        </ul>
        <p><strong>Durée :</strong> 2 Semaines de cours intensifs</p>
        <p><strong>Prérequis :</strong> HTML 5 , CSS 3 et (bootstrap) et enfin Algorithme</p>
        <p><strong>Conseil :</strong> Apprenez le framework de javascript : <abbr title="Allez voir notre formation sur react"><strong>REACT</strong></abbr></p>
    `,
    duration: "2 Semaine",
    instructor: "Expert JavaScript 👨‍💻",
    level: "Débutant à avancé",
    categories: ["dev-web", "font-end", "backend", "full-stack", "dev-mobile"],
    isFeatured: true,
    popularity: 5
},

initiationinformatique: {
    id: 'initiationinformatique',
    title: "Initiation à l'informatique 💻⌨",
    price: 15000,
    prixPromo: 7500,
    fees: 0,
    image: "assets/images/formations/informatiqueInitiation.jpg",
    description: "Découvrez l'univers de l'informatique, de la dactylographie à l'interface Windows.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation complète vous transformera de parfait débutant en utilisateur autonome et efficace des outils informatiques essentiels.</p>
        
        <h3>Ce que vous verrez :</h3>
        <ul>
            <li>Dactylographie et raccourcis clavier ⌨ (gagner en vitesse)</li>
            <li>Word, Excel, PowerPoint 📂 (bases indispensables)</li>
            <li>Google Dorking, Interface Windows 🔍 (recherche avancée)</li>
            <li>Gestion des fichiers et dossiers</li>
            <li>Sécurité informatique de base</li>
            <li>Résolution des problèmes courants</li>
            <li>BONUS: Liste des raccourcis indispensables</li>
            <li>BONUS PRO: PDF de google dorking</li>
        </ul>
        <p><strong>Durée :</strong> 2 semaines d'introduction</p>
        <p><strong>Niveau :</strong> Débutant</p>
    `,
    duration: "2 Semaines",
    instructor: "Formateur bureautique",
    level: "Débutant",
    categories: ["dev-perso", "dev-web", "font-end", "full-stack"],
    isFeatured: true,
    popularity: 5
},

react: {
    id: 'react',
    title: "Développement React Professionnel ⚛️🔥",
    price: 35000,
    prixPromo: 8000,
    fees: 0,
    image: "assets/images/formations/react.png",
    description: "Apprenez à créer des applications web modernes avec React et son écosystème.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Formation complète sur React incluant Hooks, Context API, Redux et les bonnes pratiques professionnelles.</p>
        
        <h3>Programme détaillé :</h3>
        <ul>
            <li>Fondamentaux React (JSX, composants, props) 🧩</li>
            <li>Hooks (useState, useEffect, custom hooks) 🎣</li>
            <li>Routing avec React Router 🗺️</li>
            <li>State management (Context API, Redux Toolkit) 🏪</li>
            <li>Styling moderne (CSS Modules, Styled Components) 💅</li>
            <li>Tests avec Jest et Testing Library 🧪</li>
            <li>Performance optimization ⚡</li>
            <li>Projet final : Application full-stack �</li>
        </ul>
        <p><strong>Durée :</strong> 2 Semaines de cours intensifs</p>
        <p><strong>Prérequis :</strong>HTML 5 , CSS 3 et javascript</p>
        <p><strong>Conseil :</strong>je vous conseil de poursuivre avec <abbr title="aller voir notre formation node.js"><strong> NODE.JS </strong></abbr></p>
    `,
    duration: "2 Semaines",
    instructor: "Développeur React Senior 🧑‍🚀",
    level: "Intermédiaire à avancé",
    categories: ["dev-web", "font-end", "backend", "full-stack", "dev-mobile"],
    isFeatured: true,
    popularity: 5
},

nodejs: {
    id: 'nodejs',
    title: "Backend avec Node.js et Express 🖥️🚀",
    price: 32000,
    prixPromo: 10000,
    fees: 0,
    image: "assets/images/formations/nodeJs.jpg",
    description: "Créez des APIs robustes et des serveurs performants avec Node.js.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Maîtrisez le développement backend moderne avec Node.js, Express et MongoDB.</p>
        
        <h3>Programme détaillé :</h3>
        <ul>
            <li>Fondamentaux Node.js (modules, event loop) 🔄</li>
            <li>Création d'API REST avec Express 🏗️</li>
            <li>Base de données (MongoDB, Mongoose) 🗄️</li>
            <li>Authentification (JWT, OAuth) 🔐</li>
            <li>WebSockets avec Socket.io 💬</li>
            <li>Tests avec Mocha/Chai ✅</li>
            <li>Déploiement sur cloud (AWS/Heroku) ☁️</li>
            <li>Performance et sécurité 🔒</li>
        </ul>
        <p><strong>Durée :</strong> 2 Semaines de cours intensifs</p>
    `,
    duration: "2 Semaines",
    instructor: "Architecte Backend 👨‍💻",
    level: "Intermédiaire à avancé",
    categories: ["dev-web", "backend", "full-stack", "dev-mobile"],
    isFeatured: true,
    popularity: 4
},

python: {
    id: 'python',
    title: "Python Complet : Des Bases au Data Science 🐍📊",
    price: 28000,
    prixPromo: 7000,
    fees: 0,
    image: "assets/images/formations/python.jpg",
    description: "Formation complète Python incluant programmation orientée objet et introduction au data science.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Devenez expert Python avec cette formation allant des bases aux librairies scientifiques modernes.</p>
        
        <h3>Programme détaillé :</h3>
        <ul>
            <li>Syntaxe Python (variables, boucles, fonctions) 🐍</li>
            <li>Structures de données avancées 🏗️</li>
            <li>Programmation orientée objet en Python 🧱</li>
            <li>Gestion des erreurs et fichiers 📂</li>
            <li>Modules et packages Python 📦</li>
            <li>Introduction à NumPy et Pandas 📊</li>
            <li>Automatisation et scripts utiles 🤖</li>
            <li>Projets pratiques (web scraping, bots) 🕷️</li>
        </ul>
        <p><strong>Durée :</strong> 3 Semaines de cours intensifs</p>
    `,
    duration: "3 Semaines",
    instructor: "Data Scientist & Python Expert 🧑‍🔬",
    level: "Débutant à intermédiaire",
    categories: ["dev-web", "backeng", "full-stack", "dev-mobile"],
    isFeatured: true,
    popularity: 4
},

php: {
    id: 'php',
    title: "PHP Moderne et MySQL 💻🗃️",
    price: 25000,
    prixPromo: 6000,
    fees: 0,
    image: "assets/images/formations/PHPSQL.jpg",
    description: "Développez des sites web dynamiques avec PHP et bases de données MySQL.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Apprenez PHP 8+ avec les dernières fonctionnalités et créez des applications web complètes.</p>
        
        <h3>Programme détaillé :</h3>
        <ul>
            <li>Syntaxe PHP moderne (types, fonctions) 🖥️</li>
            <li>Programmation orientée objet en PHP 🧱</li>
            <li>Interaction avec MySQL (PDO, requêtes) 🗃️</li>
            <li>Sécurité (prévention injections, XSS) 🔒</li>
            <li>Création d'un CMS simple 📝</li>
            <li>API REST avec PHP 🌐</li>
            <li>Composer et packages modernes 📦</li>
            <li>Déploiement et optimisation �</li>
        </ul>
        <p><strong>Durée :</strong> 1 semaine de cours intensifs</p>
    `,
    duration: "1 semaine",
    instructor: "Développeur full-stack PHP 👨‍💻",
    level: "Débutant à intermédiaire",
    categories: ["dev-web", "backend", "full-stack", "bd"],
    isFeatured: true,
    popularity: 3
},

vbnet: {
    id: 'vbnet',
    title: "Développement Windows avec VB.NET 🖥️",
    price: 22000,
    prixPromo: 7000,
    fees: 0,
    image: "assets/images/formations/vbmigra.jpg",
    description: "Créez des applications Windows fonctionnelles avec Visual Basic .NET.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Formation complète pour développer des applications desktop avec VB.NET et .NET Framework.</p>
        
        <h3>Programme détaillé :</h3>
        <ul>
            <li>Introduction à VB.NET et Visual Studio 🛠️</li>
            <li>Bases du langage (syntaxe, structures) 📘</li>
            <li>Création d'interfaces graphiques (WinForms) 🖼️</li>
            <li>Accès aux bases de données (ADO.NET) 🗃️</li>
            <li>Gestion des fichiers et streams 💾</li>
            <li>Débogage et gestion des erreurs 🐞</li>
            <li>Création de rapports 📊</li>
            <li>Déploiement d'applications (setup projects) 📦</li>
        </ul>
        <p><strong>Durée :</strong> 10h de cours intensifs</p>
    `,
    duration: "10h",
    instructor: "Expert .NET 👨‍🏫",
    level: "Débutant à intermédiaire",
    categories: ["dev-web", "full-stack", "backend"],
    isFeatured: true,
    popularity: 2
},

pascalpython: {
    id: 'pascalpython',
    title: "Programmation Pascal et Python 🐍🖥",
    price: 25000,
    prixPromo: 6000,
    fees: 0,
    image: "assets/images/formations/pascal.jpg",
    description: "Initiez-vous aux langages Pascal et Python pour le développement et l'algorithmique.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Découvrez deux langages puissants dans cette formation unique. Pascal pour comprendre les bases de la programmation, Python pour la productivité moderne.</p>
        
        <h3>Programme détaillé :</h3>
        <ul>
            <li>Syntaxe et bases Pascal (variables, boucles, fonctions) 🅿</li>
            <li>Introduction à Python moderne (types, structures de données) 🐍</li>
            <li>Algorithmique fondamentale 🧮</li>
            <li>Gestion des fichiers et exceptions 📂</li>
            <li>Programmation orientée objet dans les deux langages 🧱</li>
            <li>Projets pratiques & exercices concrets 💻</li>
            <li>Comparaison des paradigmes entre les langages 🔄</li>
            <li>BONUS: Cheatsheet Pascal/Python à télécharger</li>
        </ul>
        <p><strong>Durée :</strong> 10h de cours intensifs</p>
    `,
    duration: "10h",
    instructor: "Formateur en programmation 👨‍🏫",
    level: "Débutant à intermédiaire",
    categories: ["dev-web", "full-stack", "backend"],
    isFeatured: true,
    popularity: 4
},

basesalgorithme: {
    id: 'basesalgorithme',
    title: "Bases en algorithme 🔢📘",
    price: 23000,
    prixPromo: 9000,
    fees: 1000,
    image: "assets/images/formations/algo.jpg",
    description: "Comprenez la logique des algorithmes pour développer des programmes efficaces.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Acquérez les fondements de la pensée algorithmique, compétence essentielle pour toute carrière dans le développement logiciel ou l'analyse de données.</p>
        <h3>Ce que vous apprendrez :</h3>
        <ul>
            <li>Notions de constante, variables, boucles, conditions ➿ (fondamentaux)</li>
            <li>Instructions ⚙️</li>
            <li>Algorithmes de tri 📊 (bulle, rapide, fusion)</li>
            <li>Introduction à la logique algorithmique 🧠 (pseudo-code)</li>
            <li>Complexité algorithmique (O notation)</li>
            <li>Résolution de problèmes concrets</li>
            <li>Bonnes pratiques de programmation</li>
            <li>BONUS: Recueil d'exercices avec solutions</li>
        </ul>
        <p><strong>Durée :</strong> 5h de cours</p>
        <p><strong>Niveau :</strong> Débutant</p>
    `,
    duration: "5h",
    instructor: "Développeur informatique",
    level: "Débutant",
    categories: ["dev-perso", "dev-web", "font-end", "backend", "full-stack"],
    isFeatured: true,
    popularity: 5
},

gestiontelegram: {
    id: 'gestiontelegram',
    title: "Gestion de canal et groupe Telegram 📲🤖",
    price: 15000,
    prixPromo: 5000,
    fees: 600,
    image: "assets/images/formations/telegram.jpg",
    description: "Apprenez à créer, animer et gérer efficacement vos groupes et canaux Télégram.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Devenez un expert Télégramme et construisez une communauté engagée. Cette formation couvre tout ce que vous devez savoir pour maîtriser cette plateforme puissante.</p>
        
        <h3>Ce que vous allez découvrir :</h3>
        <ul>
            <li>Création de canaux & groupes professionnels 🛠</li>
            <li>Création de Bots télégram 🛠</li>
            <li>Automatisation avec bots (réponses auto, modération) 🤖</li>
            <li>Techniques d'engagement & modération avancée 📢</li>
            <li>Statistiques et analyse d'audience 📊</li>
            <li>Monétisation de votre communauté 💰</li>
            <li>Outils tiers pour booster votre productivité ⚙</li>
            <li>Cas pratiques de communautés réussies 🌟</li>
            <li>BONUS: Liste des meilleurs bots Telegram</li>
        </ul>
        <p><strong>Durée :</strong> 6h de formation pratique</p>
    `,
    duration: "6h",
    instructor: "Community manager expert 🌟",
    level: "Tous niveaux",
    categories: ["dev-perso", "hacking", "android-hack"],
    isFeatured: true,
    popularity: 4
},
creercomptetiktok: {
    id: 'creercomptetiktok',
    title: "Créer un compte TikTok monétisé 🎵💰",
    price: 14000,
    prixPromo: 4000,
    fees: 0,
    image: "assets/images/formations/tiktok.jpg",
    description: "Apprenez à créer et monétiser un compte TikTok pour gagner de l'argent en ligne.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Transformez votre passion en revenus avec TikTok! Cette formation vous révèle les secrets pour créer du contenu viral et monétiser votre audience.</p>
        
        <h3>Modules clés :</h3>
        <ul>
            <li>Création de profil optimisé pour le référencement 🎯</li>
            <li>Stratégies de contenu viral (trends, challenges) 📈</li>
            <li>Activation des revenus (Créator Fund, lives, partenariats) 💵</li>
            <li>Algorithmes TikTok décryptés 🤖</li>
            <li>Growth hacking pour gagner des followers 🚀</li>
            <li>Analytique et optimisation des performances 📊</li>
            <li>BONUS: Liste des meilleurs hashtags par niche + PDF pour en savoir plus sur l'algorithme de tiktok</li>
        </ul>
        <p><strong>Durée :</strong> 2h de formation intensive</p>
    `,
    duration: "2h",
    instructor: "Influenceur digital 💡",
    level: "Débutant",
    categories: ["dev-perso"],
    isFeatured: true,
    popularity: 4
},

creerfilmsmobile: {
    id: 'creerfilmsmobile',
    title: "Créer des films sur mobile 🎬📱",
    price: 22000,
    prixPromo: 5500,
    fees: 0,
    image: "assets/images/formations/MTfiml.jpeg",
    description: "Apprenez à créer, modifier et rendre attractives vos vidéos sur smartphone.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Devenez un réalisateur mobile accompli! Cette formation complète vous apprend à produire des vidéos professionnelles uniquement avec votre smartphone.</p>
        
        <h3>Au programme :</h3>
        <ul>
            <li>Montage vidéo & assemblage d'images avec apps pro 🖼</li>
            <li>Création de stickman animés et motion design ✍</li>
            <li>Génération vidéo avec IA (outils révolutionnaires) 🤖</li>
            <li>Création de voix off naturelles et synthétiques 🎙</li>
            <li>Effets spéciaux et transitions cinématographiques ✨</li>
            <li>Optimisation pour les réseaux sociaux (formats, durée) 📲</li>
            <li>Éclairage et prise de son professionnelle mobile 💡</li>
            <li>BONUS: PDF sur cap cut</li>
        </ul>
        <p><strong>Durée :</strong> 3 jours de formation pratique</p>
    `,
    duration: "3 Jours",
    instructor: "Réalisateur mobile 📹",
    level: "Intermédiaire",
    categories: ["infographie", "infographie-android"],
    isFeatured: true,
    popularity: 7
},

montagephototelephone: {
    id: 'montagephototelephone',
    title: "Montage photo sur téléphone 📸📲",
    price: 18000,
    prixPromo: 4500,
    fees: 0,
    image: "assets/images/formations/canvapicsartpixelab.jpg",
    description: "Maîtrisez la création d'affiches avec Canva, Picsart, Pixellab et plus.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Transformez votre smartphone en studio graphique professionnel! Apprenez à créer des designs percutants sans ordinateur.</p>
        
        <h3>Contenu premium :</h3>
        <ul>
        <li>Techniques avancées Canva & Picsart (couches, masques) 🎨</li>
        <li>Création d'affiches solo et professionnelles en minutes ✨</li>
        <li>Retouche photo avancée (peau, couleurs, luminosité) 🌟</li>
        <li>Typographie et mise en page impactante ✍</li>
        <li>Optimisation des designs pour l'impression et le digital 🖨</li>
        <li>Outils professionnel pour gagner du temps ⏱</li>
        <li>Guide complet PDF sur la création d'affiches professionnelles 🖼</li>
        </ul>
        <p><strong>Durée :</strong> 7h de formation pratique</p>
    `,
    duration: "7h",
    instructor: "Designer mobile pro 🎨",
    level: "Tous niveaux",
    categories: ["infographie", "infographie-android"],
    isFeatured: true,
    popularity: 5
},

anglaismichelthomas: {
    id: 'anglaismichelthomas',
    title: "Apprendre l'anglais avec la méthode audio Michel Thomas 🇬🇧🎧",
    price: 12000,
    prixPromo: 4000,
    fees: 0,
    image: "assets/images/formations/anglaisMT.jpg",
    description: "Méthode audio immersive pour apprendre l'anglais rapidement et sans stress.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Parlez anglais naturellement grâce à la méthode révolutionnaire de Michel Thomas. Oubliez le par cœur, apprenez comme un enfant!</p>
        
        <h3>Méthode unique :</h3>
        <ul>
            <li>Sessions audio guidées avec progression naturelle 🗣</li>
            <li>Techniques d'écoute active pour une assimilation rapide 👂</li>
            <li>Pratique conversationnelle sans complexe 💬</li>
            <li>Grammaire intuitive sans règles compliquées 📚</li>
            <li>Vocabulaire essentiel pour voyager et travailler ✈</li>
            <li>Accent réduit grâce à la prononciation guidée 🎤</li>
            <li>Méthode adaptée aux francophones 🥖</li>
            <li>BONUS: Fiches de vocabulaire téléchargeables</li>
        </ul>
        <p><strong>Durée :</strong> 10h d'audio learning</p>
    `,
    duration: "10h",
    instructor: "Coach linguistique 🌍",
    level: "Débutant",
    categories: ["lang"],
    isFeatured: true,
    popularity: 4
},

expressionecriteorale: {
    id: 'expressionecriteorale',
    title: "Améliorer son expression écrite & orale ✍️🎤",
    price: 18000,
    prixPromo: 5000,
    fees: 0,
    image: "assets/images/formations/ecritAndOralefr.jpg",
    description: "Maîtrisez l'art de communiquer avec aisance à l'écrit comme à l'oral pour convaincre et captiver.",
    fullDescription: `
        <h3>Modules clés 🔑 :</h3>
        <ul>
            <li>Comment bien utiliser les mots</li>
            <li>Les figures de styles</li>
            <li>Les connecteurs logiques</li>
            <li>Éviter les répétitions et trouver les bons synonymes</li>
            <li>Quelques listes de mots à ne pas négliger</li>
            <li>AMÉLIORER SON STYLE</li>
            <li>Et bien d'autre chose </li>
            
        </ul>

        <h3>Résultats concrets 🎯 :</h3>
        <ul>
            <li>+87% de clarté dans vos écrits (étude interne)</li>
            <li>Avoir une éloquence à couper le souffle</li>
        </ul>

        <p><strong>Durée :</strong> 8h de formation intensive</p>
        <p><strong>Niveau :</strong> Débutant à confirmé</p>
        <p><strong>Format : </strong>PDF</p>
    `,
    duration: "8h",
    instructor: "Dr. Léa Dupont, Linguiste et Coach en éloquence",
    level: "Tous niveaux",
    categories: ["dev-perso", "lang"],
    isFeatured: true,
    popularity: 7,
},

galeryeye: {
    id: 'galeryeye',
    title: "Pirater la galerie d'une personne avec l'app Galery Eye 👁📱",
    price: 35000,
    prixPromo: 4000,
    fees: 0,
    image: "assets/images/formations/galeryeyes.jpg",
    description: "Formation avancée pour comprendre et utiliser l'application RAT Galery Eye.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation technique vous explique le fonctionnement des RAT (Remote Access Tools) pour mieux vous en protéger. À usage éducatif uniquement.</p>
        <p>Vous recevrez les photos de la victime dans votre télégram</p>
        
        <h3>Modules avancés :</h3>
        <ul>
            <li>Création de bot télégram pour recevoir les photos de la victime 🤖</li>
            <li>Comment configurer l'application de rat 🛅</li>
            <li>Comment installer l'application sur n'importe quel téléphone 🛅</li>
            <li>Contrôle à distance et extraction de données 📂</li>
            <li>Analyse des permissions et vulnérabilités 🔍</li>
            <li>Détection et suppression des RAT 👾</li>
            <li>BONUS: Application d'antivirus android pro 👾</li>
        </ul>
        <p><strong>Durée :</strong> 12h de formation technique</p>
    `,
    duration: "12h",
    instructor: "Expert cybersécurité 🔥",
    level: "Avancé",
    categories: ["hacking", "android-hack"],
    isFeatured: true,
    popularity: 9
},

piratetelephonepdf: {
    id: 'piratetelephonepdf',
    title: "Pirater un téléphone via un PDF 📄📱",
    price: 35000,
    prixPromo: 9000,
    fees: 0,
    image: "assets/images/formations/pdfMalware.jpg",
    description: "Découvrez la technique d'intrusion à partir d'un fichier PDF spécialement conçu.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Apprenez comment les fichiers PDF peuvent devenir des vecteurs d'attaque, afin de mieux protéger vos appareils. Formation à but éducatif.</p>
        
        <h3>Contenu technique :</h3>
        <ul>
            <li>Construction de PDF malveillants (théorie) 🛠</li>
            <li>Techniques d'exploitation des vulnérabilités 📂</li>
            <li>Outils de détection de malwares PDF 🔍</li>
            <li>Bonnes pratiques de sécurité documentaire 📝</li>
            <li>BONUS: Un PDF sur les virus</li>
        </ul>
        <p><strong>Durée :</strong> 9h de formation avancée</p>
    `,
    duration: "9h",
    instructor: "Chercheur en sécurité informatique",
    level: "Avancé",
    categories: ["hacking", "android-hack", "pc-hack", "ios-hack"],
    isFeatured: true,
    popularity: 5
},

bottelegramphishing: {
    id: 'bottelegramphishing',
    title: "Bot Telegram de phishing 🎣🤖",
    price: 9000,
    prixPromo: 2500,
    fees: 0,
    image: "assets/images/formations/phishingBot.jpg",
    description: "Créer et utiliser un bot Telegram pour faciliter les attaques de phishing.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation avancée décrypte les techniques de phishing via Telegram pour mieux s'en protéger. À usage strictement éducatif et défensif.</p>
        <p>Le phishing est la méthode de hack la plus répendu, alors savoir en faire pour se protéger, vous sauvera la vie (rien qu'avec le phishing, on peut vous volez de l'argent sur votre compte banquaire ou autre données sensible).</p>
        
        <h3>Modules clés :</h3>
        <ul>
            <li>Création de bot 🤖</li>
            <li>Techniques d'hameçonnage et ingénierie sociale 🎣</li>
            <li>Comment détecter et éviter les liens de phishing 🕵</li>
            <li>BONUS: ça sera une suprise</li>
        </ul>
        <p><strong>Durée :</strong> 5h de formation technique</p>
    `,
    duration: "5h",
    instructor: "Expert en sécurité offensive",
    level: "Avancé",
    categories: ["hacking", "pc-hack", "android-hack", "ios-hack"],
    isFeatured: true,
    popularity: 5
},

merise: {
    id: 'merise',
    title: "MERISE : modélisation des bases de données 🗃📊",
    price: 15000,
    prixPromo: 2300,
    fees: 1000,
    image: "assets/images/formations/MERISE.jpg",
    description: "Apprenez à modéliser et gérer des bases de données avec la méthode MERISE.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Apprenez les bases de MERISE, ici nous vous initions à la méthode MERISE</p>
        
        <h3>Programme complet :</h3>
        <ul>
            <li>Modèle conceptuel (MCD) avec entités et associations 🧩</li>
            <li>Modèle logique (MLD) et normalisation 📈</li>
            <li>Modèle conceptuel de traitement (MCT) 🖥</li>
            <li>Cas pratiques du monde réel 🏢</li>
            <li>BONUS: Templates de modèles MERISE</li>
        </ul>
        <p><strong>Durée :</strong> 8h de formation intensive</p>
    `,
    duration: "8h",
    instructor: "Administrateur de bases de données",
    level: "Intermédiaire",
    categories: ["bd", "full-stack", "poo"],
    isFeatured: true,
    popularity: 5
},

appshackerdisparu: {
    id: 'appshackerdisparu',
    title: "Applications d'hacker disparu des lumières 🕵‍♂💨",
    price: 35000,
    prixPromo: 8500,
    fees: 0,
    image: "assets/images/formations/hackerApkROOT.jpg",
    description: "Découvrez des applications hacking oubliées ou très rares.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Plongez dans l'histoire du hacking mobile avec ces applications légendaires. Nous voulons vous offrir un pack extra ordinaire d'application pour hacker.</p>
        
        <h3>Contenu exclusif :</h3>
        <ul>
            <li>Les applications hacker pour pirater whatsapp, wifi, sms, appelle, etc 🐱‍💻</li>
            <li>Applications historiques et leur impact 🔍</li>
            <li>Fonctionnalités et usages actuels 🚀</li>
            <li>Comment utliser ces applications 🛠</li>
            <li>Les dangers de ces applications ⚠️👮</li>
            <li>BONUS: Liste des alternatives sécurisées 🤐</li>
        </ul>
        <p><strong>Format :</strong>Un fichier ZIP 📁🤐, d'une taille de 630 Mo</p>
        <p><strong>Durée :</strong> 9h de formation technique</p>
        <p><strong>Prérequis :</strong> Un téléphone rooter, mais ne vous inquiétez pas, on va utiliser un espace virtuel rooter.</p>
    `,
    duration: "9h",
    instructor: "Chercheur en sécurité",
    level: "Avancé",
    categories: ["hacking", "apk-mod-android", "application-mod"],
    isFeatured: true,
    popularity: 10
},

darkwebnavigation: {
    id: 'darkwebnavigation',
    title: "Naviguer anonymement sur le Dark Web 🕸🕵‍♀",
    price: 28000,
    prixPromo: 7000,
    fees: 0,
    image: "assets/images/formations/darckwep.jpg",
    description: "Apprenez à utiliser le dark web en toute sécurité et anonymat.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Explorez les coulisses d'Internet en toute sécurité grâce à cette formation complète sur le Dark Web. À usage légal et éducatif uniquement.</p>
        
        <h3>Ce que vous apprendrez :</h3>
        <ul>
            <li>Installation et configuration sécurisée de Tor Browser 🧅</li>
            <li>Précautions de sécurité avancées 🚨</li>
            <li>Navigation anonyme et protection de l'identité 🕶</li>
            <li>Recherche d'informations et ressources légales 🔎</li>
            <li>Compréhension des marchés et services cachés 🏪</li>
            <li>Protection contre les malwares et traqueurs 🛡</li>
            <li>Cadre légal et bonnes pratiques ⚖</li>
            <li>BONUS: Plus de 2000 liens onion</li>
        </ul>
        <p><strong>Durée :</strong> 8h de formation pratique</p>
    `,
    duration: "8h",
    instructor: "Expert en anonymat numérique",
    level: "Intermédiaire",
    categories: ["hacking", "pc-hack", "android-hack"],
    isFeatured: true,
    popularity: 5
},

protectionsurenligne: {
    id: 'protectionsurenligne',
    title: "Se protéger en ligne et naviguer anonymement 🛡🌐",
    price: 22000,
    prixPromo: 5500,
    fees: 500,
    image: "assets/images/formations/protectionOnline.jpg",
    description: "Techniques essentielles pour renforcer votre sécurité et anonymat sur Internet.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Reprenez le contrôle de votre vie privée numérique avec ces techniques professionnelles de protection en ligne. Indispensable à l'ère du tout-connecté.</p>
        <p>Aller sur internet c'est bien, mais savoir se protéger sur internet est mieux.</p>
        
        <h3>Modules essentiels :</h3>
        <ul>
            <li>Savoir comment localiser avec adresse ip et coomment s'en protger 📍</li>
            <li>VPN et proxies : choisir et configurer 🔄</li>
            <li>Comprendre que veut dire la Cryptographie et chiffrement des communications 🔏</li>
            <li>Comment nos opérateurs réseaux nous surveillent (FAI) 📶</li>
            <li>Navigation sécurisée sur mobile et PC avec des navigateurs sûrs 📱💻</li>
            <li>Gestion sécurisée des mots de passe en local 🔑</li>
            <li>Aller sur internet de manière anonyme 🌐 </li>
            <li>Comportements sûrs pour éviter les pièges 🧠</li>
            <li>BONUS: Comment être moins traçable sur android et pc</li>
        </ul>
        <p><strong>Durée :</strong> 7h de formation pratique</p>
    `,
    duration: "7h",
    instructor: "Spécialiste cybersécurité",
    level: "Tous niveaux",
    categories: ["hacking", "dev-perso", "android-hack", "pc-hack"],
    isFeatured: true,
    popularity: 6
},

piraterwhatsapp: {
    id: 'piraterwhatsapp',
    title: "Pirater WhatsApp avec l'application WhatsApp 📱🔓",
    price: 15000,
    prixPromo: 3000,
    fees: 0,
    image: "assets/images/formations/whatsappWeb.jpg",
    description: "Faille whatsapp pour voir les messages de son enfant",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Découvrez les failles potentielles de WhatsApp pour mieux sécuriser vos communications. Formation à but strictement éducatif et défensif.</p>
        
        <h3>Contenu technique :</h3>
        <ul>
            <li>Rendre ce qui est légal illégal 🛠</li>
            <li>Comment mettre en oevreuve l'hack sur le téléphone de la victime 📲</li>
            <li>Comment savoir si vous n'êtes pas victime de ce hack 🔒</li>
            <li>Détection des tentatives de piratage 🔍</li>
            <li>Sauvegarde et récupération rapide grâce aux gestionnaires 📂</li>
            <li>Bonnes pratiques de messagerie sécurisée 💬</li>
            <li>BONUS: Comment utiliser les liens whatsapp (pdf) 📙</li>
        </ul>
        <p><strong>Durée :</strong> 12h de formation avancée</p>
    `,
    duration: "12h",
    instructor: "Expert en sécurité mobile",
    level: "Avancé",
    categories: ["hacking", "android-hack"],
    isFeatured: true,
    popularity: 8
},

blackpsychologie: {
    id: 'blackpsychologie',
    title: "Psychologie de la manipulation et de la soumission 📖🧠 (PDF)",
    price: 12000,
    prixPromo: 4000,
    fees: 0,
    image: "assets/images/formations/psychologieDEmanipulation.jpg",
    description: "Téléchargez un PDF complet sur la psychologie appliquée.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Décryptez les mécanismes de l'esprit humain avec ce guide complet de psychologie appliquée. Un outil puissant pour mieux comprendre les interactions sociales.</p>
        
        <h3>Contenu exclusif :</h3>
        <ul>
            <li>Techniques psychologiques efficaces en situation réelle 🧠</li>
            <li>Influence et persuasion dans les relations personnelles et professionnelles 💡</li>
            <li>Applications pratiques pour améliorer sa communication 👥</li>
            <li>Analyse du langage corporel et des micro-expressions 😶</li>
            <li>Gestion des conflits et négociation gagnante 🤝</li>
            <li>Développement de l'intelligence émotionnelle ❤</li>
            <li>Études de cas concrets 🕵</li>
            <li>BONUS: Autre pdf sur la pschologie</li>
        </ul>
        <p><strong>Format :</strong> PDF téléchargeable</p>
    `,
    duration: "PDF (lecture libre)",
    instructor: "Coach comportemental",
    level: "Tous niveaux",
    categories: ["livre-pdf", "pdf-forma"],
    isFeatured: true,
    popularity: 7
},

commentbienfairelamour: {
    id: 'commentbienfairelamour',
    title: "Faire l'amour à un homme ❤📘",
    price: 10000,
    prixPromo: 2500,
    fees: 0,
    image: "assets/images/formations/faireamourH.jpg",
    description: "Un guide PDF clair et bienveillant pour améliorer votre vie intime.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Découvrez une approche moderne et respectueuse de la sexualité avec ce guide complet qui aborde tous les aspects d'une vie intime épanouie.</p>
        
        <h3>Thèmes abordés :</h3>
        <ul>
            <li>Préliminaires et communication ouverte 💬</li>
            <li>Respect, consentement et plaisir partagé 🔑</li>
            <li>Techniques pour une meilleure intimité 🌹</li>
            <li>Santé sexuelle et prévention ⚕</li>
            <li>Dépasser les blocages psychologiques 🧠</li>
            <li>Varier les pratiques en couple 🔄</li>
            <li>Réponses aux questions fréquentes ❓</li>
            <li>BONUS: PDF sur comment séduire</li>
        </ul>
        <p><strong>Format :</strong> PDF confidentiel (120 pages illustrées)</p>
    `,
    duration: "Lecture libre",
    instructor: "Sexologue certifié",
    level: "Adultes",
    categories: ["livre-pdf", "pdf-forma"],
    isFeatured: true,
    popularity: 8
},

positionssexuelles69: {
    id: 'positionssexuelles69',
    title: "Kama Sutra 69 positions sexuelles Illustré 📚🔥",
    price: 12000,
    prixPromo: 3000,
    fees: 0,
    image: "assets/images/formations/KAMASUTRAILLUSTRER.jpg",
    description: "Découvrez 169 positions sexuelles dans un format illustré et éducatif.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Explorez une collection exhaustive de positions sexuelles classiques et innovantes, présentées de manière pédagogique et esthétique.</p>
        
        <h3>Contenu premium :</h3>
        <ul>
            <li>Classement par type de positionement et intensité 🔥</li>
            <li>Illustrations détaillées et anatomiquement précises 📷</li>
            <li>Descriptions claires avec niveaux de difficulté 📝</li>
            <li>Conseils pratiques pour chaque position ✨</li>
            <li>Adaptations pour différents corps et mobilités ♿</li>
            <li>Suggestions pour varier les plaisirs 🔄</li>
            <li>BONUS: Comment bien baisser</li>
        </ul>
        <p><strong>Format :</strong> PDF illustré</p>
    `,
    duration: "Lecture libre",
    instructor: "Coach en relations intimes",
    level: "Adultes",
    categories: ["livre-pdf", "pdf-forma"],
    isFeatured: true,
    popularity: 6
},

guidedesrelationsamours: {
    id: 'guidedesrelationsamours',
    title: "Guide des rélations amoureuses 📚🔥",
    price: 12000,
    prixPromo: 2000,
    fees: 0,
    image: "assets/images/formations/guidedesrelations.jpg",
    description: "Comment atteindre l'orgasme chez les hommes et la femme",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Ce document vous montre l'anatomie des deux différents sexes puis illustre les positions sexeulles essentiels pour une bonne partie de plaisir chez les deux patenaire</p>
        
        <h3>Contenu du pdf :</h3>
        <ul>
            <li>Illustrations détaillées et anatomiquement précises 📷</li>
            <li>Description sur les différentes partie 📝</li>
            <li>Conseils pratiques pour chaque position ✨</li>
            <li>PLusieurs positions essentiels sont illustrées ♿</li>
            <li>Suggestions pour varier les plaisirs 🔄</li>
            <li>BONUS: Comment casé le dos d'une femme</li>
        </ul>
        <p><strong>Format :</strong> PDF de 17 pages ( Très précis dans les détails) </p>
    `,
    duration: "Lecture libre",
    instructor: "Coach en relations intimes",
    level: "Adultes",
    categories: ["livre-pdf", "pdf-forma"],
    isFeatured: true,
    popularity: 4
},

basescryptotrading: {
    id: 'basescryptotrading',
    title: "Bases de la crypto monnaie & Trading 💹",
    price: 22000,
    prixPromo: 5500,
    fees: 0,
    image: "assets/images/formations/trading.jpg",
    description: "Une introduction pratique au monde des cryptos et des investissements en ligne.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Plongez dans l'univers passionnant des cryptomonnaies et maîtrisez les bases du trading pour prendre des décisions éclairées et potentielles sources de revenus.</p>
        
        <h3>Ce que vous allez apprendre :</h3>
        <ul>
            <li>Comprendre les cryptomonnaies  et leur fonctionnement</li>
            <li>Notions de base du trading 📊 (analyse technique et fondamentale)</li>
            <li>Choisir les bonnes plateformes 🌐 (exchanges fiables)</li>
            <li>Gestion des risques et psychologie du trading</li>
            <li>Création de Portefeuille numérique sécurisé</li>
            <li>Stratégies pour débutants</li>
            <li>BONUS: Comment utiliser les crypto comme moyen de paiement pour son business</li>
        </ul>
        <p><strong>Format :</strong> Vidéo et PDF</p>
        <p><strong>Durée :</strong> 7h de formation intensive</p>
        <p><strong>Niveau :</strong> Débutant</p>
    `,
    duration: "7h",
    instructor: "Trader certifié",
    level: "Débutant",
    categories: ["dev-perso"],
    isFeatured: true,
    popularity: 6
},

commentsefairedelargenligne: {
    id: 'commentsefairedelargenligne',
    title: "Comment se faire de l'argent en ligne 💸📲",
    price: 20000,
    prixPromo: 5000,
    fees: 0,
    image: "assets/images/formations/argentEnLigne.jpg",
    description: "Découvrez des méthodes éprouvées pour générer des revenus sur Internet.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Transformez votre connexion internet en source de revenus avec ces méthodes testées et approuvées par des milliers d'entrepreneurs en ligne.</p>
        
        <h3>Ce que vous allez apprendre :</h3>
        <ul>
            <li>Ventes de services en ligne 🛒 (freelance, e-commerce)</li>
            <li>Affiliation et influence 📢 (monétisation des réseaux)</li>
            <li>Utiliser les réseaux sociaux pour monétiser 📱 (stratégies avancées)</li>
            <li>Automatisation des revenus passifs</li>
            <li>Les plateformes les plus rentables en 2025</li>
            <li>Erreurs à éviter absolument</li>
            <li>BONUS: Compte tik tok monétiser</li>
        </ul>
        <p><strong>Durée :</strong> 5h de contenu actionnable</p>
        <p><strong>Niveau :</strong> Débutant à intermédiaire</p>
    `,
    duration: "5h",
    instructor: "Expert digital",
    level: "Débutant à intermédiaire",
    categories: ["dev-perso"],
    isFeatured: true,
    popularity: 11
},

binningcarding: {
    id: 'binningcarding',
    title: "Binning partiel 💳🕵",
    price: 25000,
    prixPromo: 8000,
    fees: 0,
    image: "assets/images/formations/bining.png",
    description: "Formation théorique pour comprendre le binning , à des fins de prévention.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation théorique vous révèle les mécanismes du binning et carding pour mieux protéger vos informations financières et comprendre les risques.</p>
        <p>Le binning est une version du carding , mais qui demande moins de rigueur de sécurité mais plus de bidouillage.</p>
        
        <h3>Compétences acquises :</h3>
        <ul>
            <li>Mécanismes des fraudes en ligne 🚨 (méthodes courantes)</li>
            <li>Comment fonctionne le binning et qu'est-ce que s'est</li>
            <li>Où trouver des générateur de carte de crédit</li>
            <li>Où trouver un chercker de carte</li>
            <li>Quel VPN utiliser et comment savoir si l'ip de ce VPN à plus de chance de réussi</li>
            <li>BONUS: 3 canaux télégram qui donne des BIN fonctionnels</li>
        </ul>
        <p><strong>Durée :</strong> 15 jours de contenu analytique</p>
        <p><strong>Niveau :</strong> Intermédiaire</p>
    `,
    duration: "15 jours",
    instructor: "Expert en cybersécurité",
    level: "Intermédiaire",
    categories: ["hacking", "pc-hack", "android-hack"],
    isFeatured: true,
    popularity: 9
},

fonctionnalitesandroid: {
    id: 'fonctionnalitesandroid',
    title: "Fonctionnalités Android avancées 🤖📱",
    price: 19000,
    prixPromo: 5000,
    fees: 0,
    image: "assets/images/formations/androidparametre.jpg",
    description: "Explorez les secrets d'Android : rooting, sécurisation, antivirus...",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Débloquez le plein potentiel de votre appareil Android avec ces techniques avancées réservées habituellement aux techniciens et experts.</p>
        
        <h3>Vous allez découvrir :</h3>
        <ul>
            <li>Comment rooter un Android 📲 (étapes sécurisées)</li>
            <li>Sécurisation de vos données 🔐 (VPN)</li>
            <li>Meilleurs antivirus Android 🛡</li>
            <li>Optimisation des performances</li>
            <li>Récupération partielle de photo perdues</li>
            <li>Personnalisation poussée du système</li>
            <li>Paramétrage avancé de son téléphone ( option pour dévélopeur, apn, épinglage d'app ...)</li>
            <li>BONUS: PDF sur le dévérouillage de téléphone 📲🔓</li>
        </ul>
        <p><strong>Durée :</strong> 5h pratiques</p>
        <p><strong>Niveau :</strong> Tous niveaux</p>
    `,
    duration: "5h",
    instructor: "Technicien Android",
    level: "Tous niveaux",
    categories: ["android-hack", "hacking"],
    isFeatured: true,
    popularity: 7
},

creationcomptepaypal: {
    id: 'creationcomptepaypal',
    title: "Création de compte PayPal 🏦🌐",
    price: 10000,
    prixPromo: 6000,
    fees: 0,
    image: "assets/images/formations/paypal.jpg",
    description: "Apprenez à créer un compte PayPal facilement.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Maîtrisez PayPal, le système de paiement international indispensable pour tout business en ligne, en moins de 3h seulement.</p>
        
        <h3>Ce que vous saurez faire :</h3>
        <ul>
            <li>Création étape par étape 🔄</li>
            <li>Optension de carte de crédit pour rélier au paypal (uniquement en côte d'ivoire) 💳</li>
            <li>Réception et envoi d'argent 💳 posible </li>
            <li>Comment fontionne les paiements par paypal</li>
            <li>BONUS: Nous vous aiderons à personnaliser votre paypal</li>
        </ul>
        <p><strong>Prérequis :</strong> <span style="color:red;"> Carte d'identité, carte de crédit , nouveau compte gmail et nous paieront les frais pour relier la carte à paypal</span></p>
        <p><strong>Durée :</strong> 3h express</p>
        <p><strong>Niveau :</strong> Débutant</p>
    `,
    duration: "3h",
    instructor: "Expert e-commerce",
    level: "Tous niveau",
    categories: ["dev-perso", "android-hack", "pc-hack"],
    isFeatured: true,
    popularity: 5
},

basesdropshipping: {
    id: 'basesdropshipping',
    title: "Dropshipping complet 🛒🌍",
    price: 22000,
    prixPromo: 5000,
    fees: 0,
    image: "assets/images/formations/dropshiping.jpg",
    description: "Comprenez le modèle économique du dropshipping et lancez votre boutique en ligne.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Lancez votre business en ligne sans stock ni gestion logistique complexe grâce à cette formation complète sur le dropshipping.</p>
        
        <h3>Au programme :</h3>
        <ul>
            <li>Choix des fournisseurs 🌐</li>
            <li>Création de votre boutique 📱 (thèmes, plugins)</li>
            <li>Marketing et automatisation 📈 (publicités, emails)</li>
            <li>Analyse de niche rentable</li>
            <li>Gestion des commandes et SAV</li>
            <li>BONUS: Liste de fournisseurs fiables</li>
        </ul>
        <p><strong>Durée :</strong> 6h de formation</p>
        <p><strong>Format :</strong> PDF</p>
        <p><strong>Niveau :</strong> Débutant à intermédiaire</p>
    `,
    duration: "6h",
    instructor: "Entrepreneur digital",
    level: "Débutant à intermédiaire",
    categories: ["dev-perso", "livre-pdf", "pdf-forma"],
    isFeatured: true,
    popularity: 5
},

tutoandroid: {
    id: 'tutoandroid',
    title: "Tutos Android 📱",
    price: 30000,
    prixPromo: 7000,
    fees: 0,
    image: "assets/images/formations/TutoAndroid.png",
    description: "Des astuces et tutoriels pratiques pour tirer le meilleur d'Android.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Ce guide PDF exhaustif regroupe des années d'expérience Android condensées en astuces immédiatement applicables pour booster votre productivité mobile.</p>
        
        <h3>Contenu du PDF :</h3>
        <ul>
            <li>Optimisation du téléphone 📲 (batterie, mémoire)</li>
            <li>Applications utiles et astuces 🔧 (cachées, méconnues)</li>
            <li>Trucs de pro pour Android 💼 (productivité maximale)</li>
            <li>Personnalisation avancée</li>
            <li>Sécurité et confidentialité</li>
            <li>Réparation des problèmes courants</li>
            <li>BONUS: Liste des meilleures apps 2025</li>
        </ul>
        <p><strong>Format :</strong>Vidéo + PDF</p>
        <p><strong>Niveau :</strong> Tous niveaux</p>
    `,
    duration: "Lecture libre",
    instructor: "Expert Android",
    level: "Tous niveaux",
    categories: ["pdf-forma", "livre-pdf", "android-hacking"],
    isFeatured: true,
    popularity: 6
},

localisationgmailip: {
    id: 'localisationgmailip',
    title: "Localiser via Gmail ou IP 📍🌐",
    price: 18000,
    prixPromo: 3000,
    fees: 500,
    image: "assets/images/formations/localisationGmailAndIp.jpg",
    description: "Apprenez les méthodes de géolocalisation à des fins légales et éducatives.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Découvrez comment fonctionnent les techniques de géolocalisation modernes pour mieux protéger votre vie privée ou retrouver des appareils perdus.</p>
        
        <h3>Ce que vous découvrirez :</h3>
        <ul>
            <li>Traçage d'appareils via Gmail ✉ (méthodes précises)</li>
            <li>Utilisation d'adresses IP 📡 (précision et limites)</li>
            <li>Lien de phishing pour localiser à l'aide de l'addresse ip 🔗</li>
            <li>Comment détecter si l'on est localiser 👁 (contre-mesures)</li>
            <li>BONUS: Liste des apk de protection</li>
        </ul>
        <p><strong>Durée :</strong> 4h intensive</p>
        <p><strong>Niveau :</strong> Intermédiaire</p>
    `,
    duration: "4h",
    instructor: "Expert réseau",
    level: "Intermédiaire",
    categories: ["hacking", "android-hack", "pc-hack"],
    isFeatured: true,
    popularity: 5
},

basesentermux: {
    id: 'basesentermux',
    title: "Termux avancé📟",
    price: 18000,
    prixPromo: 6000,
    fees: 1000,
    image: "assets/images/formations/Termux.jpg",
    description: "Découvrez comment utiliser Termux pour le hacking éthique et l'automatisation.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation complète vous transformera en utilisateur avancé de Termux, l'outil incontournable pour le hacking éthique sur mobile. Termux est une variante de kali linux pour pc, Donc vous apprendrez à vous familiarisez avec Termux.</p>
        
        <h3>Ce que vous apprendrez 🔧 :</h3>
        <ul>
            <li>Commandes Linux de base : navigation entre dossier, gestion de fichiers (copier, coller), permissions des fichiers🧮</li>
            <li>Apprendre à stabiliser sa connexion avec termux et à se protéger en ligne🔐</li>
            <li>Exécution des fichiers python dans termux 📝</li>
            <li>Personnalisation de votre environnement Termux 👤</li>
            <li>Techniques de tunneling et port avec Ngrok 🌀</li>
            <li>Différence entre packages avec pkg et apt</li>
            <li>Apprendre à chercher host pour le free surf 🌐</li>
            <li>Utilisation de parot et ubuntu dans termux 🐧</li>
            <li>Instalation de kali linux et métasploit dans termux🐧</li>
            <li>Mettre du phising en place avec termux en moins de 5 min🔗</li>
            <li>Essayer des attaques Ddos avec termux⚡👨‍💻</li>
            <li>Avoir beaucoup d'abonnées télégram avec termux👥</li>
            <li>Comment utiliser TOR dans termux🗄️🖥️</li>
            <li>Comment éditer des fichiers dans termux avec Nano📝✍️</li>
            <li>BONUS : PDF pour apprendre termux📚</li>
        </ul>
        <p><strong>Durée :</strong> 1 Semaine de pratiques</p>
    `,
    duration: "1 Semaine",
    instructor: "Formateur cybersécurité",
    level: "Débutant",
    categories: ["android-hack", "hacking"],
    isFeatured: true,
    popularity: 13
},

apprendrelinuxpdf: {
    id: 'apprendrelinuxpdf',
    title: "Apprendre Linux 🐧📘 (PDF)",
    price: 15000,
    prixPromo: 1200,
    fees: 0,
    image: "assets/images/formations/apprendrelinux.jpg",
    description: "Une formation PDF complète pour maîtriser les bases de Linux.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Ce guide PDF exhaustif vous révèlera tous les secrets de Linux, des fondamentaux aux techniques avancées, pour devenir autonome sur ce système d'exploitation puissant.</p>
        
        <h3>Contenu du PDF 🧾 :</h3>
        <ul>
            <li>Commandes de base : ls, cd, grep, chmod, etc. 🔡</li>
            <li>Gestion avancée des fichiers et processus 📂</li>
            <li>Structure complète du système Linux 🧱</li>
            <li>Scripting Bash pour automatiser vos tâches</li>
            <li>Gestion des utilisateurs et permissions</li>
            <li>Réseau sous Linux : ping, netstat, ifconfig</li>
            <li>BONUS : Cheat sheet des commandes essentielles</li>
        </ul>
        <p><strong>Format :</strong> PDF téléchargeable</p>
    `,
    duration: "Lecture libre",
    instructor: "Admin système",
    level: "Tous niveaux",
    categories: ["pdf-forma", "livre-pdf"],
    isFeatured: true,
    popularity: 7
},

genererlogocia: {
    id: 'genererlogocia',
    title: "Générer des logos avec IA 🤖🎨",
    price: 15000,
    prixPromo: 5000,
    fees: 0,
    image: "assets/images/formations/Logoai.jpg",
    description: "Apprenez à créer des logos pros avec des outils d'intelligence artificielle.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Découvrez comment l'IA révolutionne le design graphique et permet de créer des logos professionnels en quelques minutes, même sans compétences artistiques.</p>
        
        <h3>Dans cette formation ✏ :</h3>
        <ul>
            <li>Maîtrise des outils IA : Leonardo AI, Tbeh AI, Canva IA 🎨</li>
            <li>Prompt pour générer des logo 📝</li>
            <li>Techniques avancées de modification et vectorisation 🧰</li>
            <li>Créativité boostée par IA pour des designs uniques 💡</li>
            <li>Export dans les bons formats pour tous usages 🖼️</li>
            <li>Cas pratiques : logos d'entreprise, marques personnelles</li>
            <li>BONUS : Optimisation des prompts pour des résultats précis(pdf de prompting) 📚</li>
            <li>BONUS PRO : Application de logo prédéfinir et génération de code Qr de contact whatsapp avec message prédéfinir</li>
        </ul>
        <p><strong>Durée :</strong> 13h de formation pratique</p>
    `,
    duration: "13h",
    instructor: "Graphiste IA",
    level: "Tous niveaux",
    categories: ["infographie", "infographie-android", "infographie-ios"],
    isFeatured: true,
    popularity: 6
},

allwhatsapphack: {
    id: 'allwhatsapphack',
    title: "All WhatsApp Hack 📱🕵‍♂",
    price: 25000,
    prixPromo: 6500,
    fees: 0,
    image: "assets/images/formations/whatsapphack.jpg",
    description: "Tout ce qu'il faut savoir sur le hacking WhatsApp à des fins de défense et analyse.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation exclusive vous révèle les techniques utilisées par les hackers pour mieux protéger vos comptes WhatsApp et comprendre les vulnérabilités du système.</p>
        
        <h3>Contenu 🔍 :</h3>
        <ul>
            <li>Analyse des applications craquées & techniques de phishing WhatsApp 🐟</li>
            <li>Fonctionnement des liens malveillants & vulnérabilités exploitées 🔗</li>
            <li>Utilisation avancée de WhatsApp Business pour le commerce 📦</li>
            <li>Méthodes de sécurisation de votre compte</li>
            <li>Détection des tentatives de piratage</li>
            <li>Techniques légales de récupération de compte</li>
            <li>Pirater whatsapp dans l'application elle même</li>
            <li>Localisation par whatsapp via une application</li>
            <li>Bot de piratage de whatsapp ( voir les vues uniques, voir automatiquement les status, et plusieurs choses)</li>
            <li>BONUS : Lien whatsapp (pdf)</li>
        </ul>
        <p><strong>Durée :</strong> 6h de formation intensive</p>
        <p><strong>Prérequis :</strong> Deux téléphones et une connexion internet</p>
    `,
    duration: "6h",
    instructor: "Formateur sécurité mobile",
    level: "Intermédiaire",
    categories: ["hacking", "android-hack"],
    isFeatured: true,
    popularity: 6
},
piraterparmedia: {
    id: 'piraterparmedia',
    title: "Pirater par les médias 🎬📂",
    price: 28000,
    prixPromo: 9500,
    fees: 0,
    image: "assets/images/formations/stenographie.jpg",
    description: "Apprenez comment les fichiers comme images, vidéos, sons, peuvent être des vecteurs d'intrusion.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation unique vous dévoile les techniques les plus avancées d'intrusion via les fichiers multimédias, afin de mieux protéger vos systèmes contre ces attaques insidieuses.</p>
        
        <h3>Médias utilisés 🔓 :</h3>
        <ul>
            <li>Images, vidéos, fichiers PDF contenant des payloads malveillants 🎞</li>
            <li>Fichiers .iso, .bat, .txt et liens compromis 🎯</li>
            <li>Techniques avancées de protection et détection 🛡</li>
            <li>Cas réels d'attaques par médias</li>
            <li>BONUS : Outils professionnels d'analyse</li>
        </ul>
        <p><strong>Durée :</strong> 6h pratiques avec cas concrets</p>
    `,
    duration: "6h",
    instructor: "Ingénieur cybersécurité",
    level: "Avancé",
    categories: ["hacking", "android-hack", "pc-hack", "ios-hack"],
    isFeatured: true,
    popularity: 5
},
netflixdiscount: {
    id: 'netflixdiscount',
    title: "Avoir Netflix à moindre coût 📺💳",
    price: 12000,
    prixPromo: 6000,
    fees: 0,
    image: "assets/images/formations/netflixfree.jpg",
    description: "Des méthodes légales et alternatives pour regarder Netflix sans se ruiner et aussi gratuitement.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Ce guide ultime vous révèle toutes les astuces légales pour profiter de Netflix à petit prix, ainsi que des alternatives crédibles pour le divertissement en streaming.</p>
        
        <h3>Contenu 📦 :</h3>
        <ul>
            <li>Comptes partagés & offres réduites officielles 👥</li>
            <li>Utilisation stratégique de VPN pour accéder à plus de contenu 🌍</li>
            <li>Alternatives gratuites et légales de qualité [application android (free et pro) et lien] 🆓</li>
            <li>Comparatif des offres par pays</li>
            <li>Technique des cookies pour avoir netflix en illimité</li>
            <li>Comment choisir la bonne adresse ip</li>
            <li>BONUS : Un compte netflix offert</li>
        </ul>
        <p><strong>Durée :</strong> 3h express</p>
    `,
    duration: "3h",
    instructor: "Conseiller médias",
    level: "Tous niveaux",
    categories: ["film-serie", "film"],
    isFeatured: true,
    popularity: 7
},
trouverpdf: {
    id: 'trouverpdf',
    title: "Trouver n'importe quel PDF ou livre 📚🔍",
    price: 10000,
    prixPromo: 2000,
    fees: 0,
    image: "assets/images/formations/fingPdf.png",
    description: "Apprenez les méthodes pour localiser n'importe quel PDF ou livre en ligne efficacement.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Ce cours transformera votre façon de rechercher des documents PDF, vous permettant de trouver même les ressources les plus rares et protégées en quelques minutes.</p>
        
        <h3>Compétences clés 🧠 :</h3>
        <ul>
            <li>Techniques avancées de Google Dorking 📎</li>
            <li>Exploitation des moteurs spécialisés et forums académiques 📁</li>
            <li>Accès aux bases de données universitaires</li>
            <li>Récupération de PDF supprimés</li>
            <li>Canaux télégram de pdf</li>
            <li>Comment télécharger n'importe quel livre sur scribd</li>
            <li>BONUS : Liste de 5 canaux télégrams de livre</li>
        </ul>
        <p><strong>Durée :</strong> 3h de formation pratique</p>
    `,
    duration: "3h",
    instructor: "Chercheur d'info",
    level: "Tous niveaux",
    categories: ["pdf-forma", "livre-pdf", "hacking", "pc-hack", "android-hack", "ios-hack"],
    isFeatured: true,
    popularity: 6
},

fakegmail: {
    id: 'fakegmail',
    title: "Fake Gmail ✉🕵",
    price: 15000,
    prixPromo: 4000,
    fees: 0,
    image: "assets/images/formations/tempmail.jpg",
    description: "Créez des adresses Gmail temporaires et personnalisées pour vous protéger.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Protégez votre vie privée et évitez le spam avec ces techniques professionnelles de création d'adresses email temporaires (édictable) et sécurisées.</p>
        
        <h3>Ce que vous saurez faire 🔐 :</h3>
        <ul>
            <li>Création de mails professionnels temporaires édictable à l'aide application 🕒</li>
            <li>Utilisation avancée des boîtes éphémères 📪</li>
            <li>Techniques anti-spam et protection de l'identité 🚫</li>
            <li>BONUS : Une application de génératin de fausse carte d'identité</li>
        </ul>
        <p><strong>Durée :</strong> 2h de formation intensive</p>
    `,
    duration: "2h",
    instructor: "Expert anonymat",
    level: "Tous niveaux",
    categories: ["hacking", "android-hack"],
    isFeatured: true,
    popularity: 6
},

fakenumber: {
    id: 'fakenumber',
    title: "Fake Number 📞🔒",
    price: 8000,
    prixPromo: 1000,
    fees: 0,
    image: "assets/images/formations/freenumber.jpg",
    description: "Générez des numéros virtuels pour vos inscriptions sensibles ou anonymes.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Gardez votre numéro personnel privé tout en ayant accès à tous les services nécessaires grâce à ces techniques professionnelles de numéros virtuels.</p>
        
        <h3>Dans cette formation 📲 :</h3>
        <ul>
            <li>Création de numéros jetables pour toutes les plateformes 📤</li>
            <li>Comparatif des services gratuits et premium 🌐</li>
            <li>Utilisation sécurisée pour protéger votre identité 🛡</li>
            <li>BONUS : Liste des meilleurs fournisseurs par pays</li>
        </ul>
        <p><strong>Durée :</strong> 2h de formation pratique</p>
    `,
    duration: "2h",
    instructor: "Conseiller cybersécurité",
    level: "Tous niveaux",
    categories: ["hacking", "android-hack"],
    isFeatured: true,
    popularity: 5
},

pariethockey: {
    id: 'pariethockey',
    title: "Parier et gagner au hockey 🏒💰",
    price: 15000,
    prixPromo: 4000,
    fees: 0,
    image: "assets/images/formations/hockeyparis.jpg",
    description: "Utilisez des statistiques et des stratégies logiques pour maximiser vos paris sur le hockey.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Transformez-vous en parieur professionnel grâce à ces techniques éprouvées qui analysent froidement les statistiques pour des prédictions gagnantes.</p>
        
        <h3>Contenu 📈 :</h3>
        <ul>
            <li>Décryptage avancé des cotes et calcul des probabilités 🧮</li>
            <li>Analyse approfondie d'équipe 🧊</li>
            <li></li>
            <li>Calcul de gain en fonction des côtes</li>
            <li>Compte démo 1xbet offert avec 5.000.000F pour tester</li>
            <li>BONUS : Sofascore pro</li>
        </ul>
        <p><strong>Durée :</strong> 3h de formation intensive</p>
    `,
    duration: "3h",
    instructor: "Parieur professionnel",
    level: "Tous niveaux",
    categories: ["hacking", "android-hack", "ios-hack"],
    isFeatured: true,
    popularity: 3
},

eviterarnaque: {
    id: 'eviterarnaque',
    title: "Comment ne pas se faire arnaquer en ligne ❌💳",
    price: 10000,
    prixPromo: 2500,
    fees: 0,
    image: "assets/images/formations/anaque.png",
    description: "Développez votre sens critique face aux escroqueries numériques avec des méthodes simples et efficaces.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation essentielle vous équipe pour détecter et éviter toutes les formes d'arnaques en ligne, des plus évidentes aux plus sophistiquées.</p>
        
        <h3>Thèmes couverts 🕵‍♀ :</h3>
        <ul>
            <li>Reconnaître les arnaques classiques : phishing, faux supports 🎭</li>
            <li>Détecter les sites frauduleux et les faux arguments commerciaux ⚠</li>
            <li>Conseils pratiques pour réagir en cas de tentative d'arnaque 🧠</li>
            <li>Faux marchés en ligne et ventes frauduleuses</li>
            <li>Protection des données bancaires</li>
            <li>BONUS : Liste des arnaques les plus courantes par secteur</li>
        </ul>
        <p><strong>Durée :</strong> 2h express mais vitales</p>
    `,
    duration: "2h",
    instructor: "Expert cybersécurité",
    level: "Tous niveaux",
    categories: ["dev-perso", "hacking", "android-hack"],
    isFeatured: true,
    popularity: 5
},

grossesbite: {
    id: 'grossesbite',
    title: "Comment avoir une grosse b... 🍆📘",
    price: 70000,
    prixPromo: 40000,
    fees: 0,
    image: "assets/images/formations/bite.jpg",
    description: "Guide basé sur des méthodes naturelles et médicales.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Ce guide exhaustif explore toutes les méthodes scientifiquement validées pour l'augmentation pénienne, en distinguant les faits des mythes.</p>
        
        <h3>Contenu détaillé 🧐 :</h3>
        <ul>
            <li>Nutrition spécifique et compléments naturels (15000F) 🏋</li>
            <li>Exercices prouvés et programmes d'entraînement ⚕</li>
            <li>Huile bazouka (15000F)</li>
            <li>Crème bazouka (10000F), l'huile est fait à base de : <br> Beurre de karité <br> Huile de kigelia et poudre <br>Huile de fenugrec et poudre <br>Huile d' akpi et poudre <br>Poudre de petit colas<br> Poudre de maca  </li>
            <li>BONUS : <abbr title="voir notre formation sur lèvre rose"> Lèvres roses</abbr> offert</li>
        </ul>
        <p><strong>Durée :</strong> 21 jours ( jours scientifiquement prouvé) </p>
        <p><strong>Prérequis :</strong><span style="color:red;"> Ne pas se mastuber avant (2jrs avant) et pendant le traitement , cela le rend inéfficace</span></p>
    `,
    duration: "Lecture libre",
    instructor: "Conseiller santé",
    level: "Adulte uniquement",
    categories: ["bien-etre", "dev-perso"],
    isFeatured: true,
    popularity: 3
},

levresroses: {
    id: 'levresroses',
    title: "Comment avoir les lèvres roses 💋🌸",
    price: 10000,
    prixPromo: 2500,
    fees: 0,
    image: "assets/images/formations/levrerose.jpg",
    description: "Pommade naturelle pour rendre vos lèvres douces et attrayantes.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Découvrez comment obtenir des lèvres naturellement roses et en parfaite santé grâce à des méthodes 100% naturelles et économiques.</p>
        
        <h3>Ce que vous apprendrez 🌿 :</h3>
        <ul>
            <li>SPommade à appliquer matin et soir 🍯</li>
            <li>Technique pour bien appliqué la pommade 💦</li>
            <li>Technique pour lutter contre les peaux mortes des lèvres</li>
            <li>BONUS : Une formatio vous sera offerte sur comment appliquer la pommade</li>
        </ul>
    `,
    duration: "Lecture libre",
    instructor: "Coach bien-être",
    level: "Tous niveaux",
    categories: ["bien-etre", "dev-perso"],
    isFeatured: true,
    popularity: 7
},

iptv: {
    id: 'iptv',
    title: "IPTV : Regarder toutes les chaînes 📺🌍",
    price: 20000,
    prixPromo: 5000,
    fees: 0,
    image: "assets/images/formations/iptv.jpg",
    description: "Apprenez à accéder à des chaînes internationales via IPTV sur tous appareils, configuration et sécurité incluses.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Débloquez un univers de divertissement illimité avec cette formation IPTV complète qui vous donne accès à des milliers de chaînes mondiales en qualité HD depuis votre salon.</p>
        
        <h3>Contenu premium 📡 :</h3>
        <ul>
            <li>Guide complet d'installation sur tous vos appareils (Smart TV, Android, PC)</li>
            <li>Liste des meilleures applications IPTV gratuites et premium</li>
            <li>Où trouver des playlists M3U fiables et actualisées</li>
            <li>Configuration avancée pour éviter les buffering</li>
            <li>Astuces VPN pour un streaming sécurisé</li>
            <li>Dépannage des problèmes courants</li>
            <li>BONUS : Accès à notre playlist privée pendant 1 mois</li>
        </ul>
        <p><strong>Durée :</strong> 3h de tutoriels pas-à-pas</p>
        <p><strong>Niveau :</strong> Tous niveaux</p>
    `,
    duration: "3h",
    instructor: "Technicien streaming",
    level: "Tous niveaux",
    categories: ["film", "film-serie"],
    isFeatured: true,
    popularity: 9
},

voixoffapp: {
    id: 'voixoffapp',
    title: "Créer ses propres voix off 🎙📱",
    price: 15000,
    prixPromo: 5000,
    fees: 500,
    image: "assets/images/formations/voixoff.jpg",
    description: "Maîtrisez des applications de voix off qui ne dépendent pas d'IA pour un rendu naturel et contrôlé.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Devenez votre propre studio d'enregistrement professionnel avec ces techniques qui transforment votre smartphone en outil de production audio haute qualité.</p>
        
        <h3>Studio portable 🎛 :</h3>
        <ul>
            <li>Rendre un texte en song</li>
            <li>Choix du micro externe pour un son studio</li>
            <li>Changer la tonalité de son song</li>
            <li>Montage et nettoyage audio avancé</li>
            <li>Ajout d'effets et mastering simple</li>
            <li>Intégration dans vos vidéos et podcasts</li>
            <li>Application de mixage de son</li>
            <li>BONUS : Bibliothèque d'effets sonores gratuits et Clonage de voix</li>
        </ul>
        <p><strong>Durée :</strong> 3h pour un son pro</p>
        <p><strong>Niveau :</strong> Tous niveaux</p>
    `,
    duration: "3h",
    instructor: "Créateur audio",
    level: "Tous niveaux",
    categories: ["infographie", "infographie-android", "apk-mod-android", "hacking", "android-hack"],
    isFeatured: true,
    popularity: 10
},

appaffichepro: {
    id: 'appaffichepro',
    title: "applis pro pour créer des affiches 🎨📱",
    price: 18000,
    prixPromo: 4500,
    fees: 0,
    image: "assets/images/formations/10apk.jpg",
    description: "Découvrez les meilleures applications mobiles pour concevoir des affiches percutantes et professionnelles.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Transformez votre smartphone en studio graphique professionnel avec ces 10 applications puissantes qui rivalisent avec les logiciels desktop. Créez des designs percutants en quelques minutes, où que vous soyez.</p>
        
        <h3>Kit complet du graphiste mobile 📦 :</h3>
        <ul>
            <li>Canva Pro - Maîtrise des templates premium et branding</li>
            <li>Pixellab - Techniques avancées de typographie et effets texte</li>
            <li>PicsArt - Retouche photo professionnelle et montages créatifs</li>
            <li>Poster Maker - Création d'affiches événementielles percutantes</li>
            <li>Adobe Express - Design vectoriel et logos haute qualité</li>
            <li>TBEH IA pour générer des images à l'infinie</li>
            <li>Techniques de composition graphique pour non-designers</li>
            <li>Workflow professionnel entre les différentes apps</li>
            <li>BONUS : PDF sur le montage photo pour mobile</li>
        </ul>
        <p><strong>Durée :</strong> 3h de formation + PDF bonus</p>
        <p><strong>Niveau :</strong> Tous niveaux</p>
    `,
    duration: "3h",
    instructor: "Graphiste Mobile",
    level: "Tous niveaux",
    categories: ["infographie", "infographie-android", "apk-mod-android"],
    isFeatured: true,
    popularity: 6
},

montagevideo20apps: {
    id: 'montagevideo20apps',
    title: "10 applications pro pour montage vidéo 📹🔥",
    price: 20000,
    prixPromo: 7000,
    fees: 0,
    image: "assets/images/formations/video10apk.jpg",
    description: "Les 10 meilleures applications de montage vidéo pour transformer vos idées en films pros.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Devenez un monteur vidéo accompli directement depuis votre mobile avec cette sélection exhaustive des meilleures applications, classées par type de projet et niveau de difficulté.</p>
        
        <h3>Studio de montage portable 🎞 :</h3>
        <ul>
            <li>CapCut - Maîtrise des transitions fluides et effets spéciaux</li>
            <li>Kinemaster - Montage multicaméra et calques professionnels</li>
            <li>Techniques d'export en haute qualité sans perte</li>
            <li>Ajout de musiques et sound design mobile</li>
            <li>Ajout de super transition</li>
            <li>Ajout de sous-titre</li>
            <li>Changer le background d'une vidéo</li>
            <li>3 vidéos de montage pro à réalise : <br>Faire la pub d'une entreprise<br> Se cloner <br> adapté une vidéo mal faite</li>
            <li>Optimisation et adaptation des vidéos pour chaque plateforme</li>
            <li>BONUS : Tuto sur cap cut et cap cut pro offert</li>
        </ul>
        <p><strong>Durée :</strong> 4h de formation pratique</p>
        <p><strong>Niveau :</strong> Débutant à intermédiaire</p>
    `,
    duration: "4h",
    instructor: "Monteur professionnel",
    level: "Débutant à intermédiaire",
    categories: ["infographie", "infographie-android", "apk-mod-android"],
    isFeatured: true,
    popularity: 7
},

fauxabonnes: {
    id: 'fauxabonnes',
    title: "Faux abonnés TikTok / Instagram / Telegram 📈👥",
    price: 17000,
    prixPromo: 4000,
    fees: 0,
    image: "assets/images/formations/abonnelike.png",
    description: "Apprenez à utiliser des services d'automatisation et des stratégies pour gonfler vos comptes sociaux (à but expérimental).",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Décryptez les mécanismes des algorithmes sociaux et apprenez les techniques utilisées par les grandes marques pour booster artificiellement leur visibilité, le tout dans un cadre éthique et expérimental.</p>
        
        <h3>Stratégies growth hacking 📲 :</h3>
        <ul>
            <li>Services d'automatisation sûrs et indétectables</li>
            <li>Techniques de botting avancé pour Instagram</li>
            <li>Création de réseaux de faux comptes crédibles</li>
            <li>payés des abonnées et like sur des sites sûr</li>
            <li>Méthodes alternatives de croissance organique légale</li>
            <li>BONUS : PDF sur comment réussir sur tik tok</li>
        </ul>
        <p><strong>Durée :</strong> 3h de formation technique</p>
        <p><strong>Niveau :</strong> Intermédiaire</p>
    `,
    duration: "3h",
    instructor: "Growth Hacker",
    level: "Intermédiaire",
    categories: ["hacking", "android-hack"],
    isFeatured: true,
    popularity: 5
},

sitesecuritecomptes: {
    id: 'sitesecuritecomptes',
    title: "Site sécurisé pour gérer ses comptes 🔐💼",
    price: 15000,
    prixPromo: 2000,
    fees: 0,
    image: "assets/images/formations/MDPgestion.jpg",
    description: "Gardez vos mots de passe et comptes d'applis, mails et sites dans un coffre-fort numérique personnel.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Protégez votre vie numérique avec cette solution autonome et ultra-sécurisée pour gérer tous vos identifiants sensibles, sans dépendre de services cloud vulnérables.</p>
        <p>J'ai pensé à céer un site où l'on poura sauvegarder ses comptes gmail, sites et identifiants pour ne pas perdre ça, et puisque le site est en local, alors il ya possibilité d'exporter et importer les données</p>
        
        <h3>Fort Knox numérique 🧰 :</h3>
        <ul>
            <li>Facile à utiliser</li>
            <li>sans surveillance: je n'ai pas accès au site, surtout qu'il sera en local (sur ton appareil) et online </li>
            <li>Générateur de mots de passe complexes intégré</li>
            <li>Sauvegarde sécurisée et restauration facile</li>
            <li>Interface intuitive et recherche rapide</li>
            <li>Compatibilité avec tous les navigateurs et tous type d'appareil</li>
            <li>Fonctionnement 90% hors ligne et 10% en ligne (dans un cas urgent si  ous êtes chez un ami)</li>
            <li>BONUS : bot de netflix gratuit</li>
        </ul>
        <p><strong>Durée :</strong> 2h pour une sécurité maximale</p>
        <p><strong>Niveau :</strong> Tous niveaux</p>
    `,
    duration: "2h",
    instructor: "Expert sécurité numérique",
    level: "Tous niveaux",
    categories: ["hacking", "pc-hack", "android-hack", "ios-hack"],
    isFeatured: true,
    popularity: 12
},

venteecommercesite: {
    id: 'venteecommercesite',
    title: "Site e-commerce statique sans base de données 🛒📦",
    price: 180000,
    prixPromo: 40000,
    fees: 0,
    image: "assets/images/formations/ecommerceSite.png",
    description: "Site léger, HTML/CSS/JS avec panier, prêt à héberger sans serveur, avec envoi des commandes via WhatsApp.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Lancez votre boutique en ligne ultra-rapide et économique avec cette solution technique innovante qui élimine la complexité des CMS traditionnels tout en offrant toutes les fonctionnalités essentielles.</p>
        <p>Je vous vend un site comme celui ci, mais une alternative aussi existe (sans panier et ni description ) juste la présentation du produit par une pétite description et un bouton pour payer via whatsapp</p>
        
        <h3>E-commerce nouvelle génération ⚙ :</h3>
        <ul>
            <li>Panier dynamique avec sauvegarde locale</li>
            <li>Galerie produits avec filtres intelligents</li>
            <li>Passage de commande via WhatsApp Business</li>
            <li>Page description pour chaque article</li>
            <li>Design responsive adapté à tous devices</li>
            <li>Optimisation SEO intégrée</li>
            <li>Code propre et bien documenté</li>
            <li>BONUS :  templates premium inclus</li>
        </ul>
        <p><strong>Langages :</strong> HTML, CSS, JS</p>
        <p><strong>Niveau :</strong> Tous niveaux</p>
    `,
    duration: "Code complet fourni",
    instructor: "Dév front-end",
    level: "Tous niveaux",
    categories: ["dev-web", "front-end", "dev-projet", "full-stack"],
    isFeatured: true,
    popularity: 20
},

notevocaleapp: {
    id: 'notevocaleapp',
    title: "Application de prise de notes vocales 🗣📝",
    price: 12000,
    prixPromo: 2000,
    fees: 0,
    image: "assets/images/formations/apkTexteenvocale.png",
    description: "Enregistrez vos idées en vocal directement depuis votre téléphone. Idéal pour étudiants et entrepreneurs.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Transformez vos pensées en actions avec cette application révolutionnaire base sur l'intéligence artificielle qui capture et organise automatiquement vos idées vocales, où que vous soyez.</p>
        
        <h3>Assistant vocal intelligent 🧠 :</h3>
        <ul>
            <li>Enregistre automatiquement vos réunion et les transcrits en des textes</li>
            <li>Enregistrement haute qualité avec réduction de bruit</li>
            <li>Transcription automatique en texte (multilingue)</li>
            <li>Organisation par projets et tags intelligents</li>
            <li>Mode mains libres pour la conduite</li>
            <li>BONUS : Application pour afficher du texte sur appareil photo seilfie (téléprompte)</li>
        </ul>
        <p><strong>Compatibilité :</strong> Android</p>
        <p><strong>Niveau :</strong> Tous niveaux</p>
    `,
    duration: "App mobile fournie",
    instructor: "Formateur mobile",
    level: "Tous niveaux",
    categories: ["application-mod", "apk-mod-android"],
    isFeatured: true,
    popularity: 6
},

mielafricain: {
    id: 'mielafricain',
    title: "Miel africain naturel 🍯🌿",
    price: 10000,
    prixPromo: 4000,
    fees: 0,
    image: "assets/images/formations/MielAfricain.jpg",
    description: "Miel bio 100% naturel récolté en Afrique de l'Ouest. Excellent pour la santé, l'endurance et la nutrition.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Découvrez l'or liquide d'Afrique, un miel pur aux propriétés exceptionnelles, récolté selon des méthodes ancestrales qui préservent tous ses bienfaits naturels.</p>
        
        <h3>Trésor de la nature 🐝 :</h3>
        <ul>
            <li>Renforcement du système immunitaire</li>
            <li>Propriétés antibactériennes et antifongiques</li>
            <li>Source naturelle d'énergie durable</li>
            <li>Aide à la digestion et au sommeil</li>
            <li>Produit par des apiculteurs locaux éthiques</li>
            <li>Sans additifs ni traitement industriel</li>
            <li>Goût riche et authentique</li>
            <li>BONUS : Guide des utilisations médicinales</li>
        </ul>
        <p><strong>Age :</strong> Tout âge</p>
    `,
    duration: "Produit physique",
    instructor: "Producteur local",
    level: "Tous niveaux",
    categories: ["bien-etre", "accesoires"],
    isFeatured: true,
    popularity: 5
},

payersanspayer: {
    id: 'payersanspayer',
    title: "Payer sans payer 💳🚫 (analyse d'arnaques et méthodes)",
    price: 30000,
    prixPromo: 7000,
    fees: 0,
    image: "assets/images/formations/payersanspayer.jpg",
    description: "Nous vous montrerons comment payer des formations, sans vraiment payer",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Il ya posibilité de payer des formation numérique , sans vraiment dépenser un sous.</p>
        
        <h3>Contiendra :</h3>
        <ul>
            <li>Comment trouver des clients</li>
            <li>Comment faire du marketing</li>
            <li>C'est quoi le dropshiping numérique</li>
            <li>Les applications qu'il faut pour faire la pub</li>
        </ul>
        <p><strong>Durée :</strong> 3h de formation intensive</p>
        <p><strong>Niveau :</strong> Tout</p>
        <p><strong>Bonus :</strong> PDF sur le marketing</p>
    `,
    duration: "3h",
    instructor: "Formateur sécurité informatique",
    level: "Avancé",
    categories: ["hacking", "pc-hack", "android-hack"],
    isFeatured: true,
    popularity: 5
},

iphacking: {
    id: 'iphacking',
    title: "Pirater via l'adresse IP 🌐🧠 (à but éducatif)",
    price: 28000,
    prixPromo: 7500,
    fees: 0,
    image: "assets/images/formations/piratageParip.jpg",
    description: "Décryptez l'usage de l'IP dans les connexions réseau et son rôle dans les intrusions.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Maîtrisez l'art du profiling réseau via l'adresse IP, une compétence cruciale pour tout professionnel de la cybersécurité ou administrateur système.</p>
        
        <h3>Exploration IP 🔧 :</h3>
        <ul>
            <li>C'est quoi une adresse ip</li>
            <li>Pirater une personne grâce à son ip</li>
            <li>Techniques avancées de traçage et géolocalisation IP</li>
            <li>Scan de ports et services exposés</li>
            <li>Méthodes d'énumération des vulnérabilités</li>
            <li>Analyse des logs et détection d'intrusion</li>
            <li>Techniques d'obfuscation d'adresse IP</li>
            <li>Outils professionnels d'analyse réseau</li>
            <li>BONUS : Liste des vulnérabilités IP courantes</li>
        </ul>
        <p><strong>Durée :</strong> 6h de hacking éthique</p>
        <p><strong>Niveau :</strong> Avancé</p>
    `,
    duration: "6h",
    instructor: "Analyste en cybersécurité",
    level: "Avancé",
    categories: ["hacking", "pc-hack", "android-hack"],
    isFeatured: true,
    popularity: 7
},

ddoslearning: {
    id: 'ddoslearning',
    title: "Apprendre le DDoS 💣🌐 (à but éducatif)",
    price: 27000,
    prixPromo: 7000,
    fees: 0,
    image: "assets/images/formations/ddos.png",
    description: "Comprenez les attaques DDoS pour mieux sécuriser vos serveurs et infrastructures.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Décryptez les mécanismes des attaques par déni de service qui paralysent les plus grands sites, et apprenez à protéger vos services contre ces menaces.</p>
        
        <h3>Modules experts 🔎 :</h3>
        <ul>
            <li>C'est quoi le Ddos</li>
            <li>Anatomie des différentes attaques DDoS (Layer 3 à 7)</li>
            <li>Installation de termux pour expliquer ce que s'est le Ddos</li>
            <li>Comment les sites se protège des attaques par Ddos</li>
            <li>BONUS : Attaquer un site avec termux (un site de chez nous héberger sur github)</li>
        </ul>
        <p><strong>Durée :</strong> 5h de cyber-défense</p>
        <p><strong>Niveau :</strong> Intermédiaire à avancé</p>
    `,
    duration: "5h",
    instructor: "Spécialiste Réseau",
    level: "Intermédiaire à avancé",
    categories: ["hacking", "pc-hack", "dev-web", "android-hack"],
    isFeatured: true,
    popularity: 8
},

piraterwifi: {
    id: 'piraterwifi',
    title: "Pirater un Wi-Fi 🔓📶 (à but éducatif)",
    price: 25000,
    prixPromo: 6000,
    fees: 0,
    image: "assets/images/formations/piraterunwifi.jpg",
    description: "Apprenez à tester la sécurité des réseaux WiFi afin de mieux les protéger.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Cette formation avancée vous révèle les techniques réelles utilisées par les hackers pour pénétrer les réseaux WiFi, afin que vous puissiez mieux vous défendre.</p>
        
        <h3>Pénétration WiFi 📚 :</h3>
        <ul>
            <li>Analyse complète des protocoles WiFi (WEP, WPA, WPA2)</li>
            <li>Techniques de capture et craquage de handshake</li>
            <li>Attaques par dictionnaire et force brute optimisées</li>
            <li>Détection des points d'accès rogue</li>
            <li>Méthodes de protection avancées</li>
            <li>Configuration d'un réseau inviolable</li>
            <li>BONUS : Dictionnaires d'attaque optimisés en fichier texte (.txt) </li>
        </ul>
        <p><strong>Durée :</strong> 6h de formation offensive</p>
        <p><strong>Niveau :</strong> Avancé</p>
    `,
    duration: "6h",
    instructor: "Expert en sécurité sans fil",
    level: "Avancé",
    categories: ["hacking", "pc-hack", "android-hack"],
    isFeatured: true,
    popularity: 7
},

adobecrackpack: {
    id: 'adobecrackpack',
    title: "Pack d'applications Adobe craquées 🎨🔓",
    price: 30000,
    prixPromo: 7000,
    fees: 0,
    image: "assets/images/formations/packadobe.jpg",
    description: "Obtenez les logiciels Adobe populaires préactivés pour travailler sans limite.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Accédez à la suite Adobe CC complète sans dépenser des milliers d'euros, avec des versions stables et parfaitement activées pour un usage professionnel.</p>
        
        <h3>Pack ultime 📦 :</h3>
        <ul>
            <li>Photoshop CC - Édition complète avec tous les plugins</li>
            <li>Premiere Pro - Montage vidéo professionnel</li>
            <li>After Effects - Effets spéciaux et animations</li>
            <li>Illustrator - Design vectoriel premium</li>
            <li>Lightroom - Retouche photo avancée</li>
            <li>InDesign - Mise en page professionnelle</li>
            <li>BONUS : Guide d'installation détaillé et support technique</li>
        </ul>
        <p><strong>Compatibilité :</strong> Windows uniquement</p>
        <p><strong>Niveau :</strong> Tous niveaux</p>
    `,
    duration: "Installation guidée",
    instructor: "Tech Support",
    level: "Tous niveaux",
    categories: ["infographie", "infographie-pc"],
    isFeatured: true,
    popularity: 13
},
  
osintgoogledorking: {
    id: 'osintgoogledorking',
    title: "OSINT & Google Dorking 🔍🌐",
    price: 35000,
    prixPromo: 8000,
    fees: 0,
    image: "assets/images/formations/osintetgoogledorking.jpg",
    description: "Maîtrisez les techniques d'investigation en ligne pour retrouver des informations sensibles ou oubliées.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Devenez un enquêteur numérique redoutable en maîtrisant les techniques professionnelles de recherche d'information en sources ouvertes.</p>
        
        <h3>Modules 💼 :</h3>
        <ul>
            <li>Fondamentaux du renseignement en sources ouvertes (OSINT) 🔎</li>
            <li>Dorking avancé avec Google : opérateurs et combinaisons 🎯</li>
            <li>Applications pratiques en enquête numérique 👤</li>
            <li>Recherche dans les métadonnées</li>
            <li>Utilisation des archives web</li>
            <li>Outils automatisés d'OSINT</li>
            <li>BONUS : Liste de dorks prêts à l'emploi</li>
        </ul>
        <p><strong>Durée :</strong> 7h de formation intensive</p>
    `,
    duration: "7h",
    instructor: "Cyber-enquêteur",
    level: "Avancé",
    categories: ["hacking", "dev-web", "pc-hack", "android-hack"],
    isFeatured: true,
    popularity: 12
},

algobox: {
    id: 'algobox',
    title: "Algobox pour l'algorithmique 🧠📐",
    price: 15000,
    prixPromo: 3500,
    fees: 0,
    image: "assets/images/formations/algobox.jpg",
    description: "Découvrez l'outil Algobox pour comprendre les bases de l'algorithmique.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Apprenez à penser comme un informaticien grâce à Algobox, l'outil idéal pour maîtriser les concepts algorithmiques fondamentaux.</p>
        
        <h3>Contenu 📘 :</h3>
        <ul>
            <li>Introduction aux algorithmes : variables, constante, boucles, conditions 🔢</li>
            <li>Algobox pas à pas : interface et exécution 🧩</li>
            <li>Résolution d'exercices pratiques classiques ✍</li>
            <li>Algorithmes de tri et recherche</li>
            <li>Notions de complexité algorithmique</li>
            <li>Transition vers les vrais langages</li>
            <li>BONUS : Bibliothèque d'algorithmes prêts</li>
        </ul>
        <p><strong>Durée :</strong> 4h de formation interactive</p>
        <p><strong>Fichier & Format :</strong> Fichier rar au format Mp4 (vidéo)</p>
    `,
    duration: "4h",
    instructor: "Formateur algorithmique",
    level: "Débutant",
    categories: ["dev-perso", "dev-web", "font-end", "backend", "full-stack", "dev-mobile"],
    isFeatured: true,
    popularity: 11
},

apprendreadessiner: {
    id: 'apprendreadessiner',
    title: "Apprendre à dessiner ✏🎨",
    price: 20000,
    prixPromo: 2600,
    fees: 0,
    image: "assets/images/formations/apprendreadessiner.jpg",
    description: "Maîtrisez les bases du dessin artistique, des traits aux ombrages.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Ce cours complet vous guide pas à pas dans l'apprentissage du dessin, des fondamentaux aux techniques avancées, même si vous partez de zéro.</p>
        
        <h3>Modules inclus 🎓 :</h3>
        <ul>
            <li>Maîtrise des proportions et anatomie humaine/animale 🧍</li>
            <li>Techniques avancées de perspective et composition 🖼</li>
            <li>Méthodes professionnelles de croquis et esquisse 🖋</li>
            <li>Ombrage et travail des textures</li>
            <li>Dessin d'observation et imagination</li>
            <li>Choix des matériaux et outils</li>
            <li>BONUS : Galerie de références et modèles</li>
        </ul>
        <p><strong>Durée :</strong> 1 Semaine de pratique guidée</p>
        <p><strong>Format :</strong> Des PDF de formation sur le dessin</p>
    `,
    duration: "1 Semaine",
    instructor: "Artiste illustrateur",
    level: "Débutant à intermédiaire",
    categories: ["infographie", "infographie-android", "infographie-pc"],
    isFeatured: true,
    popularity: 5
},

apkpro300: {
    id: 'apkpro300',
    title: "300 APK Pro pour devenir un hacker complet 🚀📱",
    price: 40000,
    prixPromo: 7000,
    fees: 0,
    image: "assets/images/formations/300apkHacker.jpg",
    description: "Un trésor d'application pour rendre ton Android ultra-puissant, productif, et... redoutable.",
    fullDescription: `
        <h3>Ce que tu vas débloquer :</h3>
        <p>Imagine transformer ton smartphone en une vraie boîte à outils de hacker, de créateur et d'explorateur digital. Tu vas accéder à plus de <strong>300 APK PRO</strong> qui te permettront de faire ce que peu savent faire avec leur téléphone.</p>
        
        <h3>Contenu du pack :</h3>
        <ul>
            <li>📸 Extraire le texte d'une image en un clic</li>
            <li>🎧 Lecture musicale sans pub et sans limite</li>
            <li>🎙 Cloner une voix pour en faire ce que tu veux</li>
            <li>🎬 Applications PRO pour montage vidéo</li>
            <li>🖼 Montage photo de niveau professionnel</li>
            <li>📂 Récupération de fichiers et photos supprimées</li>
            <li>🔍 Savoir qui te surveille sur ton réseau</li>
            <li>💬 Telegram ultra-modifié avec des fonctions cachées</li>
            <li>📺 Netflix gratuit avec accès illimité</li>
            <li>🧰 Et des centaines d’autres surprises pour t'équiper comme un vrai pro</li>
        </ul>
        
        <h3>Pourquoi tu vas adorer :</h3>
        <ul>
            <li>✅ Gain de temps énorme</li>
            <li>✅ Fonctionnalités avancées que même tes amis n’ont pas</li>
            <li>✅ Aucun besoin de rooter ton téléphone</li>
            <li>✅ Pas de pub, pas de restrictions</li>
            <li>✅ Deviens autonome, créatif et puissant avec ton Android</li>
        </ul>
        
        <p><strong>Compatibilité :</strong> 100% Android 📱</p>
        <p><strong>Niveau :</strong> Tous niveaux – Débutant à Avancé</p>
        <p><strong>Bonus :</strong> Un canal télégram où vous pouriez avoir toutes vos applications pro</p>
    `,
    duration: "Accès illimité aux APK",
    instructor: "Équipe Digital Pro Hack",
    level: "Tous niveaux",
    categories: ["application-mod", "apk-mod-android", "android-hack"],
    isFeatured: true,
    popularity: 6
},

apprendrerobotique: {
    id: 'apprendrerobotique',
    title: "Apprendre la robotique 🤖📐",
    price: 35000,
    prixPromo: 9000,
    fees: 0,
    image: "assets/images/formations/robotique.jpg",
    description: "Initiez-vous à la conception et à la programmation de robots intelligents.",
    fullDescription: `
        <h3>Description complète :</h3>
        <p>Plongez dans le monde fascinant de la robotique et apprenez à créer vos propres robots fonctionnels, depuis les bases jusqu'aux concepts avancés.</p>
        
        <h3>Modules 👇 :</h3>
        <ul>
            <li>Composants électroniques essentiels : capteurs, actionneurs, cartes ⚙</li>
            <li>Langages de programmation robotique : Python, C++, ROS 🧑‍💻</li>
            <li>Projet final d'assemblage complet d'un robot fonctionnel 🤖</li>
            <li>Algorithmes de navigation et intelligence artificielle</li>
            <li>Conception mécanique et impression 3D</li>
            <li>Intégration de vision par ordinateur</li>
            <li>BONUS : Liste de fournisseurs et kits recommandés</li>
        </ul>
        <p><strong>Durée :</strong> 12h pratiques en laboratoire virtuel</p>
    `,
    duration: "12h",
    instructor: "Ingénieur en robotique",
    level: "Débutant à intermédiaire",
    categories: ["dev-projet", "poo", "dev-web"],
    isFeatured: true,
    popularity: 6
},


    // Ajoutez ici tous vos autres produits...
};

// Variables globales pour le filtrage
let currentSort = 'all';
let currentCategory = 'all';
let currentSearchTerm = '';
let currentMinPrice = null;
let currentMaxPrice = null;

// Fonction pour créer une carte de formation
function createCourseCard(product) {
    const hasPromo = product.prixPromo && product.prixPromo < product.price;
    const discountPercentage = hasPromo ? Math.round(((product.price - product.prixPromo) / product.price) * 100) : 0;
    const card = document.createElement('div');
    card.className = 'course-card';
    card.dataset.price = product.price;
    card.dataset.popularity = product.popularity || 0;
    
    // Ajouter toutes les catégories comme data attributes
    if (product.categories && product.categories.length) {
        product.categories.forEach((cat, index) => {
            card.dataset[`category-${index}`] = cat;
        });
    }

    card.innerHTML = `
        ${hasPromo ? `<div class="promo-badge">-${discountPercentage}%</div>` : ''}
        <img src="${product.image}" alt="${product.title}">
        <div class="course-content">
            <h3 class="course-title">${product.title}</h3>
            <p class="course-description">${product.description.substring(0, 80)}...</p>
            <div class="course-meta">
                <span class="course-level">${product.level}</span>
                <span class="course-duration">${product.duration}</span>
            </div>
            <div class="course-price">
                ${hasPromo ? `<span class="course-price-promo">${product.price.toLocaleString()} FCFA</span>` : ''}
                <span class="course-price-final">${hasPromo ? product.prixPromo.toLocaleString() : product.price.toLocaleString()} FCFA</span>
            </div>
            <div class="course-actions">
                <button class="btn btn-outline" onclick="location.href='produit.html?id=${product.id}'">
                    <i class="fas fa-info-circle"></i> Détails
                </button>
                <button class="btn btn-primary" onclick="addToCart('${product.id}')">
                    <i class="fas fa-cart-plus"></i> Ajouter
                </button>
                <button class="btn btn-whatsapp pay-now" data-product-id="${product.id}" onclick="payNow('${product.id}')">
                    <i class="fab fa-whatsapp"></i> Payer<br>maintenant
                </button>
            </div>
        </div>
    `;

    return card;
}

// Fonction pour payer immédiatement un produit
window.payNow = function(productId) {
    const product = PRODUCTS[productId];
    if (!product) {
        showToast("Produit non trouvé", 'error');
        return;
    }

    const prixAffiché = product.prixPromo || product.price;
    const total = prixAffiché + (product.fees || 0);

    const message = `Bonjour, je souhaite commander la formation suivante :

Formation: ${product.title}

${product.prixPromo ? `Prix original: ${product.price.toLocaleString()} FCFA\nPrix promo: ${product.prixPromo.toLocaleString()} FCFA` : `Prix: ${product.price.toLocaleString()} FCFA`}

Frais: ${(product.fees || 0).toLocaleString()} FCFA

Total: ${total.toLocaleString()} FCFA

Merci de me fournir les informations de paiement.`;

    if (confirm(`Confirmez-vous la commande de "${product.title}" pour ${total.toLocaleString()} FCFA?`)) {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/2250595762779?text=${encodedMessage}`, '_blank');
    }
};

// Fonction pour ajouter au panier (version améliorée pour mobile)
window.addToCart = function(productId) {
    const product = PRODUCTS[productId];
    if (!product) return;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        const productWithQuantity = {
            id: product.id,
            title: product.title,
            price: product.price,
            prixPromo: product.prixPromo,
            fees: product.fees,
            image: product.image,
            quantity: 1
        };
        cart.push(productWithQuantity);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${product.title} ajouté au panier`);
    if (window.innerWidth <= 768) {
        const event = new Event('cartUpdated');
        window.dispatchEvent(event);
    }
};

// Fonction pour mettre à jour le compteur d'articles dans le panier
window.updateCartCount = function() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const countElements = document.querySelectorAll('#cart-count, #cart-count-mobile');
        const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
        countElements.forEach(el => {
            el.textContent = totalItems;
            el.style.display = totalItems > 0 ? 'flex' : 'none';
        });
        return totalItems;
    } catch (error) {
        console.error("Erreur de mise à jour du panier:", error);
        return 0;
    }
};

// Fonction pour écouter les changements du panier
function setupCartListeners() {
    window.addEventListener('cartUpdated', function() {
        updateCartCount();
    });
    updateCartCount();
}

// Fonction pour obtenir tous les produits visibles
function getVisibleProducts() {
    return Object.values(PRODUCTS).filter(product => product.isFeatured !== false);
}

// Fonction pour vérifier si un produit appartient à une catégorie ou ses sous-catégories
function productMatchesCategory(product, category) {
    if (category === 'all') return true;
    
    // Vérifie si le produit a la catégorie directement
    if (product.categories && product.categories.includes(category)) {
        return true;
    }
    
    // Vous pouvez ajouter ici une logique pour les relations parent/enfant si nécessaire
    // Par exemple, si on filtre par "hacking", on pourrait vouloir inclure "pc-hack", "android-hack", etc.
    
    return false;
}

// Fonction principale pour appliquer tous les filtres et tris
function applyAllFiltersAndSort() {
    let products = getVisibleProducts();

    // 1. Appliquer la recherche
    if (currentSearchTerm) {
        const term = currentSearchTerm.toLowerCase();
        products = products.filter(product =>
            product.title.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term)
        );
    }

    // 2. Appliquer le filtre de catégorie
    if (currentCategory !== 'all') {
        products = products.filter(product => 
            productMatchesCategory(product, currentCategory)
        );
    }

    // 3. Appliquer le filtre de prix
    if (currentMinPrice !== null || currentMaxPrice !== null) {
        const min = currentMinPrice !== null ? currentMinPrice : 0;
        const max = currentMaxPrice !== null ? currentMaxPrice : Number.MAX_SAFE_INTEGER;
        
        products = products.filter(product => {
            const price = product.prixPromo || product.price;
            return price >= min && price <= max;
        });
    }

    // 4. Appliquer le tri
    switch(currentSort) {
        case 'price-asc':
            products.sort((a, b) => (a.prixPromo || a.price) - (b.prixPromo || b.price));
            break;
        case 'price-desc':
            products.sort((a, b) => (b.prixPromo || b.price) - (a.prixPromo || a.price));
            break;
        case 'all':
        default:
            products.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }

    return products;
}

// Fonction pour mettre à jour l'affichage des produits
function updateProductsDisplay() {
    const filteredProducts = applyAllFiltersAndSort();

    // Préparer les données pour la pagination
    window.allFilteredCourses = filteredProducts.map(product => ({
        element: createCourseCard(product),
        name: product.title.toLowerCase(),
        description: product.description.toLowerCase(),
        price: product.price,
        popularity: product.popularity || 0,
        categories: product.categories || []
    }));

    // Initialiser ou mettre à jour la pagination
    if (window.initPagination) {
        window.initPagination();
    }

    // Forcer le retour à la première page
    if (window.resetToFirstPage) {
        window.resetToFirstPage();
    }
}

// Configuration des boutons de filtre
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryLinks = document.querySelectorAll('.category-content a:not(.parent-category)');
    const parentCategories = document.querySelectorAll('.parent-category');
    const searchInput = document.getElementById('search-input');
    const applyPriceRangeBtn = document.getElementById('apply-price-range');
    const resetPriceRangeBtn = document.getElementById('reset-price-range');

    // Boutons de tri principal
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentSort = button.dataset.filter;
            updateProductsDisplay();
        });
    });

    // Filtrage par catégorie (sous-catégories)
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = link.dataset.category;
            document.querySelector('.category-btn').textContent = 
                currentCategory === 'all' ? 'Catégorie' : `Catégorie: ${link.textContent}`;
            updateProductsDisplay();
        });
    });

    // Filtrage par catégorie parente
    parentCategories.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = link.dataset.category;
            document.querySelector('.category-btn').textContent = 
                currentCategory === 'all' ? 'Catégorie' : `Catégorie: ${link.textContent}`;
            updateProductsDisplay();
        });
    });

    // Recherche
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            currentSearchTerm = searchInput.value;
            updateProductsDisplay();
        });
    }

    // Filtrage par prix
    if (applyPriceRangeBtn) {
        applyPriceRangeBtn.addEventListener('click', () => {
            currentMinPrice = parseFloat(document.getElementById('min-price').value) || null;
            currentMaxPrice = parseFloat(document.getElementById('max-price').value) || null;
            updateProductsDisplay();
        });
    }

    // Réinitialisation du filtre de prix
    if (resetPriceRangeBtn) {
        resetPriceRangeBtn.addEventListener('click', () => {
            document.getElementById('min-price').value = '';
            document.getElementById('max-price').value = '';
            currentMinPrice = null;
            currentMaxPrice = null;
            updateProductsDisplay();
        });
    }
}

// Initialisation de l'application
function initApp() {
    setupCartListeners();
    if (document.getElementById('courses-container')) {
        setupFilterButtons();
        updateProductsDisplay();
    }
    updateCartCount();
}

// Initialisation
document.addEventListener('DOMContentLoaded', initApp);