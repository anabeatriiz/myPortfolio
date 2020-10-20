import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home"></Route>
            <Route exact path="/portfolio"></Route>
        </Switch>
    </BrowserRouter>
);