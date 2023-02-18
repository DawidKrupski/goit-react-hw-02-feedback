import React from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends React.Component {
  render() {
    const { state, handleFeedbackOption } = this.props;
    return (
      <div className={css.rateBtn}>
        {Object.keys(state).map(option => (
          <button
            key={option}
            className={css.button}
            name={option}
            type="button"
            onClick={handleFeedbackOption}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}
