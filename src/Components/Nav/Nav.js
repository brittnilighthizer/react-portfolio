import React, { Component } from 'react';

class Footer extends React.Component {
    render() {
        return (
            <nav className="navbar is-white">
                <a className="navbar-item" href="index.html">
                    About</a>
                <a className="navbar-item" href="portfolio.html">
                    Portfolio</a>
                <a className="navbar-item" href="contact.html">
                    Contact</a>
            </nav>
        )
    }
}

export default Footer;