import {padStart} from 'lodash';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Character} from '../../interface';
import {Container, Content, InfoContent, Name, Persona, Tag} from './styles';

export function CharacterCard({id, name, status, species, image}: Character) {
  return (
    <Container>
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
