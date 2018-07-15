import React, { Component } from 'react';
import { Parallax } from "react-materialize";
import { MONTHS } from "../globals/months";

class Studenttips extends Component {
    state = {
        data: [],
    };

    async loadData() {
        const res = await fetch("/api/sistenytt/studenttips");
        const json = await res.json();
        this.setState({
            data: json
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
                        <Parallax id="landingCover" imageSrc={`/img/img${data.month}.jpg`}/>
                    </div>
                    <div id="headingCont">
                        <h1 id="heading">Månedens studenttips</h1>
                        <h5 id="headingMonth">{MONTHS[data.month]}</h5>
                        <h2 id="headingYear">{data.year}</h2>
                    </div>
                    <div className="container">
                        <h3 id="layoutTitle">Månedens studenttips</h3>
                        <hr />
                        <p id="layoutBody">{data.body}</p>
                    </div>
                </section>
            )
        });

        return layout;
    }
}

export default Studenttips;
