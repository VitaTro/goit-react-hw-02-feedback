import React, { useState } from "react";
import FeedbackButtons from "components/FeedbackButtons/FeedbackButtons";
import Statistics from "components/Statistics/Statistics";
import css from "./Feedback.module.css";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((feedback.good / total) * 100) : 0;
  };

  const FeedbackOptions = ["good", "neutral", "bad"];

  return (
    <div className={css.header}>
      <h1 className={css.title}>Please leave feedback</h1>
      <FeedbackButtons
        options={FeedbackOptions}
        onLeaveFeedback={handleFeedback}
      />
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <p className={css['title-two']}>No feedback given.</p>
      )}
    </div>
  );
};

export default Feedback;