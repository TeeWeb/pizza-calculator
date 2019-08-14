import React, { Component } from 'react';

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
};

const WithPizzaCalculations = WrappedComponent => {
  return class extends Component {
    static displayName = `WithPizzaCalculations(${ WrappedComponent.displayName || WrappedComponent.name })`
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
        <WrappedComponent
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
}

export default WithPizzaCalculations;