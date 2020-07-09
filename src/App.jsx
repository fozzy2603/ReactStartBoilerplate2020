import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IndexPage, DemoPage, Page404 } from 'pages';

const isDev = process.env.NODE_ENV === 'development';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={isDev} path="/" component={IndexPage}/>
            <Route path="/demo" component={DemoPage}/>
            <Route component={Page404}/>
        </Switch>
    </BrowserRouter>
)

export default App;
