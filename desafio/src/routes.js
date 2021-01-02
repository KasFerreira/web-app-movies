import React from 'react';
import { BrowserRouter,  Route, Switch, Redirect} from  "react-router-dom"
import Perfil from './Perfil'

import PrivateRoute from './PrivateRoute'

const Routes= () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={()=> <h1>Hellow world</h1>} />
        <PrivateRoute path='/perfis' component={Perfil} />
        <PrivateRoute path='/app' component={()=> <h1>Você esta logado</h1>} />

    </Switch>
    
    </BrowserRouter>
)

export default Routes