import React from 'react';
import './CardsSection.css';
import MyDecks from './my-decks/MyDecks';
import CardSearchLanding from './Cards-Search/CardSearchLanding';

function CardsSection() {
    return (
        <div className="landing__cards-section">
            <CardSearchLanding/>
            <MyDecks />
        </div>
    );
}

export default CardsSection;