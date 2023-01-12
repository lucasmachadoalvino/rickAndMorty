import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, View} from 'react-native';
import {CharacterCard} from '../../components/CharacterCard';
import {CharacterCardLoad} from '../../components/CharacterCard/load';
import {Divider} from '../../components/Divider';
import {Header} from '../../components/Header';
import {useGetCharacters} from '../../hooks/getCharacters/useGetCharacters';
import {getDataFromPages} from '../../hooks/getCharacters/utils';
import {RootStackParamList} from '../../navigation';
import {getArrayOfNumber} from '../../utils/arrayUtils';
import {Container} from './styles';

export function CharacterScreen() {
  const {data, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading} =
    useGetCharacters();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const characters = getDataFromPages(data);

  function renderContent() {
    if (isLoading) {
      return getArrayOfNumber(8).map(index => (
        <CharacterCardLoad key={index} />
      ));
    }

    return (
      <View>
        <Header />
        <FlatList
          ItemSeparatorComponent={Divider}
          data={characters}
          keyExtractor={item => item?.id}
          renderItem={({item}) => (
            <CharacterCard
              {...item}
              onCharacterPress={() =>
                navigation.navigate('CharacterDetails', {data: item})
              }
            />
          )}
          onEndReached={() =>
            !isFetchingNextPage && hasNextPage && fetchNextPage()
          }
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingNextPage ? <CharacterCardLoad /> : null
          }
        />
      </View>
    );
  }

  return <Container>{renderContent()}</Container>;
}
