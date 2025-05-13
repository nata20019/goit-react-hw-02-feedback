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

  handleClick = e => {
    const { title } = e.target;
    this.setState(prevState => ({
      [title]: prevState[title] + 1,
    }));
  };

  render() {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        {feedbackMap.map(feedback => (
          <Button
            onClick={this.handleClick}
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
