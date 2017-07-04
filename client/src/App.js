import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginContainer from './login/container'


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
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <nav>
                        {this.state.nav.map( (item, index, arr) => {
                            return <a key={index} href={item.href}>{item.title}</a>
                        })}
                    </nav>

                </div>
                <LoginContainer />
            </div>
        );
    }
}

export default App;
