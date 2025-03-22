export interface experience {
  date: string;
  title: string;
  description: string;
  link: string;
}

export interface Proyectos {
  body: Body;
  github: string;
  href: string;
  id: number;
  imageHref: string;
  name: string;
  tags: string[];
  title_en: string;
  title_es: string;
}

interface Body {
  short_en: string;
  short_es: string;
  long_en: string;
  long_es: string;
}
