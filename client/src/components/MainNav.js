import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from "react-materialize";

class MainNav extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.querySelector(".nav-wrapper").childNodes[0].classList.add("container");
        document.querySelector(".nav-wrapper").childNodes[0].style.width = "90%";
    }

    render() {
        return (
            <Navbar id="nav" brand='JUSSBLOGGEN' href="/" right fixed >
                <NavItem href='/sistenytt'>Siste Nytt</NavItem>
                <NavItem href='/arkiv'>Arkivet</NavItem>
            </Navbar>
        )
    }
}

export default MainNav;
