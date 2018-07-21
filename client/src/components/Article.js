import React, { Component } from 'react'
import { Col, Card, CardTitle, Collection, CollectionItem, Icon } from "react-materialize";
import { MONTHS } from "../globals/months";

class Article extends Component {
    state = {
        data: []
    };

    async loadData() {
        const res = await fetch("/api/arkiv");
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
                <Col key={data.article_id} l={4} m={6} s={12} className={`animated fadeIn archiveCard ${data.year}`}>
                    <Card className="cardHeader z-depth-2" header={<a href={`/arkiv/${data.year}/${monthName.toLowerCase()}`}><CardTitle id="archiveCard" reveal image={`/img/img${data.month + 1}.jpg`} waves='light'>{monthName} </CardTitle> </a>}
                        title={`JUSSPOST #${data.article_id}`}
                        reveal={
                            <div>
                                <p className="cardIntro">{data.intro}</p>
                                <Collection>
                                    <CollectionItem href={`/arkiv/${data.year}/${monthName.toLowerCase()}/faglig-artikkel`}><Icon small left>account_balance</Icon> Månedens sak</CollectionItem>
                                    <CollectionItem href={`/arkiv/${data.year}/${monthName.toLowerCase()}/litt-av-hvert`}><Icon small left>assignment</Icon> 5 kjappe</CollectionItem>
                                    <CollectionItem href={`/arkiv/${data.year}/${monthName.toLowerCase()}/aktuelt`}><Icon small left>school</Icon> Studenttips</CollectionItem>
                                </Collection>
                            </div>
                        }>
                        <p className="cardIntro">{data.intro}</p>
                        <p><a className="teal-text font-weight-bold" href={`/arkiv/${data.year}/${monthName.toLowerCase()}`}>Les mer</a></p>
                    </Card>
                </Col>
            )
        });
        return cardData;
    }
}

export default Article;
