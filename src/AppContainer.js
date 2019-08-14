import React, { Component } from 'react';

import Application from './Application'

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
};

export default class AppContainer extends Component {
  state = { ...initialState };

  updateNumberOfPeople = event => {
    console.log("NumPpl = " + event.target.value)
    const numberOfPeople = parseInt(event.target.value, 10);
    this.setState({ numberOfPeople });
  };

  updateSlicesPerPerson = event => {
    console.log("SlicesPerPerson = " + event.target.value)
    const slicesPerPerson = parseInt(event.target.value, 10);
    this.setState({ slicesPerPerson });
  };

  reset = event => {
    this.setState({ ...initialState });
  };

  render() {
    const { numberOfPeople, slicesPerPerson } = this.state;
    const numberOfPizzas = calculatePizzasNeeded(
      numberOfPeople,
      slicesPerPerson,
    );

    return (
      <Application
        numberOfPeople={numberOfPeople}
        updateNumPeople={this.updateNumberOfPeople}
        slicesPerPerson={slicesPerPerson}
        updateSlicesPerPerson={this.updateSlicesPerPerson}
        numberOfPizzas={numberOfPizzas}
        reset={this.reset}
      />
    );
  }
}
