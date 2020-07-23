import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Logon from './pages/logon'
import Register from './pages/register'
import Avicultura from './pages/avicultura'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/sector" component={Avicultura}/>
                <Route path="/egg" component={Avicultura}/>
                <Route path="/egg/albumen" component={Avicultura}/>
                <Route path="/egg/casca" component={Avicultura}/>
                <Route path="/egg/revisar" component={Avicultura}/>
                <Route path="/dashboard" component={Avicultura}/>
                <Route path="/profile" component={Avicultura}/>
            </Switch>
        </BrowserRouter>
    )
}