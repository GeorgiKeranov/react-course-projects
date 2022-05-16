import React from 'react';

export default function SectionIntro() {
    return (
        <section className="section-intro">
            <div className="container">
                <div className="section__image">
                    <img src="./intro-image.png" alt="intro" width="396" height="232" />
                </div>

                <div className="section__text">
                    <h1>Online Experiences</h1>

                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </div>
        </section>
    );
}