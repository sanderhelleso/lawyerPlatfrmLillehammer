import React, { Component } from 'react'

export default class Contact extends Component {

    componentWillMount() {
        document.body.style.backgroundColor = "#ffffff";
    }

    render() {
        return (
            <div id="contact">
                <h3>Er det noe du lurer på eller vil vi skal skrive om?</h3>
                <h4>Send oss en E-post <a href="mailto:obiterdictum18@gmail.com">her</a></h4>
            </div>
        )
  }
}
