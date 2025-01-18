export interface Proyectos {
  id: number;
  name: string;
  title: string;
  body: {
    short: string;
    long: string;
  };
  href: string;
  imageHref: string;
  github: string;
  tags: string[];
  category?: string;
  prioridad?: "!!1" | "!!2" | "!!3" | "!!4";
}

export const proyectos: Proyectos[] = [
  {
    id: 1,
    name: "mario bros",
    title: "Clon Super Mario Bros",
    body: {
      short:
        "This is a clone of the famous game Super Mario Bros, made with only TypeScript",
      long: "This is a clone of the famous game Super Mario Bros, made with only TypeScript, where you can play with the keyboard, and it is very entertaining, and can be played on any device.",
    },
    href: "https://visionary-mermaid-bdab86.netlify.app/",
    imageHref: "/img/marioBrosTs.webp",
    github: "https://github.com/angelcgar/mario-bros-ts",
    tags: ["/svg/ViteJs.svg", "/svg/TypeScript.svg", "/svg/HTML.svg"],
    category: "frontend",
    prioridad: "!!2",
  },
  {
    id: 2,
    name: "Lista de Tareas",
    title: "My Task List",
    body: {
      short: "This is my Task List, created using React and HTML.",
      long: "Este es mi Lista de Tareas que fue hecho con React, en donde se puede agregar, eliminar y editar tareas, además de que es muy entretenido, y se puede jugar en cualquier dispositivo.",
    },
    href: "https://spiffy-cascaron-6bc6ed.netlify.app/",
    imageHref: "/img/listaTareas.webp",
    github: "https://github.com/angelcgar/TSTodoList",
    tags: ["/svg/ViteJs.svg", "/svg/TypeScript.svg", "/svg/HTML.svg"],
    category: "frontend",
    prioridad: "!!1",
  },
  {
    id: 3,
    name: "Documentación",
    title: "Documentation",
    body: {
      short:
        "This is a Java documentation project where you can explore Java's documentation.",
      long: "Este es un proyecto de documentación de Java, en donde se puede ver la documentación de Java, además de que es muy entretenido, y se puede jugar en cualquier dispositivo.",
    },
    href: "https://documentacion-java.vercel.app/",
    imageHref: "/img/documentacion.webp",
    github: "https://github.com/angelcgar/documentacion-java",
    tags: ["/svg/Astro.svg", "/img/Starlight.webp", "/svg/HTML.svg"],
    category: "frontend",
    prioridad: "!!1",
  },
  {
    id: 4,
    name: "Candy crush",
    title: "Candy Crush",
    body: {
      short:
        "This is a clone of the famous Candy Crush game, built entirely with JavaScript.",
      long: "Este es un clon del famoso juego Candy Crush, hecho con solo JavaScript, en donde se puede jugar con el teclado, además de que es muy entretenido, y se puede jugar en cualquier dispositivo.",
    },
    href: "https://candy-crush-es.vercel.app/",
    imageHref: "/img/candyCrush.webp",
    github: "https://github.com/angelcgar/candy-crush-es",
    tags: ["/svg/ViteJs.svg", "/svg/JavaScript.svg", "/svg/CSS.svg"],
    category: "frontend",
    prioridad: "!!3",
  },
  {
    id: 5,
    name: "Juego de Snake",
    title: "My Snake Game",
    body: {
      short: "This is my Snake game, one of my first projects in NextJs.",
      long: "Este es mi juego de Snake, uno de mis primeros proyectos en NextJs, en donde se puede jugar con el teclado, además de que es muy entretenido, y se puede jugar en cualquier dispositivo.",
    },
    href: "https://65946ac2adc6ff0a49bef6c8--cheerful-tulumba-6526bc.netlify.app/",
    imageHref: "/img/snake.webp",
    github: "https://github.com/angelcgar/snake",
    tags: ["/svg/NextJs.svg", "/svg/React.svg", "/svg/CSS.svg"],
    category: "frontend",
    prioridad: "!!1",
  },
  {
    id: 6,
    name: "Buscador de peliculas",
    title: "Movie Searcher",
    body: {
      short: "This is a movie searcher, built with React and HTML.",
      long: "Este es un buscador de peliculas, hecho con React, en donde se puede buscar peliculas, además de que es muy entretenido, y se puede jugar en cualquier dispositivo.",
    },
    href: "https://joyful-cannoli-81bf1e.netlify.app/",
    imageHref: "/img/peliculas.webp",
    github:
      "https://github.com/angelcgar/aprendiendo-react/tree/main/projects/05-react-buscador-peliculas",
    tags: [
      "/svg/ViteJs.svg",
      "/svg/React.svg",
      "/svg/HTML.svg",
      "/svg/CSS.svg",
    ],
    category: "frontend",
    prioridad: "!!1",
  },
  {
    id: 7,
    name: "Lista de Tareas",
    title: "My Task List",
    body: {
      short: "This is my Task List, created with React and LocalStorage.",
      long: "Este es mi Lista de Tareas que fue hecho con React y LocalStorage, en donde se puede agregar, eliminar y editar tareas, además de que es muy entretenido, y se puede jugar en cualquier dispositivo.",
    },
    href: "https://faztweb.github.io/react-tasksapp-localstorage/",
    imageHref: "/img/listaDeTareas.webp",
    github: "https://faztweb.github.io/react-tasksapp-localstorage/",
    tags: ["/svg/ViteJs.svg", "/svg/React.svg", "/svg/HTML.svg"],
    category: "frontend",
    prioridad: "!!1",
  },
  {
    id: 8,
    name: "Pokedex",
    title: "My Pokedex",
    body: {
      short: "This is my Pokedex, one of my first projects in React.",
      long: "Este es mi Pokedex, uno de mis primeros proyectos en React, en donde se puede buscar pokemones, además de que es muy entretenido, y se puede jugar en cualquier dispositivo.",
    },
    href: "https://flourishing-kataifi-ea0631.netlify.app/",
    imageHref: "/img/pokedex.webp",
    github: "https://github.com/angelcgar/pokedex",
    tags: ["/svg/CSS.svg", "/svg/React.svg", "/svg/HTML.svg"],
    category: "frontend",
    prioridad: "!!1",
  },
  {
    id: 9,
    name: "calculadora",
    title: "My Calculator",
    body: {
      short: "This is my Calculator, one of my first projects in React.",
      long: "Este es mi Calculadora, uno de mis primeros proyectos en React, en donde se puede hacer operaciones matematicas, además de que es muy entretenido, y se puede jugar en cualquier dispositivo.",
    },
    href: "https://amazing-queijadas-ba02d4.netlify.app/",
    imageHref: "/img/calculadora.webp",
    github: "https://github.com/angelcgar/calculadora-react",
    tags: ["/svg/ViteJs.svg", "/svg/React.svg", "/svg/JavaScript.svg"],
    category: "backend",
    prioridad: "!!1",
  },
];
