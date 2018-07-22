import React, { Component } from 'react';
import Article from "./Article";
import { Row, Input, Col, Parallax } from "react-materialize";

class Archive extends Component {
    render() {
        return (
            <div>
            <div id="headingCont" className="animated fadeIn">
                    <h1 id="heading" className="center-align">Arkivet</h1>
                </div>
                <div className="genreOverlay">
                    <Parallax id="landingCover" imageSrc="/img/landing.jpg"/>
                </div>
                <div id="archiveCont" className="container">
                    <Row>
                        <h5 className="center-align">Velg et år for å se tilhørende innlegg</h5>
                        <Col l={3} m={3} s={2}/>
                        <Input id="archiveSelect" l={6} m={6} s={8} type='select' label="År" defaultValue={new Date().getFullYear()} onChange={sort}>
                            <option value='2018'>2018</option>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                        </Input>
                    </Row>
                    <Row>
                        <Article />
                    </Row>
                </div>
            </div>
        )
    }
}

function sort() {
    const selectedYear = document.querySelector("#archiveSelect").value;
    const articles = document.querySelectorAll(".archiveCard");
    articles.forEach((article) => {
        if (article.classList.contains(selectedYear)) {
            article.style.display = "block";
        }

        else {
            article.style.display = "none";
        }
    });
}

export default Archive;

