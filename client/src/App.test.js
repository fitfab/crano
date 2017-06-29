import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const fetchIt =  jest.fn();
    fetchIt.mockReturnValueOnce([{name:'Miguel', lastName: 'Julio'}])
    const div = document.createElement('div');
    ReactDOM.render(<App fetchIt={fetchIt} />, div);
});
