import React, { Component } from 'react'
import { Col, Card, CardTitle, Collection, CollectionItem, Icon } from "react-materialize";
import { MONTHS } from "../globals/months";

class RecentArticle extends Component {
    state = {
        data: [],
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
            console.log(this.state);
            const monthName = MONTHS[data.month].toUpperCase();
            return (
                <Col key={"recentArticle"} m={10} offset="m1" s={12} className="animated fadeIn">
                    <Card className="cardHeader recentArticleHeader" header={<a href="/sistenytt"> <CardTitle reveal image={`/img/img${data.month + 1}.jpg`} waves='light'>{monthName} </CardTitle> </a>}
                        title={`JUSSPOST #${data.article_id}`}
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
        });
        return cardData;
    }
}

export default RecentArticle;
