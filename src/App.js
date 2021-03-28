import React from 'react';
import Navbar from './components/Navbar'
import Routes from './routes'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <div className="container">
          <Routes />
        </div>
      </HashRouter>
    </>
  );
}

export default App;