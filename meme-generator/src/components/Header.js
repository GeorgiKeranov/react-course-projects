import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="/">
                    <img src="/images/logo.png" alt="logo" />

                    <h3>Meme Generator</h3>
                </a>
            </div>

            <div className="header__label">
                <p>React Course - Project 3</p>
            </div>
        </header>
    );
}

export default Header;