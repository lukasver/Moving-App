import './App.css';
import Navbar from './Components/Navbar';
import ContentPage from './Components/ContentPage';
import Table from './Components/Table';

function App() {
  
  console.log(process.env)
  return (
    <div className="App">
      <Navbar/>
      <ContentPage/>
      <Table/>
    </div>
  );
}

export default App;
