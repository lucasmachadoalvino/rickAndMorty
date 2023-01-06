import {useInfiniteQuery, UseInfiniteQueryResult} from 'react-query';
import {api} from '../../../api';
import {Characters} from '../interface';

async function getCharacters(pageParam: number) {
  const result = await api.get(`character/?page=${pageParam}`);
  return result.data;
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
