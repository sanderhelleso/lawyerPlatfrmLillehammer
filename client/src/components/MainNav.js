import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from "react-materialize";

class MainNav extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const target = document.querySelector(".parallax-container");
        const nav = document.querySelector(".navbar-fixed");
        if (window.scrollY > (target.offsetTop + target.offsetHeight)) {
            nav.style.display = "block";
        }

        else {
            nav.style.display = "none";
        }
    }

    render() {
        return (
            <Navbar id="nav" brand='logo' right fixed className="animated fadeInDown" >
                <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
            </Navbar>
        )
    }
}

function displayNav() {
    console.log(123);
}

export default MainNav;
