import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList} from 'react-native';
import {Card} from '../../components/Card';
import {CardLoad} from '../../components/Card/load';
import {Divider} from '../../components/Divider';
import {Header} from '../../components/Header';
import {useGetLocations} from '../../hooks/getLocations/useGetLocations';
import {getDataFromPages} from '../../hooks/getLocations/utils';
import {RootStackParamList} from '../../navigation';
import {getArrayOfNumber} from '../../utils/arrayUtils';
import {Container} from './styles';

export function LocationScreen() {
  const {data, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading} =
    useGetLocations();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
            onCardPress={() =>
              navigation.navigate('LocationDetail', {data: item})
            }
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
