import React, { Component } from 'react'

import WithPizzaCalculations from './WithPizzaCalculations'
import PizzaCalculator from './PizzaCalculator';

const PizzaContainer = WithPizzaCalculations(PizzaCalculator)
export default class Application extends Component {
  render() {
    return <PizzaContainer />
  };
}