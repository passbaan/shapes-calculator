import React, { Component } from 'react';
import FormShapeType from './FormShapeType';

import Circle from '../shapes/Circle';
import Rectangle from '../shapes/Rectangle';
import Square from '../shapes/Square';
import Ellipse from '../shapes/Ellipse';

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
  //   Go to first Step
  stepOne = () => {
    this.setState({ step: 1 });
  };
  // Handle the field Change
  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { step, shape, result } = this.state;

    switch (step) {
      case 1:
        return (
          <div className="p-2">
            <h5>Step 1 - Select Your Shape</h5>
            <FormShapeType
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              onChangeHandler={this.inputChangeHandler}
            />
          </div>
        );
      case 2:
        if (shape === 'circle') {
          return <Circle nextStep={this.nextStep} prevStep={this.prevStep} />;
        } else if (shape === 'rectangle') {
          return (
            <Rectangle nextStep={this.nextStep} prevStep={this.prevStep} />
          );
        } else if (shape === 'square') {
          return <Square nextStep={this.nextStep} prevStep={this.prevStep} />;
        } else if (shape === 'ellipse') {
          return <Ellipse nextStep={this.nextStep} prevStep={this.prevStep} />;
        }
        break;
      case 3:
        return (
          <Result
            resultValue={result}
            shapeName={shape}
            startOver={this.stepOne}
          />
        );
      default:
        return (
          <div className="p-2">
            <h5>Step 1 - Select Your Shape</h5>
            <FormShapeType
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              onChangeHandler={this.inputChangeHandler}
            />
          </div>
        );
    }
  }
}
export default MainForm;
