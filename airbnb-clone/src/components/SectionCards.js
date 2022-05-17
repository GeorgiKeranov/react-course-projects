import React from 'react';
import Card from './Card';

export default function SectionCards() {
    return (
        <section className="section-cards">
            <div className="container">
                <Card
                    image="katie-zaferes.png"
                    status="SOLD OUT"
                    rating="5.0"
                    reviews={6}
                    location="USA"
                    text="Life lessons with Katie Zaferes"
                    price={136}
                />
            </div>
        </section>
    );
}