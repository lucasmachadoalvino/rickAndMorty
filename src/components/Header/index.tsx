import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Container, Content, Logo, Title} from './styles';

interface HeaderProps {
  isBackVisible?: boolean;
  onBackPress?: () => void;
  title?: string;
}

export function Header({
  isBackVisible = false,
  onBackPress,
  title = 'Rick and Morty',
}: HeaderProps) {
  return (
    <Container>
      {isBackVisible && (
        <Button
          onPress={onBackPress}
          hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
          <Icon name="angle-left" size={30} />
        </Button>
      )}
      <Content>
        {!isBackVisible && <Logo source={require('../../assets/icon.png')} />}
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}
