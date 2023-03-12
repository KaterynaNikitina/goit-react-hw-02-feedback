import PropTypes from 'prop-types';
import { Paragraph } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Paragraph>
        Good: <span>{good}</span>
      </Paragraph>
      <Paragraph>
        Neutral: <span>{neutral}</span>
      </Paragraph>
      <Paragraph>
        Bad: <span>{bad}</span>
      </Paragraph>
      <Paragraph>
        Total: <span>{total}</span>
      </Paragraph>
      <Paragraph>
        Positive feedback: <span>{positivePercentage}</span>%
      </Paragraph>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
