import React from 'react';
import Card from './Card';
import data from '../data'

export default function SectionCards() {
    const cards = data.map(card => {
        return <Card
            key={card.id}
            image={card.image}
            rating={card.stats.rating}
            reviewsCount={card.stats.reviewsCount}
            location={card.location}
            title={card.title}
            price={card.price}
            openSpots={card.openSpots}
        />
    });

    return (
        <section className="section-cards">
            {cards}
        </section>
    );
}