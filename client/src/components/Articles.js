import React, { Component } from 'react'
import { Col, Tabs, Tab, Input, Row } from "react-materialize";
import RecentArticle from './RecentArticle';
import Article from "./Article";

class Articles extends Component {
    componentWillMount() {
        setTimeout(() => {
            sort();
        }, 1000);
    }

    render() {
        return (
            <div className="section container">
                <Tabs className='tabs'>
                    <Tab title="Siste nytt" className="animated fadeIn" active>
                        <h3 id="recentTxt" className="center-align animated fadeInRight">Siste nytt</h3>
                        <RecentArticle />
                    </Tab>
                    <Tab title="Arkivet" className="animated fadeIn">
                        <h3 id="recentTxt" className="center-align animated fadeInLeft">Arkivet</h3>
                        <h5 className="center-align selectYear">Velg et år for å se tilhørende innlegg</h5>
                        <Row>
                            <Col l={10} m={9} s={2}/>
                            <Input id="archiveSelect" l={2} m={3} s={8} type='select' label="År" defaultValue={new Date().getFullYear()} onChange={sort}>
                                <option disabled>Velg et år</option>
                                <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                            </Input>
                        </Row>
                        <Row>
                            <Article />
                        </Row>
                    </Tab>
                </Tabs>
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

export default Articles;
