import React from 'react'
import Navbarlink from './Navbarlink'
import Homenav from './Homenav'
import Servicenav from './Servicenav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Router>          
            <Navbarlink />
               <Switch>
                    <Route path="/Homenav" component={Homenav} />
                    <Route path="/Servicenav" component={Servicenav} />
               </Switch>
            </Router>
        </div>
    )
}

export default App
