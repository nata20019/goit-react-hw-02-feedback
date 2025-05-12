import { Component } from 'react';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div className="p-group" role="group" aria-label="Basic example">
        <p className="list-element">Good:</p>
        <p className="list-element">Neutral:</p>
        <p className="list-element">Bad:</p>
        <p className="list-element">Total:</p>
        <p className="list-element">PositivePercentage:</p>
      </div>
    );
  }
}

export default Statistics;
