import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'antd-mobile/dist/antd-mobile.min.css'
import './index.css';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App2 />, document.getElementById('root'));
registerServiceWorker();
