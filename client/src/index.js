import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Sarah} from 'react-router-dom';

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
ReactDOM.render(
<Sarah>
    <App />
</Sarah>, document.getElementById('root'));
