import {useInfiniteQuery, UseInfiniteQueryResult} from 'react-query';
import {api} from '../../api';
import {Character, Characters} from '../../types/character';

async function getCharacters(pageParam: number) {
  const result = await api.get(`character/?page=${pageParam}`);

  const resultsNormalized = result.data.results.map((character: Character) => ({
    ...character,
    episode: character.episode.map((ep: string) => ep.split('/').pop()),
  }));

  return {...result.data, results: resultsNormalized};
}

export function useGetAllCharacters(): UseInfiniteQueryResult<Characters> {
  return useInfiniteQuery(
    ['allCharacters'],
    async ({pageParam = 1}) => await getCharacters(pageParam),
    {
      getNextPageParam: lastPage =>
        lastPage.info.next ? lastPage.info.next.split('page=')[1] : undefined,
    },
  );
}
