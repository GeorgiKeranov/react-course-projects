import React from 'react';

export default function Card() {
    return (
        <div className="card">
            <div className="card__image" style={{ backgroundImage: 'url(/katie-zaferes.png)' }}>
                <div className="card__label">SOLD OUT</div>
            </div>

            <div className="card__details">
                <div className="card__rating-location">
                    <img src="/star.png" alt="star" width="12" height="11" />

                    <p>5.0 <span>(6) • USA</span></p>
                </div>

                <p>Life lessons with Katie Zaferes</p>

                <p><strong>From $136</strong> / person</p>
            </div>
        </div>
    );
}