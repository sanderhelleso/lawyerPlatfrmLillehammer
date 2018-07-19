import "animate.css";

import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Landing from "../components/Landing";
import MainFooter from "../components/MainFooter";
import Layout from "./Layout";
import Categories from "./Categories";
import MainNav from "./MainNav";
import Login from "./Login";
import Dashboard from "./Dashboard";

class App extends Component {

    render() {
        console.log(setRoute());
        return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component={MainNav} />
                    <Route exact path="/" component={Landing} />
                    <Route path="/dashoboard" component={Dashboard} /> 
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/sistenytt" component={Categories} /> 
                    <Route exact path="/sistenytt/*" component={Layout} />
                    <Route exact path="/arkiv/*/*" component={setRoute()} />
                    <Route path="/" component={MainFooter} /> 
                </div>
            </BrowserRouter>
        </div>
        )
    }
}

function setRoute() {
    if (window.location.href.split("/").length == 7) {
        return Layout;
    }

    else if (window.location.href.split("/").length == 6) {
        return Categories;
    }
}

export default App;
