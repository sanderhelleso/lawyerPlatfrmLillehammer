import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Footer } from "react-materialize";

class MainFooter extends Component {
    render() {
        return (
            <Footer copyrights="&copy; 2018 Jussbloggen"
                moreLinks={
                    <a className="right" href="http://semanta.no/"><img src="/img/semanta.png" alt="Semanta Logo" /> Utviklet og levert av Semanta</a>
                }
                links={
                    <ul id="footerLinks">
                        <li><a className="grey-text text-lighten-3" href="#!"><i className="fa fa-facebook-square facebook"></i>
                        </a></li>
                        <li><a className="grey-text text-lighten-3" href="#!"><i className="fa fa-linkedin linkedin"></i>

                        </a></li>
                        <li><a className="grey-text text-lighten-3" href="#!"><i className="fa fa-instagram instagram"></i>

                        </a></li>
                    </ul>
                }
                >
                    <h5 id="footerHeading">JUSSBLOGGEN</h5>
                    <hr id="footerHr" />
                    <p id="footerIntro">Jussbloggen er et frivillig prosjekt utført av jussstudenter i Lillehammer og har som mål å dekke viktige saker samt hjelpe studener</p>
            </Footer>
        )
    }
}

export default MainFooter;
