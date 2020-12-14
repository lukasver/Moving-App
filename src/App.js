import React, { useLayoutEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route } from 'react-router-dom';
import ContentPage from './Components/ContentPage';
import HomeContent from './Components/HomeContent';
import Table from './Components/Table';

function App() {


  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  return (
    <div className="App">
      <Route path='/' render={({ location }) => <ContentPage location={location.pathname} />} />
      <Route path='/' render={() => <Navbar useWindowSize={useWindowSize} />} />
      <Route exact path='/' render={() => <HomeContent />} />
      <Route exact path='/:area' render={({ match }) => <Table params={match.params.area} />} />
    </div>
  );
}

export default App;
