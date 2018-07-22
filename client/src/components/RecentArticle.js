import React, { Component } from 'react'
import { Col, Card, CardTitle, Collection, CollectionItem, Icon } from "react-materialize";
import { MONTHS } from "../globals/months";

class RecentArticle extends Component {
    state = {
        data: [],
    };

    async loadData() {
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
            const monthName = MONTHS[data.month].toUpperCase();
            return (
                <Col key={"recentArticle"} m={10} offset="m1" s={12} className="animated fadeIn">
                    <Card className="cardHeader recentArticleHeader" header={<a href="/sistenytt"> <CardTitle reveal image={`/img/img${data.month + 1}.jpg`} waves='light'>{monthName} </CardTitle> </a>}
                        title={`#${data.article_id}`}
                        reveal={
                            <div>
                                <p className="cardIntro">{trunkate(data.intro)}</p>
                                <Collection>
                                    <CollectionItem href="/sistenytt/faglig-artikkel"><Icon small left>account_balance</Icon> Faglig Artikkel</CollectionItem>
                                    <CollectionItem href="/sistenytt/litt-av-hvert"><Icon small left>assignment</Icon> Litt Av Hvert</CollectionItem>
                                    <CollectionItem href="/sistenytt/aktuelt"><Icon small left>school</Icon> Aktuelt</CollectionItem>
                                </Collection>
                            </div>
                        }>
                        <p className="cardIntro">{trunkate(data.intro)}</p>
                        <p><a href="/sistenytt">Les mer</a></p>
                    </Card>
                </Col>
            )
        });
        return cardData;
    }
}

function trunkate(text) {
    return `${text.substring(0, 150)}...`;
}

export default RecentArticle;
