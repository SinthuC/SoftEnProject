import React  from 'react';
import NavBar from './layout/NavBar';
import SignUpModal from './layout/SignUpModal';
import SignInModal from './layout/SignInModal';
const App = ({children}) => (
  <div>
    <NavBar />
    {children}
    <SignUpModal />
    <SignInModal />
  </div>
);

export default App;
