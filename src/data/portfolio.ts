export type Locale = 'en' | 'es';
export const contact = { email: 'leopalatto20@gmail.com', linkedin: 'https://www.linkedin.com/in/leonardo-perez-palatto/', github: 'https://github.com/leopalatto20', cv: '/cv/CV_LeonardoPerez.pdf' };
const en = {
  skip: 'Skip to selected work', navigation: 'Main navigation', home: 'Leonardo Pérez Palatto, home', focus: 'Software engineering / Networks / Cybersecurity',
  work: 'Work', experience: 'Experience', contact: 'Contact', download: 'Download CV', language: 'Language',
  headline: 'A program of practical systems work.', intro: 'Projects connecting software, networks, and cybersecurity.', selected: 'Selected work',
  expand: 'Expand', close: 'Close', how: 'How the project works', problem: 'The problem', contribution: 'My work', result: 'Result / status', projectLink: 'Link to this project',
  experienceTitle: 'Work experience', educationTitle: 'Education & technical knowledge', education: 'Education', knowledge: 'Technical knowledge', languages: 'Languages',
  degree: 'Computer Science', school: 'Tecnológico de Monterrey', campus: 'Mexico City campus', educationDate: 'AUG 2023—JUL 2027', degreeFocus: 'Cybersecurity focus · In progress',
  coursework: 'Relevant coursework', courses: 'Software development, Data Structures and Algorithms, Object-Oriented Programming, security integration in networks and systems, and cybersecurity.',
  languageDetails: 'Spanish · Native / English · C1', approachTitle: 'How I work', approach: 'Teamwork, problem solving, responsibility, and connecting cybersecurity decisions with business needs.',
  contactTitle: 'Let’s talk about what’s next.', contactText: 'Interested in my work? Get in touch about cybersecurity or software engineering opportunities.', back: 'Back to top',
  description: 'Leonardo Pérez Palatto’s projects in software engineering, networks, and cybersecurity. Explore his work, download his CV, or get in touch.',
  jobs: [
    { company: 'Lacoste', role: 'IT Intern', date: 'APR 2026—PRESENT', items: ['Develop web and desktop applications that automate manual processes across teams, integrating directly with ERP and CRM systems.', 'Resolve operational service incidents in collaboration with the team in France.', 'Manage Mexico’s data implementation for the global Qlik Sense business intelligence platform, develop interfaces, and deliver workshops for nontechnical users.'] },
    { company: 'Tecnológico de Monterrey', role: 'Programming Advisor', date: 'AUG 2025—JUL 2026', items: ['Supported students from different majors with programming coursework, from foundational Python to Data Structures and Algorithms in C++.', 'Helped students work through coding problems and strengthen their understanding of core programming concepts.'] },
  ],
  groups: [
    { title: 'Cloud & delivery', tools: ['Google Cloud', 'AWS', 'Docker', 'Git', 'Linux'] },
    { title: 'Data & messaging', tools: ['SQL', 'NoSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Firebase'] },
    { title: 'Enterprise & collaboration', tools: ['SAP', 'ServiceNow', 'Jira', 'Confluence', 'Qlik Sense'] },
    { title: 'Development', tools: ['React Native', 'Native development', 'Claude Code', 'Pi coding agent', 'Python', 'C++'] },
  ],
};
const es: typeof en = {
  skip: 'Ir a proyectos seleccionados', navigation: 'Navegación principal', home: 'Leonardo Pérez Palatto, inicio', focus: 'Ingeniería de software / Redes / Ciberseguridad',
  work: 'Proyectos', experience: 'Experiencia', contact: 'Contacto', download: 'Descargar CV', language: 'Idioma',
  headline: 'Un programa de sistemas en práctica.', intro: 'Proyectos que conectan software, redes y ciberseguridad.', selected: 'Proyectos seleccionados',
  expand: 'Ampliar', close: 'Cerrar', how: 'Cómo funciona el proyecto', problem: 'El problema', contribution: 'Mi trabajo', result: 'Resultado / estado', projectLink: 'Enlace a este proyecto',
  experienceTitle: 'Experiencia profesional', educationTitle: 'Formación y conocimientos técnicos', education: 'Formación', knowledge: 'Conocimientos técnicos', languages: 'Idiomas',
  degree: 'Ciencias Computacionales', school: 'Tecnológico de Monterrey', campus: 'Campus Ciudad de México', educationDate: 'AGO 2023—JUL 2027', degreeFocus: 'Enfoque en ciberseguridad · En curso',
  coursework: 'Cursos relevantes', courses: 'Desarrollo de software, Estructuras de Datos y Algoritmos, Programación Orientada a Objetos, integración de seguridad en redes y sistemas, y ciberseguridad.',
  languageDetails: 'Español · Nativo / Inglés · C1', approachTitle: 'Cómo trabajo', approach: 'Trabajo en equipo, resolución de problemas, responsabilidad y conexión entre las decisiones de ciberseguridad y las necesidades del negocio.',
  contactTitle: 'Hablemos de lo que sigue.', contactText: '¿Te interesa mi trabajo? Escríbeme para conversar sobre oportunidades en ciberseguridad o ingeniería de software.', back: 'Volver al inicio',
  description: 'Proyectos de Leonardo Pérez Palatto en ingeniería de software, redes y ciberseguridad. Explora su trabajo, descarga su CV o ponte en contacto.',
  jobs: [
    { company: 'Lacoste', role: 'Practicante de TI', date: 'ABR 2026—ACTUALIDAD', items: ['Desarrollo aplicaciones web y de escritorio que automatizan procesos manuales de distintas áreas, con integración directa a los sistemas ERP y CRM.', 'Resuelvo incidentes de servicios que afectan la operación, en colaboración con el equipo de Francia.', 'Gestiono la implementación de datos de México en la plataforma global de inteligencia de negocios Qlik Sense, desarrollo interfaces e imparto talleres para usuarios no técnicos.'] },
    { company: 'Tecnológico de Monterrey', role: 'Asesor de programación', date: 'AGO 2025—JUL 2026', items: ['Apoyé a estudiantes de distintas carreras en sus materias de programación, desde fundamentos de Python hasta Estructuras de Datos y Algoritmos en C++.', 'Acompañé la resolución de problemas de código y el aprendizaje de conceptos fundamentales de programación.'] },
  ],
  groups: [
    { title: 'Nube y entrega', tools: ['Google Cloud', 'AWS', 'Docker', 'Git', 'Linux'] },
    { title: 'Datos y mensajería', tools: ['SQL', 'NoSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Firebase'] },
    { title: 'Empresa y colaboración', tools: ['SAP', 'ServiceNow', 'Jira', 'Confluence', 'Qlik Sense'] },
    { title: 'Desarrollo', tools: ['React Native', 'Desarrollo nativo', 'Claude Code', 'Pi coding agent', 'Python', 'C++'] },
  ],
};
export const copy = { en, es };
export type ProjectCopy = { date: string; status?: string; collaborator?: string; domain: string; summary: string; problem: string; work: string; result: string; steps: [string,string][] };
export const projects: {id:string;name:string;en:ProjectCopy;es:ProjectCopy}[] = [
  { id: 'barbattack', name: 'BarbAttack', en: {
    date: 'AUG 2026', status: 'ONGOING', collaborator: 'With Lyft', domain: 'SECURITY / SYSTEMS',
    summary: 'Connect vulnerability and attack feeds to the company assets that matter. Prioritize recommendations using company objectives and asset priority.',
    problem: 'Threat intelligence becomes useful when it is connected to the assets and priorities of a particular company. BarbAttack brings vulnerability and attack feeds into that business context.',
    work: 'I’m working on a platform that compares incoming intelligence with the company’s asset inventory and uses company objectives and asset priority to produce realistic AI recommendations.',
    result: 'Ongoing work with Lyft. Recommendations reach the asset owner and a security team member through Slack, with the same reports reflected in a web dashboard in real time.',
    steps: [['Threat feeds','Vulnerability and attack intelligence'],['Company assets','Inventory and business context'],['Prioritized recommendations','Mapped to company objectives and asset priority'],['Slack + dashboard','Asset owner + security team']],
  }, es: {
    date: 'AGO 2026', status: 'EN DESARROLLO', collaborator: 'Con Lyft', domain: 'SEGURIDAD / SISTEMAS',
    summary: 'Conectar las fuentes de vulnerabilidades y ataques con los activos relevantes de la empresa. Priorizar recomendaciones según los objetivos del negocio y la importancia de cada activo.',
    problem: 'La inteligencia de amenazas resulta útil cuando se relaciona con los activos y las prioridades de una empresa. BarbAttack lleva las fuentes de vulnerabilidades y ataques a ese contexto de negocio.',
    work: 'Trabajo en una plataforma que compara la inteligencia recibida con el inventario de activos de la empresa y utiliza sus objetivos y la prioridad de cada activo para generar recomendaciones de IA realistas.',
    result: 'Proyecto en desarrollo con Lyft. Las recomendaciones llegan al responsable del activo y a un integrante del equipo de seguridad por Slack; los mismos reportes aparecen en un panel web en tiempo real.',
    steps: [['Fuentes de amenazas','Inteligencia de vulnerabilidades y ataques'],['Activos de la empresa','Inventario y contexto del negocio'],['Recomendaciones priorizadas','Según objetivos y prioridad del activo'],['Slack + panel web','Responsable del activo y equipo de seguridad']],
  } },
  { id: 'barbienestar', name: 'BarBienestar', en: {
    date: 'JUL 2026', collaborator: 'With data2', domain: 'HEALTH SOFTWARE', summary: 'Medicine stock reporting for public health clinics',
    problem: 'People using Mexico’s public health services can make a trip to a clinic only to discover that their medicine is unavailable. The project addresses that gap in stock information.',
    work: 'With data2, I followed the full software development lifecycle, from the business proposal through development. The system tracks medicine availability at IMSS and ISSSTE clinics and lets users report unavailable medicines.',
    result: 'A reporting workflow designed to help other public health service users check availability before visiting the same clinic.',
    steps: [['Clinic stock','Medicine availability'],['User report','Unavailable medicine'],['Shared information','Help plan a clinic visit']],
  }, es: {
    date: 'JUL 2026', collaborator: 'Con data2', domain: 'SOFTWARE DE SALUD', summary: 'Reportes de disponibilidad de medicamentos en clínicas públicas',
    problem: 'Una persona puede llegar a una clínica del sistema público de salud y descubrir que su medicamento no está disponible. El proyecto atiende esa falta de información sobre existencias.',
    work: 'Con data2, seguí formalmente el ciclo completo de desarrollo de software, desde la propuesta de negocio hasta el desarrollo. El sistema da seguimiento a la disponibilidad de medicamentos en clínicas del IMSS e ISSSTE y permite reportar faltantes.',
    result: 'Un flujo de reportes diseñado para que otros usuarios del sistema de salud consulten la disponibilidad antes de acudir a la misma clínica.',
    steps: [['Existencias','Disponibilidad por clínica'],['Reporte del usuario','Medicamento no disponible'],['Información compartida','Planear la visita a una clínica']],
  } },
  { id: 'barbofraud', name: 'BarbOfraud', en: {
    date: 'DEC 2025', collaborator: 'With Red por la Ciberseguridad', domain: 'APPLICATION / NETWORKS', summary: 'Fraud reports with VLAN, ACL, and OSPF infrastructure',
    problem: 'Fraud can appear across services, from Facebook Marketplace to email. Users need a way to share reports and search for relevant cases.',
    work: 'I worked on a mobile fraud-prevention app with reporting, search, likes, and comments. I also implemented its physical network from scratch using VLANs, access control lists, and OSPF dynamic routing.',
    result: 'The project connected a community reporting application with the network infrastructure supporting it, in collaboration with Red por la Ciberseguridad.',
    steps: [['Search & report','Fraud across services'],['Community context','Likes and comments'],['Network foundation','VLANs · ACLs · OSPF']],
  }, es: {
    date: 'DIC 2025', collaborator: 'Con Red por la Ciberseguridad', domain: 'APLICACIÓN / REDES', summary: 'Reportes de fraude con infraestructura VLAN, ACL y OSPF',
    problem: 'El fraude puede aparecer en distintos servicios, desde Facebook Marketplace hasta el correo electrónico. Los usuarios necesitan compartir reportes y buscar casos relevantes.',
    work: 'Trabajé en una aplicación móvil de prevención de fraude con reportes, búsqueda, comentarios y reacciones. También implementé desde cero su red física mediante VLANs, listas de control de acceso y enrutamiento dinámico OSPF.',
    result: 'El proyecto integró una aplicación de reportes comunitarios con la infraestructura de red que la soporta, en colaboración con Red por la Ciberseguridad.',
    steps: [['Buscar y reportar','Fraudes en distintos servicios'],['Contexto comunitario','Reacciones y comentarios'],['Infraestructura de red','VLANs · ACLs · OSPF']],
  } },
  { id: 'beholder', name: 'Beholder', en: {
    date: 'AUG 2025', collaborator: 'Syntax challenge · HackPuebla 2025', domain: 'AI / SAFETY', summary: 'Syntax challenge winner · HackPuebla 2025',
    problem: 'Children can encounter suspicious interactions in game chats. Beholder gives parents visibility into those interactions while the child is playing.',
    work: 'I built an AI-powered parental control system with a client application that monitors in-game chat. Suspicious interactions trigger real-time alerts and screenshots in a parent’s dashboard. If the child keeps ignoring the risks, the client closes the game.',
    result: 'Winner of the Syntax challenge at HackPuebla 2025.',
    steps: [['In-game chat','Client monitoring'],['Risk detected','AI-powered analysis'],['Parent dashboard','Live alerts and screenshots'],['Game intervention','Close when risks are ignored']],
  }, es: {
    date: 'AGO 2025', collaborator: 'Reto de Syntax · HackPuebla 2025', domain: 'IA / SEGURIDAD', summary: 'Ganador del reto de Syntax · HackPuebla 2025',
    problem: 'Los menores pueden encontrar interacciones sospechosas en los chats de videojuegos. Beholder permite a sus padres conocer estas situaciones mientras están jugando.',
    work: 'Desarrollé un sistema de control parental con IA y una aplicación cliente que monitorea el chat del juego. Las interacciones sospechosas generan alertas y capturas de pantalla en tiempo real en el panel de los padres. Si el menor sigue ignorando los riesgos, el cliente cierra el juego.',
    result: 'Ganador del reto de Syntax en HackPuebla 2025.',
    steps: [['Chat del juego','Monitoreo en el cliente'],['Detección de riesgos','Análisis con IA'],['Panel de los padres','Alertas y capturas en vivo'],['Intervención','Cierre al ignorar los riesgos']],
  } },
  { id: 'identify', name: 'Identify', en: {
    date: 'OCT 2024', collaborator: 'Liverpool challenge · HackMX 2024', domain: 'SEARCH / AI', summary: 'Liverpool challenge winner · HackMX 2024',
    problem: 'Searching a large product catalog requires fast matching and recommendations that reflect product characteristics such as color and category.',
    work: 'I created an embedding-based catalog search with built-in AI recommendations. Parallelism and concurrency supported matching across a catalog of more than 70,000 images, while recommendations considered color and product group.',
    result: 'Achieved sub-second matching across the image catalog and won the Liverpool challenge at HackMX 2024.',
    steps: [['Product query','Embedding-based search'],['Image catalog','More than 70,000 images'],['Fast matching','Parallelism and concurrency'],['Recommendations','Color and product group']],
  }, es: {
    date: 'OCT 2024', collaborator: 'Reto de Liverpool · HackMX 2024', domain: 'BÚSQUEDA / IA', summary: 'Ganador del reto de Liverpool · HackMX 2024',
    problem: 'La búsqueda en un catálogo amplio de productos requiere coincidencias rápidas y recomendaciones que consideren características como el color y la categoría.',
    work: 'Creé una búsqueda de catálogo basada en embeddings con recomendaciones de IA integradas. El paralelismo y la concurrencia permitieron buscar en más de 70,000 imágenes; las recomendaciones consideraron el color y el grupo del producto.',
    result: 'Logré coincidencias en menos de un segundo y gané el reto de Liverpool en HackMX 2024.',
    steps: [['Consulta de producto','Búsqueda con embeddings'],['Catálogo de imágenes','Más de 70,000 imágenes'],['Coincidencias rápidas','Paralelismo y concurrencia'],['Recomendaciones','Color y grupo del producto']],
  } },
];
