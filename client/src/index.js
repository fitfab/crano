import React from 'react';
import ReactDOM from 'react-dom';

import { fetchIt } from './service'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App fetchIt={fetchIt} />, document.getElementById('root'));
registerServiceWorker();
