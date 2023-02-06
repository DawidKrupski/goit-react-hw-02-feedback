import React from 'react';
import css from './Widget.module.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positive: 0,
};

export class Widget extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  goodIncrement = event => {
    this.setState(state => ({
      good: (state.good += 1),
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  neutralIncrement = event => {
    this.setState(state => ({
      neutral: (state.neutral += 1),
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  badIncrement = event => {
    this.setState(state => ({
      bad: (state.bad += 1),
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = event => {
    this.setState(state => ({
      total: (state.total += 1),
    }));
  };

  countPositiveFeedbackPercentage = event => {
    this.setState(state => ({
      positive: Math.ceil((state.good / state.total) * 100),
    }));
  };

  render() {
    return (
      <div>
        <span> Please leave feedback</span>
        <div className={css.rateBtn}>
          <button onClick={this.goodIncrement}> Good</button>
          <button onClick={this.neutralIncrement}> Neutral</button>
          <button onClick={this.badIncrement}> Bad</button>
        </div>
        <div className={css.statistic}>
          <span className={css.statisticTitle}> Statistic</span>
          <span> Good: {this.state.good} </span>
          <span> Neutral : {this.state.neutral} </span>
          <span> Bad: {this.state.bad} </span>
          <span> Total: {this.state.total} </span>
          <span> Positive feedback: {this.state.positive}% </span>
        </div>
      </div>
    );
  }
}
