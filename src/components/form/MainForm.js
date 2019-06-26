import React, { Component } from 'react';
import FormShapeType from './FormShapeType';

import Circle from '../shapes/Circle';
import Rectangle from '../shapes/Rectangle';

import Result from './Result';

class MainForm extends Component {
  state = {
    step: 1,
    shape: 'rectangle',
    result: -1
  };

  //   Proceed to next step
  nextStep = (result = -1) => {
    const { step } = this.state;
    this.setState({ step: step + 1, result });
  };
  //   Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  // Handle the field Change
  inputChangeHandler = e => {
    console.log('as');
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { step, shape, result } = this.state;

    switch (step) {
      case 1:
        return (
          <FormShapeType
            nextStep={this.nextStep}
            onChangeHandler={this.inputChangeHandler}
          />
        );
      case 2:
        if (shape === 'circle') {
          return <Circle nextStep={this.nextStep} />;
        } else if (shape === 'rectangle') {
          return <Rectangle nextStep={this.nextStep} />;
        }
        break;
      case 3:
        return <Result resultValue={result} />;
    }
  }
}
export default MainForm;
