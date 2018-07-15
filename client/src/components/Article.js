import React, { Component } from 'react'
import { Col, Card, CardTitle, Collection, CollectionItem, Icon } from "react-materialize";
import { MONTHS } from "../globals/months";

class Article extends Component {
    state = {
        data: [],
    };

    async loadData() {
        console.log(123);
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
                <Col key={data.article_id} l={4} m={6} s={12} className="animated fadeIn">
                <Card className="cardHeader z-depth-2" header={<a href={`/arkiv/${new Date().getFullYear()}/${monthName.toLowerCase()}`}><CardTitle id="archiveCard" reveal image={`/img/img${data.month}.jpg`} waves='light'>{monthName} </CardTitle> </a>}
                    title={`JUSSPOST #${data.article_id}`}
                    reveal={
                        <div>
                            <p className="cardIntro">Here is some more information about this product that is only revealed once clicked on.</p>
                            <Collection>
                                <CollectionItem href={`/arkiv/${monthName.toLowerCase()}/manedenssak`}><Icon small left>account_balance</Icon> Månedens sak</CollectionItem>
                                <CollectionItem href={`/arkiv/${monthName.toLowerCase()}/femkjappe`}><Icon small left>assignment</Icon> 5 kjappe</CollectionItem>
                                <CollectionItem href={`/arkiv/${monthName.toLowerCase()}/studenttips`}><Icon small left>school</Icon> Studenttips</CollectionItem>
                            </Collection>
                        </div>
                    }>
                    <p className="cardIntro"> Here is some more information about this product that is only revealed once clicked on.</p>
                    <p><a className="teal-text font-weight-bold" href={`/arkiv/${data.year}/${monthName.toLowerCase()}`}>Les mer</a></p>
                </Card>
            </Col>
            )
        });
        return cardData;
    }
}

function getIndexOfMonth(month) {
    return MONTHS.indexOf(month) + 1;
}

export default Article;
