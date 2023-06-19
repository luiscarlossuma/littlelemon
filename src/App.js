import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <> {/* replacing div element with react fragment <> </> */}
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
