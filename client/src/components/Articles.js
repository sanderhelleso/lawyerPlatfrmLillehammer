import React, { Component } from 'react'
import { Col, Tabs, Tab, Input, Row } from "react-materialize";
import RecentArticle from './RecentArticle';
import Article from "./Article";

class Articles extends Component {
    render() {
        return (
            <div className="section white container">
                <Tabs className='tabs'>
                    <Tab title="Siste nytt" className="animated fadeIn">
                        <h3 id="recentTxt" className="center-align animated fadeInRight">Siste nytt</h3>
                        <RecentArticle />
                    </Tab>
                    <Tab title="Arkiv" className="animated fadeIn" active>
                        <h3 id="recentTxt" className="center-align animated fadeInLeft">Arkiv</h3>
                        <Row>
                            <Col l={10} m={9} s={2}/>
                            <Input l={2} m={3} s={8} type='select' label="År" defaultValue='1'>
                                <option value='1'>2018</option>
                                <option value='2'>2019</option>
                                <option value='3'>2020</option>
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

function expandCard() {
    console.log(this);
}

export default Articles;
