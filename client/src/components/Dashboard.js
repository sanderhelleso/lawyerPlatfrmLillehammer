import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        if (checkSessionStorage()) {
            return (
                <div>
                    <h1>wqeqe</h1>
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
