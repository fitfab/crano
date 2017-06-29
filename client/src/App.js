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
        const { fetchIt } = this.props
        const users = await fetchIt('/users');
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
                    {this.state.users.map( (user, index, arr) => {
                        return <p key={index}> <b>{user.firstName}</b> {user.lastName}</p>
                    })}
                </div>
            </div>
        );
    }
}

export default App;
