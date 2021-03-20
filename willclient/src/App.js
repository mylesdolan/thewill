import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import {Willy} from './Willy/Willy';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {

    render() {
        return (
            <Router>
            <div className="App">
            <Route exact path="/dolwill" component={Willy}/>
        </div>
        </Router>



        )
    }

}

export default App;
