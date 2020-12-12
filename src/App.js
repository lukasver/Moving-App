import './App.css';
import Navbar from './Components/Navbar';
import { Route } from 'react-router-dom';
import ContentPage from './Components/ContentPage';
import HomeContent from './Components/HomeContent';
import Table from './Components/Table';

function App() {

  return (
    <div className="App">
      <Route path='/' render={({location}) => <ContentPage location={location.pathname}/>}/>
      <Route path='/' render={() => <Navbar />}/>
      <Route exact path='/' render={() => <HomeContent/>}/>
      <Route exact path='/:area' render={({ match }) => <Table params={match.params.area} />}/>
    </div>
  );
}

export default App;
