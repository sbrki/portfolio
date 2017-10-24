import React from "react";
import ReactDOM from "react-dom";
import { HashRouter,BrowserRouter,Switch,Route, IndexRoute, hashHistory} from "react-router-dom";

import IndexLayout from "./pages/IndexLayout";
import SoftwareLayout from "./pages/SoftwareLayout";
import AboutLayout from "./pages/AboutLayout";


ReactDOM.render(
    <HashRouter history={hashHistory}>
        <Switch>
                <Route exact path="/" component = {IndexLayout}></Route>
                <Route path="/software" component={SoftwareLayout}></Route>
                <Route path="/about" component={AboutLayout}></Route>
        </Switch>
    </HashRouter>
    , app);


