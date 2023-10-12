import type { NextApiRequest, NextApiResponse } from 'next'

const songs = [
  {
    composer: 'Mozart',
    name: 'Symphony No. 41',
    period: "Classical"
  },
  {
    composer: 'Mozart',
    name: 'Eine Kleine Nachtmusik',
    period: "Classical"
  },
  {
    composer: 'Mozart',
    name: 'The Marriage of Figaro',
    period: "Classical"
  },
  {
    composer: 'Mozart',
    name: 'Queen of the Night',
    period: "Classical"
  },
  {
    composer: 'Haydn',
    name: 'Trumpet Concerto',
    period: "Classical"
  },
  {
    composer: 'Haydn',
    name: 'Piano Sonata Hob. XVI/20',
    period: "Classical"
  },
  {
    composer: 'Haydn',
    name: 'Symphony No. 41',
    period: "Classical"
  },
  {
    composer: 'Bach',
    name: 'Toccata and Fugue in D minor',
    period: "Baroque"
  },
  {
    composer: 'Bach',
    name: 'Goldberg Variations',
    period: "Baroque"
  },
  {
    composer: 'Bach',
    name: 'Brandenburg Concertos',
    period: "Baroque"
  },
  {
    composer: 'Bach',
    name: 'Fugue in G minor',
    period: "Baroque"
  },
  {
    composer: 'Beethoven',
    name: 'Fidelio',
    period: "Romantic"
  },
  {
    composer: 'Beethoven',
    name: 'Symphony No. 5',
    period: "Romantic"
  },
  {
    composer: 'Beethoven',
    name: 'Symphony No. 9',
    period: "Romantic"
  },
  {
    composer: 'Beethoven',
    name: 'Moonlight Sonata',
    period: "Romantic"
  },
  {
    composer: 'Beethoven',
    name: 'Fur Elise',
    period: "Romantic"
  },
  {
    composer: 'Camille Saint-Saens',
    name: 'Danse Macabre',
    period: "Romantic"
  },
  {
    composer: 'Camille Saint-Saens',
    name: 'The Carnival of the Animals',
    period: "Romantic"
  },
  {
    composer: 'Camille Saint-Saens',
    name: 'Symphony No. 3',
    period: "Romantic"
  },
  {
    composer: 'Camille Saint-Saens',
    name: 'The Swan',
    period: "Romantic"
  },
  {
    composer: 'Camille Saint-Saens',
    name: 'Cello Concerto No. 1',
    period: "Romantic"
  },
  {
    composer: 'Vivaldi',
    name: 'The Four Seasons',
    period: "Baroque"
  },
  {
    composer: 'Vivaldi',
    name: 'Gloria',
    period: "Baroque"
  },
  {
    composer: 'Vivaldi',
    name: 'Stabat Mater',
    period: "Baroque"
  },
  {
    composer: 'Vivaldi',
    name: 'Mandolin Concerto',
    period: "Baroque"
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(songs.map((song, i) => ({id: `id-${i+1}`, ...song})))
}
