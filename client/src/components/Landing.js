import React, { Component } from 'react'
import { Parallax } from "react-materialize";

import Articles from "./Articles";

class Landing extends Component {
    render() {
        return (
            <div>
                <div id="headingCont" className="animated fadeIn">
                    <h1 id="heading" className="center-align">Obiter Dictum</h1>
                    <p className="center-align">Jurdiske nyheter og tips for jusstudenter, av studenter</p>
                </div>
                <div className="genreOverlay">
                    <Parallax id="landingCover" imageSrc="/img/landing.jpg"/>
                </div>
                <Articles />
            </div>
        )
    }
}

export default Landing;
