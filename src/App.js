import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent';
import Users from './containers/Users';

const asynPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
})

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> | 
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={asynPizza} />
                </div>
            </div>
        );
    }
}

export default App;