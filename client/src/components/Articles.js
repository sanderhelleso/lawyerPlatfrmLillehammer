import React, { Component } from 'react'
import { Col, Card, CardTitle, Tabs, Tab, Collection, CollectionItem, Icon, Input, Row } from "react-materialize";

class Articles extends Component {
    renderRecent() {
        return(
            <Col key={"recentArticle"} m={10} offset="m1" s={12} className="animated fadeIn">
                <Card className="cardHeader recentArticleHeader" header={<a href="/sistenytt"> <CardTitle reveal image={`/img/img1.jpg`} waves='light'>Januar </CardTitle> </a>}
                    title="Januar"
                    reveal={
                        <div>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <Collection>
                                <CollectionItem href="/sistenytt/manedenssak"><Icon small left>account_balance</Icon> Månedens sak</CollectionItem>
                                <CollectionItem href="/sistenytt/femkjappe"><Icon small left>assignment</Icon> 5 kjappe</CollectionItem>
                                <CollectionItem href="/sistenytt/studenttips"><Icon small left>school</Icon> Studenttips</CollectionItem>
                            </Collection>
                        </div>
                    }>
                    <p><a href="/sistenytt">Les mer</a></p>
                </Card>
            </Col>
        )
    }

    renderArchive() {
        const months = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "oktober", "september", "november", "desember"];
        return months.map((month) =>
            <Col key={month} l={4} m={6} s={12} className="animated fadeIn">
                <Card className="cardHeader z-depth-2" header={<a href={`/arkiv/${new Date().getFullYear()}/${month}`}><CardTitle id="archiveCard" reveal image={`/img/img${months.indexOf(month) + 1}.jpg`} waves='light'>{month.toUpperCase()} </CardTitle> </a>}
                    title={`JUSSPOST #${months.indexOf(month) + 1}`}
                    reveal={
                        <div>
                            <p className="cardIntro">Here is some more information about this product that is only revealed once clicked on.</p>
                            <Collection>
                                <CollectionItem href={`/arkiv/${month}/manedenssak`}><Icon small left>account_balance</Icon> Månedens sak</CollectionItem>
                                <CollectionItem href={`/arkiv/${month}/femkjappe`}><Icon small left>assignment</Icon> 5 kjappe</CollectionItem>
                                <CollectionItem href={`/arkiv/${month}/studenttips`}><Icon small left>school</Icon> Studenttips</CollectionItem>
                            </Collection>
                        </div>
                    }>
                    <p className="cardIntro">Here is some more information about this product that is only revealed once clicked on.</p>
                    <p><a className="teal-text font-weight-bold" href={`/arkiv/${new Date().getFullYear()}/${month}`}>Les mer</a></p>
                </Card>
            </Col>
        );
    }

    render() {
        return (
            <div className="section white container">
                <Tabs className='tabs'>
                    <Tab title="Siste nytt" className="animated fadeIn">
                        <h3 id="recentTxt" className="center-align animated fadeInRight">Siste nytt</h3>
                        {this.renderRecent()}
                    </Tab>
                    <Tab title="Arkiv" className="animated fadeIn" active>
                        <h3 id="recentTxt" className="center-align animated fadeInLeft">Arkiv</h3>
                        <Row>
                            <Col l={10} m={9} s={2}/>
                            <Input className="animated fadeIn" l={2} m={3} s={8} type='select' label="År" defaultValue='1'>
                                <option value='1'>2018</option>
                                <option value='2'>2019</option>
                                <option value='3'>2020</option>
                            </Input>
                        </Row>
                        <Row>
                            {this.renderArchive()}
                        </Row>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Articles;
