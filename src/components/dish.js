import React, {Component} from 'react';


export class Ingredient extends Component {
    render() {
        return React.createElement('h4', {}, "Ingredientes:");
    }
}

class Dish extends Component {
    render() {
        return (
            <div className='dish'>
                <h1>Platillo</h1>
                <Ingredient />
                <ul>
                    {
                        this.props.ingr.map((ingrediente, index) => {
                            return <li key={index}>{ingrediente}</li>
                        })
                    }
                </ul>
                <p>Cantidad de ingredientes: {this.props.qty}</p>
                <p>{ this.props.msj }</p>
            </div>
        )
    }
}

export default Dish;