import React, { Component } from 'react';
import { directive } from '@babel/types';
import Header from './Header';

class Landing extends Component {
    render() {
        return(
            <div className="landing-wrap">
                <Header />
                <h1>Landing</h1>
            </div>
        )
    }
}

export default Landing;