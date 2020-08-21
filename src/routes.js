import React from 'react'
import { Route, Switch } from "react-router";

import Home from './pages/home'
import NotFound from "./pages/notfound";
import Dynamic from "./pages/dynamic";
import About from "./pages/about";
import Contact from "./pages/contact";

class Routes extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route path="/dynamic/:slug" component={Dynamic} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}
export default Routes;
