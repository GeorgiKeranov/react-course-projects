function Header() {
    return (
        <header className="header">
            <img width="50" src="./react-logo.png"/>
                
            <nav>
                <ul>
                    <li><a href="#">Pricing</a></li>

                    <li><a href="#">About</a></li>

                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

function MainComponent() {
    return (
        <div>
            <h1>Fun facts about React</h1>

            <ul>
                <li>Was first released in 2013</li>
                
                <li>Was originally created by Jordan Walke</li>
                
                <li>Has well over 100K stars on GitHub</li>
                
                <li>Is maintained by Facebook</li>
                
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <p><small>This is the footer</small></p>
        </footer>
    );
}

function Page() {
    return (
        <div>
            <Header />
            <MainComponent />
            <Footer />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById('root'));
