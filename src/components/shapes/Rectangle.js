import React, { Component } from 'react';

export default class Rectangle extends Component {
  state = {
    width: 1,
    length: 1
  };
  continue = e => {
    e.preventDefault();

    this.props.nextStep(this.state.width * this.state.length);
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
        <h1>Rectangle</h1>
        <form className="container" onSubmit={this.continue}>
          <div class="form-group ">
            <label for="length">Length</label>
            <input
              type="number"
              class="form-control"
              name="length"
              placeholder="Enter Length"
              value={this.state.length}
              onChange={this.inputChangeHandler}
            />
          </div>
          <div class="form-group ">
            <label for="length">Width</label>
            <input
              type="number"
              class="form-control"
              name="width"
              placeholder="Enter Width"
              value={this.state.width}
              onChange={this.inputChangeHandler}
            />
          </div>
          <input type="submit" value="Next" />
        </form>
      </div>
    );
  }
}
