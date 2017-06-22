import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    // Initialize state here (ES7)
    state = {
        users: []
    }

    // using async/await (ES7)
    async componentDidMount() {
        const res = await fetch('/users');
        const users = await res.json();

        this.setState({users})
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    {this.state.users.map( user => {
                        return <p key={user.firstName}> <b>{user.firstName}</b> {user.lastName}</p>
                    })}
                </div>
            </div>
        );
    }
}

export default App;
