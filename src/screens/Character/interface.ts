export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface Characters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}
