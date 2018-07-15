import React, { Component } from 'react';
import { Parallax, Row, Col } from "react-materialize";
import { MONTHS } from "../globals/months";
import { SocialIcon } from 'react-social-icons';

class Studenttips extends Component {
    state = {
        data: [],
    };

    async loadData() {
        const res = await fetch("/api/sistenytt/studenttips");
        const json = await res.json();
        this.setState({
            data: json
        })
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        const layout = this.state.data.map((data) => {
            console.log(data);
            return (
                <section key={data.title}>
                    <div className="genreOverlay">
                        <Parallax id="landingCover" imageSrc={`/img/img${data.month}.jpg`}/>
                    </div>
                    <div id="headingCont">
                        <h1 id="heading">Månedens studenttips</h1>
                        <h5 id="headingMonth">{MONTHS[data.month]}</h5>
                        <h2 id="headingYear">{data.year}</h2>
                    </div>
                    <div className="container">
                        <h3 id="layoutTitle">Månedens studenttips</h3>
                        <hr />
                        <p id="layoutBody">{data.body}</p>
                        <hr id="shareHr" />
                        <h5 id="shareHeading" className="center-align">Kjenner du noen som kan ha nytte av månedens tips?</h5>
                        <p id="shareSubTxt" className="center-align">Del på sosiale medier</p>
                        <div className="container">
                            <Row id="share">
                                <Col s={4} m={2} l={2} offset="l2 m2 s2" className="valign-wrapper">
                                    <SocialIcon className="col s12" network="facebook" url="http://www.facebook.com/sharer.php?u=https://offentligetilfluktsrom.no/" />
                                </Col>
                                <Col s={4} m={2} l={2} className="valign-wrapper">
                                    <SocialIcon network="linkedin" url="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://offentligetilfluktsrom.no/" />
                                </Col>
                                <Col s={4} m={2} l={2} offset="s2" className="valign-wrapper">
                                    <SocialIcon network="twitter" url="https://twitter.com/share?url=https://offentligetilfluktsrom.no/" />
                                </Col>
                                <Col s={4} m={2} l={2} className="valign-wrapper">
                                    <SocialIcon network="google" url="https://plus.google.com/share?url=https://offentligetilfluktsrom.no/" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>
            )
        });

        return layout;
    }
}

export default Studenttips;
