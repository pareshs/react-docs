import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card.jsx';

function FeedbackItem({ item, handleDelete }) {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes color="purple" />
            </button>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object,
    rating: PropTypes.number,
    text: PropTypes.string,
    handleDelete: PropTypes.func,
};

export default FeedbackItem;
