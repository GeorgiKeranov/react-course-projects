function Header() {
    return (
        <header>
            <h1>This is the header</h1>

            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    );
}

ReactDOM.render(<Header />, document.getElementById('root'));
