import React from 'react';
import {FlatList} from 'react-native';
import {Card} from '../../components/Card';
import {CardLoad} from '../../components/Card/load';
import {Divider} from '../../components/Divider';
import {Header} from '../../components/Header';
import {useGetAllEpisodes} from '../../hooks/useGetAllEpisodes/useGetAllEpisodes';
import {getDataFromAllEpisodesPages} from '../../hooks/useGetAllEpisodes/utils';
import {Container} from './styles';

export function EpisodeScreen() {
  const {data, isFetchingNextPage, hasNextPage, fetchNextPage} =
    useGetAllEpisodes();
  const episodesList = getDataFromAllEpisodesPages(data);

  return (
    <Container>
      <Header />
      <FlatList
        ItemSeparatorComponent={Divider}
        data={episodesList}
        keyExtractor={item => item?.id}
        renderItem={({item}) => (
          <Card
            name={item.name}
            id={item.id}
            onCardPress={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        )}
        onEndReached={() =>
          !isFetchingNextPage && hasNextPage && fetchNextPage()
        }
        onEndReachedThreshold={0.5}
        ListFooterComponent={isFetchingNextPage ? <CardLoad /> : null}
      />
    </Container>
  );
}
