import PropTypes from 'prop-types';
import { ButtonsBlock, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <ButtonsBlock>
       {options.map(option => {
        return (
          <li key={option}>
            <Button onClick={() => onFeedback(option)}>{option}</Button>
          </li>
        );
      })}
    </ButtonsBlock>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
