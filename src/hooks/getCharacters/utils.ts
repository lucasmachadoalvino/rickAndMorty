import {InfiniteData} from 'react-query';
import {Character, Characters} from '../../types/character';

export function getDataFromPages(
  list: InfiniteData<Characters> | undefined,
): Character[] {
  if (!list) return [];

  return list.pages.reduce((prev, curr) => {
    return [...prev, ...curr.results];
  }, [] as Character[]);
}
