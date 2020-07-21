import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Bar from './Bar'
import Sector from './Sector'
import Egg from './Egg'
import Albumen from './Egg/albumen'
import Dashboard from './Dashboard'

export default function Avicultura(){
    return(
        <div style={{display:'flex'}}>
            <Bar/>
                <Switch>
                    <Route path="/sector" component={Sector}/>
                    <Route path="/egg" component={Egg}/>
                    <Route path="/egg/albumen" component={Albumen}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
        </div>
    )
}