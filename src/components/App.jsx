import React, { useState } from "react";
import Feedback from "./Feedback/Feedback";


export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  return (
    <>
    <Feedback  
    good = {state.good}
    neutral = {state.neutral}
    bad = {state.bad}
    />
    
    </>
  );
};
