import React, {Suspense, useEffect, useState} from "react";
import {Router, Route, Switch} from 'react-router-dom';
import history from "@core/history";


import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

import SigninPage from '@pages/AuthPages/SignInPage/SignInPage.jsx';
import LandingPage from "./pages/LandingPage/LandingPage";

// Create a client


const Application = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/connexion" component={SigninPage}/>
                </Switch>
            </Router>
        </QueryClientProvider>

    );
};

export default Application;
