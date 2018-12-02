import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


class FormPrimal extends Component {

    state = {
        countColumns: 1,
        open: false
    }

    addColumn = () => {
        if(this.state.open) return
        <TextField
            id="outlined-uncontrolled"
            label={`x${this.state.countColumns}`}
            margin="normal"
            variant="outlined"
        />
    };

    render() {
        return(
            
            <div>
                <Grid xs={12} md={4} lg={4}
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                    <TextField
                    id="outlined-uncontrolled"
                    label={`x${this.state.countColumns}`}
                    margin="normal"
                    variant="outlined"
                    />
                    <div>
                        {this.addColumn()}
                    </div>
                    <Button variant="fab" color="primary" aria-label="Add" onclick={this.setState({open: true})}>
                    </Button>
                </Grid>            
            </div>
        );
    }
}

export default FormPrimal;

