import React from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class Widget extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  handleFeedbackOption = event => {
    const selectedOption = event.target.name;
    this.setState(prevState => ({
      [selectedOption]: prevState[selectedOption] + 1,
    }));
  };

  render() {
    return (
      <div>
        <span>Please leave feedback</span>
        <FeedbackOptions
          handleFeedbackOption={this.handleFeedbackOption}
          state={this.state}
        />
        <span> Statistic</span>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
