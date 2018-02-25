import React  from 'react';
import NavBar from './layout/NavBar';
import SignUpModal from './layout/SignUpModal';
import SignInModal from './layout/SignInModal';
import Footer from './layout/Footer';
const App = ({children}) => (
  <div style={{background: 'linear-gradient(#d5d18a, #f9f6c2)'}}>
    <NavBar />
    {children}
    <SignUpModal />
    <SignInModal />
    <Footer />
  </div>
);

export default App;
