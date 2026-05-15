function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {year} AJohnson</p>
        </footer>
    );
}

export default Footer;