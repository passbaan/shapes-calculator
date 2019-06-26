import React from 'react';

export default function Result(props) {
  return (
    <div>
      <h3>Step 3 - Your results</h3>
      <p className="lead">
        You have calculated the area of {props.shapeName} to be{' '}
        {props.resultValue}. Below is your result:
      </p>
      <p className="font-weight-bold">The area is {props.resultValue}.</p>
      <button className="btn btn-primary" onClick={props.startOver}>
        Start Over
      </button>
    </div>
  );
}
