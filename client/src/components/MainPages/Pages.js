import React, {useContext} from 'react'
import { Switch, Route } from 'react-router-dom';
import {GlobalState} from '../../GlobalState';
import Home from './Home/Home';
import About from './Home/About';
import Contact from './Home/Contact';
import User from './Home/User';
import Login from './Auth/Login';
import Register from './Auth/Register';
import NotFound from './Utils/Not-Found/NotFound';

function Pages() {

    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/user" component={ isLogged ? User : NotFound} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Pages
