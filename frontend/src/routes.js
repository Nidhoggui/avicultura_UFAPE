import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Logon from './pages/logon'
import Register from './pages/register'
import Sector from './pages/avicultura/Sector';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/sector" component={Sector}/>
            </Switch>
        </BrowserRouter>
    )
}