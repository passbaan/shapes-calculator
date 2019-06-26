import React, { Component } from 'react';

export default class Rectangle extends Component {
  state = {
    width: 1,
    height: 1
  };
  continue = e => {
    e.preventDefault();

    this.props.nextStep(this.state.width * this.state.height);
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
          You have selected a rectangle, please input the required variables
        </p>
        <form className="container" onSubmit={this.continue}>
          <div className="form-group ">
            <label htmlFor="height">Height</label>
            <input
              type="number"
              className="form-control"
              name="height"
              placeholder="Enter Height"
              value={this.state.height}
              onChange={this.inputChangeHandler}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="width">Width</label>
            <input
              type="number"
              className="form-control"
              name="width"
              placeholder="Enter Width"
              value={this.state.width}
              onChange={this.inputChangeHandler}
            />
          </div>
          <input type="submit" className="btn btn-primary mr-3" value="Next" />
          <input type="button" className="btn btn-light" value="Cancel" onClick={this.back} />
        </form>
      </div>
    );
  }
}
