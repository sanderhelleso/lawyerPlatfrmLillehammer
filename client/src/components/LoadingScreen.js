import React, { Component } from 'react'

class LoadingScreen extends Component {
    render() {
        return (
            <div id="loadingScreen">
                <div id="headingCont" className="animated fadeIn">
                    <h1 id="heading" className="center-align">Obiterdictum</h1>
                    <p className="center-align">Jurdiske nyheter og tips for jussstudentene i Lillehammer</p>
                    <p className="loading center-align"></p>
                </div> 
            </div>
        )
    }
}

export default LoadingScreen;
