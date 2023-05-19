import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.wrapButton}>
      {options.map(name => {
        return (
          <button
            key={name}
            type="button"
            className={css.button}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeavefeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
