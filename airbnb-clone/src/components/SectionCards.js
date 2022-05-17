import React from 'react';
import Card from './Card';
import data from '../data'

export default function SectionCards() {
    const cards = data.map(card => {
        return <Card
            image={card.image}
            status={card.status}
            rating={card.stats.rating}
            reviewsCount={card.stats.reviewsCount}
            location={card.location}
            title={card.title}
            price={card.price}
        />
    });

    return (
        <section className="section-cards">
            {cards}
        </section>
    );
}