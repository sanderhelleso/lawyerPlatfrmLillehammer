import "animate.css";

import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Landing from "../components/Landing";
import MainFooter from "../components/MainFooter";
import Layout from "./Layout";

class App extends Component {
    render() {
        return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Landing} /> 
                    <Route exact path="/sistenytt/*" component={Layout} />  
                    <Route path="/" component={MainFooter} /> 
                </div>
            </BrowserRouter>
        </div>
        )
    }
}

export default App;
