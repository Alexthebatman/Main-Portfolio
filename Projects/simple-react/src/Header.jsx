function Header() {
    const today = new Date().toLocaleDateString();

    return (
        <header>
            <div className="titleblock">
                <h1>Simple React</h1>
                <h3 className="credit">React Project | Time Taken: 3 Hours</h3>
            </div>
            <p>Today's date: {today}</p>
        </header>
    );
}

export default Header;