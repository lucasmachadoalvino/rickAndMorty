import {padStart} from 'lodash';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Character} from '../../interface';
import {Container, Content, InfoContent, Name, Persona, Tag} from './styles';

interface CharacterCardProps extends Character {
  onCharacterPress: () => void;
}

export function CharacterCard({
  id,
  name,
  status,
  species,
  image,
  onCharacterPress,
}: CharacterCardProps) {
  return (
    <Container onPress={onCharacterPress}>
      <Persona
        source={{
          uri: image,
        }}
      />

      <Content>
        <InfoContent>
          <Text>#{padStart(id, 3, '0')}</Text>
          <Name>{name}</Name>
        </InfoContent>

        <InfoContent>
          <Tag>
            <Text>{status}</Text>
          </Tag>

          <Tag>
            <Text>{species}</Text>
          </Tag>
        </InfoContent>
      </Content>

      <Icon name="angle-right" size={20} />
    </Container>
  );
}
