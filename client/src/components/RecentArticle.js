import React, { Component } from 'react'
import { Col, Card, CardTitle, Tabs, Tab, Collection, CollectionItem, Icon, Input, Row } from "react-materialize";

class RecentArticle extends Component {
    componentWillMount() {
        console.log(123);
        fetch("/api/sistenytt")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
    }

  render() {
    return (
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
}

export default RecentArticle;
