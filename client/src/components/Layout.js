import React, { Component } from 'react';
import { Parallax } from "react-materialize";
import { MONTHS } from "../globals/months";
import Share from "./Share";

class Layout extends Component {
    state = {
        data: [],
        section: ""
    };

    async loadData() {
        const url = window.location.href.split("/");
        const apiPath = buildPath(url);
        const res = await fetch(`/api${apiPath}`);
        const json = await res.json();
        this.setState({
            data: json,
            section: setTitle(apiPath.split("/"))
        })
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        const layout = this.state.data.map((data) => {
            return (
                <section key={data.title}>
                    <div className="genreOverlay">
                        <Parallax id="landingCover" imageSrc={`/img/img${data.month}.jpg`}/>
                    </div>
                    <div id="headingCont">
                        <h1 id="heading">{this.state.section}</h1>
                        <h5 id="headingMonth">{MONTHS[data.month]}</h5>
                        <h2 id="headingYear">{data.year}</h2>
                    </div>
                    <div className="container">
                        <h3 id="layoutTitle" className="center-align">{data.title}</h3>
                        <hr />
                        <p id="layoutBody" className="container">{data.body}</p>
                        <hr id="shareHr" />
                        <Share />
                    </div>
                </section>
            )
        });
        return layout;
    }
}

function buildPath(url) {
    let apiPath = "";
    for (let i = 3; i < url.length; i++) {
        apiPath += `/${url[i]}`;
    }

    // return api path
    return apiPath;
}

function setTitle(section) {
    console.log(section[section.length - 1]);
    return section[section.length - 1];
}

export default Layout;
