import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList} from 'react-native';
import {CharacterCard} from '../../components/CharacterCard';
import {CharacterCardLoad} from '../../components/CharacterCard/load';
import {Divider} from '../../components/Divider';
import {Header} from '../../components/Header';
import {useGetCharacters} from '../../hooks/useGetCharacters/useGetEpisodes';
import {RootStackParamList} from '../../navigation';
import {getArrayOfNumber} from '../../utils/arrayUtils';
import {Container, InfoContent, Information, Title} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'EpisodeDetails'>;

export function EpisodeDetails({route, navigation}: Props) {
  const {name, air_date, characters} = route.params.data;
  const {data, isLoading} = useGetCharacters(characters);

  function renderContent() {
    if (isLoading) {
      return getArrayOfNumber(8).map(index => (
        <CharacterCardLoad key={index} />
      ));
    }

    return (
      <FlatList
        ItemSeparatorComponent={Divider}
        data={data}
        keyExtractor={item => item?.id}
        renderItem={({item}) => (
          <CharacterCard
            {...item}
            onCharacterPress={() =>
              navigation.navigate('CharacterDetails', {data: item})
            }
          />
        )}
      />
    );
  }

  return (
    <Container>
      <Header
        isBackVisible
        onBackPress={navigation.goBack}
        title={'Location Detail'}
      />

      <InfoContent>
        <Information>-Name: {name}</Information>
        <Information>-Air date: {air_date}</Information>
      </InfoContent>
      <Title>Characters</Title>
      {renderContent()}
    </Container>
  );
}
