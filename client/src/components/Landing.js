import React, { Component } from 'react'
import { Parallax } from "react-materialize";

import Articles from "./Articles";

class Landing extends Component {
    render() {
        return (
            <div>
                <h1 id="heading">JUSSBLOGG</h1>
                <div className="genreOverlay">
                    <Parallax id="landingCover" imageSrc="/img/landing.jpg"/>
                </div>
                <Articles />
            </div>
        )
    }
}

export default Landing;
