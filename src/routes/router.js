import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Headers from './../layout/header'
import Home from './Home/Home';

const AppRoute = () => {
    return (
        <Router basename="/gadjian-app">
            <Headers />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};


export default AppRoute;
