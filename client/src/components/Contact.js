import React, { Component } from 'react';
import { Parallax } from "react-materialize";

export default class Contact extends Component {

    componentWillMount() {
        document.body.style.backgroundColor = "#ffffff";
    }

    componentDidMount() {
        document.querySelector(".navbar-fixed").style.display = "block";
    }

    render() {
        return (
            <div id="contact" className="container" >
                <h1>Kontakt / Om Oss</h1>
                <div id="contactBorder" />
                <h3>Er det noe du lurer på eller vil vi skal skrive om?</h3>
                <h4>Send oss en E-post <a href="mailto:obiterdictum18@gmail.com">her</a></h4>
                <div id="team" className="row">
                    <hr />
                    <h5>Studentene bak Obiter Dictum</h5>
                    <div className="col s6 m3">Tarek El-Khatib</div>
                    <div className="col s6 m3">Sondre Arora Aaserud</div>
                    <div className="col s6 m3">Sander Haavik Vegsund</div>
                    <div className="col s6 m3">Fabrice Bulonge Buhendwa</div>
                    <div className="col s6 m3">Erik Sandvaag</div>
                    <div className="col s6 m3">Soz Abdul-Rahman</div>
                    <div className="col s6 m3">Anne Li Aaserud</div>
                    <div className="col s6 m3">Anne Katrine Olberg Eide</div>
                </div>
            </div>
        )
    } 
}
