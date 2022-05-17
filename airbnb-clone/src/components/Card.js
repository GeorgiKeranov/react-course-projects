import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <div className="card__image" style={{ backgroundImage: `url(/${props.image})` }}>
                <div className="card__label">{props.status}</div>
            </div>

            <div className="card__details">
                <div className="card__rating-location">
                    <img src="/star.png" alt="star" width="12" height="11" />

                    <p>{props.rating} <span>({props.reviews}) • {props.location}</span></p>
                </div>

                <p>{props.text}</p>

                <p><strong>From ${props.price}</strong> / person</p>
            </div>
        </div>
    );
}