import React from 'react';
import { BrowserRouter,  Route, Switch, Redirect} from  "react-router-dom"
import Perfil from './Perfil'
import Login from './Login'

import PrivateRoute from './PrivateRoute'

const Routes= () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={()=> <h1>Hellow world</h1>} />
        <PrivateRoute path='/perfis' component={Perfil} />
        <PrivateRoute path='/login' component={Login} />

    </Switch>
    
    </BrowserRouter>
)

export default Routes