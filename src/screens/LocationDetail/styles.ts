import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const InfoContent = styled.View`
  padding: ${({theme}) => theme.spacing.large}px;
`;

export const Information = styled.Text`
  margin-bottom: ${({theme}) => theme.spacing.medium}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: ${({theme}) => theme.spacing.large}px;
`;
