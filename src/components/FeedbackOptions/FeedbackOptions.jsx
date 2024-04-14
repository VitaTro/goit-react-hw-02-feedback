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
const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;
  const feedbackOptionsKeys = Object.keys(options);

  return(
<ul className={css.container}>     
{feedbackOptionsKeys.map((option, index) => {
  return(
    <li key={index} >
<button 
className={css.button}
type="button"
name={option}
   onClick={ onLeaveFeedback }>   
           {option}
          </button>

    </li>
      ); 
    })}
  </ul>
  );
};

FeedbackOptions.propTypes = {
    // options: PropTypes.arrayOf(PropTypes.string).isRequired,
    options: PropTypes.object.isRequired,
onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;