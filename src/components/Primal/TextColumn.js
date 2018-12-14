import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';


class TextColumn extends React.Component {
    constructor() {
        super();

        this.displayData = [];
        this.line = null;
        this.countColumns = 1;
        this.state = {
            showdata : this.displayData,
            postVal : ""
        }

        this.appendData = this.appendData.bind(this);
        this.prependData = this.prependData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    appendData() {
        ++this.countColumns;
        this.displayData.push(
            <TextField
                margin="normal"
                variant="outlined"
                label={`x${this.countColumns}`}
                name={`[${this.line}][${this.countColumns}]`}
                key={`[${this.line}][${this.countColumns}]`}
                />
        );
        this.setState({
            showdata : this.displayData,
            postVal : ""
        });
    }
    prependData() {
        this.displayData.unshift(<div id="display-data"><pre>{this.state.postVal}</pre></div>);
        this.setState({
            showdata : this.displayData,
            postVal : ""
        });
    }
    handleChange(e) {
        let getTextAreaValue = e.target.value;
        this.setState({
            postVal :getTextAreaValue
        });
    }

    render() {
        this.line = this.props.line;
        return (
            <div>
                
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={16}
                >
                    <TextField
                        margin="normal"
                        variant="outlined"
                        label={`x1`}
                        name={`[${this.line}][1]`}
                        key={`[${this.line}][1]`}
                        />
                    <div>
                        {this.displayData}
                    </div>
                    
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={this.appendData} 
                        value={`[${this.line}][addColumn]`}
                    >
                        Ad. Variavel
                    </Button>
                    
                    <select
                        id="age-helper" 
                        name={`[${this.countLines}][signal]`}
                    >
                        <option value="<="> {'<='}  </option>
                        <option value="=">  {'='}   </option>
                        <option value=">="> {'>='}   </option>
                    </select>
                    
                    <TextField
                        disabled = "true"
                        margin="normal"
                        variant="outlined"
                        label={`Resultado`}
                        name={`[${this.line}][0]`}
                        key={`[${this.line}][0]`}
                        />
                </Grid>
            </div>
        );
    }
}


export default TextColumn;
