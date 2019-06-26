import React, { Component } from 'react';

export default class Circle extends Component {
  state = {
    diameter: 1
  };
  continue = e => {
    e.preventDefault();
    let area = this.state.diameter * 3.14;
    this.props.nextStep(area);
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
          You have selected a circle, please input the required variables
        </p>
        <form className="container" onSubmit={this.continue}>
          <div className="form-group ">
            <label htmlFor="length">Diameter</label>
            <input
              type="number"
              className="form-control"
              name="diameter"
              placeholder="Enter Diameter"
              value={this.state.diameter}
              onChange={this.inputChangeHandler}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Next" />
          <input type="button" value="Cancel" className="btn btn-light" onClick={this.back} />
        </form>
      </div>
    );
  }
}
