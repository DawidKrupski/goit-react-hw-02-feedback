import { Message } from 'components/Notification/Notification';
import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends React.Component {
  render() {
    const { good, neutral, bad } = this.props;
    let total = good + neutral + bad;
    const countPositiveFeedbackPercentage =
      total > 0 ? Math.round((good / total) * 100) : 0;
    return total > 0 ? (
      <div className={css.statistic}>
        <span> Good: {good} </span>
        <span> Neutral : {neutral} </span>
        <span> Bad: {bad} </span>
        <span> Total: {total} </span>
        <span> Positive feedback: {countPositiveFeedbackPercentage}% </span>
      </div>
    ) : (
      <Message />
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  nutral: PropTypes.number,
};
