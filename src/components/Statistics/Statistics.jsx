import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return(
      
              <div>
<h2 className={css['title-two']}>Statistics:</h2>

<div className={css.item}>
<p>Good: {good}</p>
<p>Neutral: {neutral}</p>
<p>Bad: {bad}</p>
<p>Total: {total}</p>
<p>Positive feedback: {positivePercentage}%</p>
</div>
</div>
        
    )
}
Statistics.propTypes = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
total: PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;