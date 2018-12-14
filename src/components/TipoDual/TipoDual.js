import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class TipoDual extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.tipo(event.target.value);
    console.log(this.state.value + "value");
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Tipo</FormLabel>
          <RadioGroup
            aria-label="tipo"
            name="tipo2"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="Max"
              control={<Radio color="primary" />}
              label="Maximização"
              labelPlacement="start"
            />
            <FormControlLabel
              value="Min"
              control={<Radio color="primary" />}
              label="Minimização"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

TipoDual.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TipoDual);
