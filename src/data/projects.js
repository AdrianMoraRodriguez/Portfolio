// src/data/projects.js
const projects = [
  {
    id: 1,
    title: 'Flow Production Tracking: poner orden al desarrollo de videojuegos sin matar la creatividad',
    description: 'Flow Production Tracking (antes Shotgun) centraliza la gestión de tareas, assets y estados en proyectos de videojuegos, mejorando la visibilidad del pipeline y la coordinación entre equipos técnicos y artísticos.',
    details: `En proyectos de videojuegos, la complejidad crece rápido: más assets, más versiones, más personas y, por supuesto, más cambios de última hora. Flow Production Tracking, la evolución de Shotgun dentro del ecosistema de Autodesk, nace precisamente para afrontar ese reto: dar visibilidad y control al proceso de producción sin convertirlo en una jaula.

Flow Production Tracking permite estructurar el proyecto a partir de entidades claras: assets, tareas, versiones, estados y responsables. Esto facilita que producción tenga una visión real del progreso, detectando bloqueos y dependencias antes de que se conviertan en problemas mayores. Las decisiones dejan de basarse en “creo que vamos bien” y pasan a apoyarse en información actualizada y compartida.

Uno de los mayores valores de Flow es su capacidad para centralizar la comunicación entre perfiles muy distintos: arte, diseño, programación y producción. Todos trabajan sobre la misma fuente de información, con estados claros y feedback contextualizado. Menos mensajes perdidos, menos malentendidos y menos “¿quién tenía esto?” en las reuniones.

Aunque Flow Production Tracking tiene su origen en VFX y animación, su enfoque modular permite adaptarlo fácilmente a pipelines de videojuegos. Desde el seguimiento de assets jugables hasta la planificación de niveles o sprints técnicos, la herramienta se ajusta a proyectos pequeños o producciones más complejas sin imponer una metodología rígida.

Flow Production Tracking puede integrarse con herramientas de desarrollo como Unity, conectando el estado de producción con el trabajo real dentro del motor. Esto permite al equipo de producción entender mejor el impacto de los avances técnicos y artísticos, alineando planificación y desarrollo de forma más coherente.

Flow Production Tracking no pretende eliminar el caos creativo inherente al desarrollo de videojuegos, pero sí hacerlo visible y gestionable. Bien utilizado, se convierte en una pieza clave para escalar equipos, mejorar la comunicación y mantener el foco en lo importante: sacar el proyecto adelante sin quemar al equipo por el camino.`,
    image: 'img/sh_img.png', 
    gallery: ['img/sh_1.png', 'img/sh_2.png', 'img/sh_4.png'], // opcional
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
