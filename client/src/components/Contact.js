import React, { Component } from 'react'

export default class Contact extends Component {

    componentWillMount() {
        document.body.style.backgroundColor = "#ffffff";
    }

    render() {
        return (
            <div id="contact">
                <h2>Om Oss / Kontakt</h2>
                <a href="mailto:obiterdictum18@gmail.com">obiterdictum18@gmail.com</a>
            </div>
        )
  }
}
