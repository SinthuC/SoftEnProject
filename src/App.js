import React  from 'react';
import NavBar from './layout/NavBar';
const App = ({children}) => (
  <div>
    <NavBar />
    {children}
  </div>
);

export default App;
