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
        const isFilled = [];
        let count = 0;
        json.forEach(category => {
            count++;
            if (category.length != 0) {
                isFilled.push(true);
                this.setState({
                    data: category
                });
            }

            else {
                isFilled.push(false);
            }

            if (count === 3) {
                this.setState({
                    isFilled: isFilled
                });
            }
        });

        setTimeout(() => {
            this.renderUrls();
            contentLoaded();
        }, 1000);
    }

    componentWillMount() {
        this.loadData();
    }

    renderUrls() {
        console.log(this.state.isFilled, this.state.data);
        let count = 0;
        const collection = Array.from(document.getElementById(`${this.state.data[0]._id}`).querySelector('.collection').childNodes);
        console.log(collection);
        this.state.isFilled.forEach(status => {
            if (status === false) {
                collection[count].remove();
            }
            count++;
        });
    }

    render() {
        const cardData = this.state.data.map((data) => {
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

function trunkate(text) {
    return `${text.substring(0, 150)}...`;
}

export default RecentArticle;
