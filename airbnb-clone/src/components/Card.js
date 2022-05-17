import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <div className="card__image" style={{ backgroundImage: `url(/images/${props.image})` }}>
                {props.openSpots === 0 && <div className="card__label">SOLD OUT</div>}
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