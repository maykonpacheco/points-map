import React from 'react';
import { PointsProvider } from './hooks/usePoints';
import PointsManagement from './pages/PointsManagement';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <PointsProvider>
      <PointsManagement />
      <GlobalStyle />
    </PointsProvider>
  );
}

export default App;
