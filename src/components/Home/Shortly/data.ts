interface MovieProps {
  id: number
  movieGenre: string
  img: string,
  date: string
  title: string
  description: string
  buttonText: string
  link: string
}

export const MovieComingSoon: MovieProps[] = [
  {
    id: 0,
    movieGenre: 'Aventura',
    img: '/banner-exemple.jpg',
    date: '04 de novembro de 2025',
    title: 'REVOLUTIONARY FILMING TECHNIQUE CHANGES CINEMA FOREVER',
    description:
      'Directors worldwide are adopting this groundbreaking new method that promises to transform how movies are made. Industry experts predict this will become the standard within the next decade.',
    buttonText: 'Ver detalhes',
    link: '/algum-lugar'
  },
  {
    id: 1,
    movieGenre: 'Aventura',
    img: '/banner-exemple.jpg',
    date: '04 de novembro de 2025',
    title: 'REVOLUTIONARY FILMING TECHNIQUE CHANGES CINEMA FOREVER',
    description:
      'Directors worldwide are adopting this groundbreaking new method that promises to transform how movies are made. Industry experts predict this will become the standard within the next decade.',
    buttonText: 'Ver detalhes',
    link: '/algum-lugar'
  },
  {
    id: 2,
    movieGenre: 'Aventura',
    img: '/banner-exemple.jpg',
    date: '04 de novembro de 2025',
    title: 'REVOLUTIONARY FILMING TECHNIQUE CHANGES CINEMA FOREVER',
    description:
      'Directors worldwide are adopting this groundbreaking new method that promises to transform how movies are made. Industry experts predict this will become the standard within the next decade.',
    buttonText: 'Ver detalhes',
    link: '/algum-lugar'
  }
]
