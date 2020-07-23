import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Bar from './Bar'
import Sector from './Sector'
import Egg from './Egg'
import Albumen from './Egg/albumen'
import Casca from './Egg/casca'
import Revisar from './Egg/revisar'
import Dashboard from './Dashboard'
import Profile from './Profile'

export default function Avicultura(){
    return(
        <div style={{display:'flex'}}>
            <Bar/>
                <Switch>
                    <Route path="/sector" component={Sector}/>
                    <Route path="/egg" exact component={Egg}/>
                    <Route path="/egg/albumen" component={Albumen}/>
                    <Route path="/egg/casca" component={Casca}/>
                    <Route path="/egg/revisar" component={Revisar}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/profile" component={Profile}/>
                </Switch>
        </div>
    )
}