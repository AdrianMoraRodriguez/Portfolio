// src/data/projects.js
const projects = [
  {
    id: 1,
    title: 'Flow Production Tracking: Poner orden al desarrollo de videojuegos sin matar la creatividad',
    description: 'Flow Production Tracking (antes Shotgun) centraliza la gestión de tareas, assets y estados en proyectos de videojuegos, mejorando la visibilidad del pipeline y la coordinación entre equipos técnicos y artísticos.',
    details: `En el mundo de los proyectos de videojuegos, la complejidad crece rápidamente. No solo aumentan los assets, las versiones, las personas involucradas y, como es común, los cambios de última hora, sino que también crece la necesidad de coordinar y gestionar todos esos elementos de manera eficiente. A medida que el proyecto avanza, se genera una cantidad de información que debe ser procesada, analizada y, sobre todo, gestionada. Es aquí donde herramientas como Flow Production Tracking se convierten en un salvavidas.\n

Flow Production Tracking es la evolución de Shotgun, una plataforma utilizada principalmente en el ámbito de los efectos visuales (VFX) y la animación, pero que ha sido adaptada dentro del ecosistema de Autodesk para enfrentar los desafíos únicos del desarrollo de videojuegos. La herramienta nace con el objetivo de proporcionar una solución integral para la gestión de proyectos, dar visibilidad a los avances y, lo más importante, mantener el control del proceso de producción sin que este se convierta en una carga inmanejable.\n

Flow Production Tracking permite estructurar un proyecto de videojuego de manera eficiente, desglosando el trabajo en entidades claras y fáciles de entender, como assets, tareas, versiones, estados y responsables. Esto ayuda a que los equipos de producción puedan tener una visión clara y real del progreso del proyecto. Con esta organización, se pueden detectar bloqueos, dependencias o problemas potenciales antes de que escalen y se conviertan en obstáculos que retrasen la entrega. Al utilizar esta herramienta, las decisiones de producción ya no se basan en suposiciones o en frases del tipo "creo que vamos bien", sino en información actualizada y compartida de forma continua entre los miembros del equipo.\n

Uno de los mayores beneficios de Flow es su capacidad para centralizar la comunicación entre los distintos perfiles involucrados en un proyecto de videojuego: arte, diseño, programación y producción. Todos los miembros del equipo trabajan sobre la misma fuente de información, asegurando que los estados estén claros y el feedback se dé de manera contextualizada. Esto reduce drásticamente la cantidad de mensajes perdidos, malentendidos y esas incómodas situaciones de "¿quién tenía esto?" que suelen surgir en las reuniones.\n

A pesar de que Flow Production Tracking tiene sus orígenes en el mundo de los efectos visuales y la animación, su enfoque modular y flexible le permite adaptarse sin problemas a los pipelines específicos de videojuegos. Ya sea para el seguimiento de assets jugables, la planificación de niveles o la gestión de sprints técnicos, la herramienta es capaz de ajustarse tanto a proyectos de pequeña escala como a producciones más complejas, sin imponer una metodología rígida. Este enfoque flexible es clave, ya que los proyectos de videojuegos a menudo requieren adaptarse a cambios rápidos y dinámicos, y Flow permite hacerlo de manera ágil.\n

Una de las características más destacadas de Flow Production Tracking es su capacidad de integración con otras herramientas de desarrollo ampliamente utilizadas, como Unity. Esto permite que el estado de producción esté directamente conectado con el trabajo real que se está llevando a cabo dentro del motor de desarrollo. Al hacerlo, los equipos de producción pueden tener una mejor comprensión del impacto que los avances técnicos y artísticos están teniendo sobre el desarrollo general del juego, alineando así la planificación con el progreso real y proporcionando una visión más coherente de todo el proceso.\n

Sin embargo, es importante tener en cuenta que Flow Production Tracking no tiene como objetivo eliminar el caos creativo inherente al desarrollo de videojuegos. La creatividad es un aspecto fundamental en la industria, y Flow no busca imponer restricciones. Lo que sí hace es hacerlo visible y gestionable. Con una correcta implementación, Flow puede convertirse en una herramienta clave para escalar equipos, mejorar la comunicación y asegurar que el proyecto siga avanzando sin comprometer la salud o el bienestar del equipo de desarrollo.\n

En resumen, Flow Production Tracking es más que una herramienta de gestión. Es un facilitador que permite a los equipos de videojuegos trabajar de manera más eficiente, organizada y colaborativa. Bien utilizado, puede ser la clave para mantener el rumbo del proyecto, alineando el progreso técnico y artístico, mientras se minimizan los riesgos y problemas que pueden surgir durante el proceso de desarrollo. Su verdadero valor radica en su capacidad para ofrecer visibilidad, control y, sobre todo, un entorno de trabajo más fluido y menos caótico. Y lo mejor de todo: todo esto sin sofocar el proceso creativo, permitiendo que el equipo mantenga su foco en lo más importante: sacar el proyecto adelante de manera exitosa y sin quemar al equipo en el proceso.`,
    image: 'img/fpt.png', 
    gallery: ['img/sh_1.jpg', 'img/sh_2.png', 'img/sh_3.png', 'img/sh_4.png'], // opcional
    link: '/project/1'
  },
  {
    id: 2,
    title: 'Twinmotion y la transformación urbana',
    description: 'Transformación de una escena urbana en Twinmotion, enfocada en circulación, ambientación y realismo visual.',
    details: `En este ejercicio partíamos de una escena base y el objetivo era transformarla en un entorno más coherente y realista, tanto a nivel visual como funcional. A partir de esa base, trabajé la circulación peatonal y de vehículos, creando caminos y trayectorias que reflejaran un uso plausible del espacio.

Posteriormente, fui enriqueciendo la escena con distintos elementos urbanos: señales de tráfico, semáforos, farolas, bolardos, papeleras, zonas verdes y áreas de juegos infantiles, entre otros. También actualicé los materiales de los edificios para mejorar su integración con el entorno y añadí personajes individuales y grupos de personas con el fin de dotar al conjunto de mayor dinamismo.

Un aspecto clave del proyecto fue la creación de diferentes atmósferas. Preparé dos versiones de la escena: una diurna, luminosa y clara, y otra nocturna, con lluvia y niebla, que permite analizar el comportamiento de la iluminación y la percepción general del espacio bajo condiciones climáticas adversas.

Para complementar el trabajo, realicé una secuencia de vídeo que recorre la escena y presenta las principales decisiones tomadas en cuanto a composición, materiales, circulación y ambientación.`,
    image: 'img/TM.png', // ruta de imagen
    gallery: ['img/TM1.png', 'img/TM2.png', 'img/TM3.png', 'img/TM4.png', 'img/TM5.png', 'img/TM6.png'],
    video: 'videos/TMVid.mp4', // opcional
    link: '/project/2'
  },
  {
    id: 3,
    title: 'Sketches of Life',
    description: 'Un prototipo de videojuego 2D para la asignatura FDV en el que el dibujo se convierte en una herramienta física para resolver niveles de forma creativa mientras el personaje evoluciona como artista a lo largo del juego',
    details: `Este proyecto consiste en el desarrollo de un prototipo de videojuego 2D realizado en Unity cuyo objetivo principal es explorar nuevas formas de interacción entre el jugador y el entorno mediante el uso creativo del dibujo y la física. El juego plantea una experiencia de plataformas en la que el jugador debe alcanzar la salida de cada nivel tras recoger tres tartas repartidas por el escenario, combinando habilidad, planificación y resolución de puzles.

El elemento más distintivo del juego es su estructura de doble fase de gameplay. En la primera fase, el jugador no puede mover al personaje, pero sí dibujar libremente sobre el escenario utilizando el ratón. Estos dibujos no son meramente decorativos, sino que se transforman en objetos físicos con colisiones, masa y comportamiento dinámico. En la segunda fase, el jugador pasa al control directo del personaje y debe superar el nivel utilizando las estructuras que ha creado previamente, lo que fomenta una planificación previa y un enfoque creativo para resolver cada situación.

El sistema de dibujo es uno de los pilares técnicos del proyecto. Cada trazo se construye a partir de puntos espaciados de forma controlada para evitar un exceso de precisión innecesaria y, antes de convertirse en un objeto físico, se aplica una simplificación de puntos para mejorar el rendimiento. El resultado final es un objeto con un cuerpo rígido y un collider generado dinámicamente que interactúa con el resto del entorno. Además, el dibujo consume un recurso limitado llamado tinta, lo que introduce una capa estratégica adicional y evita el abuso de la mecánica.

La tinta actúa como un recurso compartido entre varias acciones del juego. Dibujar y disparar consumen tinta, lo que obliga al jugador a decidir cómo y cuándo utilizarla. Este sistema está centralizado y conectado a la interfaz de usuario, que muestra en tiempo real el nivel de tinta disponible. De este modo, el jugador recibe feedback constante sobre sus decisiones y se refuerza la importancia de la gestión de recursos.

El personaje cuenta con un sistema de movimiento clásico de plataformas en dos dimensiones que incluye desplazamiento lateral, salto y control de animaciones sincronizadas con sus acciones. También dispone de un sistema de disparo basado en reutilización de objetos mediante pooling, lo que mejora el rendimiento y evita instanciaciones innecesarias. Este mismo sistema de disparo se reutiliza para las torretas enemigas presentes en los niveles, reforzando la coherencia y modularidad del código.

El diseño de niveles está cuidadosamente estructurado para facilitar el aprendizaje progresivo del jugador. El juego cuenta con doce niveles divididos en tres grupos de cuatro. Cada grupo representa una etapa en la evolución artística del personaje, lo que se refleja visualmente tanto en el fondo como en el propio diseño del protagonista. Dentro de cada grupo, los tres primeros niveles introducen nuevas mecánicas de forma gradual y el último nivel combina todas las mecánicas aprendidas hasta ese momento. Al avanzar a un nuevo grupo, las mecánicas anteriores se mantienen y se reutilizan, creando una curva de dificultad coherente y controlada.

A lo largo de los niveles, el jugador se enfrenta a diferentes elementos interactivos que enriquecen el gameplay. Existen zonas en las que no se puede dibujar, áreas donde los dibujos no tienen gravedad, superficies letales que provocan la muerte del personaje, enemigos móviles, torretas que disparan proyectiles y mecanismos como botones o palancas que activan o desactivan obstáculos. La combinación de estos elementos permite diseñar situaciones variadas y puzles que aprovechan al máximo la mecánica principal del dibujo.

El sistema de progresión se basa en la recolección de tartas, que quedan registradas tanto durante la partida como de forma persistente entre sesiones. Cada nivel guarda su progreso y el acceso a nuevos niveles se desbloquea en función del número total de tartas obtenidas. El menú de selección de niveles refleja visualmente este progreso, mostrando qué niveles están disponibles y qué coleccionables han sido ya obtenidos, lo que refuerza la sensación de avance del jugador.

En el apartado técnico, el proyecto hace un uso intensivo de una arquitectura basada en eventos para desacoplar los distintos sistemas del juego. La comunicación entre el personaje, la interfaz, el audio, las cámaras y la lógica de progresión se realiza mediante eventos globales, lo que facilita el mantenimiento del código y su posible ampliación futura. Este enfoque permite que cada sistema funcione de manera independiente sin depender directamente de otros componentes.

El control de cámaras se ha implementado utilizando Cinemachine, lo que permite un seguimiento suave del jugador y un encuadre dinámico de varios elementos importantes del nivel. En determinados momentos, como al finalizar un nivel, la cámara cambia su comportamiento para destacar los objetivos conseguidos, reforzando visualmente el éxito del jugador. Además, se ha implementado un sistema de parallax para dar mayor profundidad visual al escenario final.`,
    image: 'img/FDV/Sketches-of-Life.jpg', // ruta de imagen
    gallery: ['img/FDV/Sketches-of-Life.jpg','img/FDV/1L.png', 'img/FDV/1P.png', 'img/FDV/2L.png', 'img/FDV/2P.png', 'img/FDV/3L.png', 'img/FDV/3P.png'],
    video: 'videos/FDV.mp4',
    link: '/project/3'
  },
  {
    id: 4,
    title: 'GOAP',
    description: 'GOAP-based social simulation developed in Unity in which multiple autonomous agents interact through economics, crime, and power, generating emergent behavior without scripted logic.',
    details: `This project consists of a GOAP-based simulation developed in Unity as part of the Artificial Intelligence in Video Games course of the Master's Degree in Video Game Development. The main objective of the project is to explore how a system of autonomous agents can generate complex and coherent behaviors based on individual objectives and a shared state of the world, without resorting to completely scripted behaviors.
The simulation is set in a city inspired by the universe of Born of the Mist, although the focus of the project is systemic rather than narrative. The design focuses on representing social, economic, and power relationships through agents with potentially conflicting objectives whose decisions are made dynamically through GOAP planning.

The system is built on a custom GOAP framework in which each agent defines a series of goals, actions, and internal beliefs, and accesses a shared global state of the world. Decisions are not based on direct communication between agents, but on the modification of physical resources and global states, allowing coordination to emerge indirectly.
Nobles represent political and social power within the simulation. They can attend social events to gain prestige, trade metals for money, flee to safe locations when crime levels rise, and hire informants to initiate the elimination of rivals. All of these actions are planned dynamically based on the noble's internal state and the availability of resources in the world.

Informants act as intermediaries within the system. When they receive a contract from a noble, they seek out an available Mistborn and transfer the assignment to them. This process increases the overall crime level. After completing their task, the informant collects their payment and returns to their hideout, waiting for new contracts.

Mistborn function as agents of violence, but they are heavily conditioned by the system. They cannot act without a prior contract and also need to acquire metals through vendors in order to carry out an assassination. After completing the assignment, global crime increases and the agent retreats to a safe point.

Rebels introduce social instability. They select nobles as targets, steal money from them, and cause an increase in crime. Their actions indirectly affect the nobles' ability to hire informants or protect themselves, generating new emerging dynamics.

Inquisitors act as the regulatory force of the system. When the crime level is high, they select rebels and eliminate them, thereby reducing overall crime. They do not investigate specific causes, but respond systemically to disorder, maintaining the overall balance of the simulation.

Emergent behavior is one of the main results of the project. Without any agent having a complete view of the system, chained consequences occur, such as nobles fleeing when crime increases, murders not occurring due to lack of economic resources, or repressive interventions stabilizing the environment. All of this arises exclusively from GOAP planning and the shared use of the state of the world.

This project has allowed us to delve deeper into the design of simulation-oriented artificial intelligence systems, demonstrating that complexity does not come from isolated intelligent agents, but from the interaction between objectives, constraints, and shared resources. The result is a coherent, scalable, and easily defensible system from a technical and artificial intelligence design standpoint.
`,
    image: 'img/IAV/GOAP.jpg', // ruta de imagen
    gallery: ['img/IAV/IAV1.png', 'img/IAV/IAV2.png', 'img/IAV/IAV3.png', 'img/IAV/IAV4.png', 'img/IAV/IAV5.png', 'img/IAV/IAV6.png', 'img/IAV/IAV7.png', 'img/IAV/IAV8.png', 'img/IAV/IAV9.png'],
    link: '/project/4'
  }
  // {
  //   id: 4,
  //   title: 'Proyecto 4',
  //   description: 'Descripción corta del proyecto 1',
  //   image: 'img/proyecto1.jpg', // ruta de imagen
  //   link: '/project/4'
  // }
]

export default projects
