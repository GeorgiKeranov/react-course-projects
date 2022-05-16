import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import "./style.css";

export default function App() {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
}