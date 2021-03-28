import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import {Willy} from './Willy/Willy';
import {HelloWorld} from './Willy/helloworld';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();
//UA-63816631-2
//G-E47GQBEYF1
//267068258
ReactGA.initialize('267068258', {debug: false /*process.env.NODE_ENV !== 'production'*/, titleCase: false});
//ReactGA.pageview(window.location.pathname + window.location.search);

history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log("LOCP",location.pathname)
});



class App extends Component {

    render() {
        return (
            <Router history={history}>
            <div className="App">
            <Route exact path="/dolwill" component={Willy}/>
        <Route exact path="/hello" component={HelloWorld}/>
        </div>
        </Router>



        )
    }

}

export default App;
