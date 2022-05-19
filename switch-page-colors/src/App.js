import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import "./style.css";

export default function App() {
    const [darkMode, setDarkMode] = React.useState(false);

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }

    return (
        <div className="app">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={darkMode} />
        </div>
    );
}