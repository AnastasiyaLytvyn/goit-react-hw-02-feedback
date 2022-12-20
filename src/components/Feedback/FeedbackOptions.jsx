import css from './feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.container}>
      {options.map(option => (
        <button
          key={option}
          className={css.btn}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
};
