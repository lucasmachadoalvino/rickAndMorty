import {useQuery, UseQueryResult} from 'react-query';
import {api} from '../../api';
import {Episode} from '../../types/episodes';

async function getEpisodes(episodes: string[]) {
  const result = await api.get(`episode/[${episodes.join()}]`);

  const resultsNormalized = result.data.map((episode: Episode) => ({
    ...episode,
    characters: episode.characters.map((ep: string) => ep.split('/').pop()),
  }));

  return resultsNormalized;
}

export function useGetEpisodes(episodes: string[]): UseQueryResult<Episode[]> {
  return useQuery(
    ['Episodes', episodes],
    async ({pageParam = 1}) => await getEpisodes(episodes),
  );
}
