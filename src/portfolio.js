const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nicolasbeckerich.github.io/Portfolio_Nicolas_Beckerich',
  title: 'NB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nicolas Beckerich',
  role: 'Développeur Web Junior',
  description:
    'Formé pendant 8 mois avec OpenClassrooms dans le domaine du développement Web.',
  // resume: 'https://example.com',
  social: {
    // linkedin: 'https://linkedin.com',
    github: 'https://github.com/NicolasBeckerich',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Kasa',
    description:'Réalisation de la plateforme Web Kasa en utilisant React pour les composants, React Router pour la navigation, Sass pour le style et les animations.',
    difficulty: 'Gestion de l\'interactivité des éléments déroulants (Collapse).',
    solution: 'Utilisation du hook useState pour gérer l\'état ouvert/fermé du composant Collapse et du Sass pour les styles de transitions.',
    stack: ['React','SASS'],
    sourceCode: 'https://github.com/NicolasBeckerich/Kasa',
    livePreview: 'https://nicolasbeckerich.github.io/Kasa',
  },
  {
    name: 'Sophie Bluel Portfolio',
    description:
      'Réalisation d\'un site portfolio pour une architecte, intégrant une page de présentation, une interface de connexion administrateur et une modale d\'upload d\'images.',
    difficulty: 'Communication avec l\'API pour manipulation des données.',
    solution: 'Maîtrise de fetch en Javascript pour effectuer des requêtes GET, PUT et autres méthodes afin d\'optimiser la communication avec l\'API.',
    stack: ['JavaScript','HTML','CSS'],
    sourceCode: 'https://github.com/NicolasBeckerich/Sophie_Bluel',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Nina Carducci',
    description:'Optimisation du site de Photographe de Nina Carducci pour améliorer le SEO, l\'accessibilité, le référencement, la performance et correction des bugs spécifiques.',
    difficulty: 'Intégration de Schema.org pour le référencement local.',
    solution: 'Utilisation de documentation spécifiques pour simplifier le processus.',
    stack: ['JavaScript','HTML','CSS'],
    sourceCode: 'https://github.com/NicolasBeckerich/Nina_Carducci',
    livePreview: 'https://nicolasbeckerich.github.io/Nina_Carducci/',
  },
  {
    name: 'Booki',
    description:'Réalisation du site de voyage Booki en HTML et CSS.',
    difficulty: 'Mettre le site en responsive durant le projet.',
    solution: 'Utilisation de média queries pour faire correspondre le site au format tablette et mobile.',
    
stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/NicolasBeckerich/Booki',
    livePreview: 'https://nicolasbeckerich.github.io/Booki',
  },
  {
    name: 'Mon vieux grimoire',
    description:'Réalisation de l\'API back-end pour le site de référencement et de notation de livres Mon Vieux grimoire en prenant en compte les pratiques du Green Code.',
    difficulty: 'L\'optimisation et la conversion des images upload par l\'utilisateur.',
    solution: 'Utilisation de Sharp dans le middleware de traitement d\'images afin de les convertir en format .webp et les optimiser.',
    stack: ['Node.js','Express.js','MongoDB'],
    sourceCode: 'https://github.com/NicolasBeckerich/Mon_Vieux_Grimoire',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Menu Maker By Qwenta',
    description:'Préparation et planification du développement du site Menu Maker by Qwenta en effectuant une veille, en définissant les spécifications techniques et en organisant la gestion de projet.',
    difficulty: 'Déterminer la temporalité des phases de développement.',
    solution: 'Etablissement d\'un tableau Kanban pour planifier et suivre les tâches du projet, permettant ainsi une gestion efficace du calendrier de développement.',
    stack: ['Trello',],
    // sourceCode: '',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'SASS',
  'Express.js',
  'Node.js',
  'Sharp',
  'MongoDB',
  'Trello',
  'Git',
  'Figma',
  'Visual Studio Code'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'beckerichnicolas@gmail.com',
}

export { header, about, projects, skills, contact }
