import React, { Component } from 'react';
import { Col, Tabs, Tab, Input, Row, Button } from "react-materialize";
import TinyMCE from 'react-tinymce';
import { MONTHS } from "../globals/months";

class Dashboard extends Component {

    handleEditorChange(e) {
        console.log(e.target.getContent());
    }

    renderMonths() {
        return MONTHS.map((month) =>
            <option value={MONTHS.indexOf(month)}>{month.toUpperCase()}</option>
        );
    }

    render() {
        if (checkSessionStorage()) {
            return (
                <div className="container">
                    <h2 className="text-center center-align">Dashboard</h2>
                    <p className="center-align text-center">Publiser et nytt innlegg</p>
                    <Row>
                        <Col l={2} m={3} s={1}/>
                        <Input id="monthSelect" l={8} m={6} s={10} type='select' label="Måned" defaultValue={new Date().getMonth()} >
                            {this.renderMonths()}
                        </Input>
                    </Row>
                    <Row>
                        <Col l={2} m={3} s={1}/>
                        <Input id="archiveSelect" l={8} m={6} s={10} type='select' label="Kategori" defaultValue={"1"} >
                            <option value='1'>Månedens Sak</option>
                            <option value='2'>Fem Kjappe</option>
                            <option value='3'>Studenttips</option>
                        </Input>
                    </Row>
                    <Row>
                        <Col l={2} m={3} s={1}/>
                        <Input id="introInput" l={8} m={6} s={10} label="Introduksjon" type='textarea' />
                    </Row>
                    <Row>
                        <Col l={1} m={2} s={1}/>
                        <Col l={10} m={8} s={10}>
                            <TinyMCE id="postBody"
                                content="<p>Once upon a time...</p>"
                                config={{
                                plugins: 'autolink link image lists print preview',
                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                                }}
                                onChange={this.handleEditorChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col l={4} m={2} s={1}/>
                        <Col l={4} m={8} s={10}>
                            <Button id="publishPost" waves='light' className="col s12 m12 l12" onClick={publishPost}>Publiser</Button>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}

function checkSessionStorage() {
    if (window.sessionStorage.adminAuth === undefined) {
        window.location.replace("/");
    }

    else {
        return true;
    }
}

function publishPost() {
    console.log(123);
    const postType = document.querySelector("#archiveSelect").value;
    const postIntro = document.querySelector("#introInput").value;
    const postBody = document.querySelector("#postBody").value;

    /*fetch(`/api/publishPost`, {
        method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            category: postType,
            intro: postIntro,
            postBody: postBody

        })
    })
    .then(res => res.json())
    .then(res => */

    console.log(postType, postIntro, postBody);
}

export default Dashboard;
