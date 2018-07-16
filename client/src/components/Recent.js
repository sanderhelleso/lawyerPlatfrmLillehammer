import React, { Component } from 'react'
import { Row, Col, Card, CardTitle, Parallax } from "react-materialize";
import { MONTHS } from "../globals/months";

class Recent extends Component {
    state = {
        article: [],
        questions: [],
        tips: []
    };

    async loadData() {
        const res = await fetch("/api/sistenytt/all");
        const json = await res.json();
        this.setState({
            article: json[0],
            questions: json[1],
            tips: json[2]
        })
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        const cardData = this.state.article.map((article) => {
            const question = this.state.questions.map((questions) => {
                const tip = this.state.tips.map((tips) => {
                    return (
                        <section key="sistenytt">
                            <div className="genreOverlay">
                                <Parallax id="landingCover" imageSrc={`/img/img${article.month + 1}.jpg`} />
                            </div>
                            <div id="headingCont">
                                <h1 id="heading">Sistenytt fra <br /> Jussbloggen</h1>
                                <h5 id="headingMonth">{MONTHS[article.month]}</h5>
                                <h2 id="headingYear">{article.year}</h2>
                            </div>
                            <div id="recentCont" className="container">
                                <Row>
                                    <Col l={4} m={4} s={12} className="animated fadeIn">
                                        <Card className='medium'
                                            header={<CardTitle image='/img/manedenssak.jpg'>Høyesteretten</CardTitle>}
                                            actions={[<a href='/sistenytt/manedenssak'>Les mer</a>]}>
                                        <p>{trunkate(article.body)}</p>
                                        </Card>
                                    </Col>
                                    <Col l={4} m={4} s={12} className="animated fadeIn">
                                        <Card className='medium'
                                            header={<CardTitle image='/img/femkjappe.jpg'>Fem kjappe</CardTitle>}
                                            actions={[<a href='/sistenytt/femkjappe'>Les mer</a>]}>
                                            <p>{trunkate(questions.body)}</p>
                                        </Card>
                                    </Col>
                                    <Col l={4} m={4} s={12} className="animated fadeIn">
                                        <Card className='medium'
                                            header={<CardTitle image='/img/studenttips.jpg'>Studenttips</CardTitle>}
                                            actions={[<a href='/sistenytt/studenttips'>Les mer</a>]}>
                                            <p>{trunkate(tips.body)}</p>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </section>
                    )
                });
                return tip;
            })
            return question;
        });
        return cardData;
    }
}

function trunkate(text) {
    return `${text.substring(0, 150)}...`;
}

export default Recent;
