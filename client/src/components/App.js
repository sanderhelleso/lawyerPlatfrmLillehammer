import "animate.css";

import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Landing from "../components/Landing";
import Studenttips from "../components/Studenttips";
import MainFooter from "../components/MainFooter";

class App extends Component {
    render() {
        return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Landing} /> 
                    <Route exact path="/sistenytt/studenttips" component={Studenttips} />  
                    <Route path="/" component={MainFooter} /> 
                </div>
            </BrowserRouter>
        </div>
        )
    }
}

export default App;
