import React, { Component } from 'react';
import TextLine from './TextLine';
import TextColumn from './TextColumn';

class FormPrimal extends Component {

    constructor(){
        super();
        this.countColumns = 1;
        this.state = {
            open: false
        }
    }

    render() {
        return(
            <div>
                <form>
                    <h3>Função Objetiva</h3>
                    <TextColumn
                        line={`0`}
                        key={`funcaoObj`}
                        combo="false"/>
                    <h3>Restriçoes</h3>
                    <TextLine
                        key={`[${this.countLines}][linha]`}/>
                </form>
            </div>
        );
    }
}

export default FormPrimal;

