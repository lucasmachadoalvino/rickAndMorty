import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, Image} from 'react-native';
import {Card} from '../../components/Card';
import {CardLoad} from '../../components/Card/load';

import {Divider} from '../../components/Divider';
import {Header} from '../../components/Header';
import {useGetEpisodes} from '../../hooks/getEpisodes/useGetEpisodes';
import {RootStackParamList} from '../../navigation';
import {getArrayOfNumber} from '../../utils/arrayUtils';
import {
  Container,
  InfoContainer,
  InfoContent,
  Information,
  Title,
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'CharacterDetails'>;

export function CharacterDetails({route, navigation}: Props) {
  const {name, species, gender, origin, location, image, episode} =
    route.params.data;

  const {data, isLoading} = useGetEpisodes(episode);

  function renderContent() {
    if (isLoading) {
      return getArrayOfNumber(4).map(index => <CardLoad key={index} />);
    }

    return (
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card
            name={item.name}
            id={item.id}
            onCardPress={() => console.warn(item)}
          />
        )}
        ItemSeparatorComponent={Divider}
      />
    );
  }

  return (
    <Container>
      <Header isBackVisible onBackPress={navigation.goBack} />
      <InfoContainer>
        <InfoContent>
          <Information>Name: {name}</Information>
          <Information>Species: {species}</Information>
          <Information>Gender: {gender}</Information>
          <Information>Origin: {origin.name}</Information>
          <Information>location: {location.name}</Information>
        </InfoContent>
        <Image
          source={{
            uri: image,
          }}
          style={{
            width: 200,
            height: 200,
            alignSelf: 'flex-end',
            borderTopLeftRadius: 100,
            borderBottomLeftRadius: 100,
          }}
        />
      </InfoContainer>
      <Title>Episodes</Title>

      {renderContent()}
    </Container>
  );
}
