import React from 'react';
import { BrowserRouter,  Route, Switch, Redirect} from  "react-router-dom"
import Movies from './Movies'
import Login from './components/Login/Login.jsx'
import Perfis from './Perfis'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';

const Routes= () => (
    <BrowserRouter>
    <Switch>
        <PublicRoute restricted={false} exact path='/' component={Login} />
        <PrivateRoute path='/movies' component={Movies} />
        <PrivateRoute path='/perfis' component={Perfis} />

        {/* <PrivateRoute path='/login' component={Login} /> */}

    </Switch>
    
    </BrowserRouter>
)

export default Routes