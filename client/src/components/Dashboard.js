import React, { Component } from 'react';
import { Col, Tabs, Tab, Input, Row } from "react-materialize";
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
                    <Row>
                        <Col l={3} m={3} s={1}/>
                        <Input id="archiveSelect" l={6} m={6} s={10} type='select' label="Kategori" defaultValue={"1"} >
                            <option value='1'>Månedens Sak</option>
                            <option value='2'>Fem Kjappe</option>
                            <option value='3'>Studenttips</option>
                        </Input>
                        <Col l={12}>
                            <TinyMCE
                                content="<p>This is the initial content of the editor</p>"
                                config={{
                                plugins: 'autolink link image lists print preview',
                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                                }}
                                onChange={this.handleEditorChange}
                            />
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
