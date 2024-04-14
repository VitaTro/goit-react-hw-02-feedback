import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";


// додавання притисків
// const FeedbackButtons = ({ options, onLeaveFeedback }) => {
//     return (
//       <div className={css.container}>
//         {options.map((option) => (
//           <button className={css.button} key={option} onClick={() => onLeaveFeedback(option)}>
//             {option}
//           </button>
//         ))}
//       </div>
//     );
//   };


// cтворення притисків
const FeedbackButtons = (props) => {
  const { options, onLeaveFeedback } = props;
  const feedbackButtonsKeys = Object.keys(options);

  return(
<ul className={css.container}>     
{feedbackButtonsKeys.map((option, index) => {
  return(
    <li key={index}>
<button 
className={css.button}
type="button"
name={option}
   onClick={ onLeaveFeedback }>   
          </button>
    </li>
      )  
    }
  )}
  </ul>
  );
};

FeedbackButtons.propTypes = {
    // options: PropTypes.arrayOf(PropTypes.string).isRequired,
    options: PropTypes.object.isRequired,
onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;