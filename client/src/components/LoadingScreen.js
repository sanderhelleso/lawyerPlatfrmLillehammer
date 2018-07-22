import React, { Component } from 'react'

class LoadingScreen extends Component {
    render() {
        return (
            <div id="loadingScreen">
                <div id="headingCont" className="animated fadeIn">
                    <h1 id="heading" className="center-align">Obiterdictum</h1>
                    <p className="center-align">Jurdiske nyheter og tips for jussstudentene i Lillehammer</p>
                    <p className="loading center-align"></p>
                    <p id="refresh" className="animated fadeIn"><span>Hmmm, det ser ut som vi har problemer med å laste inn siden</span><br /><br /><a href={`${window.location.href}`}> Prøv på nytt?</a></p>
                </div> 
            </div>
        )
    }
}

export default LoadingScreen;
