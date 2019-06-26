import React, { Component } from 'react';

export default class Circle extends Component {
  state = {
    diameter: 1
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep(this.state.diameter*3.14);
  };
  back = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Circle</h1>
        <form className="container" onSubmit={this.continue}>
          <div class="form-group ">
            <label for="length">Diameter</label>
            <input
              type="number"
              class="form-control"
              name="circleDiameter"
              placeholder="Enter Diameter"
              value={this.state.diameter}
              onChange={this.inputChangeHandler}
            />
          </div>
          <input type="submit" value="Next" />
        </form>
      </div>
    );
  }
}
