import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Row, Col } from "react-materialize";

class Share extends Component {
    render() {
        return (
                <div className="container">
                    <Row id="share">
                        <Col s={4} m={2} l={2} offset="l2 m2 s2" className="valign-wrapper">
                            <SocialIcon className="col s12" network="facebook" url={`http://www.facebook.com/sharer.php?u=${window.location.href}`} />
                        </Col>
                        <Col s={4} m={2} l={2} className="valign-wrapper">
                            <SocialIcon network="linkedin" url={`http://www.linkedin.com/shareArticle?mini=true&amp;url=${window.location.href}`} />
                        </Col>
                        <Col s={4} m={2} l={2} offset="s2" className="valign-wrapper">
                            <SocialIcon network="twitter" url={`https://twitter.com/share?url=${window.location.href}`} />
                        </Col>
                        <Col s={4} m={2} l={2} className="valign-wrapper">
                            <SocialIcon network="google" url={`https://plus.google.com/share?url=${window.location.href}`} />
                        </Col>
                    </Row>
                </div>
        )
    }
}

export default Share;