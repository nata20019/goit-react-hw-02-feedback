import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const feedbackMap = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
];

export class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  handleFeedback = e => {
    const { title } = e.target;
    this.props.onLeaveFeedback(title.toLowerCase());
  };

  render() {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        {feedbackMap.map(feedback => (
          <Button
            onClick={this.handleFeedback}
            variant="primary"
            key={feedback.id}
            type="button"
            className="btn"
            title={feedback.title}
          >
            {feedback.title}
          </Button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
