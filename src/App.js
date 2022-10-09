import React, {Component} from 'react';
import Header from './components/header';
import Dish from './components/dish';
import NewDish from './components/newDish';
import './styles/App.css';
import Button from '@mui/material/Button';


class App extends Component {
  mensaje = 'Buen provecho!';
  ingredientes = ['papa', 'tomate', 'aceite', 'carne molida'];

  countIngredients(ingredients) {
    return ingredients.length;
  }

  render(){
    return (
      <div className="App">
        <Header />
        <br />
        <NewDish />
        <br />
        <div className='menu'>
          <Dish msj={this.mensaje} ingr={this.ingredientes} qty={this.countIngredients(this.ingredientes)}/>
          <Dish msj={this.mensaje} ingr={this.ingredientes}/>
          <Dish msj={this.mensaje} ingr={this.ingredientes}/>
        </div>
        <Button variant="contained">Hello World</Button>
      </div>
    );
  }
}

export default App;
