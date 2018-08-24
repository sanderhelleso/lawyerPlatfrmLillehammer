import React, { Component } from 'react'
import { Col, Card, CardTitle, Collection, CollectionItem, Icon } from "react-materialize";
import { MONTHS } from "../globals/months";
import { contentLoaded } from "../globals/loading";

class RecentArticle extends Component {
    constructor(props) {
        super(props);
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        document.getElementById(`${this.state.data[0]._id}`).querySelector('.card-content').querySelector('span').click();
    }


    state = {
        data: [],
    };

    async loadData() {
        const res = await fetch("/api/sistenytt");
        const json = await res.json();
        this.setState({
            data: json
        });

        setTimeout(() => {
            contentLoaded();
        }, 1000);
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        const cardData = this.state.data.map((data) => {
            console.log(data);
            const monthName = MONTHS[data.month].toUpperCase();
            return (
                <Col id={data._id} key={"recentArticle"} m={10} offset="m1" s={12} className="animated fadeIn">
                    <Card className="cardHeader recentArticleHeader" header={<CardTitle onClick={this._onButtonClick} reveal image={`/img/img${data.month + 1}.jpg`} waves='light'>{monthName} </CardTitle>}
                        title={`#${data.article_id || data.tips_id || data.question_id}`}
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
                        <p><a onClick={this._onButtonClick}>Les mer</a></p>
                    </Card>
                </Col>
            )
        });
        return cardData;
    }
}

function openCategories() {
    console.log(123);
    document.querySelector('')
}

function trunkate(text) {
    return `${text.substring(0, 150)}...`;
}

export default RecentArticle;
