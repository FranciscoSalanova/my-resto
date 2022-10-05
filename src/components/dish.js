import React, {Component} from 'react';


export class Ingredient extends Component {
    render() {
        return React.createElement('h4', {}, "Ingredientes:");
    }
}

class Dish extends Component {
    mensaje = 'Buen provecho!';
    ingredientes = ['papa', 'tomate', 'aceite'];

    render() {
        return (
            <div className='dish'>
                <h1>Platillo</h1>
                <Ingredient />
                <ul>
                    {
                        this.ingredientes.map(ingrediente => {
                            return <li>{ingrediente}</li>
                        })
                    }
                </ul>
                <p>{ this.mensaje }</p>
            </div>
        )
    }
}

export default Dish;