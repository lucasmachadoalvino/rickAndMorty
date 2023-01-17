import {useQuery, UseQueryResult} from 'react-query';
import {api} from '../../api';
import {Character} from '../../types/character';

async function getCharacters(ids: string[]) {
  const result = await api.get(`character/[${ids.join()}]`);

  const resultsNormalized = result.data.map((character: Character) => ({
    ...character,
    episode: character.episode.map((ep: string) => ep.split('/').pop()),
  }));

  return resultsNormalized;
}

export function useGetCharacters(ids: string[]): UseQueryResult<Character[]> {
  return useQuery(['Characters', ids], async () => await getCharacters(ids));
}
