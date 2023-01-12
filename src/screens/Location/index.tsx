import React from 'react';
import {FlatList} from 'react-native';
import {Card} from '../../components/Card';
import {CardLoad} from '../../components/Card/load';
import {Divider} from '../../components/Divider';
import {Header} from '../../components/Header';
import {useGetLocations} from '../../hooks/getLocations/useGetLocations';
import {getDataFromPages} from '../../hooks/getLocations/utils';
import {getArrayOfNumber} from '../../utils/arrayUtils';
import {Container} from './styles';

export function LocationScreen() {
  const {data, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading} =
    useGetLocations();
  const locations = getDataFromPages(data);

  function renderContent() {
    if (isLoading) {
      return getArrayOfNumber(8).map(index => <CardLoad key={index} />);
    }

    return (
      <FlatList
        ItemSeparatorComponent={Divider}
        data={locations}
        keyExtractor={item => item?.id}
        renderItem={({item}) => (
          <Card
            name={item.name}
            id={item.id}
            onCardPress={() => console.warn(item)}
          />
        )}
        onEndReached={() =>
          !isFetchingNextPage && hasNextPage && fetchNextPage()
        }
        onEndReachedThreshold={0.5}
        ListFooterComponent={isFetchingNextPage ? <CardLoad /> : null}
      />
    );
  }

  return (
    <Container>
      <Header />
      {renderContent()}
    </Container>
  );
}
