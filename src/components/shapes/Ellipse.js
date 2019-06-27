import React, { Component } from 'react';

export default class Ellipse extends Component {
  state = {
    a: 1,
    b: 1
  };
  continue = e => {
    e.preventDefault();
    let area = this.state.a * this.state.b * 3.14159265358979;
    this.props.nextStep(area.toFixed(2));
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h5>Step 2 - Insert your values</h5>
        <p className="lead">
          You have selected a Ellipse, please input the required variables
        </p>
        <form className="container" onSubmit={this.continue}>
          <div className="form-group ">
            <label htmlFor="height">Value of a axis:</label>
            <input
              type="number"
              className="form-control"
              name="a"
              placeholder="Enter value of a axis:"
              value={this.state.a}
              onChange={this.inputChangeHandler}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="width">Value of b axis:</label>
            <input
              type="number"
              className="form-control"
              name="b"
              placeholder="Enter value of b axis:"
              value={this.state.b}
              onChange={this.inputChangeHandler}
            />
          </div>
          <input type="submit" className="btn btn-primary mr-3" value="Next" />
          <input
            type="button"
            className="btn btn-light"
            value="Cancel"
            onClick={this.back}
          />
        </form>
      </div>
    );
  }
}
