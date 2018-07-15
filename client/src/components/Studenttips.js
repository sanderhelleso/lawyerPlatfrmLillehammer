import React, { Component } from 'react'
import { MONTHS } from "../globals/months";

class Studenttips extends Component {
    state = {
        data: [],
    };

    async loadData() {
        console.log(123);
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
            <div key={data.title} className="container">
                <h1>{data.title}</h1>
                <h5>{MONTHS[data.month]}</h5>
                <h4>{data.year}</h4>
                <p>{data.body}</p>
            </div>
            )
        });

        return layout;
    }
}

export default Studenttips;
