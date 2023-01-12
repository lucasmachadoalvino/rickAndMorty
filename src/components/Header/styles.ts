import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${({theme}) => theme.spacing.large}px;
  align-items: center;
  padding: 0 ${({theme}) => theme.spacing.large}px;
`;

export const Button = styled(RectButton)``;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 30px;
  width: 30px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
