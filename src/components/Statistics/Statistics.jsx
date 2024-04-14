import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";


// додавання до хтмл колонку з відгуками
// const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
//     return(
      
//               <div>
// <h2 className={css['title-two']}>Statistics:</h2>

// <div className={css.item}>
// <p>Good: {good}</p>
// <p>Neutral: {neutral}</p>
// <p>Bad: {bad}</p>
// <p>Total: {total}</p>
// <p>Positive feedback: {positivePercentage}%</p>
// </div>
// </div>
        
//     )
// }

const Statistics = (props) => {
    const { good, neutral, bad, total, positivePercentage } = props;
    return (
        
        <ul className={css.item}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage} %</li>
        </ul>

    );
};


Statistics.propTypes = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
total: PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;