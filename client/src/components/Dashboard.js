import React, { Component } from 'react';
import { Col, Tabs, Tab, Input, Row, Button } from "react-materialize";
import TinyMCE from 'react-tinymce';

class Dashboard extends Component {

    handleEditorChange(e) {
        console.log(e.target.getContent());
    }

    render() {
        if (checkSessionStorage()) {
            return (
                <div className="container">
                    <h2 className="text-center center-align">Dashboard</h2>
                    <p className="center-align text-center">Publiser et nytt innlegg</p>
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
                        <Input l={8} m={6} s={10} label="Introduksjon" type='textarea' />
                    </Row>
                    <Row>
                        <Col l={1} m={3} s={1}/>
                        <Col l={10}>
                            <TinyMCE
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
                        <Col l={4} />
                        <Col l={4}>
                            <Button id="publishPost" waves='light' className="col s12 m12 l12">Publiser</Button>
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

export default Dashboard;
