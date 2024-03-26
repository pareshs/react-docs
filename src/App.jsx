//import myData from './data.json';
import { useState } from 'react';
import './App.css';
//import ListGroup from './components/ListGroup';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id));
    };
    return (
        <>
            <Header text={'Feedback UI Component'} />
            <div className="container">
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    );
}

export default App;
