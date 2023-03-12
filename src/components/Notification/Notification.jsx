import PropTypes from 'prop-types';
import { NoteText } from './Notification.styled';

const Notification = ({ message }) => {
  return <NoteText>
    {message}
    </NoteText>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
