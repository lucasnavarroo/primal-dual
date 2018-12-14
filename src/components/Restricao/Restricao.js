import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PubSub from "pubsub-js";

class Restricao extends Component {
  state = {
    restricao: []
  };

  componentDidMount() {
    PubSub.subscribe(
      "get-array",
      function(event) {
        var arrRestricao = this.state.restricao;
        this.props.getArray(arrRestricao);
      }.bind(this)
    );
  }

  addElRestricao = () => {
    var newRestricao = this.state.restricao.concat(0);
    this.setState({ restricao: newRestricao });
  };

  replaceAt = (array, index, value) => {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  };

  render() {
    return (
      <div>
        {this.state.restricao.map((number, i) => (
          <TextField
           key = {i}
            value={this.state.restricao[i]}
            onChange={event => {
              const newRestricao = this.replaceAt(
                this.state.restricao,
                i,
                event.target.value
              );
              this.setState({ restricao: newRestricao });
            }}
          />
        ))}
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            this.addElRestricao();
          }}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default Restricao;
