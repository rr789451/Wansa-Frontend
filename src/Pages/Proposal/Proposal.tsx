import React from 'react'
import Navigation from '../../Components/Navigation/Navigation';
import QuestionCard from '../../Components/QuestionCard/QuestionCard';
import './Proposal.css';

function Proposal() {
    return (
        <div>
            <Navigation />
            <div className="hero body">
                <div className="container">
                    <div className="heading">Would you prefer to talk to someone <strong>in person</strong>?</div>
                    <div className="desc">Speak with a strategist:</div>
                    <button className="call"><i className="fas fa-mobile"></i> 888-601-5359</button>
                </div>
            </div>
            <QuestionCard />
        </div>
    )
}

export default Proposal
