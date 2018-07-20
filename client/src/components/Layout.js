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
            console.log(data);
            return (
                <section key={data.title}>
                    <div className="genreOverlay">
                        <Parallax id="landingCover" imageSrc={`/img/img${data.month + 1}.jpg`} />
                    </div>
                    <div id="headingCont">
                        <h1 id="heading">{this.state.section[0]}</h1>
                        <h5 id="headingMonth">{MONTHS[data.month]}</h5>
                        <h2 id="headingYear">{data.year}</h2>
                    </div>
                    <div className="container" className="animated fadeIn">
                        <h3 id="layoutTitle" className="center-align">{data.title}</h3>
                        <hr  />
                        <div id="layoutBody" className="container">
                            <div id="postBody" dangerouslySetInnerHTML={createMarkup(data.body)}></div>
                        </div>
                        <hr id="shareHr" />
                        <div className="container">
                            <h5 id="shareHeading" className="center-align">{this.state.section[1]}</h5>
                            <p id="shareSubTxt" className="center-align">Del på sosiale medier</p>
                        </div>
                        <Share />
                    </div>
                </section>
            )
        });
        return layout;
    }
}

function createMarkup(data) {
    return {__html: data};
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
    const sectionPath = section[section.length - 1];
    if (sectionPath === "manedenssak") {
        return ["Månedens sak i høyesteretten", "Kjenner du noen som vil finne denne saken interessant?"];
    }

    return [`Månedens ${sectionPath}`, `Kjenner du noen som kan ha nytte av månedens ${sectionPath}?`];
}

export default Layout;
