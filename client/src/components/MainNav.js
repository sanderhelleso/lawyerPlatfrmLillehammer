import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from "react-materialize";

class MainNav extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.querySelector(".nav-wrapper").childNodes[0].classList.add("container");
        document.querySelector(".nav-wrapper").childNodes[0].style.width = "90%";
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
            <Navbar id="nav" brand='JUSSBLOGGEN' href="/" right fixed className="animated slideInDown" >
                <NavItem href='/sistenytt'>Siste Nytt</NavItem>
                <NavItem href='/arkiv'>Arkivet</NavItem>
                <NavItem href='components.html'>Om Oss</NavItem>
                <NavItem href='components.html'>Kontakt</NavItem>
            </Navbar>
        )
    }
}

export default MainNav;