import React, { Component } from 'react'
import { Row, Col, Card, CardTitle, Parallax } from "react-materialize";
import { MONTHS } from "../globals/months";

class Recent extends Component {
    state = {
        data: []
    };

    async loadData() {
        console.log(123);
        const res = await fetch("/api/sistenytt");
        const json = await res.json();
        this.setState({
            data: json
        })
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        const cardData = this.state.data.map((data) => {
            return (
                <section key="sistenytt">
                    <div className="genreOverlay">
                        <Parallax id="landingCover" imageSrc={`/img/img${data.month}.jpg`} />
                    </div>
                    <div id="headingCont">
                        <h1 id="heading">Sistenytt fra <br /> Jussbloggen</h1>
                        <h5 id="headingMonth">{MONTHS[data.month]}</h5>
                        <h2 id="headingYear">{data.year}</h2>
                    </div>
                    <div id="recentCont" className="container">
                         <Row>
                            <Col l={4} m={4} s={12} className="animated fadeIn">
                                <Card className='large'
                                    header={<CardTitle image='/img/manedenssak.jpg'>Høyesteretten</CardTitle>}
                                    actions={[<a href='/sistenytt/manedenssak'>Les mer</a>]}>
                                    <p className="truncate">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </Card>
                            </Col>
                            <Col l={4} m={4} s={12} className="animated fadeIn">
                                <Card className='large'
                                    header={<CardTitle image='/img/femkjappe.jpg'>Fem kjappe</CardTitle>}
                                    actions={[<a href='/sistenytt/femkjappe'>Les mer</a>]}>
                                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                                </Card>
                            </Col>
                            <Col l={4} m={4} s={12} className="animated fadeIn">
                                <Card className='large'
                                    header={<CardTitle image='/img/studenttips.jpg'>Studenttips</CardTitle>}
                                    actions={[<a href='/sistenytt/studenttips'>Les mer</a>]}>
                                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>
            )
        });
        return cardData;
    }
}

export default Recent;
