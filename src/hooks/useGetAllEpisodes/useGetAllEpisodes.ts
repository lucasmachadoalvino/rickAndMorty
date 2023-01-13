import {useInfiniteQuery, UseInfiniteQueryResult} from 'react-query';
import {api} from '../../api';
import {Episode, Episodes} from '../../types/episodes';

async function getEpisodes(pageParam: number) {
  const result = await api.get(`episode/?page=${pageParam}`);

  const results = result.data.results.map((episode: Episode) => ({
    ...episode,
    characters: episode.characters.map((link: string) => link.split('/').pop()),
  }));

  return {...result.data, results};
}

export function useGetAllEpisodes(): UseInfiniteQueryResult<Episodes> {
  return useInfiniteQuery(
    ['AllEpisodes'],
    async ({pageParam = 1}) => await getEpisodes(pageParam),
    {
      getNextPageParam: lastPage =>
        lastPage.info.next ? lastPage.info.next.split('page=')[1] : undefined,
    },
  );
}
