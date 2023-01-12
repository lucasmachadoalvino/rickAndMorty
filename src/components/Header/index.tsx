import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Container, Content, Logo, Title} from './styles';

interface HeaderProps {
  isBackVisible?: boolean;
  onBackPress?: () => void;
}

export function Header({isBackVisible = false, onBackPress}: HeaderProps) {
  return (
    <Container>
      {isBackVisible && (
        <Button onPress={onBackPress}>
          <Icon name="angle-left" size={30} />
        </Button>
      )}
      <Content>
        <Logo source={require('../../assets/icon.png')} />
        <Title>Rick and Morty</Title>
      </Content>
    </Container>
  );
}
