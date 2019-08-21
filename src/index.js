import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/common.less'
// import App from './pages/demo/Life';
import RouteDemo1 from './pages/router-dome/demo1'
// import Admin from './admin'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouteDemo1 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
