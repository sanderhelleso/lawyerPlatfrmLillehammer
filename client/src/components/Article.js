import React, { Component } from 'react'
import { Col, Card, CardTitle, Collection, CollectionItem, Icon } from "react-materialize";
import { MONTHS } from "../globals/months";

class Article extends Component {
    render() {
        return (
            <Col l={4} m={6} s={12} className="animated fadeIn">
            <Card className="cardHeader z-depth-2" header={<a href={`/arkiv/${new Date().getFullYear()}/${this.props.month}`}><CardTitle id="archiveCard" reveal image={`/img/img${getIndexOfMonth(this.props.month)}.jpg`} waves='light'>{this.props.month.toUpperCase()} </CardTitle> </a>}
                title={`JUSSPOST #${this.props.id}`}
                reveal={
                    <div>
                        <p className="cardIntro">Here is some more information about this product that is only revealed once clicked on.</p>
                        <Collection>
                            <CollectionItem href={`/arkiv/${this.props.month}/manedenssak`}><Icon small left>account_balance</Icon> Månedens sak</CollectionItem>
                            <CollectionItem href={`/arkiv/${this.props.month}/femkjappe`}><Icon small left>assignment</Icon> 5 kjappe</CollectionItem>
                            <CollectionItem href={`/arkiv/${this.props.month}/studenttips`}><Icon small left>school</Icon> Studenttips</CollectionItem>
                        </Collection>
                    </div>
                }>
                <p className="cardIntro"> Here is some more information about this product that is only revealed once clicked on.</p>
                <p><a className="teal-text font-weight-bold" href={`/arkiv/${new Date().getFullYear()}/${this.props.month}`}>Les mer</a></p>
            </Card>
        </Col>
        )
    }
}

function getIndexOfMonth(month) {
    return MONTHS.indexOf(month) + 1;
}

export default Article;
