import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';


// Components
import App from './components/App';



ReactDOM.render(
    <Router path="/" history={browserHistory}>
      <Route path="/" component={App}/>

    </Router>, document.getElementById('root')
)
