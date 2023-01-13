export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Episodes {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Episode[];
}
