import React, { Component } from 'react';
import Auth from '../hoc/auth';

class Quotes extends Component {

    render() {
        
        return (
            <div>
                <h1 className="center">Movie Quote</h1>
                <p>'Life is like a box of chocolates'</p>
            </div>
        )
    }
}

export default Auth(Quotes);