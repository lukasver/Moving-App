import './App.css';
import Navbar from './Components/Navbar';
import { Route } from 'react-router-dom';
import ContentPage from './Components/ContentPage';
import Table from './Components/Table';

function App() {

  console.log(process.env)
  return (
    <div className="App">
      <Route path='/' render={() => <ContentPage />}/>
      <Route path='/' render={() => <Navbar />}/>
      <Route exact path='/:area' render={({ match }) => <Table params={match.params.area} />}/>
    </div>
  );
}

export default App;
