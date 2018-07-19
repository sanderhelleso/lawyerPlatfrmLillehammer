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
    const inputs = document.querySelectorAll("input");
    console.log(inputs);
    fetch(`/api/login`, {
        method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: inputs[0].value, pass: inputs[1].value})
    })
    .then(res => res.json())
    .then(res => 
        fetch('/dashboard', { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer ' + res.token, 
              'Content-Type': 'application/x-www-form-urlencoded'
            }) 
        })
    );
}

export default Login;
