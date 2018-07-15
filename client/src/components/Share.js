import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Row, Col } from "react-materialize";

class Share extends Component {
    render() {
        return (
            <div>
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
        )
    }
}

export default Share;