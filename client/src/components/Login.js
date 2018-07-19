import React, { Component } from 'react';
import { Row, Input, Col, Button } from "react-materialize";


class Login extends Component {
    render() {
        return (
            <Row>
                <div id="loginCont" className="container">
                    <h3 className="center-text">Admin Login</h3>
                    <Col s={12} m={8} l={6} offset="m2 l3">
                        <Input s={12} label="Email" validate></Input>
                        <Input s={12} label="Password" validate type='password'></Input>
                        <Button waves='light' className="col s12 m12 l12" onClick={login}>Login</Button>
                    </Col>
                </div>
            </Row>
        )
    }
}

function login() {
    console.log(123);
}

export default Login;
