import "animate.css";

import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Landing from "../components/Landing";
import MainFooter from "../components/MainFooter";
import Layout from "./Layout";
import Recent from "./Recent";
import MainNav from "./MainNav";

class App extends Component {
    render() {
        return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component={MainNav} />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/sistenytt" component={Recent} /> 
                    <Route exact path="/sistenytt/*" component={Layout} />
                    <Route exact path="/arkiv/*/*/*" component={Layout} />  
                    <Route path="/" component={MainFooter} /> 
                </div>
            </BrowserRouter>
        </div>
        )
    }
}

export default App;
