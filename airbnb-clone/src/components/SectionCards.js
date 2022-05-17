import React from 'react';
import Card from './Card';
import data from '../data'

export default function SectionCards() {
    const cards = data.map(card => {
        return <Card
            key={card.id}
            {...card}
        />
    });

    return (
        <section className="section-cards">
            {cards}
        </section>
    );
}