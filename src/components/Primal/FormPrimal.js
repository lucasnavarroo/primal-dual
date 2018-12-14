import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Restricao from "../Restricao/Restricao.js";
import PubSub from "pubsub-js";

class FormPrimal extends Component {

  state = {
    matriz: [],
    funcObj: [],
    matrizRestricoes: [],
    qtdRestricoes: 2,
    tipo: ""
  };

  addElFuncObj = () => {
    var newFuncObj = this.state.funcObj.concat(0);
    this.setState({ funcObj: newFuncObj });
  };

  replaceAt = (array, index, value) => {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  };

  addRestricao = () => {
    let arr = [];

    for (var i = 0; i < this.state.qtdRestricoes; i++) {
      arr.push(i);
    }
    return arr;
  };

  novaRestricao = () => {
    debugger;
    this.setState({ qtdRestricoes: this.state.qtdRestricoes++ });
    this.addRestricao();
  };

  calcular = () => {
    PubSub.publish("get-array");
    this.state.matriz[0] = this.state.funcObj;

    for (var i = 0; i < this.state.matrizRestricoes.length; i++) {
      this.state.matriz[this.state.matriz.length] = this.state.matrizRestricoes[
        i
      ];
    }

    console.log("matriz final: " + this.state.matriz);
    console.log("matriz restricoes: " + this.state.matrizRestricoes);
  };

  render() {
    return (
      <div>
        <h3>Função Objetiva</h3>
        {this.state.funcObj.map((number, i) => (
          <TextField
           key = {i}
            value={this.state.funcObj[i]}
            onChange={event => {
              const newFuncObj = this.replaceAt(
                this.state.funcObj,
                i,
                event.target.value
              );
              this.setState({ funcObj: newFuncObj });
            }}
          />
        ))}
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            this.addElFuncObj();
          }}
        >
          Add
        </Button>
        <h3>Restrições</h3>
        <div>
          {this.addRestricao().map((el, i) => {
            let matrizRestr = this.state.matrizRestricoes;
            let self = this;
            
            return (
              <Restricao
                key={i}
                getArray={array => {
                  matrizRestr[matrizRestr.length] = array;

                  self.setState({ matrizRestricoes: matrizRestr });
                }}
              />
            );
          })}
        </div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            this.novaRestricao();
          }}
        >
          Nova restrição
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            this.calcular();
          }}
        >
          Calcular
        </Button>
      </div>
    );
  }
}

export default FormPrimal;
