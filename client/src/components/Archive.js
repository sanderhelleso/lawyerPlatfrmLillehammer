import React, { Component } from 'react';
import Article from "./Article";
import { Row, Input, Col, Parallax } from "react-materialize";

class Archive extends Component {

    componentDidMount() {
        sort();
    }

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
                        <h5 className="center-align selectYear">Velg et år for å se tilhørende innlegg</h5>
                        <Col l={3} m={3} s={2}/>
                        <Input id="archiveSelect" l={6} m={6} s={8} type='select' label="År" defaultValue={new Date().getFullYear()} onChange={sort}>
                            <option disabled>Velg et år</option>
                            <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
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

let isSorted = false;
function sort() {
    const selectedYear = document.querySelector("#archiveSelect").value;
    const articles = document.querySelectorAll(".archiveCard");
    const options = [];
    articles.forEach((article) => {

        if (isSorted === false) {
            const year = article.querySelector("a").href.split("/arkiv/")[1].split("/")[0];
            if (options.indexOf(year) === -1 && year != new Date().getFullYear()) {
                options.push(year);
            }  

            options.forEach(option => {
                const yearOption = document.createElement("option");
                yearOption.value = option;
                yearOption.innerHTML = option;
                document.querySelector("#archiveSelect").appendChild(yearOption);
            });

            isSorted = true;
        }

        console.log(options);
        if (article.classList.contains(selectedYear)) {
            article.style.display = "block";
        }

        else {
            article.style.display = "none";
        }
    });
}

export default Archive;

