import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <header>
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/html">HTML</a></li>
                        <li><a href="/css">CSS</a></li>
                        <li>JavaScript</li>
                        <li>GitHub</li>
                        <li>Error</li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;