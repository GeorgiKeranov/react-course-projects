import React from 'react';

export default function Header() {
    return (
        <header class="header">
            <div className="container">
                <div className="header__logo">
                    <img src="./logo192.png" width="40" alt="logo"/>

                    <h3>ReactFacts</h3>
                </div>

                <div className="header__heading">
                    <h4>React Course - Project 1</h4>
                </div>
            </div>
        </header>
    );
}