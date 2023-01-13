import {useInfiniteQuery, UseInfiniteQueryResult} from 'react-query';
import {api} from '../../api';
import {Character, Characters} from '../../types/character';

async function getCharacters(pageParam: number, ids?: string[]) {
  let url = 'character/?page=${pageParam}';

  if (ids) {
    url = `character/[${ids.join()}]`;
  }

  const result = await api.get(`character/?page=${pageParam}`);

  const results = result.data.results.map((character: Character) => ({
    ...character,
    episode: character.episode.map((ep: string) => ep.split('/').pop()),
  }));

  return {...result.data, results: results};
}

export function useGetCharacters(
  ids?: string[],
): UseInfiniteQueryResult<Characters> {
  return useInfiniteQuery(
    ['Characters', ids],
    async ({pageParam = 1}) => await getCharacters(pageParam, ids),
    {
      getNextPageParam: lastPage =>
        lastPage.info.next ? lastPage.info.next.split('page=')[1] : undefined,
    },
  );
}
