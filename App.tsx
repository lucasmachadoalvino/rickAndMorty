import React from 'react';
import {ThemeProvider} from 'styled-components';

import {AppNavigator} from './src/navigation';
import {theme} from './src/style/theme';

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
