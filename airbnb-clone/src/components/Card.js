import React from 'react';

export default function Card() {
    return (
        <div className="card">
            <div className="card__image" style={{ backgroundImage: 'url(/katie-zaferes.png)' }}>
                <div className="card__label">SOLD OUT</div>
            </div>

            <div className="card__details">
                <div className="card__rating-location">
                    <img src="/star.png" alt="star" />

                    <p>5.0 (6) · USA</p>
                </div>

                <p>Life lessons with Katie Zaferes</p>

                <p><strong>From $136</strong> / person</p>
            </div>
        </div>
    );
}