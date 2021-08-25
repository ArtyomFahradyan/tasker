import React, { useState } from 'react';
import { GlobalStyle } from 'theme';
import { PermissionsContext } from 'contexts/PermissionsContext';
import Router from './components/Router';


function App() {
  const [permissions, setPermissions] = useState<string[]>([]);

  return (
      <PermissionsContext.Provider value={[permissions, setPermissions]}>
        <GlobalStyle />
        <Router />
      </PermissionsContext.Provider>
  );
}

export default App;
