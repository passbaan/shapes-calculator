import React, { Component } from 'react';

export default class FormShapeType extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {  onChangeHandler } = this.props;

    return (
      <div>
        <form onSubmit={this.continue} className="form">
          <div className="form-group"  role="group">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="shape"
                  
                  value="rectangle"
                  onChange={onChangeHandler}
                />
                Rectangle
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="shape"
                  value="circle"
                  
                  onChange={onChangeHandler}
                />
                Circle
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="shape"
                  value="square"
                  
                  onChange={onChangeHandler}
                />
                Square
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="shape"
                  value="ellipse"
                  
                  onChange={onChangeHandler}
                />
                Ellipse
              </label>
            </div>
          </div>
          <input type="submit" className="btn btn-primary" value="Next" />
        </form>
      </div>
    );
  }
}
