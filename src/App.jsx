import { useState, useEffect } from "react";
import "./App.css";
import Descriptions from "./components/Descriptions/Descriptions";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const scores = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : scores;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback(scores);
  };

  return (
    <>
      <Descriptions />
      <Options
        options={Object.keys(scores)}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={resetFeedback}
      />
      <Feedback scores={feedback} totalFeedback={totalFeedback} />
    </>
  );
}

export default App;
