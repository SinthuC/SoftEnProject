import React  from 'react';
import NavBar from './layout/NavBar';
import SignUpModal from './layout/SignUpModal';
import SignInModal from './layout/SignInModal';
import Footer from './layout/Footer';
import background from './camouflage.jpg';

const styles = {
  content: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',            
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  children: {
    minHeight: '100vh',
    maxHeight: '100%',
  }
}

const App = ({children}) => (
  <div style={styles.content}>
    <NavBar />
    <div style={styles.children}>
      {children}
    </div>
    <SignUpModal />
    <SignInModal />
    <Footer />
  </div>
);

export default App;
