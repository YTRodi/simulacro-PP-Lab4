export interface Movie {
  id?: string;
  name: string;
  type: 'Terror' | 'Comedia' | 'Amor' | 'Otros';
  releaseDate: Date;
  amountPublic: number;
  image: string;
  alt: 'Movie image';
}
