import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routesConfig from './routes-config';

class Routes extends Component { 
    render() {
        const routes = Object.keys(routesConfig)
                        .map((key, index) => (
                            <Route 
                                key={index} 
                                exact 
                                path={routesConfig[key].path} 
                                component={routesConfig[key].component}
                            />
                        ));
        return (
            <Switch>
                {routes}
                <Redirect to='/' />
            </Switch>
        );
    }
}

export default Routes;