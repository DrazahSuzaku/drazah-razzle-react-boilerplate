import Application from './Application';
import {BrowserRouter} from 'react-router-dom';
import React, {Suspense} from 'react';
import * as ReactDOM from 'react-dom';
import '@core/i18n';

const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
    <BrowserRouter>
        <Suspense fallback={null}>
            <Application/>
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
