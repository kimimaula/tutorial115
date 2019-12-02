import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tutorial from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Tutorial />, document.getElementById('root'));
registerServiceWorker();
