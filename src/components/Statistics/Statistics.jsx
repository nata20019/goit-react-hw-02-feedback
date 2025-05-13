import { Component } from 'react';

const feedbackMap = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
  { id: 'total', title: 'Total' },
  { id: 'positive', title: 'PositivePercentage' },
];

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };
  render() {
    return (
      <div className="p-group" role="group" aria-label="Basic example">
        <ul className="w-list">
          {feedbackMap.map(feedback => (
            <li className="list" key={feedback.id}>
              <p className="list-element"> {feedback.title}:</p>
              <span className="value">{this.state[feedback.id]}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Statistics;
