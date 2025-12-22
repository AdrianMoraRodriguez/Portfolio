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
    image: 'img/sh_img.png', 
    gallery: ['img/sh_1.jpg', 'img/sh_2.png', 'img/sh_3.png', 'img/sh_4.png'], // opcional
    link: '/project/1'
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Descripción corta del proyecto 1',
    image: 'img/proyecto1.jpg', // ruta de imagen
    video: 'videos/facepalm.mp4', // opcional
    link: '/project/2'
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Descripción corta del proyecto 1',
    image: 'img/proyecto1.jpg', // ruta de imagen
    link: '/project/3'
  },
  {
    id: 4,
    title: 'Proyecto 4',
    description: 'Descripción corta del proyecto 1',
    image: 'img/proyecto1.jpg', // ruta de imagen
    link: '/project/4'
  }
]

export default projects
