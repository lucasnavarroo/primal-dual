import React from 'react';
import TextColumn from './TextColumn';
import { Button, Grid } from '@material-ui/core';


class TextLine extends React.Component {

    constructor() {
        super();

        this.displayData = [];
        this.countLines = 0;
        this.state = {
            showdata : this.displayData,
            postVal : ""
        }

        this.appendData = this.appendData.bind(this);
        this.prependData = this.prependData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    appendData() {
        this.displayData.push(
                <TextColumn
                    line={`${++this.countLines}`}
                    key={`[${this.countLines}][${this.countColumns}]`}/>
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
        return (
            <div>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <div>
                        {this.displayData}
                    </div>
                    
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={this.appendData} 
                        value={`[${this.line}][addLine]`}
                    >
                        Ad. Linha
                    </Button>


                    
                </Grid>
                
            </div>
        );
    }
}


export default TextLine;
