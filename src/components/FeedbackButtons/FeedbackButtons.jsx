import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackButtons.module.css";


// додавання притисків
const FeedbackButtons = ({ options, onLeaveFeedback }) => {
    return (
      <div className={css.container}>
        {options.map((option) => (
          <button className={css.button} key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };

FeedbackButtons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;