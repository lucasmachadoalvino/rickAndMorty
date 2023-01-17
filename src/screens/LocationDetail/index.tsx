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

type Props = NativeStackScreenProps<RootStackParamList, 'LocationDetail'>;

export function LocationDetail({route, navigation}: Props) {
  const {name, type, dimension, residents} = route.params.data;

  const {data, isLoading} = useGetCharacters(residents);

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
        <Information>-Type: {type}</Information>
        <Information>-Dimension: {dimension}</Information>
      </InfoContent>
      <Title>Residents</Title>
      {renderContent()}
    </Container>
  );
}
