import { Component } from 'react';
import Button from 'react-bootstrap/Button';

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
          <Button
            variant="primary"
            key={feedback.id}
            type="button"
            className="btn"
          >
            {feedback.title}
          </Button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
