import React from 'react';

class FormTeste extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            sobrenome: ''
        }

        this.submit = this.submit.bind(this);
    }
    handleChange(item, mesage){
        switch (mesage) {
            case "nome"         : { this.setState({ nome: item.target.value })}
            case "sobrenome"    : { this.setState({ sobrenome: item.target.value })}
        }
    }
    submit(){
        let obj = {};
        obj.nome = this.state.nome;
        obj.sobrenome = this.state.sobrenome;
        console.warn("Valores.", obj);
    }
    render() {
        return(
            <div>
                <h1>Mensagem</h1>
                <input type="number" 
                    name="nome"      placeholder="Nome"      
                    onChange={(e) => this.handleChange(e, "nome")}/>
                <input type="number" 
                    name="sobrenome" placeholder="Sobrenome" 
                    onChange={(e) => this.handleChange(e, "sobrenome")}/>
                <button onClick={this.submit} >Submit</button>
            </div>
        );
    }
}

export default FormTeste;
