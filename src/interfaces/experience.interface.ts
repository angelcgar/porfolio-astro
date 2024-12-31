export interface experience {
  date: string;
  title: string;
  description: string;
  link: string;
}

export interface Proyectos {
  name: string;
  title: string;
  body: Body;
  href: string;
  imageHref: string;
  github: string;
  tags: string[];
  id: number;
}

interface Body {
  short: string;
  long: string;
}
