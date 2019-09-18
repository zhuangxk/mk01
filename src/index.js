import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/common.less'
import {Provider} from 'react-redux'
// import App from './pages/demo/Life';
// import RouteDemo2 from './pages/router-dome/demo2'
// import Admin from './admin'
import IRouter from './router'
import * as serviceWorker from './serviceWorker';

import store from './redux/store'
ReactDOM.render(
    <Provider store={store()}>
      <IRouter />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
