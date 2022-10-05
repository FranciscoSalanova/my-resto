import Header from './components/header';
import Dish from './components/dish';
import './styles/App.css';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='menu'>
        <Dish />
        <Dish />
        <Dish />
      </div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
