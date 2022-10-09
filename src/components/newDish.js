import React, {Component} from 'react';
import {Fab, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

class NewDish extends Component {
    addDish() {
        return;
    }
    
    render() {
        return(
            <form autoComplete='off'>
                <TextField label="Platillo..." type="text" margin="normal" variant="outlined" />
                <Fab color="primary" size="medium" className="dish-form-icon" onClick={this.addDish()}>
                    <AddIcon />
                </Fab>
            </form>
        );
    }
}

export default NewDish;