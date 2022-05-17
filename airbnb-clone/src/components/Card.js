import React from 'react';

export default function Card(props) {
    let cardLabel;
    if (props.openSpots === 0) {
        cardLabel = 'SOLD OUT';
    } else if (props.location === 'Online') {
        cardLabel = "ONLINE";
    }

    return (
        <div className="card">
            <div className="card__image" style={{ backgroundImage: `url(/images/${props.image})` }}>
                {cardLabel && <div className="card__label">{cardLabel}</div>} 
            </div>

            <div className="card__details">
                <div className="card__rating-location">
                    <img src="/images/star.png" alt="star" width="12" height="11" />

                    <p>{props.rating} <span>({props.reviewsCount}) • {props.location}</span></p>
                </div>

                <p>{props.title}</p>

                <p><strong>From ${props.price}</strong> / person</p>
            </div>
        </div>
    );
}