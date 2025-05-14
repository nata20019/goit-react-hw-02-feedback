import { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className="p-group" role="group" aria-label="Basic example">
        <ul className="w-list">
          <li className="list" key="good">
            <p className="list-element">Good:</p>
            <span className="value">{good || 0}</span>
          </li>
          <li className="list" key="neutral">
            <p className="list-element">Neutral:</p>
            <span className="value">{neutral || 0}</span>
          </li>
          <li className="list" key="bad">
            <p className="list-element">Bad:</p>
            <span className="value">{bad || 0}</span>
          </li>
          <li className="list" key="total">
            <p className="list-element">Total:</p>
            <span className="value">{total || 0}</span>
          </li>
          <li className="list" key="positive">
            <p className="list-element">Positive Percentage:</p>
            <span className="value">{positivePercentage || 0}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
