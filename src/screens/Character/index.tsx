import React from 'react';
import {FlatList, View} from 'react-native';
import {Divider} from '../../components/Divider';
import {getArrayOfNumber} from '../../utils/arrayUtils';
import {CharacterCard} from './components/CharacterCard';
import {CharacterCardLoad} from './components/CharacterCard/load';
import {useGetCharacters} from './hooks/useGetCharacters';
import {Container, Logo, LogoContent, Title} from './styles';
import {getDataFromPages} from './utils';

export function CharacterScreen() {
  const {data, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading} =
    useGetCharacters();

  const characters = getDataFromPages(data);

  function renderContent() {
    if (isLoading) {
      return getArrayOfNumber(8).map(index => (
        <CharacterCardLoad key={index} />
      ));
    }

    return (
      <View style={{flex: 1}}>
        <LogoContent>
          <Logo source={require('../../assets/icon.png')} />
          <Title>Rick and Morty</Title>
        </LogoContent>
        <FlatList
          ItemSeparatorComponent={Divider}
          data={characters}
          keyExtractor={item => item?.id}
          renderItem={({item}) => <CharacterCard {...item} />}
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
