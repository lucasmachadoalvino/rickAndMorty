import {useInfiniteQuery, UseInfiniteQueryResult} from 'react-query';
import {api} from '../../api';
import {Character, Characters} from '../../types/character';

async function getCharacters(pageParam: number) {
  const result = await api.get(`character/?page=${pageParam}`);

  const results = result.data.results.map((character: Character) => ({
    ...character,
    episode: character.episode.map((ep: string) => ep.split('/').pop()),
  }));

  return {...result.data, results: results};
}

export function useGetCharacters(): UseInfiniteQueryResult<Characters> {
  return useInfiniteQuery(
    ['Characters'],
    async ({pageParam = 1}) => await getCharacters(pageParam),
    {
      getNextPageParam: lastPage =>
        lastPage.info.next ? lastPage.info.next.split('page=')[1] : undefined,
    },
  );
}
