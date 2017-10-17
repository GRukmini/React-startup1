import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import FormApp from './components/Card';

//ReactDOM.render(<App cat = {5} />, document.getElementById('root'));

ReactDOM.render(<FormApp/>, document.getElementById('root'));
registerServiceWorker();
