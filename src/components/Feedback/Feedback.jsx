import css from "./Feedback.module.css";

const Feedback = ({ scores, totalFeedback }) => {
  let scoreKey = Object.keys(scores);
  let percent = Math.round((scores.good / totalFeedback) * 100);

  if (totalFeedback === 0) {
    return <p className={css.text}>No feedback yet</p>;
  }

  return (
    <ul className={css.list}>
      {scoreKey.map((score, index) => {
        return (
          <li key={index}>
            <p>
              {score}: {scores[score]}
            </p>
          </li>
        );
      })}
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {percent}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
