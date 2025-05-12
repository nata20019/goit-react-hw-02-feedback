import { Component } from 'react';

const feedbackMap = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
];

export class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        {feedbackMap.map(feedback => (
          <button key={feedback.id} type="button" className="btn">
            {feedback.title}
          </button>
        ))}
        {/* <button type="button" className="btn btn-good">
          Good
        </button>
        <button type="button" className="btn btn-neutral">
          Neutral
        </button>
        <button type="button" className="btn btn-bad">
          Bad
        </button> */}
      </div>
    );
  }
}

export default FeedbackOptions;
