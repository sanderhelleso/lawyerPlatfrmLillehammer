import React, { Component } from 'react'
import { Col, Card, CardTitle, Tabs, Tab } from "react-materialize";

class Articles extends Component {
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
            <div className="section white">
                <Tabs className='tab-demo z-depth-1'>
                    <Tab title="Siste nytt">
                        Siste nytt
                    </Tab>
                    <Tab title="Arkiv" active>
                        <h3 id="recentTxt" className="center-align">Arkiv</h3>
                        <div className="row container">
                            {this.renderContent()}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Articles;
