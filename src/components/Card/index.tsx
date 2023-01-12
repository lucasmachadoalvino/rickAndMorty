import {padStart} from 'lodash';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Content, InfoContent, Name} from './styles';

interface CardProps {
  name: string;
  id: string;
  onCardPress: () => void;
}

export function Card({name, id, onCardPress}: CardProps) {
  return (
    <Container onPress={onCardPress}>
      <Content>
        <InfoContent>
          <Text>#{padStart(id, 3, '0')}</Text>
          <Name>{name}</Name>
        </InfoContent>
      </Content>

      <Icon name="angle-right" size={20} />
    </Container>
  );
}
