// import React, { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import css from "./Section.module.css";
// import FeedbackButtons from "components/FeedbackButtons/FeedbackButtons";
// import Statistics from "components/Statistics/Statistics";
// import css from "./Feedback.module.css";

// const Feedback = () => {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

const Section = (props) => {
  const { title, children } = props;
  return ( 
    <section className={css.title} >
			<div>
				<h2>{title}</h2>
				{children}
			</div>
		</section>
  );
};
//   // додавання відгуку по одному
//   // const handleFeedback = (type) => {
//   //   setFeedback((prevFeedback) => ({
//   //     ...prevFeedback,
//   //     [type]: prevFeedback[type] + 1,
//   //   }));
//   // };


//   // // разом всі відгуки
//   // const countTotalFeedback = () => {
//   //   return feedback.good + feedback.neutral + feedback.bad;
//   // };



//   // // процентовка всіх хороших відгуків
//   // const countPositiveFeedbackPercentage = () => {
//   //   const total = countTotalFeedback();
//   //   return total > 0 ? Math.round((feedback.good / total) * 100) : 0;
//   // };

// //   const FeedbackOptions = ["good", "neutral", "bad"];

// //   return (
// //     <div className={css.header}>
// //       <h1 className={css.title}>Please leave feedback</h1>
// //       <FeedbackButtons
// //         options={FeedbackOptions}
// //         onLeaveFeedback={handleFeedback}
// //       />
// //       {countTotalFeedback() > 0 ? (
// //         <Statistics
// //           good={feedback.good}
// //           neutral={feedback.neutral}
// //           bad={feedback.bad}
// //           total={countTotalFeedback()}
// //           positivePercentage={countPositiveFeedbackPercentage()}
// //         />
// //       ) : (
// //         <p className={css['title-two']}>No feedback given.</p>
// //       )}
// //     </div>
// //   );
// // };

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;