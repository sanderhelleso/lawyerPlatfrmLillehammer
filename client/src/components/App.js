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
import Archive from "./Archive";
import LoadingScreen from "./LoadingScreen";
import Contact from "./Contact";

class App extends Component {

    render() {
        return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component={MainNav} />
                    <Route exact path="/" component={LoadingScreen} />
                    <Route exact path="/" component={Landing} />
                    <Route path="/dashboard" component={Dashboard} /> 
                    <Route exact path="/login" component={Login} />
                    <Route path="/sistenytt" component={LoadingScreen} />
                    <Route exact path="/sistenytt" component={Categories} /> 
                    <Route exact path="/sistenytt/*" component={Layout} />
                    <Route path="/arkiv" component={LoadingScreen} />
                    <Route exact path="/arkiv" component={Archive} />
                    <Route exact path="/arkiv/*/*" component={setRoute()} />
                    <Route exact path="/kontakt" component={Contact} />
                    <Route path="/" component={MainFooter} /> 
                </div>
            </BrowserRouter>
        </div>
        )
    }
}

function setRoute() {
    if (window.location.href.split("/").length === 7) {
        return Layout;
    }

    else if (window.location.href.split("/").length === 6) {
        return Categories;
    }
}

export default App;
