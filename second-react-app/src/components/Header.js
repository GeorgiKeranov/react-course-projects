import React from 'react';

export default function Header(props) {
    return (
        <header className={props.darkMode ? 'header header--dark' : 'header'}>
            <div className="container">
                <div className="header__logo">
                    <img src="./logo192.png" width="40" alt="logo"/>

                    <h3>ReactFacts</h3>
                </div>

                <div className="header__toggler">
                    <p className="header__toggler-light">Light</p>
                    
                    <div className="header__toggler-slider" onClick={props.toggleDarkMode}>
                        <div className="header__toggler-circle"></div>
                    </div>

                    <p className="header__toggler-dark">Dark</p>
                </div>
            </div>
        </header>
    );
}