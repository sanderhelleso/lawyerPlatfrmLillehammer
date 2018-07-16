import React, { Component } from 'react'
import { Col, Tabs, Tab, Input, Row } from "react-materialize";
import RecentArticle from './RecentArticle';
import Article from "./Article";

class Articles extends Component {
    render() {
        return (
            <div className="section container">
                <Tabs className='tabs'>
                    <Tab title="Siste nytt" className="animated fadeIn" active>
                        <h3 id="recentTxt" className="center-align animated fadeInRight">Siste nytt</h3>
                        <RecentArticle />
                    </Tab>
                    <Tab title="Arkiv" className="animated fadeIn">
                        <h3 id="recentTxt" className="center-align animated fadeInLeft">Arkiv</h3>
                        <Row>
                            <Col l={10} m={9} s={2}/>
                            <Input id="archiveSelect" l={2} m={3} s={8} type='select' label="År" defaultValue='1'>
                                <option value='2018'>2018</option>
                                <option value='2019'>2019</option>
                                <option value='2020'>2020</option>
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

export default Articles;
