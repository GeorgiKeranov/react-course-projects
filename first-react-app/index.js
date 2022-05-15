function Header() {
    return (
        <header>
            <img width="50" src="./react-logo.png"/>
                
            <h1>Fun facts about React</h1>
        </header>
    );
}

function MainComponent() {
    return (
        <div>
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
