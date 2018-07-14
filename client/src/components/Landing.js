import React, { Component } from 'react'
import { Parallax, Col, Card, CardTitle } from "react-materialize";

class Landing extends Component {

    renderContent() {
        const months = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "oktober", "september", "november", "desember"];
        return months.map((month) =>
            <Col key={month} m={4} s={12}>
                <Card className="cardHeader" header={<CardTitle reveal image={`/img/img${months.indexOf(month) + 1}.jpg`} waves='light'>{month.toUpperCase()} </CardTitle>}
                    title={month.toUpperCase()}
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">Les mer</a></p>
                </Card>
            </Col>
        );
    }

    render() {
        return (
            <div>
                <h1 id="heading">JUSSBLOGG</h1>
                <div className="genreOverlay">
                    <Parallax id="landingCover" imageSrc="/img/landing.jpg"/>
                </div>
                <div className="section white">
                    <h3 id="recentTxt" className="center-align">Nylige innlegg</h3>
                    <div className="row container">
                        {this.renderContent()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;
