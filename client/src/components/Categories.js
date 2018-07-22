import React, { Component } from 'react'
import { Row, Col, Card, CardTitle, Parallax } from "react-materialize";
import { MONTHS } from "../globals/months";

class Categories extends Component {
    state = {
        article: [],
        questions: [],
        tips: []
    };

    async loadData() {
        const url = window.location.href.split("/");
        const apiPath = buildPath(url);
        const res = await fetch(`/api${apiPath}/all`);
        const json = await res.json();

        this.setState({
            article: json[0],
            questions: json[1],
            tips: json[2]
        });
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        const cardData = this.state.article.map((article) => {
            const question = this.state.questions.map((questions) => {
                const tip = this.state.tips.map((tips) => {
                    return (
                        <section key="categories">
                            <div className="genreOverlay">
                                <Parallax id="landingCover" imageSrc={`/img/img${article.month + 1}.jpg`} />
                            </div>
                            <div id="headingCont">
                                <h1 id="heading">Siste Nytt</h1>
                                <h5 id="headingMonth">{MONTHS[article.month]}</h5>
                                <h2 id="headingYear">{article.year}</h2>
                            </div>
                            <div id="recentCont" className="container">
                                <Row>
                                    <Col l={4} m={8} s={12} offset="m2" className="animated fadeIn">
                                        <Card className='medium'
                                            header={<a href={`${window.location.href}/faglig-artikkel`}> <CardTitle image='/img/manedenssak.jpg' waves="light">Faglig Artikkel</CardTitle> </a>}
                                            actions={[<a href={`${window.location.href}/faglig-artikke`}>Les mer</a>]}>
                                        <p className="cardIntro">{trunkate(article.intro)}</p>
                                        </Card>
                                    </Col>
                                    <Col l={4} m={8} s={12} offset="m2" className="animated fadeIn">
                                        <Card className='medium'
                                            header={<a href={`${window.location.href}/litt-av-hvert`}> <CardTitle image='/img/femkjappe.jpg' waves="light">Litt Av Hvert</CardTitle> </a>}
                                            actions={[<a href={`${window.location.href}/litt-av-hvert`}>Les mer</a>]}>
                                            <p className="cardIntro">{trunkate(questions.intro)}</p>
                                        </Card>
                                    </Col>
                                    <Col l={4} m={8} s={12} offset="m2" className="animated fadeIn">
                                        <Card className='medium'
                                            header={<a href={`${window.location.href}/akutelt`}> <CardTitle image='/img/studenttips.jpg' waves="light">Aktuelt</CardTitle> </a>}
                                            actions={[<a href={`${window.location.href}/akutelt`}>Les mer</a>]}>
                                            <p className="cardIntro">{trunkate(tips.intro)}</p>
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

function buildPath(url) {
    let apiPath = "";
    for (let i = 3; i < url.length; i++) {
        apiPath += `/${url[i]}`;
    }

    console.log(apiPath);
    // return api path
    return apiPath;
}

export default Categories;
