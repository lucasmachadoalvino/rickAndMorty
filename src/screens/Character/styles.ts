import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
  padding: ${({theme}) => theme.spacing.large}px;
`;

export const LogoContent = styled.View`
  flex-direction: row;
  margin-bottom: ${({theme}) => theme.spacing.large}px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 30px;
  width: 30px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20;
`;
