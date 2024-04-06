import React, { useState } from "react";
import PropTypes from "prop-types";
import css from './feedback.module.css';

// виводимо постійну, яка буде показувати усі кліки 
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
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
    );
  };
  
// завантаження всіх кліків  
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
  
// скільки буде притисків
const Feedback = () => {
    const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0,
    });

    // ця функція допомагає оновлювати стан додатку, коли користувач залишає відгук
const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [type]: prevFeedback[type] +1,
    }));
};

// додає всі відгуки разом (хороші, нейтральні і погані)
const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
}; 

// виводить у процентах, скільки було залишено хороших відгуків
const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((feedback.good / total) * 100) : 0;
};

const FeedbackOptions = ['good', 'neutral', 'bad']; 

return (
    <div className={css.header}>
        <h1 className={css.title}>Please leave feedback</h1>
<FeedbackButtons options={FeedbackOptions} onLeaveFeedback={handleFeedback} /> 

{countTotalFeedback() > 0 ? (
   <Statistics
   good={feedback.good}
   neutral={feedback.neutral}
   bad={feedback.bad}
   total={countTotalFeedback()}
positivePercentage={countPositiveFeedbackPercentage()}

   />
) : (
    // якщо відгуків немає, то виводить повідомлення
    <p className={css['title-two']}> No feedback given.</p>     
)}
</div>
);
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

FeedbackButtons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
export default Feedback;