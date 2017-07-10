import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


import LoginContainer from './login/container'
import NavContainer from './nav/container'
import NotFound from './notfound'


class App extends Component {

    // Initialize state here (ES7)
    state = {
        nav: []
    }

    // using async/await (ES7)
    async componentDidMount() {
        const { fetchIt } = this.props
        const nav = await fetchIt('/api/global/navigation');
        this.setState({nav})
    }

    render() {

        return (
            <BrowserRouter>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <nav>
                        {this.state.nav.map( (item, index, arr) => {
                            return <Link key={index} to={item.href}>{item.title}</Link>
                        })}
                        <Link to="/edit" className="edit">Edit</Link>
                    </nav>

                </div>
                <Switch>

                    <Route path="/login" component={LoginContainer} />
                    <Route path="/edit" component={NavContainer} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;
