import React, { Component } from 'react'

import { Parallax } from "react-materialize";

class Landing extends Component {
  render() {
    return (
        <div>
            <Parallax imageSrc="/img/landing.jpg"/>
            <div className="section white">
                <div className="row container">
                <h2 className="header">Parallax</h2>
                <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                </div>
            </div>
        </div>
    )
  }
}

export default Landing;
